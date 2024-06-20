// https://docs.frax.com/fraxtal/addresses/frax-tokens
const WETH = "0xfc00000000000000000000000000000000000006"; // frxETH

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "frax-testnet",
  wNativeAddress: WETH,
  v3: {
    wNativeStablePoolAddress: "",
    stableIsToken0: false,
    factoryAddress: "0x2fB36a4B80baC9803E42a2e312fbE527A01156e9",
    startBlock: 9453538,
    stableCoins: [
      "0xfc00000000000000000000000000000000000001", // FRAX
    ],
    whitelistAddresses: [
      WETH,
      "0xfc00000000000000000000000000000000000001", // FRAX
      "0xfc00000000000000000000000000000000000002", // FXS
      "0xfc00000000000000000000000000000000000003", // FPI
      "0xfc00000000000000000000000000000000000004", // FPIS
      "0xfc00000000000000000000000000000000000005", // sfrxETH
    ],
    nonfungiblePositionManagerAddress: "0xc81673F4aeE286Bd6aeb8620F0f4bca763508E8C",
    nonfungiblePositionManagerStartBlock: 9453538,
    minETHLocked: 0,
  }
};
