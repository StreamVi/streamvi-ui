import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { parseChangelog } from './changelog.mjs';
import { assertVersion, checksum, compareVersions, packageName, verifyPublishedArchive } from './public-release.mjs';

const repo = 'https://github.com/StreamVi/streamvi-ui';
const apiRoot = 'https://api.github.com/repos/StreamVi/streamvi-ui';

/** Render the selected published section without leaking pending entries. */
export function releaseNotes(content, version, historyTag = `v${version}`) {
  assertVersion(version);
  const section = parseChangelog(content).sections.find((item) => item.version === version);
  assert(section, 'Missing changelog version');
  const lines = [`Release date (UTC): ${section.date}`];
  if (section.neutral) lines.push('No notable consumer-facing changes.');
  let category;
  for (const entry of section.entries) {
    if (category !== entry.category) {
      category = entry.category;
      lines.push(`### ${category}`);
    }
    lines.push(`- ${entry.text}`);
  }
  lines.push(
    `[npm package](https://www.npmjs.com/package/${packageName}/v/${version}) · [Full changelog](${repo}/blob/${historyTag}/CHANGELOG.md)`
  );
  return `${lines.join('\n\n')}\n`;
}

/** Retry only transient registry failures, never validation or authentication failures. */
export async function retryRegistry(
  operation,
  { attempts = 21, now = Date.now, wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) } = {}
) {
  const deadline = now() + 300000;
  for (let i = 0; ; i++) {
    try {
      return await operation(AbortSignal.timeout(Math.max(1, deadline - now())));
    } catch (error) {
      if (
        now() + 15000 >= deadline ||
        i >= attempts - 1 ||
        !(error.transient || [404, 429].includes(error.status) || error.status >= 500)
      )
        throw error;
      await wait(15000);
    }
  }
}

/** Create once, reconcile uncertain writes, and refuse to overwrite edited notes. */
export async function ensureRelease({ api, wanted, latest, publish = false }) {
  const path = `/releases/tags/${wanted.tag_name}`;
  const match = (existing) => {
    for (const key of ['tag_name', 'name', 'body', 'draft', 'prerelease'])
      assert(existing[key] === wanted[key], `Release conflict: ${key}`);
    return { status: 'unchanged', url: existing.html_url };
  };
  const existing = await api(path);
  if (existing) return match(existing);
  if (!publish) return { status: 'preview', ...wanted };
  let newer = false;
  for (let page = 1; ; page++) {
    const releases = await api(`/releases?per_page=100&page=${page}`);
    assert(Array.isArray(releases), 'Invalid releases response');
    for (const release of releases) {
      if (!release.draft && !release.prerelease && /^v[1-9]\d*\.\d+\.\d+$/.test(release.tag_name))
        newer ||= compareVersions(release.tag_name.slice(1), wanted.tag_name.slice(1)) > 0;
    }
    if (releases.length < 100) break;
  }
  try {
    const created = await api('/releases', {
      method: 'POST',
      body: JSON.stringify({
        ...wanted,
        generate_release_notes: false,
        make_latest: !newer && latest === wanted.tag_name.slice(1) ? 'true' : 'false',
      }),
    });
    match(created);
    return { status: 'created', url: created.html_url };
  } catch (error) {
    const recovered = await api(path);
    if (recovered) return match(recovered);
    throw error;
  }
}

/** Read a response without redirects or credential leakage to other hosts. */
async function response(url, options = {}) {
  let result;
  try {
    result = await fetch(url, {
      ...options,
      redirect: 'error',
      signal: options.signal
        ? AbortSignal.any([options.signal, AbortSignal.timeout(15000)])
        : AbortSignal.timeout(15000),
    });
  } catch {
    throw Object.assign(new Error('Network request failed'), { transient: true });
  }
  if (!result.ok)
    throw Object.assign(new Error(`HTTP ${result.status}: ${new URL(url).hostname}`), { status: result.status });
  return result;
}

/** Verify immutable tag metadata, history checksum and the actual public npm archive. */
export async function prepareRelease({ version, historyTag, api, registry = response, retry = retryRegistry }) {
  assertVersion(version);
  const tag = `v${version}`;
  const snapshot = async (ref) => {
    let object = (await api(`/git/ref/tags/${ref}`))?.object;
    const seen = new Set();
    while (object?.type === 'tag') {
      assert(/^[a-f0-9]{40}$/.test(object.sha) && !seen.has(object.sha), 'Invalid annotated tag');
      seen.add(object.sha);
      object = (await api(`/git/tags/${object.sha}`))?.object;
    }
    assert(object?.type === 'commit' && /^[a-f0-9]{40}$/.test(object.sha), 'Missing tag commit');
    const commit = object;
    const read = async (path) => {
      const file = await api(`/contents/${path}?ref=${commit.sha}`);
      assert(file?.encoding === 'base64' && typeof file.content === 'string', 'Invalid GitHub file');
      return Buffer.from(file.content, 'base64');
    };
    const metadata = JSON.parse(await read('.release.json'));
    assert(
      metadata.name === packageName && metadata.tag === ref && metadata.version === ref.slice(1),
      'Release identity mismatch'
    );
    assert(
      [1, 2].includes(metadata.schema) &&
        /^[a-f0-9]{40}$/.test(metadata.gitHead) &&
        /^[a-f0-9]{64}$/.test(metadata.sourceSha256),
      'Invalid metadata'
    );
    assert(metadata.files && Object.keys(metadata.files).length > 0, 'Missing file checksums');
    return { metadata, read };
  };
  const current = await snapshot(tag);
  let history = current;
  if (current.metadata.schema === 1) {
    assert(
      ['2.0.1', '2.0.2'].includes(version) && historyTag === 'v2.0.3',
      'Legacy history requires --history-tag v2.0.3'
    );
    history = await snapshot(historyTag);
  } else assert(!historyTag || historyTag === tag, 'New releases require their own changelog');
  assert(history.metadata.schema === 2, 'History requires schema 2');
  const bytes = await history.read('CHANGELOG.md');
  assert(checksum(bytes) === history.metadata.files['CHANGELOG.md'], 'Changelog checksum mismatch');
  const body = releaseNotes(bytes.toString('utf8'), version, history.metadata.tag);
  const readRegistry = async (url, kind, signal) => {
    try {
      return await (await registry(url, { signal }))[kind]();
    } catch (error) {
      if (error instanceof TypeError || error.name === 'AbortError' || error.name === 'TimeoutError')
        error.transient = true;
      throw error;
    }
  };
  const packument = await retry(async (signal) => {
    const doc = await readRegistry(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`, 'json', signal);
    assert(doc && doc.versions && doc['dist-tags'], 'Invalid npm metadata');
    const latest = doc['dist-tags'].latest;
    if (!latest || compareVersions(latest, version) < 0)
      throw Object.assign(new Error('npm latest is still processing'), { status: 404 });
    const entry = doc.versions[version];
    if (!entry) throw Object.assign(new Error('npm version is not available yet'), { status: 404 });
    assert(entry.name === packageName && entry.version === version, 'npm identity mismatch');
    const url = new URL(entry.dist?.tarball);
    assert(
      url.origin === 'https://registry.npmjs.org' &&
        url.pathname.startsWith(`/${packageName}/-/`) &&
        !url.username &&
        !url.password &&
        !url.search &&
        !url.hash,
      'Unexpected npm archive URL'
    );
    const archive = await readRegistry(url.href, 'arrayBuffer', signal);
    const temporary = await mkdtemp(join(tmpdir(), 'streamvi-release-notes-'));
    try {
      const path = join(temporary, 'package.tgz');
      await writeFile(path, new Uint8Array(archive));
      await verifyPublishedArchive(path, current.metadata.files, current.metadata.schema);
    } finally {
      await rm(temporary, { recursive: true, force: true });
    }
    return doc;
  });
  return {
    wanted: { tag_name: tag, name: tag, body, draft: false, prerelease: false },
    latest: packument['dist-tags'].latest,
  };
}

/** Preview by default; writes require an explicit flag and GitHub credential. */
async function main() {
  const { values } = parseArgs({
    options: {
      version: { type: 'string' },
      'history-tag': { type: 'string' },
      publish: { type: 'boolean', default: false },
    },
  });
  const token = process.env.GH_TOKEN;
  if (values.publish) assert(token, 'GH_TOKEN is required for publication');
  if (values.publish && process.env.GITHUB_ACTIONS === 'true')
    assert(
      process.env.GITHUB_REPOSITORY === 'StreamVi/streamvi-ui' &&
        process.env.GITHUB_EVENT_NAME === 'push' &&
        process.env.GITHUB_REF_TYPE === 'tag' &&
        process.env.GITHUB_REF_NAME === `v${values.version}`,
      'Release publication requires the matching distribution tag push'
    );
  const api = async (path, options) => {
    try {
      return await (
        await response(`${apiRoot}${path}`, {
          ...options,
          headers: {
            Accept: 'application/vnd.github+json',
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        })
      ).json();
    } catch (error) {
      if (error.status === 404 && path.startsWith('/releases/tags/')) return null;
      throw error;
    }
  };
  const prepared = await prepareRelease({ version: values.version, historyTag: values['history-tag'], api });
  const result = await ensureRelease({ ...prepared, api, publish: values.publish });
  console.log(JSON.stringify(result, null, 2));
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
