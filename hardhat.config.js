require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/iS5yUzA8eXdt6nJGwpkDcOEFe9fG7Khu",
      accounts: [`0x27eca94de8f4aec6eaa4befb8713459171169f5463a557a2bc7db13048c7b482`],
    },
  },
};
