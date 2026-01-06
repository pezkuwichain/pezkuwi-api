// Copyright 2017-2025 @pezkuwi/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@pezkuwi/util/types';

// TODO: replace v15 to v16 once metadata is updated
import assetHubDicle from '@pezkuwi/types-support/metadata/v15/asset-hub-dicle-hex';
import assetHubPezkuwi from '@pezkuwi/types-support/metadata/v15/asset-hub-pezkuwi-hex';
import bizinikiwi from '@pezkuwi/types-support/metadata/v15/bizinikiwi-hex';
import dicle from '@pezkuwi/types-support/metadata/v15/dicle-hex';
import pezkuwi from '@pezkuwi/types-support/metadata/v15/pezkuwi-hex';

import { generateDefaultConsts, generateDefaultErrors, generateDefaultEvents, generateDefaultInterface, generateDefaultLookup, generateDefaultQuery, generateDefaultRpc, generateDefaultRuntime, generateDefaultTsDef, generateDefaultTx } from './generate/index.js';

const BASE = 'packages/api-augment/src';
const METAS = Object.entries<HexString>({ assetHubDicle, assetHubPezkuwi, dicle, pezkuwi, bizinikiwi });

export function main (): void {
  generateDefaultInterface();
  generateDefaultLookup();
  generateDefaultRpc();
  generateDefaultTsDef();

  for (const [name, staticMeta] of METAS) {
    console.log();
    console.log(`*** Generating for ${name}`);

    generateDefaultConsts(`${BASE}/${name}/consts.ts`, staticMeta);
    generateDefaultErrors(`${BASE}/${name}/errors.ts`, staticMeta);
    generateDefaultEvents(`${BASE}/${name}/events.ts`, staticMeta);
    generateDefaultQuery(`${BASE}/${name}/query.ts`, staticMeta);
    generateDefaultRuntime(`${BASE}/${name}/runtime.ts`, staticMeta);
    generateDefaultTx(`${BASE}/${name}/tx.ts`, staticMeta);
  }
}
