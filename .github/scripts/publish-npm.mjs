import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  compareVersions,
  packageName,
  registryUrl,
  verifyPublicRelease,
  verifyPublishedArchive,
} from './public-release.mjs';

/** Run the runner's pinned npm CLI without a shell or lifecycle scripts. */
function runNpm(args, options) {
  return execFileSync('npm', args, { ...options, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
}

/** Publish verified content, treating registry failure, bootstrap and repeats distinctly. */
export async function publishNpm({ directory, tag, publish = false, request = fetch, run = runNpm }) {
  const metadata = await verifyPublicRelease(directory, tag);
  const packed = JSON.parse(run(['pack', '--json', '--ignore-scripts'], { cwd: directory }));
  const pack = Array.isArray(packed) ? packed[0] : Object.values(packed)[0];
  assert(
    typeof pack?.filename === 'string' && basename(pack.filename) === pack.filename,
    'Unexpected npm archive filename'
  );
  const archive = join(directory, pack.filename);
  await verifyPublishedArchive(archive, metadata.files);
  if (!publish) return 'validated';
  const response = await request(`${registryUrl}${encodeURIComponent(packageName)}`, {
    redirect: 'error',
    signal: AbortSignal.timeout(30000),
    headers: { Accept: 'application/json' },
  });
  if (response.status === 404) return 'bootstrap-required';
  assert(response.ok, `npm registry returned HTTP ${response.status}`);
  const packument = await response.json();
  assert(
    packument && typeof packument.versions === 'object' && packument.versions !== null,
    'Invalid npm registry response'
  );
  const existing = packument.versions[metadata.version];
  if (existing) {
    const url = new URL(existing.dist?.tarball);
    assert(
      url.origin === new URL(registryUrl).origin &&
        url.pathname.startsWith(`/${packageName}/-/`) &&
        !url.username &&
        !url.password &&
        !url.search &&
        !url.hash,
      'Unexpected npm archive URL'
    );
    const downloaded = await request(url.href, { redirect: 'error', signal: AbortSignal.timeout(30000) });
    assert(downloaded.ok, `npm archive returned HTTP ${downloaded.status}`);
    const temporary = await mkdtemp(join(tmpdir(), 'streamvi-npm-'));
    try {
      const published = join(temporary, 'published.tgz');
      await writeFile(published, new Uint8Array(await downloaded.arrayBuffer()));
      await verifyPublishedArchive(published, metadata.files);
    } finally {
      await rm(temporary, { recursive: true, force: true });
    }
    return 'unchanged';
  }
  for (const version of Object.keys(packument.versions)) {
    if (/^[1-9]\d*\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(version)) {
      assert(
        compareVersions(version, metadata.version) < 0,
        'A newer npm release exists; use an explicit backfill recovery'
      );
    }
  }
  const latest = packument['dist-tags']?.latest;
  if (latest) assert(compareVersions(latest, metadata.version) < 0, 'A newer npm latest exists');
  run(
    [
      'publish',
      archive,
      `--registry=${registryUrl}`,
      '--access=public',
      '--tag=latest',
      '--ignore-scripts',
      '--provenance',
    ],
    { cwd: directory }
  );
  return 'published';
}

/** Permit remote writes only for the exact tag event from the distribution repository. */
async function main() {
  if (process.argv.includes('--preflight')) {
    console.log(`Node ${process.versions.node}; npm ${runNpm(['--version'], {}).trim()}`);
    console.log('Workflow runner is available; tagged package validation will run after GitLab delivery.');
    return;
  }
  const publish = process.argv.includes('--publish');
  if (publish)
    assert(
      process.env.GITHUB_ACTIONS === 'true' &&
        process.env.GITHUB_REPOSITORY === 'StreamVi/streamvi-ui' &&
        process.env.GITHUB_EVENT_NAME === 'push' &&
        process.env.GITHUB_REF_TYPE === 'tag',
      'npm publication requires a distribution tag push'
    );
  const record = JSON.parse(await readFile('.release.json', 'utf8'));
  const tag = publish ? process.env.GITHUB_REF_NAME : record.tag;
  const result = await publishNpm({ directory: process.cwd(), tag, publish });
  console.log(
    result === 'bootstrap-required'
      ? 'Bootstrap required: publish this checked stable archive interactively, then configure npm Trusted Publishing before the next release.'
      : result
  );
  if (process.env.GITHUB_STEP_SUMMARY) {
    await writeFile(process.env.GITHUB_STEP_SUMMARY, `Package ${record.name}@${record.version}: ${result}\n`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
