// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@pezkuwi/types';
import type { PezkuwiRuntimeCommonCrowdloanFundInfo } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';
import type { DeriveApi } from '../types.js';

import { map } from 'rxjs';

import { u8aConcat, u8aToHex } from '@pezkuwi/util';
import { blake2AsU8a } from '@pezkuwi/util-crypto';

import { memo } from '../util/index.js';

interface AllInfo extends PezkuwiRuntimeCommonCrowdloanFundInfo {
  // previously it was named trieIndex
  trieIndex?: u32;
}

function createChildKey (info: AllInfo): string {
  return u8aToHex(
    u8aConcat(
      ':child_storage:default:',
      blake2AsU8a(
        u8aConcat(
          'crowdloan',
          (info.fundIndex || info.trieIndex).toU8a()
        )
      )
    )
  );
}

/**
 * @name childKey
 * @description Retrieves the child storage key for a given teyrchain’s crowdloan contributions.
 * This key is used to access contribution data stored in a separate child trie of the blockchain’s state.
 * @param {string | number | BN} paraId The teyrchain ID for which contributions are being queried.
 * @example
 * ```javascript
 * const childKey = await api.derive.crowdloan.childKey(3369);
 * console.log("Child Key:", childKey);
 * ```
 */
export function childKey (instanceId: string, api: DeriveApi): (paraId: string | number | BN) => Observable<string | null> {
  return memo(instanceId, (paraId: string | number | BN): Observable<string | null> =>
    api.query['crowdloan']['funds']<Option<PezkuwiRuntimeCommonCrowdloanFundInfo>>(paraId).pipe(
      map((optInfo) =>
        optInfo.isSome
          ? createChildKey(optInfo.unwrap())
          : null
      )
    )
  );
}
