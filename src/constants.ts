export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 0.88;

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
    OHM_ADDRESS:                "0x74542A3cD22779439CF298AA98870768f96bA815", // OlympusERC20Token
    STAKING_ADDRESS:            "0x026eC16b79532a9cFC0A091B7CA5eC786Dba93D4", // OlympusStaking
    STAKING_HELPER_ADDRESS:     "0x8Bec607e2eC3107831Dd769ea8e9214Ca893652a", // StakingHelper
    OLD_STAKING_ADDRESS:        "0x026eC16b79532a9cFC0A091B7CA5eC786Dba93D4", // OlympusStaking
    SOHM_ADDRESS:               "0x3C47358ddBd3c363Fb45C6d865e4dF3ab5Bde037", // sOlympus
    OLD_SOHM_ADDRESS:           "0x0000000000000000000000000000000000000000", // sOlympus
    MIGRATE_ADDRESS:            "0x0000000000000000000000000000000000000000", // aOHMMigration
    DISTRIBUTOR_ADDRESS:        "0x0000000000000000000000000000000000000000", // OlympusStakingDistributor
    BONDINGCALC_ADDRESS:        "0xac2dfa38adA25553B51726AF4db8089DF5E9FCeE", // OlympusBondingCalculator
    CIRCULATING_SUPPLY_ADDRESS: "0xbacEBf56D8065376774736017BecA55a940F1f98", // OHMCirculatingSupplyContract
    TREASURY_ADDRESS:           "0x15163B81A7647a86a0F0F18F2561257C052E1bD1", // OlympusTreasury
    REDEEM_HELPER_ADDRESS:      "0x22DcC3EC9BAbE0e7c36B7b3Ee223Bd31687427A7", // RedeemHelper
    PT_TOKEN_ADDRESS:           "0x0000000000000000000000000000000000000000", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS:      "0x0000000000000000000000000000000000000000", // NEW
    PT_PRIZE_STRATEGY_ADDRESS:  "0x0000000000000000000000000000000000000000", // NEW
  },

};
