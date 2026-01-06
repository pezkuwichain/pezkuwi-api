// Copyright 2017-2025 @pezkuwi/types-known authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideVersionedType } from '@pezkuwi/types/types';

import { versioned as centrifugeChain } from './centrifuge-chain.js';
import { versioned as dicle } from './dicle.js';
import { versioned as node } from './node.js';
import { versioned as nodeTemplate } from './node-template.js';
import { versioned as pezkuwi } from './pezkuwi.js';
import { versioned as pezkuwichain } from './pezkuwichain.js';
import { versioned as shell } from './shell.js';
import { versioned as statemine } from './statemine.js';
import { versioned as statemint } from './statemint.js';
import { versioned as westmint } from './westmint.js';
import { versioned as zagros } from './zagros.js';

// Type overrides for specific spec types & versions as given in runtimeVersion
export const typesSpec: Record<string, OverrideVersionedType[]> = {
  'centrifuge-chain': centrifugeChain,
  dicle,
  node,
  'node-template': nodeTemplate,
  pezkuwi,
  pezkuwichain,
  shell,
  statemine,
  statemint,
  zagros,
  westmint
};
