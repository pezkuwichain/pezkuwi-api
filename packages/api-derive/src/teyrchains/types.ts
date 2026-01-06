// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes, Option, u32, Vec } from '@pezkuwi/types';
import type { CollatorId, ParaId, ParaInfo, Retriable, UpwardMessage } from '@pezkuwi/types/interfaces';
import type { ITuple } from '@pezkuwi/types/types';

export type ParaInfoResult = Option<ParaInfo>;
export type PendingSwap = Option<ParaId>;
export type Active = Vec<ITuple<[ParaId, Option<ITuple<[CollatorId, Retriable]>>]>>;
export type RetryQueue = Vec<Vec<ITuple<[ParaId, CollatorId]>>>
export type SelectedThreads = Vec<Vec<ITuple<[ParaId, CollatorId]>>>
export type Code = Bytes;
export type Heads = Bytes;
export type RelayDispatchQueue = Vec<UpwardMessage>
export type RelayDispatchQueueSize = ITuple<[u32, u32]>;
export type DidUpdate = Option<Vec<ParaId>>;

export interface DeriveTeyrchainActive {
  collatorId: CollatorId;
  isRetriable: boolean;
  retries: number;
}

export interface DeriveTeyrchainInfo extends ParaInfo {
  id: ParaId;
  icon?: string;
  name?: string;
  owner?: string;
}

export interface DeriveTeyrchain {
  didUpdate: boolean;
  pendingSwapId: ParaId | null;
  id: ParaId;
  info: DeriveTeyrchainInfo | null;
  relayDispatchQueueSize?: number;
}

export interface DeriveTeyrchainFull extends DeriveTeyrchain {
  active: DeriveTeyrchainActive | null;
  heads: Bytes | null;
  relayDispatchQueue: UpwardMessage[];
  retryCollators: (CollatorId | null)[];
  selectedCollators: (CollatorId | null)[];
}
