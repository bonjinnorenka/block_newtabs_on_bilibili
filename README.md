# Block New Tabs on Bilibili

Bilibiliでリンクを新しいタブで開くのを防ぐブラウザ拡張機能です。

## 機能

- **Bilibili上のすべてのリンクが新しいタブで開かれるのを防止**: `target="_blank"` を持つすべてのリンクを同一タブで開くように変更
- **window.open()をインターセプト**: JavaScriptから新しいタブで開く試みもブロック
- **動的なコンテンツに対応**: MutationObserverを使用して、後から追加されるリンクにも対応

## サポート対象

このプロジェクトは以下のブラウザに対応しています：

- **Chrome** (Manifest V3)
- **Firefox** (Manifest V2)

## インストール方法

### Chrome

1. `chrome` フォルダをブラウザにドラッグ＆ドロップするか、以下の手順で行う：
   - `chrome://extensions/` にアクセス
   - 右上の「デベロッパー モード」をONにする
   - 「パッケージ化されていない拡張機能を読み込む」をクリック
   - `chrome` フォルダを選択

### Firefox

1. `about:debugging#/runtime/this-firefox` にアクセス
2. 「一時的なアドオンを読み込む」をクリック
3. `firefox/manifest.json` を選択

## 技術仕様

### 動作メカニズム

1. **リンクの書き換え**
   - ページ内のすべての `<a>` タグの `target="_blank"` 属性を削除
   - MutationObserverで新しく追加されたリンクもリアルタイムで処理

2. **window.open()のフック**
   - `window.open()` をオーバーライドして、新しいウィンドウで開く試みを同一タブで開くように変更
   - 同じURLが連続で呼ばれるのを防ぐための重複チェック機能付き

### サポート範囲

- https://www.bilibili.com/*
- https://search.bilibili.com/*
- https://space.bilibili.com/*
- https://live.bilibili.com/*
- https://bw.bilibili.com/*

## ファイル構成

```
block_newtabs_on_bilibili/
├── chrome/                    # Chrome用（Manifest V3）
│   ├── manifest.json         # Chrome拡張機能マニフェスト
│   ├── delete_target.js      # コンテンツスクリプト
│   └── icon*.png             # アイコンファイル（複数サイズ）
├── firefox/                   # Firefox用（Manifest V2）
│   ├── manifest.json         # Firefox拡張機能マニフェスト
│   └── delete_target.js      # コンテンツスクリプト
└── README.md                 # このファイル
```

## バージョン

- 現在のバージョン：1.2

## ライセンス

このプロジェクトはオープンソースです。自由に使用、修正、配布できます。
