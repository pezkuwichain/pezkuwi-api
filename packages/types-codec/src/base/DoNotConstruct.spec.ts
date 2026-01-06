// Copyright 2017-2025 @pezkuwi/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@pezkuwi/dev-test/globals.d.ts" />

import { TypeRegistry } from '@pezkuwi/types';
import { DoNotConstruct } from '@pezkuwi/types-codec';

describe('DoNotConstruct', (): void => {
  const registry = new TypeRegistry();

  it('does not allow construction', (): void => {
    expect(
      () => new (DoNotConstruct.with())(registry)
    ).toThrow(/Cannot construct unknown type DoNotConstruct/);
  });

  it('does not allow construction (with Name)', (): void => {
    expect(
      () => new (DoNotConstruct.with('Something'))(registry)
    ).toThrow(/Cannot construct unknown type Something/);
  });
});
