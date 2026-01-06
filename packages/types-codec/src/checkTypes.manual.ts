// Copyright 2017-2025 @pezkuwi/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import '@pezkuwi/types-augment';

import { TypeRegistry } from '@pezkuwi/types';

import { U32 } from './index.js';

const registry = new TypeRegistry();

console.log(new U32(registry).divn(1));
