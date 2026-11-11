# Pezkuwi API

`@pezkuwi/api` is the JavaScript and TypeScript library for talking to PezkuwiChain
and other Bizinikiwi-based networks. Your application loads it and connects
straight to a node's RPC endpoint: there is no server in between.

- New here? Start with [Getting started](getting-started.md).
- Looking for a class or a method? Use the search box, or browse the packages below.

## Install

```bash
npm install @pezkuwi/api
```

## Packages

| Package | What it does |
|---|---|
| `@pezkuwi/api` | `ApiPromise` and `ApiRx`, the entry points most applications use |
| `@pezkuwi/api-base` | The base class both APIs share |
| `@pezkuwi/api-derive` | Derived queries that combine several storage reads into one answer |
| `@pezkuwi/api-contract` | Deploying and calling ink! smart contracts |
| `@pezkuwi/rpc-core` | The typed JSON-RPC layer |
| `@pezkuwi/rpc-provider` | `WsProvider`, `HttpProvider` and the light-client provider |
| `@pezkuwi/types` | The runtime type registry and every chain type |
| `@pezkuwi/types-codec` | SCALE codec primitives (`Struct`, `Enum`, `Vec`, `Compact`, …) |
| `@pezkuwi/types-create` | Building types from their definitions |

Keys and signing live in `@pezkuwi/keyring`, and hashing and address helpers in
`@pezkuwi/util-crypto`. Both come from the
[pezkuwi-common](https://github.com/pezkuwichain/pezkuwi-common) repository.

## Public endpoints

| Network | WebSocket RPC |
|---|---|
| PezkuwiChain relay | `wss://rpc.pezkuwichain.io` |
| PezkuwiChain Asset Hub | `wss://asset-hub-rpc.pezkuwichain.io` |
| Zagros Asset Hub (test network) | `wss://zagros-asset-hub-rpc.pezkuwichain.io` |

## Source

The code is at [github.com/pezkuwichain/pezkuwi-api](https://github.com/pezkuwichain/pezkuwi-api).
This reference is generated from it, so what you read here is what the published
packages contain.
