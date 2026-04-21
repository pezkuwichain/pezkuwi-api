// Test: Generate extrinsic hex without sending
import { ApiPromise, WsProvider, Keyring } from './packages/api/build/index.js';

const SENDER_SEED = 'crucial surge north silly divert throw habit fury zebra fabric tank output';
const RECEIVER = '5FbRAFqo3WPNc1msSFy1cwr3oMNCwma5e4TcJjoX5uPUUqob';
const RPC_ENDPOINT = 'wss://rpc.pezkuwichain.io';

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

  // Setup keyring and sender
  const keyring = new Keyring({ type: 'sr25519' });
  const sender = keyring.addFromUri(SENDER_SEED);

  console.log('\nSender address:', sender.address);
  console.log('Sender publicKey:', Buffer.from(sender.publicKey).toString('hex'));
  console.log('Receiver address:', RECEIVER);

  // 0.01 HEZ = 0.01 * 10^12 (12 decimals)
  const amount = BigInt(Math.floor(0.01 * 1e12));
  console.log('\nAmount in planks:', amount.toString());

  // Get current nonce
  const nonce = await api.rpc.system.accountNextIndex(sender.address);
  console.log('Current nonce:', nonce.toString());

  // Create transaction
  const tx = api.tx.balances.transferAllowDeath(RECEIVER, amount);

  // Sign the transaction
  const signedTx = await tx.signAsync(sender, { nonce });

  // Get the hex
  const hex = signedTx.toHex();
  console.log('\n=== SIGNED EXTRINSIC HEX ===');
  console.log(hex);
  console.log('\n=== HEX LENGTH ===');
  console.log(hex.length, 'chars =', (hex.length - 2) / 2, 'bytes');

  // Parse the extrinsic structure
  console.log('\n=== EXTRINSIC BREAKDOWN ===');
  const bytes = hex.slice(2); // remove 0x
  let pos = 0;

  // Length (compact encoded)
  console.log('First bytes:', bytes.slice(0, 10));

  await api.disconnect();
  console.log('\nDone!');
};

main().catch((err) => {
  console.error('Error:', err.message || err);
  process.exit(1);
});
