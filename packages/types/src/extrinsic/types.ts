// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyNumber } from '@pezkuwi/types-codec/types';

export interface ExtrinsicOptions {
  isSigned: boolean;
  version: number;
}

export interface ExtrinsicPayloadOptions {
  version: number;
}

export interface ExtrinsicSignatureOptions {
  isSigned?: boolean;
}

export interface ExtrinsicExtraValue {
  era?: Uint8Array;
  nonce?: AnyNumber;
  tip?: AnyNumber;
}

export type Preamble = 'bare' | 'general';
