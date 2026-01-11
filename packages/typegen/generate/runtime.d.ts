import type { Metadata } from '@pezkuwi/types/metadata/Metadata';
import type { Definitions, Registry } from '@pezkuwi/types/types';
import type { HexString } from '@pezkuwi/util/types';
import { type ExtraTypes } from './types.js';
/** @internal */
export declare function generateCallTypes(registry: Registry, meta: Metadata, dest: string, extraTypes: ExtraTypes, isStrict: boolean, customLookupDefinitions?: Definitions): void;
export declare function generateDefaultRuntime(dest: string, data: HexString, extraTypes?: ExtraTypes, isStrict?: boolean, customLookupDefinitions?: Definitions): void;
