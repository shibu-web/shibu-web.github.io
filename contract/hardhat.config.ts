import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-verify";

import dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
  throw new Error("PRIVATE_KEY is not set");
}

const polygonscanApiKey = process.env.POLYGONSCAN_API_KEY;
if (!polygonscanApiKey) {
  throw new Error("POLYGONSCAN_API_KEY is not set");
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [privateKey],
      chainId: 80002,
    },
  },
  etherscan: {
    apiKey: {
      polygon: polygonscanApiKey,
      amoy: polygonscanApiKey,
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com",
        },
      },
    ],
  }
};

export default config;
