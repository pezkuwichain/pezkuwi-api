// End-to-end HEZ transfer test
import { ApiPromise, WsProvider, Keyring } from './packages/api/build/index.js';

const SENDER_SEED = 'crucial surge north silly divert throw habit fury zebra fabric tank output';
const RECEIVER = '5FbRAFqo3WPNc1msSFy1cwr3oMNCwma5e4TcJjoX5uPUUqob';
const RPC_ENDPOINT = 'wss://rpc.pezkuwichain.io';
const AMOUNT_HEZ = 0.001; // Very small amount for testing

const main = async () => {
  console.log('=== PEZKUWI HEZ TRANSFER E2E TEST ===\n');
  console.log('Connecting to', RPC_ENDPOINT);

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

  const keyring = new Keyring({ type: 'sr25519' });
  const sender = keyring.addFromUri(SENDER_SEED);

  console.log('\nSender:', sender.address);
  console.log('Receiver:', RECEIVER);

  // Get balances before
  const senderBalanceBefore = await api.query.system.account(sender.address);
  const receiverBalanceBefore = await api.query.system.account(RECEIVER);

  console.log('\n--- BEFORE TRANSFER ---');
  console.log('Sender balance:', (BigInt(senderBalanceBefore.data.free) / BigInt(1e12)).toString(), 'HEZ');
  console.log('Receiver balance:', (BigInt(receiverBalanceBefore.data.free) / BigInt(1e12)).toString(), 'HEZ');

  // Amount in planks (12 decimals)
  const amount = BigInt(Math.floor(AMOUNT_HEZ * 1e12));
  console.log('\nTransferring:', AMOUNT_HEZ, 'HEZ (', amount.toString(), 'planks)');

  // Create and send transaction
  const tx = api.tx.balances.transferKeepAlive(RECEIVER, amount);

  console.log('\nSending transaction...');

  try {
    const hash = await new Promise((resolve, reject) => {
      tx.signAndSend(sender, ({ status, events, dispatchError }) => {
        console.log('Status:', status.type);

        if (dispatchError) {
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            reject(new Error(`${decoded.section}.${decoded.name}: ${decoded.docs.join(' ')}`));
          } else {
            reject(new Error(dispatchError.toString()));
          }
          return;
        }

        if (status.isInBlock) {
          console.log('Included in block:', status.asInBlock.toHex());
        }

        if (status.isFinalized) {
          console.log('Finalized in block:', status.asFinalized.toHex());

          // Check for success event
          const success = events.find(({ event }) =>
            api.events.system.ExtrinsicSuccess.is(event)
          );

          if (success) {
            resolve(status.asFinalized.toHex());
          } else {
            reject(new Error('Transaction failed - no success event'));
          }
        }
      }).catch(reject);
    });

    console.log('\n=== TRANSFER SUCCESSFUL ===');
    console.log('Block hash:', hash);

    // Get balances after
    const senderBalanceAfter = await api.query.system.account(sender.address);
    const receiverBalanceAfter = await api.query.system.account(RECEIVER);

    console.log('\n--- AFTER TRANSFER ---');
    console.log('Sender balance:', (BigInt(senderBalanceAfter.data.free) / BigInt(1e12)).toString(), 'HEZ');
    console.log('Receiver balance:', (BigInt(receiverBalanceAfter.data.free) / BigInt(1e12)).toString(), 'HEZ');

    const receiverDiff = BigInt(receiverBalanceAfter.data.free) - BigInt(receiverBalanceBefore.data.free);
    console.log('\nReceiver balance change:', (receiverDiff / BigInt(1e12)).toString(), 'HEZ');

    if (receiverDiff === amount) {
      console.log('\n✅ TEST PASSED: Transfer completed correctly!');
    } else {
      console.log('\n⚠️  Balance change does not match expected amount');
    }

  } catch (error) {
    console.error('\n❌ TRANSFER FAILED:', error.message);
    process.exit(1);
  }

  await api.disconnect();
  console.log('\nDone!');
};

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
