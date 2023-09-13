import { hexToBytes } from '../abstract/utils.js';
import { run, mark } from 'micro-bmark';

run(async () => {
  const hex32 = '0123456789abcdef'.repeat(4);
  const hex256 = hex32.repeat(8);
  await mark('hexToBytes 32b', 5000000, () => hexToBytes(hex32));
  await mark('hexToBytes 256b', 500000, () => hexToBytes(hex256));
});
