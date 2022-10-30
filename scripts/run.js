const main = async () => {
    // Hardhat が提供する任意のアドレスを返す関数
    // owner : デプロイするユーザー
    // randomPerson : ランダムなユーザーのウォレットアドレス 
    // ユーザーを増やしたい場合は以下の書き方
    // const [owner, randomPerson1, randomPerson2] = await hre.ethers.getSigners();
    const [owner, randomPerson] = await hre.ethers.getSigners();

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
    console.log("Contract deployed to:", wavePortal.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    // 別ユーザーがwaveを叩く
    // connectにアドレスを渡すとそのユーザーとしてコントラクトの関数を呼び出せる
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

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