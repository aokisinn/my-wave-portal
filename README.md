# 学習メモ
## コマンド
### 1.コンパイル
```
npx hardhat compile
```

### 2.UnitTest 実行
```
npx hardhat test
```

### 3. ローカルデプロイ
```
# localNode　立ち上げ
npx hardhat node
# localのNodeに対してデプロイ
npx hardhat run scripts/deploy.js --network localhost
```

## 開発フロー
1. コントラクト作成
2. ローカル環境で、ブロックチェーン上デプロイ
3. 動作確認 (console.logなどで)
    - 実行コマンド
        - npx hardhat run scripts/run.js
        ※ 実行後 作成したネットワークは自動で削除
4. ...etc

## ネットワークを一時的に永続させる
- npx hardhat node
Hardhat から 20 個のアカウント提供(1000ETH)

## scripts
- deploy.js
    - 本番用のスクリプト
- run.js
    - 開発環境用のスクリプト