// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise, WsProvider } from '@pezkuwi/api';
import { Metadata, TypeRegistry } from '@pezkuwi/types';
import metaStatic from '@pezkuwi/types-support/metadata/static-bizinikiwi';

export function createApiWithAugmentations (): ApiPromise {
  const registry = new TypeRegistry();
  const metadata = new Metadata(registry, metaStatic);

  registry.setMetadata(metadata);

  const api = new ApiPromise({
    provider: new WsProvider('ws://', false),
    registry
  });

  // eslint-disable-next-line deprecation/deprecation
  api.injectMetadata(metadata, true, registry);

  return api;
}
