// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { u32 } from '@pezkuwi/types';
import type { EraIndex } from '@pezkuwi/types/interfaces';
import type { BN } from '@pezkuwi/util';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { BN_ONE, BN_ZERO } from '@pezkuwi/util';

import { memo } from '../util/index.js';

/**
 * @name erasHistoric
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 */
export function erasHistoric (instanceId: string, api: DeriveApi): (withActive?: boolean) => Observable<EraIndex[]> {
  return memo(instanceId, (withActive?: boolean): Observable<EraIndex[]> =>
    combineLatest([
      api.query.staking.activeEra(),
      api.consts.staking.historyDepth
        ? of(api.consts.staking.historyDepth)
        : api.query.staking['historyDepth']<u32>()
    ]).pipe(
      map(([activeEraOpt, historyDepth]): EraIndex[] => {
        const result: EraIndex[] = [];
        const max = historyDepth.toNumber();
        const activeEra: BN = activeEraOpt.unwrapOrDefault().index;
        let lastEra = activeEra;

        while (lastEra.gte(BN_ZERO) && (result.length < max)) {
          if ((lastEra !== activeEra) || (withActive === true)) {
            result.push(api.registry.createType('EraIndex', lastEra));
          }

          lastEra = lastEra.sub(BN_ONE);
        }

        // go from oldest to newest
        return result.reverse();
      })
    )
  );
}
