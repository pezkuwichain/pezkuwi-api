// Copyright 2017-2025 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ChainUpgrades } from '@pezkuwi/types/types';
import type { HexString } from '@pezkuwi/util/types';
import type { ChainUpgradesExpanded } from './types.js';

import { selectableNetworks } from '@pezkuwi/networks';
import { BN, hexToU8a } from '@pezkuwi/util';

import * as allKnown from './e2e/index.js';

// Pezkuwi networks - placeholder genesis hashes until mainnet launch
const NET_EXTRA: Record<string, { genesisHash: HexString[] }> = {
  dicle: {
    genesisHash: ['0xd9d3cd7c1e5d890d969b957f4c5b71a111bbeeabc968f1d0d4538c2663f080a7']
  },
  pezkuwi: {
    genesisHash: ['0xbb4a61ab0c4b8c12f5eab71d0c86c482e03a275ecdafee678dea712474d33d75']
  },
  zagros: {
    genesisHash: ['0x297f5a4d105b4b28312586ff1915572ffe4ee015ff772b76399ecbff25a22026']
  }
};

/** @internal */
function mapRaw ([network, versions]: [string, ChainUpgradesExpanded]): ChainUpgrades {
  const chain = selectableNetworks.find((n) => n.network === network) || NET_EXTRA[network];

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
export const upgrades = Object.entries<ChainUpgradesExpanded>(allKnown).map(mapRaw);
