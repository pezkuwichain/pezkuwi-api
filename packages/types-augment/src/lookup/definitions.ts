// Copyright 2017-2025 @pezkuwi/types-lookup authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '@pezkuwi/types/types';

import { objectSpread } from '@pezkuwi/util';

import assetHubDicle from './assetHubDicle.js';
import assetHubPezkuwi from './assetHubPezkuwi.js';
import bizinikiwi from './bizinikiwi.js';
import dicle from './dicle.js';
import pezkuwi from './pezkuwi.js';

export default {
  rpc: {},
  // Not 100% sure it is relevant, however the order here is the same
  // as exposed in the typegen lookup order
  types: objectSpread({}, bizinikiwi, pezkuwi, dicle, assetHubPezkuwi, assetHubDicle)
} as Definitions;
