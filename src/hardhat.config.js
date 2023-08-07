/** @format */

require('@chainlink/env-enc').config();
require('@nomicfoundation/hardhat-toolbox');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'polygonMumbai',
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
    },
    localhost: {},
    polygonMumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/b08a585726a34d7aa81779b170af0fcc',
      accounts: [
        '320c6ca026d3e4338a0569dedfa1c4faec7465235b32810c4e9f80f9969a296d',
      ],
      saveDeployments: true,
    },
    // ethereumSepolia: {
    //   url: process.env.ETHEREUM_SEPOLIA_RPC_URL || "",
    //   accounts: [process.env.PRIVATE_KEY],
    //   saveDeployments: true,
    // },
    // avalancheFuji: {
    //   url: process.env.AVALANCHE_FUJI_RPC_URL || "",
    //   accounts: [process.env.PRIVATE_KEY],
    //   saveDeployments: true,
    // },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.7',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1_000,
          },
        },
      },
      {
        version: '0.7.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1_000,
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1_000,
          },
        },
      },
      {
        version: '0.4.24',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1_000,
          },
        },
      },
    ],
  },
};
