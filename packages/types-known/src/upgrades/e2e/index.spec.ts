// Copyright 2017-2025 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { HexString } from '@pezkuwi/util/types';
import type { ChainUpgradesExpanded } from '../types.js';

import fs from 'node:fs';

import { ApiPromise, WsProvider } from '@pezkuwi/api';
import { stringify } from '@pezkuwi/util';

import * as allMan from '../manual/index.js';
import * as allGen from './index.js';

const keys = ['dicle', 'pezkuwi'] as const;
const urls = {
  'asset-hub-dicle': 'wss://dicle-asset-hub-rpc.pezkuwichain.io',
  'asset-hub-pezkuwi': 'wss://pezkuwi-asset-hub-rpc.pezkuwichain.io',
  dicle: 'wss://dicle-rpc.pezkuwichain.io',
  pezkuwi: 'wss://rpc.pezkuwichain.io'
};

for (const chain of keys) {
  describe(`generate ${chain}`, (): void => {
    const avail = allGen[chain];
    const final: ChainUpgradesExpanded = [];
    let api: ApiPromise;

    beforeAll(async (): Promise<void> => {
      api = await ApiPromise.create({ provider: new WsProvider(urls[chain]) });
    });

    afterAll(async (): Promise<void> => {
      fs.writeFileSync(`packages/types-known/src/upgrades/e2e/${chain}.ts`, `// Copyright 2017-${new Date().getFullYear()} @pezkuwi/types-known authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  // Auto-generated from on-chain data & manual definitions, do not edit
  /* eslint-disable quotes, comma-spacing */

  import type { ChainUpgradesExpanded } from '../types.js';

  export const upgrades: ChainUpgradesExpanded = ${stringify(final, 2)};
  `);
      await api.disconnect();
    });

    for (const [blockNumber, specVersion] of allMan[chain]) {
      // eslint-disable-next-line jest/expect-expect
      it(`blockNumber=${blockNumber}, specVersion=${specVersion}`, async (): Promise<void> => {
        const found = avail.find(([n, s]) => n === blockNumber && s === specVersion);

        if (found) {
          final.push(found);
        } else {
          const blockHash = await api.rpc.chain.getBlockHash(blockNumber + 1);
          const runtime = await api.rpc.state.getRuntimeVersion(blockHash);
          const apis = runtime.apis.map(([api, version]): [HexString, number] => [api.toHex(), version.toNumber()]);

          final.push([blockNumber, specVersion, apis]);
        }
      });
    }
  });
}
