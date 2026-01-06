// Copyright 2017-2025 @pezkuwi/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// augment our internal Lookup & Registry interfaces
import './augmentLookup.js';
import './augmentRegistry.js';

// augmented exports
export * from '@pezkuwi/types/types/registry';

// used inside augmented definitions
export type { Observable } from 'rxjs';

// other exports
export * from '../create/types.js';
export * from './calls.js';
export * from './codec.js';
export * from './definitions.js';
export * from './detect.js';
export * from './events.js';
export * from './extrinsic.js';
export * from './interfaces.js';
