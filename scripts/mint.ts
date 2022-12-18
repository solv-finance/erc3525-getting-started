import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const GettingStarted = await ethers.getContractFactory("ERC3525GettingStarted");
  const gettingStarted = await GettingStarted.attach('0xEDB9FA6e9ECc355241Ef0Ea63f4C8fdd6287c150');
  const tx = await gettingStarted.mint(owner.address, 3525, 20220905);
  await tx.wait();
  const uri = await gettingStarted.tokenURI(1);
  console.log(uri);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
