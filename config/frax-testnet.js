// https://docs.frax.com/fraxtal/addresses/frax-tokens
const WETH = "0xfc00000000000000000000000000000000000006"; // frxETH

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "frax-testnet",
  wNativeAddress: WETH,
  v3: {
    wNativeStablePoolAddress: "0x06d962248c623e3ec0ca374a9e3816341f50a4bf",
    stableIsToken0: true,
    factoryAddress: "0xDC28090A6A694E678B821A63423a30F304fFE8bf",
    startBlock: 9831707,
    stableCoins: [
      "0xfc00000000000000000000000000000000000001", // FRAX
      "0x876ffdc5f2aa8c4927a0aea52b150e112f6ddff6", // USDT
      "0x54D2E2661c5a9381e17c89e564cbC0d456703f1b", // USDC
    ],
    whitelistAddresses: [
      WETH,
      "0xfc00000000000000000000000000000000000001", // FRAX
      "0xfc00000000000000000000000000000000000002", // FXS
      "0xfc00000000000000000000000000000000000003", // FPI
      "0xfc00000000000000000000000000000000000004", // FPIS
      "0xfc00000000000000000000000000000000000005", // sfrxETH
      "0x876ffdc5f2aa8c4927a0aea52b150e112f6ddff6", // USDT
      "0x54D2E2661c5a9381e17c89e564cbC0d456703f1b", // USDC
    ],
    nonfungiblePositionManagerAddress: "0x9126c64a593EB84db0e9af7c5cCecE84cD7FEc48",
    nonfungiblePositionManagerStartBlock: 8806380,
    minETHLocked: 0,
  },
};
