// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ParaId } from '@pezkuwi/types/interfaces';
import type { DidUpdate } from './types.js';

export function didUpdateToBool (didUpdate: DidUpdate, id: ParaId): boolean {
  return didUpdate.isSome
    ? didUpdate.unwrap().some((paraId) => paraId.eq(id))
    : false;
}
