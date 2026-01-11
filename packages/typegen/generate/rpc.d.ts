import type { TypeRegistry } from '@pezkuwi/types/create';
import type { Definitions } from '@pezkuwi/types/types';
import type { ExtraTypes } from './types.js';
/** @internal */
export declare function generateRpcTypes(registry: TypeRegistry, importDefinitions: Record<string, Definitions>, dest: string, extraTypes: ExtraTypes): void;
export declare function generateDefaultRpc(dest?: string, extraTypes?: ExtraTypes): void;
