[MIKUEC]:https://mikuec.com/2020/

# [NIKUEC Converter](https://chrome.google.com/webstore/detail/nikuec%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%BF%E3%83%BC/gjbgkgkildonmlkggcnenebkeigddkpf)
NIKUEC Converter is a chrome extension to change a story in a website from [MIKUEC] to NIKUEC with converting by using regular expression.

It is optimized for Japanese texts.

## MIKUEC
MIKUEC is a fan-made Miku (and other vocaloid) live event by "Virtual Live Lab", The University of Electro-Communications Official Circle. This year, we held the live in virtual world to avoid a risk of COVID-19. The detailed English introduction about [MIKUEC2020][MIKUEC] is in [VocaSphere](https://vocasphere.net/2020/11/miku-ec-fan-made-livestream-announced-for-this-month/). 

## NIKUEC?
NIKUEC is a joke at the live. "Niku" means a meat in Japanese and its spell and sound are like MIKU. So we had a barbecue at the on-stage banter. 

**NIKUEC is a fan-made Niku live event!!!**

## How to Use
1. Add the extension from [NIKUECコンバーター](https://chrome.google.com/webstore/detail/nikuec%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%BF%E3%83%BC/gjbgkgkildonmlkggcnenebkeigddkpf)
1. Visit some websites such as (https://mikuec.com/2020/)

# NIKUECコンバーター

任意のページの「[MIKUEC]」についての話を「NIKUEC」の話にしてしまうChrome拡張機能です．

![NIKUEC](NIKUEC.png)

## 目的

11/21に開催された[MIKUEC2020][MIKUEC](ファンメイドボカロライブ)においてMCのネタとして登場したパワーワード，それが**NIKUEC**です．ちなみに初代代表の[渾身のネタ](https://twitter.com/yuzu_movie_39/status/1148244704531628033?s=20)らしいです．

ともかく，このVLLの一大焼き肉イベントである**NIKUEC**で一大ライブイベントMIKUECを侵食してみたかったというのが動機であり，目的です．

## 使い方
Chromeウェブストアで「NIKUEC」と検索，または[NIKUECコンバーター](https://chrome.google.com/webstore/detail/nikuec%E3%82%B3%E3%83%B3%E3%83%90%E3%83%BC%E3%82%BF%E3%83%BC/gjbgkgkildonmlkggcnenebkeigddkpf)からChromeに追加して，"MIKUEC"等と書いてあるサイト(https://mikuec.com/2020/ とか)を開いてみてください．これで[冒頭の画像](NIKUEC.png)のようになります．ちなみに比較するとこんな感じです．

![比較](https://user-images.githubusercontent.com/49985092/99900779-00628b80-2cf5-11eb-8b5b-d9a878cd0dd5.png)

以下はストア公開前の方法です．ただ不便なだけですが，一応これでもできます．

1. `NIKUEConverter`フォルダを適当にダウンロード

1. Chrome拡張機能のページ(chrome://extensions/)を開く

1. 右上のデベロッパーモードのトグルをオンにする

![デベロッパーモード](https://user-images.githubusercontent.com/49985092/99900568-8a115980-2cf3-11eb-8390-b760df9d72e4.png)

4. 左上の「パッケージ化されていない拡張機能を読み込む」からNIKUEConverterフォルダを選択して読み込む

## 仕組み

正規表現で

+ MIKUEC → NIKUEC (小文字も同様)
+ みくえっく → にくえっく
+ ライブ → 焼き肉

と置き換えてるだけで，ほとんど参考サイトのコピペみたいなものです．

これだけで意外と焼き肉の話してる雰囲気になりました．

## 既知の問題

めっちゃMIKUECが良かったからぶち壊し感が半端ないという問題が(ステマ)

次回は(も)ぜひ来てね！！！(ダイマ)

#### 既知の問題

+ TwitterとTweetDeckで有効にならなくなったりする

~~たいていは再読み込みで回復せず，一旦ウィンドウごと閉じないとだめっぽいです．~~

現状1つのタブごとに1回しか置換をしないようなので，下にスクロールしていってからロードされる文章には適用されないことになります．~~拡張機能の管理から再読み込みをしてください．~~

一旦オフにしてから再読み込みを祈ってください．

![image](https://user-images.githubusercontent.com/49985092/102385754-926a6500-4011-11eb-8428-c6ee8aa1bc1b.png)


+ 編集してる文字も書き換えられる

このREADME作ってるときにも置換が動作したので，気をつけてください．不安な場合はアクセスの許可を「拡張機能をクリックしたとき」にしておくといいと思います．

+ Chrome拡張機能のManifest Ver.3 は未対応です


## UPDATE

+ 2020/12/17 Chromeウェブストアで公開されたことを確認

## 参考

+ [Chrome拡張の作り方 (超概要)](https://qiita.com/RyBB/items/32b2a7b879f21b3edefc#%E3%82%B3%E3%83%BC%E3%83%89-1)
+ [Chrome 拡張機能を作ろう実践編](http://www2.kobe-u.ac.jp/~tnishida/programming/ChromeExtension-02.html#regexp)

