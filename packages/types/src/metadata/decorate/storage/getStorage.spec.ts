// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import metadataStatic from '@pezkuwi/types-support/metadata/static-bizinikiwi';
import { compactAddLength, u8aToU8a } from '@pezkuwi/util';

import { TypeRegistry } from '../../../create/index.js';
import { Metadata } from '../../Metadata.js';
import { getStorage } from './getStorage.js';

const registry = new TypeRegistry();
const metadata = new Metadata(registry, metadataStatic);

registry.setMetadata(metadata);

describe('getSorage', (): void => {
  const storage = getStorage(registry);

  it('should return well known keys', (): void => {
    expect(typeof storage['bizinikiwi']).toBe('object');

    expect(storage['bizinikiwi']['code']()).toEqual(compactAddLength(u8aToU8a(':code')));

    expect(storage['bizinikiwi']['changesTrieConfig']).toBeTruthy();
    expect(storage['bizinikiwi']['childStorageKeyPrefix']).toBeTruthy();
    expect(storage['bizinikiwi']['extrinsicIndex']).toBeTruthy();
    expect(storage['bizinikiwi']['heapPages']).toBeTruthy();
  });
});
