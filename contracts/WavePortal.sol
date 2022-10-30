// ライセンスに関する記述
// WavePortal.sol
// SPDX-License-Identifier: MIT

// Solidity　コンパイラのVer
// コンパイラのバージョンが hardhat.config.js で同じである必要があり
pragma solidity ^0.8.17;

// Hardhat の console.sol 
// デバッグで使用
// https://hardhat.org/tutorial/debugging-with-hardhat-network
import "hardhat/console.sol";

contract WavePortal {
    // 通常のClass同様最初に実行される
    constructor() {
        console.log("Here is my first smart contract!");
    }
}
