// Copyright 2017-2026 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Vec } from '@pezkuwi/types-codec';
import type { Codec } from '../types/index.js';

export interface MetadataInterface<Modules extends Codec> extends Codec {
  pallets: Vec<Modules>;
}
