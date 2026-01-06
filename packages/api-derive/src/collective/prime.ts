// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@pezkuwi/types/interfaces';
import type { Collective, PrimeFnRet } from './types.js';

import { map, of } from 'rxjs';

import { isFunction } from '@pezkuwi/util';

import { withSection } from './helpers.js';

export function prime (section: Collective): PrimeFnRet {
  return withSection(section, (query) =>
    (): Observable<AccountId | null> =>
      isFunction(query?.prime)
        ? query.prime().pipe(
          map((o): AccountId | null =>
            o.unwrapOr(null)
          )
        )
        : of(null)
  );
}
