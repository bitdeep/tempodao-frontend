export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 150;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 2;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  43114: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  43114: {
    DAI_ADDRESS:                "0x130966628846bfd36ff31a822705796e8cb8c18d", // MIM
    OHM_ADDRESS:                "0x09E1a86B82fd2F2F8a5CaFC2bb7a744Ac66dD2A7", // OlympusERC20Token
    STAKING_ADDRESS:            "0xDbb14F7e2eB4cab0acf5269785f6bE88b964eE14", // OlympusStaking
    STAKING_HELPER_ADDRESS:     "0xcA517a49952fC9d1671Dc146Ad39764629a4B6EA", // StakingHelper
    OLD_STAKING_ADDRESS:        "0xDbb14F7e2eB4cab0acf5269785f6bE88b964eE14", // OlympusStaking
    SOHM_ADDRESS:               "0xA128416E9723EBDF33d06e78B96bc7b6A056e10d", // sOlympus
    OLD_SOHM_ADDRESS:           "0x0000000000000000000000000000000000000000", // sOlympus
    MIGRATE_ADDRESS:            "0x0000000000000000000000000000000000000000", // aOHMMigration
    DISTRIBUTOR_ADDRESS:        "0x0000000000000000000000000000000000000000", // OlympusStakingDistributor
    BONDINGCALC_ADDRESS:        "0x806d21603545f283897e0a1206DF8Da606680F12", // OlympusBondingCalculator
    CIRCULATING_SUPPLY_ADDRESS: "0xbaFD71Da94f9bf60a30c1C40b6CAD28F049183E6", // OHMCirculatingSupplyContract
    TREASURY_ADDRESS:           "0xc75eFb854b70725242D8219AE060307dc1332036", // OlympusTreasury
    REDEEM_HELPER_ADDRESS:      "0x49f809fD93FAe3Bf695F3DDB7A15676Cd9d93bE2", // RedeemHelper
    PT_TOKEN_ADDRESS:           "0x0000000000000000000000000000000000000000", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS:      "0x0000000000000000000000000000000000000000", // NEW
    PT_PRIZE_STRATEGY_ADDRESS:  "0x0000000000000000000000000000000000000000", // NEW
  },

};
