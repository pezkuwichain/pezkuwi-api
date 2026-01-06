// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import type { HexString } from '@pezkuwi/util/types';
import type { BlockNumber } from '../../../interfaces/index.js';
import type { Constants } from '../types.js';

import rpcMetadata from '@pezkuwi/types-support/metadata/static-bizinikiwi';
import rpcMetadataV10 from '@pezkuwi/types-support/metadata/v10/bizinikiwi-hex';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { decorateConstants } from '../index.js';

function init (meta: HexString): [consts: Constants, registry: TypeRegistry] {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, meta);

  registry.setMetadata(metadata);

  return [decorateConstants(registry, metadata.asLatest, metadata.version), registry];
}

describe('decorateConstants', (): void => {
  it('should return constants with the correct type and value', (): void => {
    const [consts] = init(rpcMetadata);

    expect((consts['democracy']['cooloffPeriod'] as unknown as BlockNumber).bitLength()).toBe(32);
    // 3 second blocks, 28 days
    expect((consts['democracy']['cooloffPeriod'] as unknown as BlockNumber).toNumber()).toEqual(28 * 24 * 60 * (60 / 3));
  });

  // removed from session
  it('correctly handles bytes (V10)', (): void => {
    const [consts] = init(rpcMetadataV10);

    // 0x34 removes as the length prefix removed
    expect(
      consts['session']['dedupKeyPrefix'].toHex()
    ).toEqual('0x3a73657373696f6e3a6b657973');
  });
});
