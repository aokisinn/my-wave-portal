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
    // 状態変数 永続的に保存されう変数
    uint256 totalWaves;

    // 通常のClass同様最初に実行される
    constructor() {
        console.log("Here is my first smart contract!");
    }

    // totalWavesに追加する
    // public 誰でも呼べる変数
    // 他 private, internal, external
    // 関数修飾子 を指定してないのでガス代がかかる
    function wave() public {
        totalWaves += 1;
        // msg.sender
        // 呼び出したアドレス
        console.log("%s has waved!", msg.sender);
    }
    
    // View 関数修飾子
    // View 読み取りのみの関数 状態変数に対して変更がない
    // view pure関数を指定するとガス代がかからない
    // TODO pureに対しては後で調べる
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}
