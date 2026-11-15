import assert from 'node:assert/strict';

const repository = 'https://github.com/StreamVi/streamvi-ui';
const categories = ['Added', 'Changed', 'Deprecated', 'Removed', 'Fixed', 'Security'];
const stable = /^[1-9]\d*\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const neutral = 'No notable consumer-facing changes.';

/** Compare stable versions without numeric precision loss. */
function compare(left, right) {
  assert(stable.test(left) && stable.test(right), 'Expected stable SemVer X.Y.Z');
  const a = left.split('.').map(BigInt);
  const b = right.split('.').map(BigInt);
  for (let i = 0; i < 3; i++) if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
  return 0;
}

/** Reject impossible calendar dates, not just malformed strings. */
function assertDate(date) {
  assert(/^\d{4}-\d{2}-\d{2}$/.test(date), 'Expected an ISO date YYYY-MM-DD');
  const parsed = new Date(`${date}T00:00:00Z`);
  assert(!Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === date, 'Invalid calendar date');
}

/** Normalize formatter line wrapping while preserving the meaning of a bullet. */
function normalize(text) {
  let result = '';
  let offset = 0;
  for (const match of text.matchAll(/(`+)([^]*?)\1(?!`)/g)) {
    result += text.slice(offset, match.index).replace(/\s+/g, ' ') + match[0];
    offset = match.index + match[0].length;
  }
  return (result + text.slice(offset).replace(/\s+/g, ' ')).trim();
}

/** Identify an entry independently of its position in the document. */
function entryKey(entry) {
  return JSON.stringify(entry);
}

/** Link releases to the distribution tags, never to private source history. */
function releaseLink(sections, index) {
  const section = sections[index];
  if (section.version === 'Unreleased') {
    return sections[1] ? `${repository}/compare/v${sections[1].version}...HEAD` : repository;
  }
  if (sections[index + 1]) return `${repository}/compare/v${sections[index + 1].version}...v${section.version}`;
  return `${repository}/tree/v${section.version}`;
}

/** Parse the project's deliberately small Keep a Changelog dialect. */
export function parseChangelog(content) {
  assert(typeof content === 'string' && content.startsWith('# Changelog\n'), 'Expected # Changelog');
  assert(
    !/gitlab\.collabox\.dev|git\.collabox\.dev|file:\/\/|https?:\/\/localhost\b/i.test(content),
    'Internal URL in public changelog'
  );
  const references = new Map();
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const body = [];
  for (const line of lines) {
    const match = /^\[([^\]]+)\]:\s+(\S+)\s*$/.exec(line);
    if (!match) body.push(line);
    else {
      const key = match[1].toLowerCase();
      assert(!references.has(key), 'Duplicate link definition');
      references.set(key, match[2]);
    }
  }
  const first = body.findIndex((line) => line.startsWith('## '));
  assert(first > 0, 'Missing Unreleased section');
  const intro = body.slice(0, first).join('\n').trim();
  assert(
    intro.includes('https://keepachangelog.com/en/1.1.0/') && intro.includes('https://semver.org'),
    'Missing format/SemVer references'
  );
  const sections = [];
  let section;
  let category;
  let entry;
  let seenCategories = new Set();
  const finishCategory = () => {
    if (category)
      assert(
        section.entries.some((item) => item.category === category),
        'Empty category'
      );
  };
  for (const line of body.slice(first)) {
    if (!line.trim()) continue;
    if (line.startsWith('## ')) {
      finishCategory();
      const heading = /^## \[(Unreleased|[^\]]+)\](?: - (\d{4}-\d{2}-\d{2}))?$/.exec(line);
      assert(heading, 'Invalid release heading');
      const [, version, date] = heading;
      if (version === 'Unreleased') assert(!date && !sections.length, 'Unreleased must be first and undated');
      else {
        assert(stable.test(version), 'Invalid release version');
        assertDate(date ?? '');
      }
      assert(!sections.some((item) => item.version === version), 'Duplicate version');
      section = { version, date, entries: [], neutral: false };
      sections.push(section);
      category = undefined;
      entry = undefined;
      seenCategories = new Set();
    } else if (line.startsWith('### ')) {
      finishCategory();
      category = line.slice(4);
      assert(categories.includes(category), 'Unknown changelog category');
      assert(!seenCategories.has(category), 'Duplicate category');
      assert(!section.neutral, 'Neutral release cannot contain entries');
      seenCategories.add(category);
      entry = undefined;
    } else if (line.startsWith('- ')) {
      assert(category && line.slice(2).trim(), 'Entry needs a category and text');
      entry = { category, text: line.slice(2).trim() };
      section.entries.push(entry);
    } else if (line === neutral) {
      assert(
        section.version !== 'Unreleased' && !section.entries.length && !section.neutral && !category,
        'Invalid neutral release'
      );
      section.neutral = true;
    } else if (/^ {2,}\S/.test(line) && entry) entry.text += ` ${line.trim()}`;
    else throw new Error(`Unexpected changelog content: ${line}`);
  }
  finishCategory();
  assert(sections[0]?.version === 'Unreleased', 'Missing Unreleased');
  for (let i = 0; i < sections.length; i++) {
    const current = sections[i];
    current.entries.forEach((item) => {
      item.text = normalize(item.text);
    });
    current.entries.sort((left, right) => categories.indexOf(left.category) - categories.indexOf(right.category));
    assert(new Set(current.entries.map((item) => item.text)).size === current.entries.length, 'Duplicate entry');
    if (i > 0) assert(current.entries.length || current.neutral, 'Empty release needs neutral statement');
    if (i > 1) {
      assert(compare(sections[i - 1].version, current.version) > 0, 'Versions must be newest first');
      assert(sections[i - 1].date >= current.date, 'Release dates must be newest first');
    }
    const expected = releaseLink(sections, i);
    assert(
      references.get(current.version.toLowerCase()) === expected,
      `Missing or incorrect public link: ${current.version}`
    );
  }
  // Link definitions are restricted to version navigation; entries use explicit inline links.
  assert(references.size === sections.length, 'Unexpected link definitions');
  return { intro, sections };
}

/** Render only canonical categories and public version links. */
export function renderChangelog({ intro, sections }) {
  const output = [intro];
  for (const section of sections) {
    output.push(`## [${section.version}]${section.date ? ` - ${section.date}` : ''}`);
    if (section.neutral) output.push(neutral);
    for (const category of categories) {
      const entries = section.entries.filter((entry) => entry.category === category);
      if (entries.length) output.push(`### ${category}`, entries.map((entry) => `- ${entry.text}`).join('\n'));
    }
  }
  output.push(
    sections
      .map((section, i) => {
        const link = releaseLink(sections, i);
        return `[${section.version}]: ${link}`;
      })
      .join('\n')
  );
  return `${output.join('\n\n')}\n`;
}

/** Check freshness before semantic-release can create a tag. */
export function verifyChangelogRelease(content, { previousVersion, version, type }) {
  const document = parseChangelog(content);
  assert(
    document.sections[1]?.version === previousVersion,
    'Synchronize CHANGELOG with the previous published release first'
  );
  assert(stable.test(version), 'Expected stable release version');
  if (previousVersion) assert(compare(version, previousVersion) > 0, 'New release must increase the version');
  if (type === 'major') {
    assert(
      document.sections[0].entries.some(
        ({ text }) => text.includes('**Breaking:**') && /migrat|replace|use |upgrade/i.test(text)
      ),
      'Major release needs **Breaking:** and migration instructions'
    );
  }
  return document;
}

/** Close Unreleased once; retries must reuse the original release date. */
export function finalizeChangelog(content, { version, date, previousVersion, type }) {
  const current = parseChangelog(content);
  if (current.sections[1]?.version === version) {
    assert(!current.sections[0].entries.length, 'Cannot finalize an existing version with new entries');
    assert(current.sections[2]?.version === previousVersion, 'Previous release mismatch');
    return content;
  }
  const document = verifyChangelogRelease(content, { previousVersion, version, type });
  assertDate(date);
  if (document.sections[1]) assert(date >= document.sections[1].date, 'Release date precedes previous release');
  const entries = document.sections[0].entries;
  document.sections.splice(
    0,
    1,
    { version: 'Unreleased', entries: [], neutral: false },
    { version, date, entries, neutral: !entries.length }
  );
  return renderChangelog(document);
}

/** Import a verified release snapshot without losing edits made after its source tag. */
export function synchronizeChangelog(localContent, sourceContent, publishedContent) {
  const local = parseChangelog(localContent);
  const source = parseChangelog(sourceContent);
  const published = parseChangelog(publishedContent);
  assert(!published.sections[0].entries.length, 'Published snapshot has pending entries');
  if (local.sections[1]?.version === published.sections[1]?.version) {
    assert.deepEqual(
      local.sections.slice(1),
      published.sections.slice(1),
      'History conflict: resolve published changes explicitly'
    );
    return localContent;
  }
  assert.deepEqual(
    source.sections.slice(1),
    published.sections.slice(2),
    'Published history does not match source snapshot'
  );
  assert.deepEqual(
    source.sections[0].entries,
    published.sections[1].entries,
    'Published entries do not match source snapshot'
  );
  assert.deepEqual(
    local.sections.slice(1),
    source.sections.slice(1),
    'History conflict: synchronize releases in order'
  );
  const released = new Set(source.sections[0].entries.map(entryKey));
  const pending = new Set(local.sections[0].entries.map(entryKey));
  assert(
    [...released].every((entry) => pending.has(entry)),
    'Unreleased conflict: an already released entry was edited or removed'
  );
  published.sections[0].entries = local.sections[0].entries.filter((entry) => !released.has(entryKey(entry)));
  return renderChangelog(published);
}
