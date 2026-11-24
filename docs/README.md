# Yuya Kigure Portfolio Site

指示・仕様の置き場。ページごとの詳細は各 MD を編集する。

## サイト概要

- **種類**: ポートフォリオサイト
- **用途**
  - 成果物掲載（過去作成した Web サイト・アプリ）
  - 転職時活用（自己紹介・スキル）
  - ブログ運営（いずれ WordPress 埋め込み予定）

## デザイン

- **雰囲気**: アンティーク、落ち着いた、夜の森
- **メインカラー**: 茶色
- **アクセント**: オレンジ、緑、白（トリコロール）
- **背景色**: ネイビー / クリーム（`#f3efe6`） / 紙色 paper（`#faf9f6`・Blog詳細など読み物向け） / CONTACT ブラウン（`#6e4a36`） / フッター `brown-deep`（`#3d2618`）
- CONTACT ブラウンは薄め（控えめ）。フッターは一段暗いまま。詳細は [common.md](./common.md)
- スマホ左右余白: `px-[8%]`（全ページ共通。詳細は [common.md](./common.md)）
- **大切にしたいこと**: 世界観、個性
- **参考ブランド**: Orobianco / サマンサキングズ

### フォント

| 用途 | フォント |
| --- | --- |
| 見出し・英語 | Cinzel |
| 日本語・本文 | Shippori Mincho（しっぽり明朝） |

### ロゴ

- PC: `4.5vw × 4.5vw`
- SP: `10.5vw × 10.5vw`

### ファビコン / サイトアイコン

- 元: `public/logo.png` の YK モノグラム部分
- `app/icon.png`（512・Next 自動）
- `app/apple-icon.png`（180・Apple タッチ）
- `public/favicon-32.png`（タブ用 32）

### ローディング

- 「YUYA KIGURE」を表示 → 終了後、現在位置に配置
- フォント: HOME と同じ
- 色: クリーム（`#f5efe6`） / 背景ネイビー

## サイトマップ

| ページ | パス | 仕様 MD |
| --- | --- | --- |
| Home | `/` | [home.md](./home.md) |
| About | `/about` | [about.md](./about.md) |
| Work | `/work` | [work.md](./work.md) |
| Work 詳細 | `/work/[id]` | [work-detail.md](./work-detail.md) |
| Blog | `/blog` | [blog.md](./blog.md) |
| Blog 詳細 | `/blog/[id]` | [blog-detail.md](./blog-detail.md) |
| Contact | `/contact` | [contact.md](./contact.md) |

## サイト共通

詳細は [common.md](./common.md)

- どのページもフッターと CONTACT を入れる
- パンくずは Work / Blog 詳細のみ（一覧・About・Contact なし）
- 下スクロールで CONTACT が見えたら、右下に「戻る」アイコン出現
- ヘッダー: 左ロゴ / 右メニュー
- 各セクションは基本中央揃え、セクションごとに色分け
- メインビジュアルはフルスクリーン
- レスポンシブ（メディアクエリ）意識

## 画像パス

`public/products/`

## 実装ルール

- トークン節約のため、回答は最低限でよい
- 説明は不要、コードのみでよい場合あり

## プロンプトテンプレ

[prompt.md](./prompt.md)

## 公開・ホスティング

- **リポジトリ**: [github.com/kikiyuu/web-portfolio](https://github.com/kikiyuu/web-portfolio)
- **ホスト**: Vercel（ロリポップはサイト本体には使わない。メール・ドメイン管理用なら残可）
- **公開URL**: [kigubox-portfolio.vercel.app](https://kigubox-portfolio.vercel.app)（旧エイリアスは削除済み）
- **運用**: push で自動デプロイ（GitHub 連携済み）
- **閲覧制限**: Basic認証（ブラウザの ID / パスワードポップアップ）
  - ID / PW は Vercel 環境変数 `BASIC_AUTH_USER` / `BASIC_AUTH_PASSWORD`（値は共有しない・リポに書かない）
  - 変数を外すと制限なしで公開できる
- **今後**: 独自ドメイン接続・本公開時は Basic認証の要否を再判断

### 解析

- **GA4**: `@next/third-parties/google` の `GoogleAnalytics`
- 環境変数 `NEXT_PUBLIC_GA_MEASUREMENT_ID` があるときだけ読み込み（Vercel / `.env.local` に設定済み）
- 測定ID自体はリポに書かない（クライアントに載る前提の公開値だが、管理は環境変数で行う）
- Basic認証中は、ログインして見られるアクセスだけ計測される

### Search Console（学習用）

- サイトマップ: `/sitemap.xml`（`app/sitemap.ts`）
- robots: `/robots.txt`（`app/robots.ts`）
- 公開URL: `NEXT_PUBLIC_SITE_URL`（未設定時は `https://kigubox-portfolio.vercel.app`）
- HTMLタグ認証が必要なとき: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` を設定
- **注意**: Basic認証中は Googlebot がクロールできない。所有権確認は GA 連携などで可能な場合あり。検索インデックス／カバレッジの本格確認は認証解除後

## 将来追加

- Contact 送信機能
- （メモ）スマホアプリサイト、木暮農園、EC、投資勉強サイト など

## memo

- ターミナル: `Command + J`
- プロセス停止: `Control + C`
