const main = async () => {
    // WavePortal.solがコンパイル
    // hreのインポートは、Hardhat が Hardhat Runtime Environment（HRE）で呼び出しているので不要らしい
    // 詳細は以下　URL
    // https://hardhat.org/hardhat-runner/docs/advanced/hardhat-runtime-environment
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    // Hardhat がローカルの Ethereum ネットワークを構築
    // hardhat側が構築は一からしてくれる
    const waveContract = await waveContractFactory.deploy();
    // コントラクトのデプロイ完了
    const wavePortal = await waveContract.deployed();
  
    // コントラクトのアドレス作成
    console.log("WavePortal address: ", wavePortal.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();