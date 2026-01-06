// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import path from 'path';

import { createBundle } from '@pezkuwi/dev/config/rollup';

const pkgs = [
  '@pezkuwi/api',
  '@pezkuwi/api-contract',
  '@pezkuwi/types'
];

const external = [
  ...pkgs,
  '@pezkuwi/keyring',
  '@pezkuwi/util',
  '@pezkuwi/util-crypto'
];

function expand (prefix, all) {
  return all.map((p) => p ? `${prefix}-${p}` : prefix);
}

const entries = [
  ...expand('api', ['augment', 'base', 'derive']),
  ...expand('rpc', ['augment', 'core', 'provider']),
  ...expand('types', [...expand('augment', ['', 'lookup', 'registry']), 'codec', 'create', 'helpers', 'known'])
].reduce((all, p) => ({
  ...all,
  [`@pezkuwi/${p}`]: path.resolve(process.cwd(), `packages/${p}/build/bundle.js`)
}), {
  // re-exported in @pezkuwi/util-crypto, map directly
  '@pezkuwi/networks': '@pezkuwi/util-crypto',
  // we point to a specific file for these (default augmentations)
  '@pezkuwi/rpc-core/types/jsonrpc': path.resolve(process.cwd(), 'packages/rpc-core/build/types/jsonrpc.js'),
  '@pezkuwi/types-codec/types/registry': path.resolve(process.cwd(), 'packages/types-codec/build/types/registry.js'),
  '@pezkuwi/types-create/exports': path.resolve(process.cwd(), 'packages/types-create/build/exports.js')
});

const overrides = {};

export default pkgs.map((pkg) => {
  const override = (overrides[pkg] || {});

  return createBundle({
    external,
    pkg,
    ...override,
    entries: {
      ...entries,
      ...(override.entries || {})
    }
  });
});
