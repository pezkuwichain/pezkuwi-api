// Copyright 2017-2026 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@pezkuwi/types/types';
import type { ChainUpgradesExpanded } from './types.js';

import { selectableNetworks } from '@pezkuwi/networks';
import { BN, hexToU8a } from '@pezkuwi/util';

import * as allKnown from './e2e/index.js';

/** @internal */
function mapRaw ([network, versions]: [string, ChainUpgradesExpanded]): ChainUpgrades {
  const chain = selectableNetworks.find((n) => n.network === network);

  if (!chain) {
    throw new Error(`Unable to find info for chain ${network}`);
  }

  return {
    genesisHash: hexToU8a(chain.genesisHash[0]),
    network,
    versions: versions.map(([blockNumber, specVersion, apis]) => ({
      apis,
      blockNumber: new BN(blockNumber),
      specVersion: new BN(specVersion)
    }))
  };
}

// Type overrides for specific spec types & versions as given in runtimeVersion
// Only chains with a known history: the Pezkuwi tables stay empty until the e2e
// generator reads them from the live chains (the relaunched mainnet included);
// an empty table means the api reads each block's runtime from the chain.
export const upgrades = Object.entries<ChainUpgradesExpanded>(allKnown)
  .filter(([, versions]) => versions.length)
  .map(mapRaw);
