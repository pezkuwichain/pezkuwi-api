// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { PezpalletStakingEraRewardPoints } from '@pezkuwi/types/lookup';
import type { DeriveApi } from '../types.js';

import { switchMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name currentPoints
 * @description Retrieve the staking overview, including elected and points earned.
 * @example
 * ```javascript
 * const currentPoints = await api.derive.staking.currentPoints();
 * console.log(currentPoints.toHuman());
 * ```
 */
export function currentPoints (instanceId: string, api: DeriveApi): () => Observable<PezpalletStakingEraRewardPoints> {
  return memo(instanceId, (): Observable<PezpalletStakingEraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints(activeEra)
      )
    ));
}
