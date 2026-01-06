// Copyright 2017-2025 @pezkuwi/api-base authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DecoratedRpc, QueryableCalls, QueryableConsts, QueryableStorage, QueryableStorageMulti, SubmittableExtrinsics } from '@pezkuwi/api-base/types';
import type { RpcInterface } from '@pezkuwi/rpc-core/types';
import type { Metadata } from '@pezkuwi/types';
import type { Hash, RuntimeVersion } from '@pezkuwi/types/interfaces';
import type { Registry, Signer } from '@pezkuwi/types/types';

// A smaller interface of ApiRx, used in derive and in SubmittableExtrinsic
export interface ApiInterfaceRx {
  call: QueryableCalls<'rxjs'>;
  consts: QueryableConsts<'rxjs'>;
  extrinsicType: number;
  genesisHash?: Hash | undefined;
  hasSubscriptions: boolean;
  registry: Registry;
  runtimeMetadata: Metadata;
  runtimeVersion: RuntimeVersion;
  query: QueryableStorage<'rxjs'>;
  queryMulti: QueryableStorageMulti<'rxjs'>;
  rpc: DecoratedRpc<'rxjs', RpcInterface>;
  tx: SubmittableExtrinsics<'rxjs'>;
  signer?: Signer | undefined;

  callAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableCalls<'rxjs'>>;
  queryAt: (blockHash: Uint8Array | string, knownVersion?: RuntimeVersion) => Observable<QueryableStorage<'rxjs'>>;
}
