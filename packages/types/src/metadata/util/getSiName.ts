// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ILookup } from '@pezkuwi/types-create/types';
import type { SiLookupTypeId } from '../../interfaces/index.js';

export function getSiName (lookup: ILookup, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}
