import type { HardhatUserConfig } from "hardhat/types";
import { task } from "hardhat/config";

import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "dotenv/config";

import env from "./scripts/deploy/src/load-env";

task("accounts", "Prints the list of accounts", async (_args, hre) => {
  const accounts = await hre.ethers.getSigners();
  accounts.forEach(async (account) => console.info(account.address));
});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
      hardfork: "berlin", // Berlin is used (temporarily) to avoid issues with coverage
      mining: {
        auto: true,
        interval: 50000,
      },
      gasPrice: "auto",
    },
    gusandbox: {
      url: `https://sandbox1.japanopenchain.org:8545/`,
      accounts: [env.DEPLOYMENT_ACCOUNT_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      gusandbox: "gusandbox-api-key",
    },
    customChains: [
      {
        network: "gusandbox",
        chainId: 99999,
        urls: {
          apiURL: "https://sandbox1.japanopenchain.org/api",
          browserURL: "https://sandbox1.japanopenchain.org/",
        },
      },
    ],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: { optimizer: { enabled: true, runs: 888888 } },
      },
      {
        version: "0.4.18",
        settings: { optimizer: { enabled: true, runs: 999 } },
      },
    ],
  },
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  abiExporter: {
    path: "./abis",
    runOnCompile: true,
    clear: true,
    flat: true,
    pretty: false,
    except: ["test*", "@openzeppelin*", "uniswap*"],
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    excludeContracts: ["test*", "@openzeppelin*"],
  },
};

export default config;
