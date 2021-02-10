# React MMD Viewer
## What is this ?
ブラウザ上でサーバーにアップロードせずにMMDモデルを表示し、操作する事ができるビューワーです。

## 注意
まだほとんどがテスト段階ですので、多くの問題があります。

試す場合は自己責任でお願いします。

## 目標
- インストール不要で利用可能
- モデルデータは一切サーバーに保存しない

## 問題点
- File System Access APIを利用しているため、ver.86以上のGoogle Chromeが必要です。詳細は[こちら](https://caniuse.com/?search=native%20file)
- ファイル単体を選択するのではなく、mmdファイルがあるフォルダごと選択する必要があります。

## Getting Started

 [Create React App](https://github.com/facebook/create-react-app) を使って作成しました。

 事前に [Node.js](https://nodejs.org/ja/) , [yarn](https://yarnpkg.com/) またはnpmをインストールしてください。

### Install

```bash
yarn
```
### Try

```bash
yarn start
```

実行後、ブラウザで [http://localhost:3000/react-mmd-viewer](http://localhost:3000/react-mmd-viewer) を開くと表示されます。（もしくは自動的にページが開きます。）

