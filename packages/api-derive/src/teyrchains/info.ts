// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { CollatorId, ParaId } from '@pezkuwi/types/interfaces';
import type { DeriveApi, DeriveTeyrchainActive, DeriveTeyrchainFull, DeriveTeyrchainInfo } from '../types.js';
import type { Active, DidUpdate, Heads, ParaInfoResult, PendingSwap, RelayDispatchQueue, RetryQueue, SelectedThreads } from './types.js';

import { map, of } from 'rxjs';

import { objectSpread } from '@pezkuwi/util';

import { memo } from '../util/index.js';
import { didUpdateToBool } from './util.js';

type Result = [
  Active,
  RetryQueue,
  SelectedThreads,
  DidUpdate,
  ParaInfoResult,
  PendingSwap,
  Heads,
  RelayDispatchQueue
];

function parseActive (id: ParaId, active: Active): DeriveTeyrchainActive | null {
  const found = active.find(([paraId]) => paraId === id);

  if (found && found[1].isSome) {
    const [collatorId, retriable] = found[1].unwrap();

    return objectSpread<DeriveTeyrchainActive>(
      { collatorId },
      retriable.isWithRetries
        ? {
          isRetriable: true,
          retries: retriable.asWithRetries.toNumber()
        }
        : {
          isRetriable: false,
          retries: 0
        }
    );
  }

  return null;
}

function parseCollators (id: ParaId, collatorQueue: SelectedThreads | RetryQueue): (CollatorId | null)[] {
  return collatorQueue.map((queue): CollatorId | null => {
    const found = queue.find(([paraId]) => paraId === id);

    return found ? found[1] : null;
  });
}

function parse (id: ParaId, [active, retryQueue, selectedThreads, didUpdate, info, pendingSwap, heads, relayDispatchQueue]: Result): DeriveTeyrchainFull | null {
  if (info.isNone) {
    return null;
  }

  return {
    active: parseActive(id, active),
    didUpdate: didUpdateToBool(didUpdate, id),
    heads,
    id,
    info: objectSpread<DeriveTeyrchainInfo>({ id }, info.unwrap()),
    pendingSwapId: pendingSwap.unwrapOr(null),
    relayDispatchQueue,
    retryCollators: parseCollators(id, retryQueue),
    selectedCollators: parseCollators(id, selectedThreads)
  };
}

/**
 * @name info
 * @param {ParaId | number} id A unique numeric (non-negative integer) identifier for a teyrchain.
 * @description Retrieves detailed information about a specific teyrchain.
 * @example
 * ```javascript
 * await api.derive.teyrchains.info(1000, (info) => {
 *   if (info) {
 *     console.log(`Teyrchain ${info.id.toString()} is active: ${info.active}`);
 *   } else {
 *     console.log("Teyrchain information not available.");
 *   }
 * });
 * ```
*/
export function info (instanceId: string, api: DeriveApi): (id: ParaId | number) => Observable<DeriveTeyrchainFull | null> {
  return memo(instanceId, (id: ParaId | number): Observable<DeriveTeyrchainFull | null> =>
    api.query['registrar'] && api.query['teyrchains']
      ? api.queryMulti<Result>([
        api.query['registrar']['active'],
        api.query['registrar']['retryQueue'],
        api.query['registrar']['selectedThreads'],
        api.query['teyrchains']['didUpdate'],
        [api.query['registrar']['paras'], id],
        [api.query['registrar']['pendingSwap'], id],
        [api.query['teyrchains']['heads'], id],
        [api.query['teyrchains']['relayDispatchQueue'], id]
      ])
        .pipe(
          map((result: Result): DeriveTeyrchainFull | null =>
            parse(api.registry.createType('ParaId', id), result)
          )
        )
      : of(null)
  );
}
