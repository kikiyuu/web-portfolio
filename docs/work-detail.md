# Work 詳細

パス: `/work/[id]`  
← [README](./README.md) / [一覧](./work.md)

## レイアウト

- 左上・右下に帯
- パンくずあり（帯あり `withRibbon`）。例: Home / Work / 作品名
- 表示順:
  1. サイト名（アプリ名）+ タグ
  2. メインビジュアル（一覧と同じ画像）
  3. テキスト（概要 / 担当範囲 / 使用ツール / URL）
  4. サイト全体キャプチャ（仮は灰色可）
  5. 前へ / 次へ（`works` 配列順。端は非表示）
  6. BACK TO WORKS
- メタ情報: **罫線なし**。PC は左ラベル（固定幅）/ 右本文の横並び、SP は縦積み
- メインビジュアル・全体キャプチャのマットは **cream**（`#f3efe6`）。白背景にしない（一覧・HOME と共通）
- **スマホアプリ**（`naturalImages`）: 縦長フレームに固定せず、画像の縦横比に合わせる
- アプリ詳細ではサンプルの上に **アプリロゴ**（画像 + コンセプト文）を置ける
- URL（Halal Scan Japan は「アプリダウンロードページ」表記）
- 前へ / 次へ: 左に前作品名・右に次作品名。先頭は前へなし、末尾は次へなし（ループしない）

## 制作物データ（書き方）

実装は `components/site.tsx` の `works`。この MD が内容の正。追加・変更時は下の項目を揃えて実装へ反映する。

| 項目 | 説明 |
| --- | --- |
| id | URL 用（既存 id は変えない） |
| n | 表示番号（`01` など） |
| カテゴリ | `web` / `update` / `app` |
| タグ | 一覧・詳細に出すラベル |
| 画像 | 一覧・HOME・詳細共通。`public` 配下を `/products/work/...` で指定 |
| 詳細画像 | 詳細の全体キャプチャ。なければ `なし` |

## 制作物一覧

### かわせみグループホーム

- id: `1` / n: `01`
- カテゴリ: `web` / タグ: Webサイト制作
- 概要: 介護かわせみグループホームのサイトです。
- 担当: コーディング
- ツール: HTML / CSS / jQuery
- URL: https://www.gh-kawasemi.jp/
- 画像: `/products/work/w_img_02.png`
- 詳細画像: `/products/work/w_img_02_detail.png`

### 円樹 いたばし四葉

- id: `2` / n: `02`
- カテゴリ: `web` / タグ: Webサイト制作
- 概要: 有料老人ホーム/高齢者向け住宅「円樹」の公式サイト
- 担当: コーディング
- ツール: HTML / CSS / jQuery
- URL: https://www.enju-kaigo.jp/index.html
- 画像: `/products/work/w_img_01.png`
- 詳細画像: `/products/work/w_img_01_detail.png`

### ジョリーパスタ アプリページ

- id: `3` / n: `03`
- カテゴリ: `web` / タグ: LP制作
- 概要: おいしいスパゲッティ、ピザが自慢のパスタ専門店・ジョリーパスタのアプリページです
- 担当: コーディング
- ツール: HTML / CSS / jQuery
- URL: https://www.jolly-pasta.co.jp/app/index.html
- 画像: `/products/work/w_img_04.png`
- 詳細画像: `/products/work/w_img_04_detail.png`

### ラーメン伝丸 アプリページ

- id: `7` / n: `04`
- カテゴリ: `web` / タグ: LP制作
- 概要: ラーメン伝丸のアプリページです
- 担当: コーディング
- ツール: HTML / CSS
- URL: https://www.gmfoods.co.jp/app/
- 画像: `/products/work/w_img_06.png`
- 詳細画像: `/products/work/w_img_06_detail.png`

### SCRUM INC

- id: `8` / n: `05`
- カテゴリ: `web` / タグ: Webサイト制作
- 概要: スクラムの女性ページです
- 担当: コーディング
- ツール: WordPress
- URL: https://scruminc.jp/training/registered-scrum-master-training-for-woman/
- 画像: `/products/work/w_img_07.png`
- 詳細画像: `/products/work/w_img_07_detail.png`

### チェプラファーム

- id: `9` / n: `06`
- カテゴリ: `web` / タグ: Webサイト制作
- 概要: チェプラファームは、エッセンシャルメディスンを引き継ぎ、届ける 承継事業のスペシャリティーファーマです。
- 担当: コーディング
- ツール: TYPO3
- URL: https://www.cheplapharm.jp/
- 画像: `/products/work/w_img_03.png`
- 詳細画像: `/products/work/w_img_03_detail.png`

### すき家サイト

- id: `4` / n: `07`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: すき家のサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.sukiya.jp/
- 画像: `/products/work/w_u_img_01.png`
- 詳細画像: `/products/work/w_u_img_01_detail.png`

### オリーブの丘サイト

- id: `5` / n: `08`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: オリーブの丘のサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.olivenooka.jp/
- 画像: `/products/work/w_u_img_04.png`
- 詳細画像: `/products/work/w_u_img_04_detail.png`

### さくらみくらサイト

- id: `10` / n: `09`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: さくらみくらのサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.sakuramikura.co.jp/
- 画像: `/products/work/w_u_img_05.png`
- 詳細画像: `/products/work/w_u_img_05_detail.png`

### かつ庵サイト

- id: `11` / n: `10`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: かつ庵のサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.katsuan.co.jp/
- 画像: `/products/work/w_u_img_03.png`
- 詳細画像: `/products/work/w_u_img_03_detail.png`

### 熟成焼肉いちばん

- id: `12` / n: `11`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: 熟成焼肉いちばんのサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.jukusei-ichiban.jp/jp/
- 画像: `/products/work/w_u_img_06.png`
- 詳細画像: `/products/work/w_u_img_06_detail.png`

### ジョリーパスタサイト

- id: `13` / n: `12`
- カテゴリ: `update` / タグ: Webサイト運用・更新
- 概要: ジョリーパスタのサイトです
- 担当: 更新・運用
- ツール: WordPress
- URL: https://www.jolly-pasta.co.jp/
- 画像: `/products/work/w_u_img_02.png`
- 詳細画像: `/products/work/w_u_img_02_detail.png`

### Halal Scan Japan

- id: `6` / n: `13`
- カテゴリ: `app` / タグ: スマホアプリ開発
- 概要: Halal Scan Japanのスマホアプリです
- 担当: アプリ開発
- ツール: FlutterFlow
- URL: https://apps.apple.com/jp/app/halal-scan-japan-%E3%83%8F%E3%83%A9%E3%83%BC%E3%83%AB%E5%88%A4%E5%AE%9A/id6783571622
- リンク文言: 「アプリダウンロードページ」
- 画像（サンプル）: `/products/work/app_img_01.png`（縦横比そのまま）
- 詳細画像（サンプル）: `/products/work/app_img_01_detail.png`（縦横比そのまま）
- アプリロゴ: `/products/work/app_img_01_logo.png`（サンプルの上に表示）
- ロゴコンセプト: イスラムのドームと、日本をイメージした桜、スキャンを重ねたアプリアイコン
