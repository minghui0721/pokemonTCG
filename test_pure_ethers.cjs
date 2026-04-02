const { ethers } = require('ethers');
const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');
async function main() {
  console.log('--- Network Check ---');
  const network = await provider.getNetwork();
  console.log('Network:', network.name, network.chainId.toString());
}
main().catch(console.error);
