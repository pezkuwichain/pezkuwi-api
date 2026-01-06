// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { AccountId, BlockNumber, Hash } from '@pezkuwi/types/interfaces/runtime';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
  readonly type: 'InclusionHeight' | 'Uncle';
}

export type PHANTOM_AUTHORSHIP = 'authorship';
