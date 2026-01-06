// Copyright 2017-2025 @pezkuwi/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ContractMetadataV3, ContractMetadataV4 } from '@pezkuwi/types/interfaces';
import type { Registry } from '@pezkuwi/types/types';

import { objectSpread } from '@pezkuwi/util';

export function v3ToV4 (registry: Registry, v3: ContractMetadataV3): ContractMetadataV4 {
  return registry.createType('ContractMetadataV4', objectSpread({}, v3, {
    spec: objectSpread({}, v3.spec, {
      constructors: v3.spec.constructors.map((c) =>
        registry.createType('ContractConstructorSpecV4', objectSpread({}, c))
      ),
      messages: v3.spec.messages.map((m) =>
        registry.createType('ContractMessageSpecV3', objectSpread({}, m))
      )
    }),
    version: registry.createType('Text', '4')
  }));
}
