// Copyright 2017-2025 @pezkuwi/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

export * from './assert.js';
export * from './derived.js';
export * from './docs.js';
export * from './file.js';
export * from './formatting.js';
export * from './imports.js';
export * from './initMeta.js';
export * from './register.js';
export * from './wsMeta.js';

interface Cmp { name: { toString(): string } }

export function compareName (a: Cmp, b: Cmp): number {
  return a.name.toString().localeCompare(b.name.toString());
}

// Rebrand type names from Polkadot SDK to Pezkuwi SDK
export function rebrandTypeName (typeName: string): string {
  return typeName
    // Main projects
    .replace(/Polkadot/g, 'Pezkuwi')
    .replace(/Substrate/g, 'Bizinikiwi')
    .replace(/Cumulus/g, 'Pezcumulus')
    // Networks
    .replace(/Kusama/g, 'Dicle')
    .replace(/Westend/g, 'Zagros')
    .replace(/Rococo/g, 'Pezkuwichain')
    // Chain types
    .replace(/Parachain/g, 'Teyrchain')
    // Module prefixes (in PascalCase type names)
    .replace(/Frame(?=[A-Z])/g, 'Pezframe')
    .replace(/Pallet(?=[A-Z])/g, 'Pezpallet')
    // Primitives prefixes (sp_ becomes Sp in type names)
    .replace(/^Sp(?=[A-Z])/g, 'Pezsp')
    .replace(/([^a-zA-Z])Sp(?=[A-Z])/g, '$1Pezsp')
    // Client prefixes (sc_ becomes Sc in type names)
    .replace(/^Sc(?=[A-Z])/g, 'Pezsc')
    .replace(/([^a-zA-Z])Sc(?=[A-Z])/g, '$1Pezsc');
}
