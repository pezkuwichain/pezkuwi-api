// Test: 10 HEZ transfer using @pezkuwi/api
import { ApiPromise, WsProvider, Keyring } from './packages/api/build/index.js';

const SENDER_SEED = 'crucial surge north silly divert throw habit fury zebra fabric tank output';
const RECEIVER = '5D26fJAsbFnaarz85Kv51Eau52nsTBs3L4sYQDbLMtWHhuLU';
const RPC_ENDPOINT = 'ws://62.146.235.186:9944'; // VPS2

const main = async () => {
  console.log('Connecting to PezkuwiChain Mainnet...');

  const provider = new WsProvider(RPC_ENDPOINT);
  const api = await ApiPromise.create({
    provider,
    signedExtensions: {
      AuthorizeCall: {
        extrinsic: {},
        payload: {}
      }
    }
  });

  console.log('Connected! Chain:', (await api.rpc.system.chain()).toString());
  console.log('Block:', (await api.rpc.chain.getHeader()).number.toString());

  // Setup keyring and sender
  const keyring = new Keyring({ type: 'sr25519' });
  const sender = keyring.addFromUri(SENDER_SEED);

  console.log('\nSender address:', sender.address);
  console.log('Receiver address:', RECEIVER);

  // Check sender balance before
  const balanceBefore = await api.query.balances.account(sender.address);
  console.log('\nSender balance before:', (BigInt(balanceBefore.free.toString()) / 10n**18n).toString(), 'HEZ');

  // 10 HEZ = 10 * 10^18 TYR (smallest unit)
  const amount = 10n * 10n**18n;
  console.log('\nTransferring 10 HEZ...');

  // Create and send transaction
  const tx = api.tx.balances.transferAllowDeath(RECEIVER, amount);

  const hash = await new Promise((resolve, reject) => {
    tx.signAndSend(sender, ({ status, dispatchError }) => {
      console.log('Status:', status.type);

      if (status.isInBlock) {
        console.log('Included in block:', status.asInBlock.toHex());
      }

      if (status.isFinalized) {
        if (dispatchError) {
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            reject(new Error(`${decoded.section}.${decoded.name}: ${decoded.docs.join(' ')}`));
          } else {
            reject(new Error(dispatchError.toString()));
          }
        } else {
          console.log('Finalized in block:', status.asFinalized.toHex());
          resolve(status.asFinalized.toHex());
        }
      }
    }).catch(reject);
  });

  // Check balances after
  const senderBalanceAfter = await api.query.balances.account(sender.address);
  const receiverBalanceAfter = await api.query.balances.account(RECEIVER);

  console.log('\n--- RESULT ---');
  console.log('Transaction hash:', hash);
  console.log('Sender balance after:', (BigInt(senderBalanceAfter.free.toString()) / 10n**18n).toString(), 'HEZ');
  console.log('Receiver balance after:', (BigInt(receiverBalanceAfter.free.toString()) / 10n**18n).toString(), 'HEZ');

  await api.disconnect();
  console.log('\nTest completed successfully!');
};

main().catch((err) => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
