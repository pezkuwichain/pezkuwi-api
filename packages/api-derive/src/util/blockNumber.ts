// Copyright 2017-2025 @pezkuwi/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Compact } from '@pezkuwi/types';
import type { BlockNumber } from '@pezkuwi/types/interfaces';

import { isCompact } from '@pezkuwi/util';

interface CompatHeader { number: Compact<BlockNumber> | BlockNumber }

export function unwrapBlockNumber (hdr: CompatHeader): BlockNumber {
  return isCompact<BlockNumber>(hdr.number)
    ? hdr.number.unwrap()
    : hdr.number;
}
