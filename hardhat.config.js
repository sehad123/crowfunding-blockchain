require("@nomiclabs/hardhat-waffle");
// require("dotenv").config({ path: "./.env.local" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
const privateKey = "f572e6ef096d2fa44e26e8abbce15580665773e870bd4cd80f94c77156bee462";

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    // polygon: {
    //   url: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    //   accounts: [privateKey],
    // },
    polygon: {
      url: "https://polygon-mumbai.infura.io/v3/ade15bd60cc849ed84fb17c15cd7476d",
      accounts: [privateKey],
    },
  },
};
