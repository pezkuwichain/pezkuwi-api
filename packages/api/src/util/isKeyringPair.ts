// Copyright 2017-2025 @pezkuwi/api authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Address } from '@pezkuwi/types/interfaces';
import type { IKeyringPair } from '@pezkuwi/types/types';

import { isFunction } from '@pezkuwi/util';

export function isKeyringPair (account: string | IKeyringPair | AccountId | Address): account is IKeyringPair {
  return isFunction((account as IKeyringPair).sign);
}
