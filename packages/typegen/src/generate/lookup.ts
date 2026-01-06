// Copyright 2017-2025 @pezkuwi/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { PortableType, SiLookupTypeId, SiPath, SiTypeParameter } from '@pezkuwi/types/interfaces';
import type { PortableRegistry } from '@pezkuwi/types/metadata';
import type { Registry } from '@pezkuwi/types/types';
import type { TypeDef } from '@pezkuwi/types-create/types';
import type { HexString } from '@pezkuwi/util/types';

import Handlebars from 'handlebars';
import path from 'node:path';

import * as defaultDefinitions from '@pezkuwi/types/interfaces/definitions';
import staticAhDicle from '@pezkuwi/types-support/metadata/v15/asset-hub-dicle-hex';
import staticAhPezkuwi from '@pezkuwi/types-support/metadata/v15/asset-hub-pezkuwi-hex';
import staticBizinikiwi from '@pezkuwi/types-support/metadata/v15/bizinikiwi-hex';
import staticDicle from '@pezkuwi/types-support/metadata/v15/dicle-hex';
import staticPezkuwi from '@pezkuwi/types-support/metadata/v15/pezkuwi-hex';
import { isString, stringify } from '@pezkuwi/util';

import { createImports, exportInterface, initMeta, readTemplate, rebrandTypeName, type TypeImports, writeFile } from '../util/index.js';
import { typeEncoders } from './tsDef.js';

// Deep rebrand TypeDef including all nested sub types
// isTopLevel indicates whether this is a top-level type (should set name from lookupName) or a sub type (preserve name)
function deepRebrandTypeDef (typeDef: TypeDef, isTopLevel = true): TypeDef {
  const rebrandedLookupName = typeDef.lookupName ? rebrandTypeName(typeDef.lookupName) : typeDef.lookupName;

  const rebranded: TypeDef = {
    ...typeDef,
    type: rebrandTypeName(typeDef.type),
    // For top-level types: set name from lookupName (mimics original: typeDef.name = typeDef.lookupName)
    // For sub types (enum variants, struct fields): preserve the original name (field/variant name)
    name: isTopLevel ? (rebrandedLookupName || typeDef.name) : typeDef.name,
    lookupName: rebrandedLookupName,
    lookupNameRoot: typeDef.lookupNameRoot ? rebrandTypeName(typeDef.lookupNameRoot) : typeDef.lookupNameRoot
  };

  // Recursively rebrand sub types (mark as not top-level)
  if (typeDef.sub) {
    if (Array.isArray(typeDef.sub)) {
      rebranded.sub = typeDef.sub.map((s) => deepRebrandTypeDef(s, false));
    } else {
      rebranded.sub = deepRebrandTypeDef(typeDef.sub, false);
    }
  }

  return rebranded;
}

// Record<string, >
interface ParsedDef {
  _set: Record<string, number>;

  [key: string]: string | Record<string, string> | Record<string, number>;
}

const WITH_TYPEDEF = false;

const generateLookupDefsTmpl = Handlebars.compile(readTemplate('lookup/defs'));
const generateLookupDefsNamedTmpl = Handlebars.compile(readTemplate('lookup/defs-named'));
const generateLookupIndexTmpl = Handlebars.compile(readTemplate('lookup/index'));
const generateLookupTypesTmpl = Handlebars.compile(readTemplate('lookup/types'));
const generateRegistryTmpl = Handlebars.compile(readTemplate('interfaceRegistry'));

function generateParamType (registry: Registry, { name, type }: SiTypeParameter): string {
  if (type.isSome) {
    const link = registry.lookup.types[type.unwrap().toNumber()];

    if (link.type.path.length) {
      return generateTypeDocs(registry, null, link.type.path, link.type.params);
    }
  }

  return name.toString();
}

function generateTypeDocs (registry: Registry, id: SiLookupTypeId | null, path: SiPath, params: SiTypeParameter[]): string {
  return `${id ? `${registry.createLookupType(id)}${path.length ? ': ' : ''}` : ''}${path.map((p) => p.toString()).join('::')}${params.length ? `<${params.map((p) => generateParamType(registry, p)).join(', ')}>` : ''}`;
}

function formatObject (lines: string[]): string[] {
  const max = lines.length - 1;

  return [
    '{',
    ...lines.map((l, index) =>
      (l.endsWith(',') || l.endsWith('{') || index === max || lines[index + 1].endsWith('}') || lines[index + 1].endsWith('}'))
        ? l
        : `${l},`
    ),
    '}'
  ];
}

function expandSet (parsed: Record<string, number>): string[] {
  return formatObject(
    Object.entries(parsed).reduce<string[]>((all, [k, v]) => {
      all.push(`${k}: ${v}`);

      return all;
    }, [])
  );
}

function expandObject (parsed: ParsedDef): string[] {
  if (parsed._set) {
    return expandSet(parsed._set);
  }

  return formatObject(
    Object.entries(parsed).reduce<string[]>((all, [k, v]) => {
      const inner = isString(v)
        ? expandType(v)
        : Array.isArray(v)
          ? [`[${(v as string[]).map((e) => `'${e}'`).join(', ')}]`]
          : expandObject(v as ParsedDef);

      inner.forEach((l, index): void => {
        all.push(`${
          index === 0
            ? `${k}: ${l}`
            : `${l}`
        }`);
      });

      return all;
    }, [])
  );
}

function expandType (encoded: string): string[] {
  if (!encoded.startsWith('{')) {
    return [`'${rebrandTypeName(encoded)}'`];
  }

  return expandObject(JSON.parse(encoded) as ParsedDef);
}

function expandDefToString ({ lookupNameRoot, type }: TypeDef, indent: number): string {
  if (lookupNameRoot) {
    return `'${rebrandTypeName(lookupNameRoot)}'`;
  }

  const lines = expandType(type);
  let inc = 0;

  return lines.map((l, index) => {
    let r: string;

    if (l.endsWith('{')) {
      r = index === 0
        ? l
        : `${' '.padStart(indent + inc)}${l}`;
      inc += 2;
    } else {
      if (l.endsWith('},') || l.endsWith('}')) {
        inc -= 2;
      }

      r = index === 0
        ? l
        : `${' '.padStart(indent + inc)}${l}`;
    }

    return r;
  }).join('\n');
}

function getFilteredTypes (lookup: PortableRegistry, exclude: string[] = []): [PortableType, TypeDef][] {
  const named = lookup.types.filter(({ id }) => !!lookup.getTypeDef(id).lookupName);
  const names = named.map(({ id }) => lookup.getName(id));

  return named
    .filter((_, index) =>
      !names.some((n, iindex) =>
        index > iindex &&
        n === names[index]
      )
    )
    .map((p): [PortableType, TypeDef] => [p, lookup.getTypeDef(p.id)])
    .filter(([, typeDef]) => !exclude.includes(typeDef.lookupName || '<invalid>'));
}

function generateLookupDefs (registry: Registry, filtered: [PortableType, TypeDef][], destDir: string, subPath?: string): void {
  writeFile(path.join(destDir, `${subPath || 'definitions'}.ts`), (): string => {
    const all = filtered.map(([{ id, type: { params, path } }, typeDef]) => {
      const typeLookup = registry.createLookupType(id);
      const def = expandDefToString(typeDef, subPath ? 2 : 4);

      return {
        docs: [
          generateTypeDocs(registry, id, path, params),
          WITH_TYPEDEF
            ? `@typeDef ${stringify(typeDef)}`
            : null
        ].filter((d): d is string => !!d),
        type: { def, typeLookup, typeName: typeDef.lookupName ? rebrandTypeName(typeDef.lookupName) : undefined }
      };
    });
    const max = all.length - 1;

    return (subPath ? generateLookupDefsNamedTmpl : generateLookupDefsTmpl)({
      defs: all.map(({ docs, type }, i) => {
        const { def, typeLookup, typeName } = type;

        return {
          defs: [
            [typeName || typeLookup, `${def}${i !== max ? ',' : ''}`]
          ].map(([n, t]) => `${n}: ${t}`),
          docs
        };
      }),
      headerType: 'defs'
    });
  });
}

function generateLookupTypes (registry: Registry, filtered: [PortableType, TypeDef][], destDir: string, subPath?: string): void {
  const imports = {
    ...createImports(
      { '@pezkuwi/types/interfaces': defaultDefinitions },
      { types: {} }
    ),
    interfaces: []
  };
  const items = filtered
    .map(([, typeDef]) => {
      // Deep rebrand the type names (including nested sub types) before generating interfaces
      const rebranded = deepRebrandTypeDef(typeDef);

      return rebranded.lookupNameRoot && rebranded.lookupName
        ? exportInterface(rebranded.lookupIndex, rebranded.lookupName, rebranded.lookupNameRoot)
        : typeEncoders[rebranded.info](registry, imports.definitions, rebranded, imports);
    })
    .filter((t): t is string => !!t)
    .map((t) => t.replace(/\nexport /, '\n'));

  writeFile(path.join(destDir, `types${subPath ? `-${subPath}` : ''}.ts`), () => generateLookupTypesTmpl({
    headerType: 'defs',
    imports,
    items: items.map((l) =>
      l
        .split('\n')
        .map((l) => l.length ? `  ${l}` : '')
        .join('\n')
    ),
    types: [
      ...Object.keys(imports.localTypes).sort().map((packagePath): { file: string; types: string[] } => ({
        file: packagePath,
        types: Object.keys(imports.localTypes[packagePath])
      }))
    ]
  }), true);
  writeFile(path.join(destDir, 'index.ts'), () => generateLookupIndexTmpl({ headerType: 'defs' }), true);
}

function generateRegistry (_registry: Registry, filtered: [PortableType, TypeDef][], destDir: string, subPath: string): void {
  writeFile(path.join(destDir, `${subPath}.ts`), (): string => {
    const items = filtered
      .map(([, { lookupName }]) => lookupName ? rebrandTypeName(lookupName) : lookupName)
      .filter((n): n is string => !!n)
      .sort()
      .reduce((all: string[], n) => all.includes(n) ? all : all.concat(n), []);
    const imports = createImports({}, { types: {} });

    imports.lookupTypes = items.reduce((all, n) => ({ ...all, [n]: true }), {});

    return generateRegistryTmpl({
      headerType: 'defs',
      imports,
      items,
      types: []
    });
  }, true);
}

function generateLookup (destDir: string, entries: [string, HexString][]): void {
  entries.reduce<string[]>((exclude, [subPath, staticMeta]): string[] => {
    const { lookup, registry } = initMeta(staticMeta).metadata.asLatest;
    const filtered = getFilteredTypes(lookup, exclude);

    generateLookupDefs(registry, filtered, destDir, subPath);
    generateLookupTypes(registry, filtered, destDir, subPath);
    generateRegistry(registry, filtered, destDir, subPath === 'lookup' ? 'registry' : `../registry/${subPath}`);

    return exclude.concat(
      ...filtered
        .map(([, typeDef]) => typeDef.lookupName)
        .filter((n): n is string => !!n)
    );
  }, []);
}

// Generate `packages/types/src/lookup/*s`, the registry of all lookup types
export function generateDefaultLookup (destDir = 'packages/types-augment/src/lookup', staticData?: HexString): void {
  generateLookup(
    destDir,
    staticData
      ? [['lookup', staticData]]
      : [
        ['bizinikiwi', staticBizinikiwi],
        ['pezkuwi', staticPezkuwi],
        ['dicle', staticDicle],
        ['assetHubPezkuwi', staticAhPezkuwi],
        ['assetHubDicle', staticAhDicle]
      ]
  );
}

// Based on a list of types, it filters out the lookup types that are not needed.
export function ignoreUnusedLookups (usedTypes: string[], imports: TypeImports) {
  const usedStringified = usedTypes.toString();

  const [lookupKey, typeDefinitions] = Object.entries(imports.localTypes).find(([typeModule, _]) => typeModule.includes('/lookup')) || ['', {}];

  Object.keys(typeDefinitions).forEach((typeDef) => {
    if (!(usedStringified.includes(typeDef))) {
      delete (imports.localTypes[lookupKey])[typeDef];
    }
  });
}
