// Copyright 2017-2026 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// papi-utils, bizinikiwi-bindings, metadata-builders and merkleize-metadata
// ship committed dist/ builds of upstream polkadot-api packages. Every source
// map in dist/ embeds the TypeScript it was compiled from; this check fails
// unless that embedded source is exactly the src/ committed beside it, so a
// published dist/ can only come from source held in this repository.

import fs from 'node:fs';
import path from 'node:path';

const PACKAGES = ['papi-utils', 'bizinikiwi-bindings', 'metadata-builders', 'merkleize-metadata'];
const failures = [];

function walk (dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);

    return e.isDirectory() ? walk(p) : [p];
  });
}

for (const name of PACKAGES) {
  const pkg = path.join('packages', name);
  const srcDir = path.join(pkg, 'src');
  const embedded = new Map();

  for (const map of walk(path.join(pkg, 'dist')).filter((f) => f.endsWith('.map'))) {
    const { sources = [], sourcesContent = [] } = JSON.parse(fs.readFileSync(map, 'utf8'));

    sources.forEach((source, i) => {
      const resolved = path.normalize(path.join(path.dirname(map), source));
      const rel = resolved.slice(resolved.indexOf(`${path.sep}src${path.sep}`) + 1);
      const content = sourcesContent[i];

      if (content == null) {
        failures.push(`${map}: no embedded source for ${source}`);
      } else if (embedded.has(rel) && embedded.get(rel) !== content) {
        failures.push(`${map}: ${rel} differs between source maps`);
      } else {
        embedded.set(rel, content);
      }
    });
  }

  const committed = new Set(walk(srcDir).map((f) => path.relative(pkg, f)));

  for (const [rel, content] of embedded) {
    const file = path.join(pkg, rel);

    if (!committed.has(rel)) {
      failures.push(`${file}: in dist/ source maps but not committed`);
    } else if (fs.readFileSync(file, 'utf8') !== content) {
      failures.push(`${file}: differs from the source embedded in dist/`);
    }

    committed.delete(rel);
  }

  for (const rel of committed) {
    failures.push(`${path.join(pkg, rel)}: committed but not part of the dist/ build`);
  }

  console.log(`${name}: ${embedded.size} source files match dist/`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
