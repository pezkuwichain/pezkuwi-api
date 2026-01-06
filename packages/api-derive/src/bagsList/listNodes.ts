// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option } from '@pezkuwi/types';
import type { AccountId32 } from '@pezkuwi/types/interfaces';
import type { PezpalletBagsListListBag, PezpalletBagsListListNode } from '@pezkuwi/types/lookup';
import type { DeriveApi } from '../types.js';

import { BehaviorSubject, map, of, switchMap, tap, toArray } from 'rxjs';

import { nextTick } from '@pezkuwi/util';

import { memo } from '../util/index.js';
import { getQueryInterface } from './util.js';

function traverseLinks (api: DeriveApi, head: AccountId32 | string): Observable<PezpalletBagsListListNode[]> {
  const subject = new BehaviorSubject<AccountId32 | string>(head);
  const query = getQueryInterface(api);

  return subject.pipe(
    switchMap((account) =>
      query.listNodes<Option<PezpalletBagsListListNode>>(account)
    ),
    tap((node: Option<PezpalletBagsListListNode>): void => {
      nextTick((): void => {
        node.isSome && node.value.next.isSome
          ? subject.next(node.unwrap().next.unwrap())
          : subject.complete();
      });
    }),
    toArray(), // toArray since we want to startSubject to be completed
    map((all: Option<PezpalletBagsListListNode>[]) =>
      all.map((o) => o.unwrap())
    )
  );
}

/**
 * @name listNodes
 * @param {(PezpalletBagsListListBag | null)} bag A reference to a specific bag in the BagsList pallet.
 * @description Retrieves the list of nodes (accounts) contained in a specific bag within the BagsList pallet.
 */
export function listNodes (instanceId: string, api: DeriveApi): (bag: PezpalletBagsListListBag | null) => Observable<PezpalletBagsListListNode[]> {
  return memo(instanceId, (bag: PezpalletBagsListListBag | null): Observable<PezpalletBagsListListNode[]> =>
    bag && bag.head.isSome
      ? traverseLinks(api, bag.head.unwrap())
      : of([])
  );
}
