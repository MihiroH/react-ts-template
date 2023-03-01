# styles

汎用的なスタイルや設定を置く場所。  
各ページやコンポーネントのスタイルはここではなく、それぞれのフォルダ内に置く。

## base

リセットやサイト共通で要素に対して設定をする場所。

## global

読み込んで共通で使われるmixin,extend,設定値（トークン）を置く場所。
ページ側CSSに読み込ませるため、リアルなクラスなどは置かない。

## global/mixin

名称とmixinが対になるように1ファイル毎に分割すること。
引数や利用方法に関してコメントアウトで明記すること。
functionも許容。

## global/_export-variables.module.scss

設定値（トークン）。
SCSSの変数をJSでも使用できるようにするためのファイル。  

### 使用方法
このファイルは直接使用せず、`src/constants/common.ts`からimportして使用してください。

``` js
import { STYLES } from '@/constants/common'
```

### 更新時の注意点
`global/_export-variables.module.scss.d.ts`はTSの型定義ファイルです。  
SCSSではありませんが、わかりやすいようにここに置いてます。  
`global/_export-variables.module.scss`を更新したらこちらも更新してください。
