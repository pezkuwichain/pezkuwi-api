// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import metadataStatic from '@pezkuwi/types-support/metadata/static-bizinikiwi';
import { compactAddLength, u8aToU8a } from '@pezkuwi/util';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { bizinikiwi } from './bizinikiwi.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

// console.log(JSON.stringify(registry.lookup.types));

describe('bizinikiwi', (): void => {
  const code = bizinikiwi['code'](registry);

  it('creates a well-known :code key', (): void => {
    expect(
      code()
    ).toEqual(
      compactAddLength(u8aToU8a(':code'))
    );
  });

  it('has the correct metadata', (): void => {
    expect(
      code.meta.type.isPlain
    ).toEqual(true);
  });
});
