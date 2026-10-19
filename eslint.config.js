// Copyright 2017-2026 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import baseConfig from '@pezkuwi/dev/config/eslint';

export default [
  {
    ignores: [
      // see the tsconfig.eslint.json for explanation
      'packages/api-augment/src/dicle/*.ts',
      'packages/api-augment/src/pezkuwi/*.ts',
      // upstream polkadot-api packages (src/ + committed dist/), kept in upstream's style;
      // scripts/check-papi-sources.mjs ties dist/ to src/
      'packages/bizinikiwi-bindings/**',
      'packages/merkleize-metadata/**',
      'packages/metadata-builders/**',
      'packages/papi-utils/**'
    ]
  },
  ...baseConfig,
  {
    rules: {
      // add override for any (a metric ton of them, initial conversion)
      '@typescript-eslint/no-explicit-any': 'off',
      // we generally use this in isFunction, not via calling
      '@typescript-eslint/unbound-method': 'off'
    }
  }
];
