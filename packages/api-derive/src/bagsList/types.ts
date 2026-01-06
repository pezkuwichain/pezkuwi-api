// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PezpalletBagsListListBag, PezpalletBagsListListNode } from '@pezkuwi/types/lookup';
import type { BN } from '@pezkuwi/util';

export interface Bag {
  bag: PezpalletBagsListListBag | null;
  bagUpper: BN;
  bagLower: BN;
  id: BN;
  index: number;
  key: string;
}

export interface BagExpanded extends Bag {
  nodes: PezpalletBagsListListNode[];
}
