import { ethers } from "hardhat";
import env from "./load-env";

export default async function deployExecutionStrategy(): Promise<{
  strategyAnyItemFromCollectionForFixedPrice: string;
  strategyAnyItemInASetForFixedPrice: string;
  strategyDutchAuction: string;
  strategyPrivateSale: string;
  strategyStandardSaleForFixedPrice: string;
  strategyAnyItemFromCollectionForFixedPriceV1B: string;
  strategyStandardSaleForFixedPriceV1B: string;
}> {
  // 1. StrategyAnyItemFromCollectionForFixedPrice
  let strategyAnyItemFromCollectionForFixedPrice =
    env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_ADDRESS;

  if (!strategyAnyItemFromCollectionForFixedPrice) {
    console.log("\nDeploy strategyAnyItemFromCollectionForFixedPrice with following parameters:");
    console.log(
      `STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_PROTOCOL_FEE: ${env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_PROTOCOL_FEE}`
    );
    const StrategyAnyItemFromCollectionForFixedPrice = await ethers.getContractFactory(
      "StrategyAnyItemFromCollectionForFixedPrice"
    );
    const strategyAnyItemFromCollectionForFixedPrice_ = await StrategyAnyItemFromCollectionForFixedPrice.deploy(
      env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_PROTOCOL_FEE
    );
    await strategyAnyItemFromCollectionForFixedPrice_.deployed();

    strategyAnyItemFromCollectionForFixedPrice = strategyAnyItemFromCollectionForFixedPrice_.address;
    console.log("StrategyAnyItemFromCollectionForFixedPrice deployed to:", strategyAnyItemFromCollectionForFixedPrice);
  } else {
    console.log(
      "Using exist StrategyAnyItemFromCollectionForFixedPriceTH:",
      strategyAnyItemFromCollectionForFixedPrice
    );
  }

  // 2. strategyAnyItemInASetForFixedPrice
  let strategyAnyItemInASetForFixedPrice =
    env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS;

  if (!strategyAnyItemInASetForFixedPrice) {
    console.log("\nDeploy StrategyAnyItemInASetForFixedPrice with following parameters:");
    console.log(
      `STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS_PROTOCOL_FEE: ${env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS_PROTOCOL_FEE}`
    );
    const StrategyAnyItemInASetForFixedPrice = await ethers.getContractFactory("StrategyAnyItemInASetForFixedPrice");
    const strategyAnyItemInASetForFixedPrice_ = await StrategyAnyItemInASetForFixedPrice.deploy(
      env.STRATEGY_ANY_ITEM_IN_A_SET_FOR_FIXED_PRICE_ADDRESS_PROTOCOL_FEE
    );
    await strategyAnyItemInASetForFixedPrice_.deployed();

    strategyAnyItemInASetForFixedPrice = strategyAnyItemInASetForFixedPrice_.address;
    console.log("StrategyAnyItemInASetForFixedPrice deployed to:", strategyAnyItemInASetForFixedPrice);
  } else {
    console.log("Using exist StrategyAnyItemInASetForFixedPrice:", strategyAnyItemInASetForFixedPrice);
  }

  // 3.StrategyDutchAuction
  let strategyDutchAuction =
    env.STRATEGY_DUTCH_AUCTION_ADDRESS === false ? ethers.constants.AddressZero : env.STRATEGY_DUTCH_AUCTION_ADDRESS;

  if (!strategyDutchAuction) {
    console.log("\nDeploy StrategyDutchAuction with following parameters:");
    console.log(`
      STRATEGY_DUTCH_AUCTION_MINIMUM_LENGTH_IN_SECONDS: ${env.STRATEGY_DUTCH_AUCTION_MINIMUM_LENGTH_IN_SECONDS},
      STRATEGY_DUTCH_AUCTION_PROTOCOL_FEE: ${env.STRATEGY_DUTCH_AUCTION_PROTOCOL_FEE}
    `);
    const StrategyDutchAuction = await ethers.getContractFactory("StrategyDutchAuction");
    const strategyDutchAuction_ = await StrategyDutchAuction.deploy(
      env.STRATEGY_DUTCH_AUCTION_PROTOCOL_FEE,
      env.STRATEGY_DUTCH_AUCTION_MINIMUM_LENGTH_IN_SECONDS
    );
    await strategyDutchAuction_.deployed();

    strategyDutchAuction = strategyDutchAuction_.address;
    console.log("StrategyDutchAuction deployed to:", strategyDutchAuction);
  } else {
    console.log("Using exist StrategyDutchAuction:", strategyDutchAuction);
  }

  // 4.StrategyPrivateSale
  let strategyPrivateSale =
    env.STRATEGY_PRIVATE_SALE_ADDRESS === false ? ethers.constants.AddressZero : env.STRATEGY_PRIVATE_SALE_ADDRESS;

  if (!strategyPrivateSale) {
    console.log("\nDeploy StrategyPrivateSale with following parameters:");
    console.log(`
      STRATEGY_PRIVATE_SALE_PROTOCOL_FEE: ${env.STRATEGY_PRIVATE_SALE_PROTOCOL_FEE}
    `);
    const StrategyPrivateSale = await ethers.getContractFactory("StrategyPrivateSale");
    const strategyPrivateSale_ = await StrategyPrivateSale.deploy(env.STRATEGY_PRIVATE_SALE_PROTOCOL_FEE);
    await strategyPrivateSale_.deployed();

    strategyPrivateSale = strategyPrivateSale_.address;
    console.log("StrategyPrivateSale deployed to:", strategyPrivateSale);
  } else {
    console.log("Using exist StrategyPrivateSale:", strategyPrivateSale);
  }

  // 5.StrategyStandardSaleForFixedPrice
  let strategyStandardSaleForFixedPrice =
    env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_ADDRESS;

  if (!strategyStandardSaleForFixedPrice) {
    console.log("\nDeploy StrategyStandardSaleForFixedPrice with following parameters:");
    console.log(`
      STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_PROTOCOL_FEE: ${env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_PROTOCOL_FEE}
    `);
    const StrategyStandardSaleForFixedPrice = await ethers.getContractFactory("StrategyStandardSaleForFixedPrice");
    const strategyStandardSaleForFixedPrice_ = await StrategyStandardSaleForFixedPrice.deploy(
      env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_PROTOCOL_FEE
    );
    await strategyStandardSaleForFixedPrice_.deployed();

    strategyStandardSaleForFixedPrice = strategyStandardSaleForFixedPrice_.address;
    console.log("StrategyStandardSaleForFixedPrice deployed to:", strategyStandardSaleForFixedPrice);
  } else {
    console.log("Using exist StrategyStandardSaleForFixedPrice:", strategyStandardSaleForFixedPrice);
  }

  // 6.StrategyStandardSaleForFixedPrice
  let strategyAnyItemFromCollectionForFixedPriceV1B =
    env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS;

  if (!strategyAnyItemFromCollectionForFixedPriceV1B) {
    console.log("\nDeploy StrategyAnyItemFromCollectionForFixedPriceV1B with following parameters:");
    console.log(`
      STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS: ${env.STRATEGY_ANY_ITEM_FROM_COLLECTION_FOR_FIXED_PRICE_V1B_ADDRESS}
    `);
    const StrategyAnyItemFromCollectionForFixedPriceV1B = await ethers.getContractFactory(
      "StrategyAnyItemFromCollectionForFixedPriceV1B"
    );
    const strategyAnyItemFromCollectionForFixedPriceV1B_ = await StrategyAnyItemFromCollectionForFixedPriceV1B.deploy();
    await strategyAnyItemFromCollectionForFixedPriceV1B_.deployed();

    strategyAnyItemFromCollectionForFixedPriceV1B = strategyAnyItemFromCollectionForFixedPriceV1B_.address;
    console.log(
      "StrategyAnyItemFromCollectionForFixedPriceV1B deployed to:",
      strategyAnyItemFromCollectionForFixedPriceV1B
    );
  } else {
    console.log(
      "Using exist StrategyAnyItemFromCollectionForFixedPriceV1B:",
      strategyAnyItemFromCollectionForFixedPriceV1B
    );
  }

  // 7.StrategyStandardSaleForFixedPriceV1B
  let strategyStandardSaleForFixedPriceV1B =
    env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS === false
      ? ethers.constants.AddressZero
      : env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS;

  if (!strategyStandardSaleForFixedPriceV1B) {
    console.log("\nDeploy StrategyStandardSaleForFixedPriceV1B with following parameters:");
    console.log(`
      STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS: ${env.STRATEGY_STANDARD_SALE_FOR_FIXED_PRICE_V1B_ADDRESS}
    `);
    const StrategyStandardSaleForFixedPriceV1B = await ethers.getContractFactory(
      "StrategyStandardSaleForFixedPriceV1B"
    );
    const strategyStandardSaleForFixedPriceV1B_ = await StrategyStandardSaleForFixedPriceV1B.deploy();
    await strategyStandardSaleForFixedPriceV1B_.deployed();

    strategyStandardSaleForFixedPriceV1B = strategyStandardSaleForFixedPriceV1B_.address;
    console.log("StrategyStandardSaleForFixedPriceV1B deployed to:", strategyStandardSaleForFixedPriceV1B);
  } else {
    console.log("Using exist StrategyStandardSaleForFixedPriceV1B:", strategyStandardSaleForFixedPriceV1B);
  }

  return {
    strategyAnyItemFromCollectionForFixedPrice,
    strategyAnyItemInASetForFixedPrice,
    strategyDutchAuction,
    strategyPrivateSale,
    strategyStandardSaleForFixedPrice,
    strategyAnyItemFromCollectionForFixedPriceV1B,
    strategyStandardSaleForFixedPriceV1B,
  };
}
