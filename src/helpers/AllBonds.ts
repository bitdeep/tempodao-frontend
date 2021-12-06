import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OHM-DAI.svg";
import { ReactComponent as OhmEthImg } from "src/assets/tokens/OHM-WETH.svg";
import { ReactComponent as wETHImg } from "src/assets/tokens/wETH.svg";
import { abi as BondOhmDaiContract } from "src/abi/bonds/OhmDaiContract.json";
import { abi as BondOhmEthContract } from "src/abi/bonds/OhmEthContract.json";
import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json";
import { abi as ReserveOhmEthContract } from "src/abi/reserves/OhmEth.json";
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";
import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { getBondCalculator } from "src/helpers/BondCalculator";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const dai = new StableBond({
  name: "dai",
  displayName: "MIM",
  bondToken: "MIM",
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x732617A7f411a084dE5724A691843Fccd732a407", // OlympusBondDepository
      reserveAddress: "0x130966628846bfd36ff31a822705796e8cb8c18d", // MIM or DAI
    },
    [NetworkID.Testnet]: {
      bondAddress:    "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
});

export const tst = new StableBond({
  name: "Tv1",
  displayName: "Tv1",
  bondToken: "Tv1",
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: false },
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x900CAEa2159368237c82c1C684D152A2042dF8d1", // OlympusBondDepository
      reserveAddress: "0x4145FBe0ED36A9d2D7a055c31C1C897602Bbb568", // OHM
    },
    [NetworkID.Testnet]: {
      bondAddress:    "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },

});

export const eth = new CustomBond({
  name: "eth",
  displayName: "wETH",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "wETH",
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: true },
  bondIconSvg: wETHImg,
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x0000000000000000000000000000000000000000",
      reserveAddress: "0x0000000000000000000000000000000000000000",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice = await ethBondContract.assetPrice();
    ethPrice = ethPrice / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = ethAmount / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});

export const ohm_dai = new LPBond({
  name: "ohm_dai_lp",
  displayName: "TEMPO-MIM LP",
  bondToken: "DAI",
  isAvailable: { [NetworkID.Mainnet]: true, [NetworkID.Testnet]: false },
  bondIconSvg: OhmDaiImg,
  bondContractABI: BondOhmDaiContract,
  reserveContract: ReserveOhmDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x130966628846bfd36ff31a822705796e8cb8c18d",
      reserveAddress: "0x130966628846bfd36ff31a822705796e8cb8c18d",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x383518188c0c6d7730d91b2c03a03c837814a899/0x130966628846bfd36ff31a822705796e8cb8c18d",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
// export const allBonds = [dai, ohm_dai, ohm_weth];
export const allBonds = [dai, tst];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
