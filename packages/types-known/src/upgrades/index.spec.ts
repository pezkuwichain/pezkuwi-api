// Copyright 2017-2025 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { ChainUpgradesExpanded, ChainUpgradesRaw } from './types.js';

import { stringify, u8aEq } from '@pezkuwi/util';

import * as allGen from './e2e/index.js';
import * as allMan from './manual/index.js';
import { upgrades } from './index.js';

interface TestDef {
  genesisHash: string;
  network: string;
  versions: [number, [number, number]][];
}

const TESTS: TestDef[] = [
  {
    genesisHash: '0xd9d3cd7c1e5d890d969b957f4c5b71a111bbeeabc968f1d0d4538c2663f080a7',
    network: 'dicle',
    versions: [
      [0, [214356, 4]],
      [23, [4207800, 48]]
    ]
  },
  {
    genesisHash: '0x41693961995d879073269a008d0a52832caa3e0ae73869f02127f3d5daa4934c',
    network: 'pezkuwi',
    versions: [
      [0, [0, 0]],
      [19, [2436698, 26]]
    ]
  }
];

function checkOrder (network: string, versions: [number, number, ...unknown[]][]): void {
  const ooo = versions.filter((curr, index): boolean => {
    const prev = versions[index - 1];

    return index === 0
      ? false
      : curr[0] <= prev[0] || curr[1] <= prev[1];
  });

  if (ooo.length) {
    throw new Error(`${network}: Mismatched upgrade ordering: ${stringify(ooo)}`);
  }
}

describe('generated', (): void => {
  it('should have all the chains', (): void => {
    expect(Object.keys(allMan).sort()).toEqual(Object.keys(allGen).sort());
  });

  for (const chain of Object.keys(allMan)) {
    describe(`${chain}`, (): void => {
      // eslint-disable-next-line jest/expect-expect
      it('should have all generated', (): void => {
        const missing = allMan[chain as keyof typeof allMan].filter(([na, sa]) =>
          !allGen[chain as keyof typeof allGen].some(([nb, sb]) =>
            nb === na &&
            sb === sa
          )
        );

        if (missing.length !== 0) {
          throw new Error(`${chain}:: missing generated apis found, run yarn test:one packages/types-known/src/upgrades/e2e`);
        }
      });

      // eslint-disable-next-line jest/expect-expect
      it('manual should be correctly ordered', (): void => {
        checkOrder(chain, (allGen as Record<string, ChainUpgradesExpanded>)[chain]);
      });

      // eslint-disable-next-line jest/expect-expect
      it('generated should be correctly ordered', (): void => {
        checkOrder(chain, (allMan as Record<string, ChainUpgradesRaw>)[chain]);
      });
    });
  }
});

describe('upgrades', (): void => {
  TESTS.forEach(({ genesisHash, network, versions }): void => {
    describe(`${network}`, (): void => {
      const chain = upgrades.find((n) => n.network === network);

      if (!chain) {
        throw new Error(`Unable to find the entry for ${network}`);
      }

      it('has a valid genesisHash', (): void => {
        expect(u8aEq(chain.genesisHash, genesisHash)).toBe(true);
      });

      versions.forEach(([index, [blockNumber, specVersion]]): void => {
        it(`has a valid entry at index ${index}`, (): void => {
          const version = chain.versions[index];

          expect(version.blockNumber.eqn(blockNumber)).toBe(true);
          expect(version.specVersion.eqn(specVersion)).toBe(true);
        });
      });
    });
  });
});
