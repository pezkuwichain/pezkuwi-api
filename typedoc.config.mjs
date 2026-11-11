// Copyright 2017-2026 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

// The API reference published at developers.pezkuwichain.io. `yarn docs` writes it
// to build-docs/ (ignored by git); CI builds it on every pull request.

import { OptionDefaults } from 'typedoc';

/** @type {Partial<import('typedoc').TypeDocOptions>} */
const config = {
  entryPointStrategy: 'packages',
  entryPoints: [
    'packages/api',
    'packages/api-base',
    'packages/api-contract',
    'packages/api-derive',
    'packages/rpc-core',
    'packages/rpc-provider',
    'packages/types',
    'packages/types-codec',
    'packages/types-create'
  ],
  excludePrivate: true,
  hostedBaseUrl: 'https://developers.pezkuwichain.io/',
  name: 'Pezkuwi API',
  navigationLinks: {
    GitHub: 'https://github.com/pezkuwichain/pezkuwi-api',
    npm: 'https://www.npmjs.com/package/@pezkuwi/api'
  },
  out: 'build-docs',
  // Each package.json points at its build output; the reference is built from src/.
  packageOptions: {
    entryPoints: ['src/index.ts'],
    readme: 'none',
    skipErrorChecking: true
  },
  projectDocuments: [
    'docs/getting-started.md'
  ],
  readme: 'docs/index.md',
  skipErrorChecking: true,
  tsconfig: 'tsconfig.build.json'
};

// The sources use tags TypeDoc does not define: @description on most members,
// @name on derives, @noInheritDoc and @constructor on some classes. Declaring
// them keeps their text in the reference instead of a warning per use.
// Each package is converted with packageOptions, so the tags go there as well.
for (const target of [config, config.packageOptions]) {
  target.blockTags = [...OptionDefaults.blockTags, '@description', '@describe', '@name'];
  target.modifierTags = [...OptionDefaults.modifierTags, '@noInheritDoc', '@constructor'];
}

export default config;
