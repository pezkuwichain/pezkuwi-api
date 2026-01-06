// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import staticLatest from '@pezkuwi/types-support/metadata/static-bizinikiwi';
import staticV13 from '@pezkuwi/types-support/metadata/v13/bizinikiwi-hex';
import { stringify } from '@pezkuwi/util';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../Metadata.js';

describe('toCallsOnly', (): void => {
  const registry = new TypeRegistry();

  it('creates a calls-only version of the latest', (): void => {
    const stripped = new Metadata(registry, staticLatest).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(stringify(stripped));

      throw error;
    }
  });

  it('creates a calls-only version of V13', (): void => {
    const stripped = new Metadata(registry, staticV13).asCallsOnly;

    try {
      expect(stripped).toBeDefined();
    } catch (error) {
      console.error(stringify(stripped));

      throw error;
    }
  });

  it('can serialize from the input', (): void => {
    const s1 = new Metadata(registry, staticLatest).asCallsOnly.toU8a();
    const s2 = new Metadata(registry, s1).asCallsOnly.toU8a();

    expect(s1).toEqual(s2);
  });
});
