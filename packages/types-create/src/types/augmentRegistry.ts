// Copyright 2017-2025 @pezkuwi/types-create authors & contributors
// SPDX-License-Identifier: Apache-2.0

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@pezkuwi/types-codec/types/registry';

import type { Codec, CodecClass, ICompact, INumber, LookupString } from '@pezkuwi/types-codec/types';
import type { ILookup, TypeDef } from '@pezkuwi/types-create/types';

declare module '@pezkuwi/types-codec/types/registry' {
  interface Registry {
    readonly lookup: ILookup;

    createLookupType (lookupId: ICompact<INumber> | number): LookupString;
    getUnsafe <T extends Codec = Codec, K extends string = string> (name: K, withUnknown?: boolean, knownTypeDef?: TypeDef): CodecClass<T> | undefined;
    setLookup (lookup: ILookup): void;
  }
}
