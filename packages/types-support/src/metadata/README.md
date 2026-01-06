## Extraction (Current)

For Bizinikiwi -

Clone the [pezkuwi-sdk](https://github.com/pezkuwichain/pezkuwi-sdk) repository and from the ROOT run:

`cargo build --release && ./target/release/bizinikiwi-node --dev`

`--dev` sets the flag `--tmp` automatically so there is no need for purging the dev db.

For Pezkuwi & Zagros -

Clone the [pezkuwi-fellows/runtimes](https://github.com/pezkuwi-fellows/runtimes/tree/main) repository and from the ROOT run:

```bash 
$ unset SKIP_WASM_BUILD
$ cargo build --release -p chain-spec-generator --features fast-runtime
$ ./target/release/chain-spec-generator pezkuwi-dev > pezkuwiDevChainSpec.json
```

- For zagros just change the `pezkuwiDevChainSpec.json` to `zagrosDevChainSpec.json`.
- When you have the `pezkuwi-sdk` cloned, make sure to copy the chainspec from the `runtimes` repository to `pezkuwi-sdk` repository.

Clone the [pezkuwi-sdk](https://github.com/pezkuwichain/pezkuwi-sdk) repository, checkout the most recent releases tag and from the ROOT run:

```bash
$ cargo build --release --bin pezkuwi-prepare-worker --features fast-runtime
$ cargo build --release --bin pezkuwi-execute-worker --features fast-runtime
$ cargo build --release --bin pezkuwi --features fast-runtime
$ cp ../runtimes/pezkuwiDevChainSpec.json .
$ ./target/release/pezkuwi --chain pezkuwiDevChainSpec.json
```

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{zagros, pezkuwi, bizinikiwi}-hex.json`

To retrieve the rpc methods -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "rpc_methods", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{zagros, pezkuwi, bizinikiwi}-rpc.ts`

To retrieve the runtime versions -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getRuntimeVersion", "params":[]}' http://localhost:9944`

- Add it to the relevant folders e.g. `v14/{zagros, pezkuwi, bizinikiwi}-ver.ts`

## NOTE: 

1. This all works for manual updating, but for an easier process run from root for each respective chain: `node ./scripts/metadata-get.mjs`.

2. If the chain is already live, running it locally is unnecessary — update the metadata & types using `node ./scripts/metadata-get.mjs --url <ws_chain_url>`.

3. Run `yarn test:one packages/types/src/metadata/v14` for Metadata checks

## Caveat

Occasionally, running the tests may result in a failure due to outdated metadata. The error message might look like this:

```bash
    /api/packages/types/src/metadata/v14/Metadata.spec.ts

    undefined / undefined
```

### How to Fix

1. Navigate to the file mentioned in the error.
2. Paste the line `writeJson(json, version, type, 'json');` into the `try` block.
3. Rerun the tests — they should pass now.
4. **Important:** After verifying that the tests pass, revert your changes and run the tests again to ensure everything still works as expected.


## extraction (Legacy)

For Bizinikiwi & Pezkuwi (dev chains) -

`cargo run --release -- purge-chain -y --dev && cargo run --release -- --dev`

For Zagros -

`cargo run --release -- purge-chain -y --chain zagros-dev && cargo run --release -- --chain zagros-dev`

To retrieve the metadata -

`curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9933`

- Add it to the relevant folders e.g. `v14/{zagros, pezkuwi, bizinikiwi}-hex.json`
- Run `yarn build:interfaces` to re-generate all TS
- Run `yarn test:one packages/types/src/metadata/v14` for Metadata checks
