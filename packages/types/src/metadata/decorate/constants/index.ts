// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '@pezkuwi/types-codec/types';
import type { MetadataLatest, PezpalletConstantMetadataLatest } from '../../../interfaces/index.js';
import type { ConstantCodec, Constants } from '../types.js';

import { hexToU8a, lazyMethod, lazyMethods, stringCamelCase } from '@pezkuwi/util';

import { objectNameToCamel } from '../util.js';

/** @internal */
export function decorateConstants (registry: Registry, { pallets }: MetadataLatest, _version: number): Constants {
  const result: Constants = {};

  for (let i = 0, count = pallets.length; i < count; i++) {
    const { constants, name } = pallets[i];

    if (!constants.isEmpty) {
      lazyMethod(result, stringCamelCase(name), () =>
        lazyMethods(
          {},
          constants,
          (constant: PezpalletConstantMetadataLatest): ConstantCodec => {
            const codec = registry.createTypeUnsafe<ConstantCodec>(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]);

            // We are casting here since we are assigning to a read-only property
            (codec as { meta: PezpalletConstantMetadataLatest }).meta = constant;

            return codec;
          },
          objectNameToCamel
        )
      );
    }
  }

  return result;
}
