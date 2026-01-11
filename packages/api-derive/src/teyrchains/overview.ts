// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ParaId } from '@pezkuwi/types/interfaces';
import type { DeriveApi, DeriveTeyrchain, DeriveTeyrchainInfo } from '../types.js';
import type { DidUpdate, ParaInfoResult, PendingSwap, RelayDispatchQueueSize } from './types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { objectSpread } from '@pezkuwi/util';

import { memo } from '../util/index.js';
import { didUpdateToBool } from './util.js';

type Result = [
  ParaId[],
  DidUpdate,
  RelayDispatchQueueSize[],
  ParaInfoResult[],
  PendingSwap[]
];

function parse ([ids, didUpdate, relayDispatchQueueSizes, infos, pendingSwaps]: Result): DeriveTeyrchain[] {
  return ids.map((id, index): DeriveTeyrchain => ({
    didUpdate: didUpdateToBool(didUpdate, id),
    id,
    info: objectSpread<DeriveTeyrchainInfo>({ id }, infos[index].unwrapOr(null)),
    pendingSwapId: pendingSwaps[index].unwrapOr(null),
    relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
  }));
}

/**
 * @name overview
 * @description Retrieves an overview of all registered teyrchains.
 * @example
 * ```javascript
 * await api.derive.teyrchains.overview((overview) => {
 *   teyrchains.forEach(teyrchain => {
 *     console.log(`Teyrchain ${teyrchain.id.toString()} is registered.`);
 *   });
 * });
 * ```
 */
export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveTeyrchain[]> {
  return memo(instanceId, (): Observable<DeriveTeyrchain[]> =>
    api.query['registrar']?.['teyrchains'] && api.query['teyrchains']
      ? api.query['registrar']['teyrchains']<ParaId[]>().pipe(
        switchMap((paraIds) =>
          combineLatest([
            of(paraIds),
            api.query['teyrchains']['didUpdate']<DidUpdate>(),
            api.query['teyrchains']['relayDispatchQueueSize'].multi<RelayDispatchQueueSize>(paraIds),
            api.query['registrar']['paras'].multi<ParaInfoResult>(paraIds),
            api.query['registrar']['pendingSwap'].multi<PendingSwap>(paraIds)
          ])
        ),
        map(parse)
      )
      : of([] as DeriveTeyrchain[])
  );
}
