// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Bytes } from '@pezkuwi/types';
import type { Registry } from '@pezkuwi/types/types';

export class BytesFactory {
  #registry: Registry;

  constructor (registry: Registry) {
    this.#registry = registry;
  }

  public bytes = (value: string): Bytes => this.#registry.createType('Bytes', value);
}
