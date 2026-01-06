// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Bytes, Option, u32 } from '@pezkuwi/types';
import type { AccountId, AccountIndex, Address, Balance } from '@pezkuwi/types/interfaces';
import type { ITuple } from '@pezkuwi/types/types';
import type { DeriveAccountInfo, DeriveAccountRegistration, DeriveApi } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { u8aToString } from '@pezkuwi/util';

import { memo } from '../util/index.js';

function retrieveNick (api: DeriveApi, accountId?: AccountId): Observable<string | undefined> {
  return ((
    accountId && api.query['nicks']?.['nameOf']
      ? api.query['nicks']['nameOf'](accountId)
      : of(undefined)
  ) as Observable<Option<ITuple<[Bytes, Balance]>> | undefined>).pipe(
    map((nameOf): string | undefined =>
      nameOf?.isSome
        ? u8aToString(nameOf.unwrap()[0]).substring(0, (api.consts['nicks']['maxLength'] as u32).toNumber())
        : undefined
    )
  );
}

/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex, identity and nickname
 * @param {(AccountIndex | AccountId | Address | Uint8Array | string | null)} address An accounts in different formats.
 * @example
 * ```javascript
 * const ALICE = "13AU";
 * const info = await api.derive.accounts.info(ALICE);
 * console.log(
 *   "Account Info: ",
 *   Object.keys(info).map((key) => `${key}: ${info[key]}`)
 * );
 * ```
 */
export function info (instanceId: string, api: DeriveApi): (address?: AccountIndex | AccountId | Address | Uint8Array | string | null) => Observable<DeriveAccountInfo> {
  return memo(instanceId, (address?: AccountIndex | AccountId | Address | Uint8Array | string | null): Observable<DeriveAccountInfo> =>
    api.derive.accounts.idAndIndex(address).pipe(
      switchMap(([accountId, accountIndex]): Observable<[Partial<DeriveAccountInfo>, DeriveAccountRegistration, string | undefined]> =>
        combineLatest([
          of({ accountId, accountIndex }),
          api.derive.accounts.identity(accountId),
          retrieveNick(api, accountId)
        ])
      ),
      map(([{ accountId, accountIndex }, identity, nickname]): DeriveAccountInfo => ({
        accountId, accountIndex, identity, nickname
      }))
    ));
}
