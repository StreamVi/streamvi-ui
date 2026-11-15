import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { lstat, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const packageName = '@streamvi.io/streamvi-ui-kit';
export const repositoryUrl = 'git+https://github.com/StreamVi/streamvi-ui.git';
export const registryUrl = 'https://registry.npmjs.org/';
const legacyRoots = ['dist', 'package.json', 'README.md', 'README.ru.md', 'LICENSE', 'THIRD-PARTY-NOTICES.md'];
export const packageRoots = [...legacyRoots, 'CHANGELOG.md'];
const stable = /^[1-9]\d*\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;

/** Preserve the exact old payload contract when recovering immutable schema 1 releases. */
export function packageRootsForSchema(schema) {
  assert(schema === 1 || schema === 2, 'Unsupported public release schema');
  return schema === 1 ? legacyRoots : packageRoots;
}

/** Validate stable release numbers before using them in paths, refs or commands. */
export function assertVersion(version) {
  assert(typeof version === 'string' && stable.test(version), 'Expected a stable version X.Y.Z');
}

/** Compare validated versions without numeric precision loss. */
export function compareVersions(left, right) {
  assertVersion(left);
  assertVersion(right);
  const a = left.split('.').map(BigInt);
  const b = right.split('.').map(BigInt);
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
  }
  return 0;
}

/** Hash exact bytes rather than timestamps or generated archive names. */
export function checksum(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

/** Read only regular package files; never follow symlinks from artifacts or checkouts. */
export async function packageHashes(directory, schema = 2) {
  const files = [];
  const visit = async (name) => {
    assert(/^[\w./-]+$/.test(name) && !name.split('/').includes('..'), 'Unsafe package path');
    const path = join(directory, name);
    const stat = await lstat(path);
    assert(!stat.isSymbolicLink(), 'Package links are forbidden');
    if (stat.isDirectory()) {
      assert(name === 'dist' || name.startsWith('dist/'), 'Unexpected package directory');
      for (const child of (await readdir(path)).toSorted()) await visit(`${name}/${child}`);
    } else {
      assert(stat.isFile(), 'Expected regular package file');
      files.push([name, checksum(await readFile(path))]);
    }
  };
  if (schema === 1) assert(!(await readdir(directory)).includes('CHANGELOG.md'), 'Unexpected legacy package content');
  for (const name of packageRootsForSchema(schema)) await visit(name);
  return Object.fromEntries(files.toSorted(([a], [b]) => a.localeCompare(b, 'en')));
}

/** Extract an npm tarball only after rejecting links, traversal and unrelated entries. */
export async function extractPackage(archive, destination) {
  const options = { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], env: { ...process.env, LC_ALL: 'C' } };
  const names = execFileSync('tar', ['-tzf', archive], options).trim().split('\n');
  const listing = execFileSync('tar', ['-tvzf', archive], options).trim().split('\n');
  assert(
    listing.every((line) => line.startsWith('-') || line.startsWith('d')),
    'Archive must contain regular files, not links'
  );
  const seen = new Set();
  for (const entry of names) {
    assert(entry.startsWith('package/') && /^[\w./-]+$/.test(entry), 'Unsafe archive path');
    const name = entry.slice(8).replace(/\/$/, '');
    assert(!name.split('/').includes('..'), 'Unsafe archive path');
    assert(name === '' || packageRoots.includes(name) || name.startsWith('dist/'), 'Unexpected archive content');
    assert(!seen.has(name), 'Duplicate archive entry');
    seen.add(name);
  }
  await mkdir(destination, { recursive: true });
  execFileSync('tar', ['-xzf', archive, '-C', destination, '--no-same-owner', '--no-same-permissions'], options);
  return join(destination, 'package');
}

/** Validate the installable manifest independently from its checksum record. */
async function readManifest(directory, version, publicRegistry, schema) {
  const manifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8'));
  assert(manifest.name === packageName && manifest.version === version, 'Package name/version mismatch');
  assert(!manifest.private, 'Public package must not be private');
  for (const field of ['scripts', 'devDependencies', 'allowScripts', 'workspaces']) {
    assert(!(field in manifest), `Unexpected development field: ${field}`);
  }
  assert.deepEqual(
    manifest.files,
    ['dist', 'README.ru.md', 'THIRD-PARTY-NOTICES.md', ...(schema === 2 ? ['CHANGELOG.md'] : [])],
    'Unexpected package files allowlist'
  );
  if (publicRegistry) {
    assert.deepEqual(manifest.publishConfig, { registry: registryUrl, access: 'public' }, 'Wrong public registry');
    assert.equal(manifest.repository?.url, repositoryUrl, 'Wrong public repository');
  }
  return manifest;
}

/** Derive public metadata from verified bytes; compiled files are never rebuilt. */
export async function preparePublicRelease(cwd, metadata) {
  assertVersion(metadata.version);
  assert(metadata.name === packageName && metadata.tag === `v${metadata.version}`, 'Release name/tag mismatch');
  assert(/^[a-f0-9]{40}$/.test(metadata.gitHead), 'Invalid source commit');
  const archive = `artifacts/npm/streamvi.io-streamvi-ui-kit-${metadata.version}.tgz`;
  assert(metadata.archive === archive, 'Unexpected source archive path');
  assert.equal(checksum(await readFile(join(cwd, archive))), metadata.sha256, 'Source archive checksum mismatch');
  const destination = join(cwd, 'artifacts/public');
  await rm(destination, { recursive: true, force: true });
  const directory = await extractPackage(join(cwd, archive), destination);
  const archiveManifest = JSON.parse(await readFile(join(directory, 'package.json'), 'utf8'));
  const schema = archiveManifest.files?.includes('CHANGELOG.md') ? 2 : 1;
  const original = await packageHashes(directory, schema);
  const manifest = await readManifest(directory, metadata.version, false, schema);
  manifest.publishConfig = { registry: registryUrl, access: 'public' };
  manifest.repository = { type: 'git', url: repositoryUrl };
  manifest.homepage = 'https://github.com/StreamVi/streamvi-ui#readme';
  manifest.bugs = { url: 'https://github.com/StreamVi/streamvi-ui/issues' };
  await writeFile(join(directory, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  const files = await packageHashes(directory, schema);
  for (const [name, hash] of Object.entries(original)) {
    if (name !== 'package.json') assert.equal(files[name], hash, `Changed source file: ${name}`);
  }
  await writeFile(
    join(directory, '.release.json'),
    `${JSON.stringify(
      {
        schema,
        name: packageName,
        version: metadata.version,
        tag: metadata.tag,
        gitHead: metadata.gitHead,
        sourceSha256: metadata.sha256,
        files,
      },
      null,
      2
    )}\n`
  );
  await verifyPublicRelease(directory, metadata.tag);
  return directory;
}

/** Verify metadata plus the complete allowed payload before publication or Git writes. */
export async function verifyPublicRelease(directory, tag) {
  const metadata = JSON.parse(await readFile(join(directory, '.release.json'), 'utf8'));
  assertVersion(metadata.version);
  assert([1, 2].includes(metadata.schema) && metadata.name === packageName, 'Invalid public release metadata');
  assert(metadata.tag === `v${metadata.version}` && metadata.tag === tag, 'Release tag/version mismatch');
  assert(
    /^[a-f0-9]{40}$/.test(metadata.gitHead) && /^[a-f0-9]{64}$/.test(metadata.sourceSha256),
    'Invalid source identity'
  );
  assert.deepEqual(await packageHashes(directory, metadata.schema), metadata.files, 'Public content checksum mismatch');
  await readManifest(directory, metadata.version, true, metadata.schema);
  return metadata;
}

/** Compare installed/published tar content, independent of gzip metadata and npm signatures. */
export async function verifyPublishedArchive(archive, expectedFiles, schema = 2) {
  const temporary = await mkdtemp(join(tmpdir(), 'streamvi-published-'));
  try {
    const directory = await extractPackage(archive, temporary);
    assert.deepEqual(await packageHashes(directory, schema), expectedFiles, 'Published content checksum mismatch');
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}
