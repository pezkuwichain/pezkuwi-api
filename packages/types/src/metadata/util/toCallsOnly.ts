// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Option, Text, u8 } from '@pezkuwi/types-codec';
import type { AnyJson, Registry } from '@pezkuwi/types-codec/types';
import type { MetadataLatest, PezpalletCallMetadataLatest } from '../../interfaces/metadata/index.js';

import { objectSpread } from '@pezkuwi/util';

interface ModuleMetadataTrimmed {
  calls: Option<PezpalletCallMetadataLatest>;
  index: u8;
  name: Text;
}

function trimDocs (docs: Text[]): string[] {
  const strings = docs.map((d) => d.toString().trim());
  const firstEmpty = strings.findIndex((d) => !d.length);

  return firstEmpty === -1
    ? strings
    : strings.slice(0, firstEmpty);
}

/** @internal */
export function toCallsOnly (registry: Registry, { extrinsic, lookup, pallets }: MetadataLatest): AnyJson {
  return registry.createTypeUnsafe('MetadataLatest', [{
    extrinsic,
    lookup: {
      types: lookup.types.map(({ id, type }) =>
        registry.createTypeUnsafe('PortableType', [{
          id,
          type: objectSpread({}, type, { docs: trimDocs(type.docs) })
        }])
      )
    },
    pallets: pallets.map(({ calls, index, name }): ModuleMetadataTrimmed => ({
      calls: registry.createTypeUnsafe('Option<PezpalletCallMetadataLatest>', [calls.unwrapOr(null)]),
      index,
      name
    }))
  }]).toJSON();
}
