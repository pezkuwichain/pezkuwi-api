// Copyright 2017-2026 @pezkuwi/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import { TypeRegistry } from '@pezkuwi/types';

import { formatType, isInlineStruct } from './formatting.js';

describe('formatType', (): void => {
  const registry = new TypeRegistry();

  it('handles nested Tuples', (): void => {
    expect(
      formatType(registry, {}, '(AccountId, (Balance, u32), u64)', {
        codecTypes: {},
        definitions: {},
        extrinsicTypes: {},
        genericTypes: {},
        ignoredTypes: [],
        localTypes: {},
        lookupTypes: {},
        metadataTypes: {},
        primitiveTypes: {},
        typeToModule: {},
        typesTypes: {}
      })
    ).toEqual('ITuple<[AccountId, ITuple<[Balance, u32]>, u64]>');
  });
});

describe('isInlineStruct', (): void => {
  it('matches what /^{.+:.+}/ matched', (): void => {
    for (const [type, expected] of [
      ['{ a: u32 }', true],
      ['{"a":"u32"}', true],
      ['{a:}', false],
      ['{:a}', false],
      ['{a:b', false],
      ['{a:b}c', true],
      ['x{a:b}', false],
      ['{a\n:b}', false],
      ['{a:b\n}', false],
      ['(a: b)', false]
    ] as const) {
      expect([type, isInlineStruct(type)]).toEqual([type, expected]);
    }
  });

  it('is linear on input that made the regex backtrack', (): void => {
    const start = Date.now();

    expect(isInlineStruct(`{{${'a:'.repeat(100_000)}`)).toBe(false);
    expect(Date.now() - start < 100).toBe(true);
  });
});
