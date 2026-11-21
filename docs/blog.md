# Blog（一覧）

パス: `/blog`  
← [README](./README.md) / [共通](./common.md) / [詳細](./blog-detail.md)

## レイアウト

- 左上・右下に帯
- パンくずなし（詳細のみ。仕様は [common.md](./common.md) / [blog-detail.md](./blog-detail.md)）
- **3 カラム**
- ページネーション（下部、○デザイン）

## 季節背景アニメーション

- **適用**: 一覧 `/blog` のみ（詳細は非適用）
- **自動切替**: `Asia/Tokyo` の月で判定
  - 春 3–5: 花びら
  - 夏 6–8: 光の粒子
  - 秋 9–11: 紅葉
  - 冬 12–2: 雪
- 上品・控えめ、閲覧を邪魔しない透明度
- 軽量 CSS、`prefers-reduced-motion` では非表示
- デバッグ: `?season=spring|summer|autumn|winter` で上書き可

## フィルター

角丸。選択肢:

- All
- 暮らしと思考
- 仕事とキャリア
- プライベート

カテゴリ / アーカイブ（年）で絞り込み可。詳細サイドバーからのリンクでも一覧をフィルター状態にする。

## カード表示

- 件名の上にカテゴリー（角丸枠）
  - 例: `暮らしと思考`（角丸）+ タイトル
- 幅は文字サイズ程度

## HOME との関係

- HOME の Blog は **1 行カルーセル**（自動再生なし）
- 詳細は [home.md](./home.md)

## コンテンツ配置

記事データ: `content/blog/details_*.tsx`（詳細本文は JSX。書き方は [blog-detail.md](./blog-detail.md)）  
画像（仮）: `public/products/blog/`（一覧サムネ = 各記事の `image`、本文は `<Img>` / `<Row>`）

サンプルはカテゴリごとに 1 本（仮。本番執筆で差し替え・追加）。本文はプレースホルダー、画像はテーマに合わせて生成したもの:

| カテゴリ | ファイル | タイトル |
| --- | --- | --- |
| 暮らしと思考 (`life`) | `details_1.tsx` | 人生は気分が１０割という本を読んだ（`life-book-*.jpg`） |
| 仕事とキャリア (`career`) | `details_2.tsx` | AIによるこれからのキャリアについて考える（`career-ai-*.jpg`） |
| プライベート (`private`) | `details_5.tsx` | 異国情緒あふれる結婚式（`wedding-*.jpg`） |
