// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@pezkuwi/util';
import type { DeriveApi } from '../types.js';

import { map } from 'rxjs';

import { bnSqrt } from '@pezkuwi/util';

import { memo } from '../util/index.js';

/**
 * @name sqrtElectorate
 * @description Computes the square root of the total token issuance in the network.
 * @example
 * ```javascript
 * let sqrtElectorate = await api.derive.democracy.sqrtElectorate();
 * console.log("Square root of token issuance:", sqrtElectorate);
 * ```
 */
export function sqrtElectorate (instanceId: string, api: DeriveApi): () => Observable<BN> {
  return memo(instanceId, (): Observable<BN> =>
    api.query.balances.totalIssuance().pipe(
      map(bnSqrt)
    )
  );
}
