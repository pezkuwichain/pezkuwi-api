// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@pezkuwi/util/types';

export interface Check {
  data: HexString;
  fails?: string[];
}
