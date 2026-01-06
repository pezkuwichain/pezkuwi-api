// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { CallFunction, Registry, RegistryError } from '@pezkuwi/types/types';

import { u8aToU8a } from '@pezkuwi/util';

export function findCall (registry: Registry, callIndex: Uint8Array | string): CallFunction {
  return registry.findMetaCall(u8aToU8a(callIndex));
}

export function findError (registry: Registry, errorIndex: Uint8Array | string): RegistryError {
  return registry.findMetaError(u8aToU8a(errorIndex));
}
