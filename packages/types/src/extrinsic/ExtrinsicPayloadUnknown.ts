// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@pezkuwi/types-codec/types';
import type { ExtrinsicPayloadOptions } from './types.js';

import { Struct } from '@pezkuwi/types-codec';

/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export class GenericExtrinsicPayloadUnknown extends Struct {
  constructor (registry: Registry, _value?: unknown, { version = 0 }: Partial<ExtrinsicPayloadOptions> = {}) {
    super(registry, {});

    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
}
