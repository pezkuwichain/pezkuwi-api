import type { Definitions } from '@pezkuwi/types/types';
import type { HexString } from '@pezkuwi/util/types';
import { type ExtraTypes } from './types.js';
/** @internal */
export declare function generateDefaultTx(dest: string, data: HexString, extraTypes?: ExtraTypes, isStrict?: boolean, customLookupDefinitions?: Definitions): void;
