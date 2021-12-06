export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 2200;

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
    OHM_ADDRESS:                "0xbfeE8D063a6e3F99Aafdfa145ccb3d9AAD27104e", // OlympusERC20Token
    STAKING_ADDRESS:            "0xD83cbD04843A380925a7B7311208611Ca80BC2E5", // OlympusStaking
    STAKING_HELPER_ADDRESS:     "0x6028359355902ba385633D7f62cBBD07BfdbedFA", // StakingHelper
    OLD_STAKING_ADDRESS:        "0xD83cbD04843A380925a7B7311208611Ca80BC2E5", // OlympusStaking
    SOHM_ADDRESS:               "0xbC479282CCA34E012753b954899Dc510D8d34043", // sOlympus
    OLD_SOHM_ADDRESS:           "0x0000000000000000000000000000000000000000", // sOlympus
    MIGRATE_ADDRESS:            "0x0000000000000000000000000000000000000000", // aOHMMigration
    DISTRIBUTOR_ADDRESS:        "0x0000000000000000000000000000000000000000", // OlympusStakingDistributor
    BONDINGCALC_ADDRESS:        "0x8dB3f1641daa777966ab4e85FD2079f938893A6E", // OlympusBondingCalculator
    CIRCULATING_SUPPLY_ADDRESS: "0x91005ec476d4CcB81eD8862C024202EC085ed585", // OHMCirculatingSupplyContract
    TREASURY_ADDRESS:           "0xf850839C4BFB111334fFD8Fa086A50f0F7a1d427", // OlympusTreasury
    REDEEM_HELPER_ADDRESS:      "0x2029f41f61BcD9067d480474a497A7d93dff474e", // RedeemHelper
    PT_TOKEN_ADDRESS:           "0x0000000000000000000000000000000000000000", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS:      "0x0000000000000000000000000000000000000000", // NEW
    PT_PRIZE_STRATEGY_ADDRESS:  "0x0000000000000000000000000000000000000000", // NEW
  },

};
