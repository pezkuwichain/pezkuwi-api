// Copyright 2017-2026 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { ChainUpgradesExpanded, ChainUpgradesRaw } from './types.js';

import { stringify } from '@pezkuwi/util';

import * as allGen from './e2e/index.js';
import * as allMan from './manual/index.js';
import { upgrades } from './index.js';

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
  // The tables that stood here for pezkuwi, dicle and zagros were Polkadot's
  // and Kusama's upgrade histories under placeholder genesis hashes. Until the
  // e2e generator reads ours from the live chains, none is listed.
  it('lists no upgrade history that is not one of our chains', (): void => {
    expect(upgrades).toEqual([]);
  });
});
