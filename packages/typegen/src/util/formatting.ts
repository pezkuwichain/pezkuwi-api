// Copyright 2017-2025 @pezkuwi/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyString, Registry } from '@pezkuwi/types/types';
import type { LookupString } from '@pezkuwi/types-codec/types';
import type { TypeDef } from '@pezkuwi/types-create/types';
import type { ModuleTypes, TypeImports } from './imports.js';

import Handlebars from 'handlebars';

import * as typesCodec from '@pezkuwi/types-codec';
import { getTypeDef, paramsNotation, TypeDefInfo } from '@pezkuwi/types-create';
import { isString, stringify } from '@pezkuwi/util';

import { readTemplate } from './file.js';
import { setImports } from './imports.js';

// Rebrand type names from Polkadot SDK to Pezkuwi SDK
function rebrandTypeName (typeName: string): string {
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

interface ImportDef {
  file: string;
  types: string[];
}

interface This {
  imports: TypeImports;
  types: ImportDef[];
}

const NO_CODEC = ['Tuple', 'VecFixed'];
const ON_CODEC = Object.keys(typesCodec);
const ON_CODEC_TYPES = ['Codec', 'AnyJson', 'AnyFunction', 'AnyNumber', 'AnyString', 'AnyTuple', 'AnyU8a', 'ICompact', 'IEnum', 'IMap', 'INumber', 'IOption', 'IResult', 'ISet', 'IStruct', 'ITuple', 'IU8a', 'IVec', 'IMethod'];

export const HEADER = (type: 'chain' | 'defs'): string => `// Auto-generated via \`yarn pezkuwi-types-from-${type}\`, do not edit\n/* eslint-disable */\n\n`;

function extractImports ({ imports, types }: This): string[] {
  const toplevel = [
    ...Object.keys(imports.codecTypes),
    ...Object.keys(imports.extrinsicTypes),
    ...Object.keys(imports.genericTypes),
    ...Object.keys(imports.metadataTypes),
    ...Object.keys(imports.primitiveTypes)
  ];

  return [
    {
      file: '@pezkuwi/types',
      types: toplevel.filter((n) =>
        !NO_CODEC.includes(n) && !ON_CODEC.includes(n)
      )
    },
    {
      file: '@pezkuwi/types/lookup',
      types: Object.keys(imports.lookupTypes)
    },
    {
      file: '@pezkuwi/types/types',
      types: Object.keys(imports.typesTypes).filter((n) =>
        !ON_CODEC_TYPES.includes(n)
      )
    },
    {
      file: '@pezkuwi/types-codec',
      types: toplevel.filter((n) =>
        !NO_CODEC.includes(n) && ON_CODEC.includes(n)
      )
    },
    {
      file: '@pezkuwi/types-codec/types',
      types: Object.keys(imports.typesTypes).filter((n) =>
        ON_CODEC_TYPES.includes(n)
      )
    },
    ...types
  ]
    .filter(({ types }) => types.length)
    .sort(({ file }, b) => file.localeCompare(b.file))
    .map(({ file, types }) => `import type { ${types.sort().join(', ')} } from '${file}';`);
}

Handlebars.registerPartial({
  header: Handlebars.compile(readTemplate('header'))
});

Handlebars.registerHelper({
  importsAll () {
    return extractImports(this as unknown as This)
      .join('\n');
  },
  importsPackage () {
    return extractImports(this as unknown as This)
      .filter((l) => !l.includes("from '."))
      .join('\n  ');
  },
  importsRelative () {
    return extractImports(this as unknown as This)
      .filter((l) => l.includes("from '."))
      .join('\n');
  },
  trim (options: { fn: (self: unknown) => string }) {
    return options.fn(this).trim();
  },
  upper (options: { fn: (self: unknown) => string }) {
    return options.fn(this).toUpperCase();
  }
});

// helper to generate a `export interface <Name> extends <Base> {<Body>}
/** @internal */
export function exportInterface (lookupIndex = -1, name = '', base: string, body = '', withShortcut = false): string {
  // * @description extends [[${base}]]
  const doc = withShortcut
    ? ''
    : `/** @name ${name}${lookupIndex !== -1 ? ` (${lookupIndex})` : ''} */\n`;

  return `${doc}${withShortcut ? '' : `export interface ${name} extends ${base} `}{${body.length ? '\n' : ''}${body}${withShortcut ? '  ' : ''}}`;
}

function singleParamNotation (registry: Registry, wrapper: string, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean): string {
  const sub = (typeDef.sub as TypeDef);
  const lookupName = rebrandTypeName(sub.lookupName || '');

  setImports(definitions, imports, [wrapper, lookupName]);

  return paramsNotation(wrapper, lookupName || formatType(registry, definitions, sub.type, imports, withShortcut));
}

function dualParamsNotation (registry: Registry, wrapper: string, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean): string {
  const [a, b] = (typeDef.sub as TypeDef[]);
  const aLookupName = rebrandTypeName(a.lookupName || '');
  const bLookupName = rebrandTypeName(b.lookupName || '');

  setImports(definitions, imports, [wrapper, aLookupName, bLookupName]);

  return paramsNotation(wrapper, [
    aLookupName || formatType(registry, definitions, a.type, imports, withShortcut),
    bLookupName || formatType(registry, definitions, b.type, imports, withShortcut)
  ]);
}

const formatters: Record<TypeDefInfo, (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => string> = {
  [TypeDefInfo.Compact]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Compact', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.DoNotConstruct]: (_registry: Registry, _typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, _withShortcut: boolean) => {
    setImports(definitions, imports, ['DoNotConstruct']);

    return 'DoNotConstruct';
  },

  [TypeDefInfo.Enum]: (_registry: Registry, typeDef: TypeDef, _definitions: Record<string, ModuleTypes>, _imports: TypeImports, _withShortcut: boolean) => {
    if (typeDef.lookupName) {
      return rebrandTypeName(typeDef.lookupName);
    }

    throw new Error(`TypeDefInfo.Enum: Parameter formatting not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Int]: (_registry: Registry, typeDef: TypeDef, _definitions: Record<string, ModuleTypes>, _imports: TypeImports, _withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.Int: Parameter formatting not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.UInt]: (_registry: Registry, typeDef: TypeDef, _definitions: Record<string, ModuleTypes>, _imports: TypeImports, _withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.UInt: Parameter formatting not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Null]: (_registry: Registry, _typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, _withShortcut: boolean) => {
    setImports(definitions, imports, ['Null']);

    return 'Null';
  },

  [TypeDefInfo.Option]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Option', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Plain]: (_registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, _withShortcut: boolean) => {
    setImports(definitions, imports, [rebrandTypeName(typeDef.type)]);

    return rebrandTypeName(typeDef.type);
  },

  [TypeDefInfo.Range]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Range', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.RangeInclusive]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'RangeInclusive', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Set]: (_registry: Registry, typeDef: TypeDef, _definitions: Record<string, ModuleTypes>, _imports: TypeImports, _withShortcut: boolean) => {
    throw new Error(`TypeDefInfo.Set: Parameter formatting not implemented on ${stringify(typeDef)}`);
  },

  [TypeDefInfo.Si]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return formatType(registry, definitions, registry.lookup.getTypeDef(typeDef.type as LookupString), imports, withShortcut);
  },

  [TypeDefInfo.Struct]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    if (typeDef.lookupName) {
      return rebrandTypeName(typeDef.lookupName);
    }

    const sub = typeDef.sub as TypeDef[];

    setImports(definitions, imports, ['Struct', ...sub.map(({ lookupName }) => rebrandTypeName(lookupName || ''))]);

    return `{${withShortcut ? ' ' : '\n'}${
      sub.map(({ lookupName, name, type }, index) => [
        name || `unknown${index}`,
        rebrandTypeName(lookupName || '') || formatType(registry, definitions, type, imports, withShortcut)
      ]).map(([k, t]) => `${withShortcut ? '' : '    readonly '}${k}: ${t};`).join(withShortcut ? ' ' : '\n')
    }${withShortcut ? ' ' : '\n  '}} & Struct`;
  },

  [TypeDefInfo.Tuple]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    const sub = typeDef.sub as TypeDef[];

    setImports(definitions, imports, ['ITuple', ...sub.map(({ lookupName }) => rebrandTypeName(lookupName || ''))]);

    // `(a,b)` gets transformed into `ITuple<[a, b]>`
    return paramsNotation('ITuple', `[${
      sub.map(({ lookupName, type }) =>
        rebrandTypeName(lookupName || '') || formatType(registry, definitions, type, imports, withShortcut)
      ).join(', ')
    }]`);
  },

  [TypeDefInfo.Vec]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Vec', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.VecFixed]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    const sub = (typeDef.sub as TypeDef);

    if (sub.type === 'u8') {
      setImports(definitions, imports, ['U8aFixed']);

      return 'U8aFixed';
    }

    return singleParamNotation(registry, 'Vec', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.BTreeMap]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'BTreeMap', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.BTreeSet]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'BTreeSet', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.HashMap]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'HashMap', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Linkage]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'Linkage', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.Result]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return dualParamsNotation(registry, 'Result', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.WrapperKeepOpaque]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'WrapperKeepOpaque', typeDef, definitions, imports, withShortcut);
  },

  [TypeDefInfo.WrapperOpaque]: (registry: Registry, typeDef: TypeDef, definitions: Record<string, ModuleTypes>, imports: TypeImports, withShortcut: boolean) => {
    return singleParamNotation(registry, 'WrapperOpaque', typeDef, definitions, imports, withShortcut);
  }
};

/**
 * Correctly format a given type
 */
/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
export function formatType (registry: Registry, definitions: Record<string, ModuleTypes>, type: AnyString | TypeDef, imports: TypeImports, withShortcut = false): string {
  let typeDef: TypeDef;

  if (isString(type)) {
    const _type = type.toString();

    // If type is "unorthodox" (i.e. `{ something: any }` for an Enum input or `[a | b | c, d | e | f]` for a Tuple's similar types),
    // we return it as-is
    if (withShortcut && /(^{.+:.+})|^\([^,]+\)|^\(.+\)\[\]|^\[.+\]/.exec(_type) && !/\[\w+;\w+\]/.exec(_type)) {
      return rebrandTypeName(_type);
    }

    typeDef = getTypeDef(type);
  } else {
    typeDef = type;
  }

  setImports(definitions, imports, [rebrandTypeName(typeDef.lookupName || typeDef.type)]);

  return rebrandTypeName(formatters[typeDef.info](registry, typeDef, definitions, imports, withShortcut));
}
