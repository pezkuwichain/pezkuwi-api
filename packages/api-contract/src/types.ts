// Copyright 2017-2025 @pezkuwi/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiBase } from '@pezkuwi/api/base';
import type { ApiTypes } from '@pezkuwi/api/types';
import type { Text } from '@pezkuwi/types';
import type { ContractExecResultResult, ContractSelector, StorageDeposit, Weight, WeightV2 } from '@pezkuwi/types/interfaces';
import type { Codec, TypeDef } from '@pezkuwi/types/types';
import type { BN } from '@pezkuwi/util';
import type { HexString } from '@pezkuwi/util/types';
import type { Abi } from './index.js';

export interface ContractBase<ApiType extends ApiTypes> {
  readonly abi: Abi;
  readonly api: ApiBase<ApiType>;

  getMessage: (name: string) => AbiMessage;
  messages: AbiMessage[];
}

export interface AbiParam {
  name: string;
  type: TypeDef;
}

export type AbiMessageParam = AbiParam

export interface AbiEventParam extends AbiParam{
  indexed: boolean;
}

export interface AbiEvent {
  args: AbiEventParam[];
  docs: string[];
  fromU8a: (data: Uint8Array) => DecodedEvent;
  identifier: string;
  index: number;
  signatureTopic?: HexString | null;
}

export interface AbiMessage {
  args: AbiMessageParam[];
  docs: string[];
  fromU8a: (data: Uint8Array) => DecodedMessage;
  identifier: string;
  index: number;
  isConstructor?: boolean;
  isDefault?: boolean;
  isMutating?: boolean;
  isPayable?: boolean;
  method: string;
  path: string[];
  returnType?: TypeDef | null;
  selector: ContractSelector;
  toU8a: (params: unknown[]) => Uint8Array;
}

export type AbiConstructor = AbiMessage;

// eslint-disable-next-line @typescript-eslint/ban-types
export type InterfaceContractCalls = Record<string, Function>;

export interface ContractCallOutcome {
  debugMessage: Text;
  gasConsumed: Weight;
  gasRequired: Weight;
  output: Codec | null;
  result: ContractExecResultResult;
  storageDeposit: StorageDeposit;
}

export interface DecodedEvent {
  args: Codec[];
  event: AbiEvent;
}

export interface DecodedMessage {
  args: Codec[];
  message: AbiMessage;
}

export interface ContractOptions {
  gasLimit?: bigint | string | number | BN | WeightV2;
  storageDepositLimit?: bigint | string | number | BN | null;
  value?: bigint | BN | string | number;
}

export interface BlueprintOptions extends ContractOptions {
  salt?: Uint8Array | string | null;
}

export interface WeightAll {
  v1Weight: BN;
  v2Weight: {
    refTime: BN;
    proofSize?: BN | undefined;
  };
}
