// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Option, Struct, u32, u8 } from '@pezkuwi/types-codec';
import type { ITuple } from '@pezkuwi/types-codec/types';
import type { BlockNumber, Call, PezpalletsOrigin } from '@pezkuwi/types/interfaces/runtime';

/** @name Period */
export interface Period extends ITuple<[BlockNumber, u32]> {}

/** @name Priority */
export interface Priority extends u8 {}

/** @name Scheduled */
export interface Scheduled extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: SchedulePriority;
  readonly call: Call;
  readonly maybePeriodic: Option<SchedulePeriod>;
  readonly origin: PezpalletsOrigin;
}

/** @name ScheduledTo254 */
export interface ScheduledTo254 extends Struct {
  readonly maybeId: Option<Bytes>;
  readonly priority: SchedulePriority;
  readonly call: Call;
  readonly maybePeriodic: Option<SchedulePeriod>;
}

/** @name SchedulePeriod */
export interface SchedulePeriod extends Period {}

/** @name SchedulePriority */
export interface SchedulePriority extends Priority {}

/** @name TaskAddress */
export interface TaskAddress extends ITuple<[BlockNumber, u32]> {}

export type PHANTOM_SCHEDULER = 'scheduler';
