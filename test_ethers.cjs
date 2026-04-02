const { ethers } = require('hardhat');
async function main() {
  console.log('--- Network Check ---');
  const network = await ethers.provider.getNetwork();
  console.log('Network:', network.name, network.chainId.toString());
}
main().catch(console.error);
