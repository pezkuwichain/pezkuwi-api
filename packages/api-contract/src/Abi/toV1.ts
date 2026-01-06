// Copyright 2017-2025 @pezkuwi/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV0, ContractMetadataV1 } from '@pezkuwi/types/interfaces';
import type { Registry } from '@pezkuwi/types/types';

import { convertSiV0toV1 } from '@pezkuwi/types';
import { objectSpread } from '@pezkuwi/util';

interface Named {
  name: unknown;
}

function v0ToV1Names (all: Named[]): unknown[] {
  return all.map((e) =>
    objectSpread({}, e, {
      name: Array.isArray(e.name)
        ? e.name
        : [e.name]
    }));
}

export function v0ToV1 (registry: Registry, v0: ContractMetadataV0): ContractMetadataV1 {
  if (!v0.metadataVersion.length) {
    throw new Error('Invalid format for V0 (detected) contract metadata');
  }

  return registry.createType('ContractMetadataV1', objectSpread({}, v0, {
    spec: objectSpread({}, v0.spec, {
      constructors: v0ToV1Names(v0.spec.constructors),
      messages: v0ToV1Names(v0.spec.messages)
    }),
    types: convertSiV0toV1(registry, v0.types)
  }));
}
