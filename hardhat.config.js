// // require("@nomicfoundation/hardhat-toolbox");

// // /** @type import('hardhat/config').HardhatUserConfig */
// // module.exports = {
// //   solidity: "0.8.28",
// // };
// // filepath: /Users/princekhandelwal/Documents/productathon-2/backend/hardhat.config.js
// require("@nomiclabs/hardhat-waffle");
// require("dotenv").config();

// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     Sepolia: {
//       url: process.env.MUMBAI_RPC_URL,
//       accounts: [`0x${process.env.PRIVATE_KEY}`],
//     },
//   },
// };


require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.MUMBAI_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};