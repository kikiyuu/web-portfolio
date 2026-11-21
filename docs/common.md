# サイト共通

← [README](./README.md)

## 余白（スマホ）

- 左右: `px-[8%]`（Home / About / Work / Blog / Contact / ヘッダー / フッター / CONTACT セクション共通）
- `sm` 以降: `px-10` / 必要に応じて `lg:px-16`（従来どおり）

## ファビコン

- ロゴの YK モノグラム（黒地にクリーム）
- `app/icon.png` / `app/apple-icon.png` / `public/favicon-32.png`

## ヘッダー

- 左: ロゴ
- 右: メニュー（Home / About / Work / Blog / Contact）
- ロゴサイズ: PC `4.5vw` / SP `10.5vw`
- **スマホ**: ハンバーガーで開く。パネルは中央カード（`94vw` × `94dvh`）。半透明白 `bg-white/55` + blur。**閉じる × は白パネル内右上**（ヘッダーと同じ `px-[8%] py-4`。開時はヘッダーを `pointer-events-none` + パネル `z-[60]` にして確実に押せるようにする）。外側タップ / Escape / リンクでも閉じる（`createPortal`）。中央揃えで **ロゴ（`invert`）→ 罫線（`w-full`・左右 padding 内いっぱい、下に余白）→ Home / About / Work / Blog / Contact（Contact のみ枠線）→ SNS（Instagram / X / note・準備中）**。開いている間は body スクロールロック。開時のヘッダー背景は透明
- **`sm` 以上**: 従来どおり横並びテキストメニュー（ハンバーガー非表示）

## フッター

- 全ページに配置
- 背景: `brown-deep`（`#3d2618`）
- CONTACT セクションの `brown` より一段暗い（階層を維持）。CONTACT 背景を薄くしてもフッターは連動させない
- **スマホ**: メニュー非表示。代わりにコピーライト `© 2026 Yuya Kigure`
- **`sm` 以上**: ロゴ + メニュー（Home / About / Work / Blog / Contact）

## CONTACT セクション

- 全ページ（Contact ページ以外も含む想定）に配置
- 背景: `brown`（`#6e4a36`）
- `/contact` フォームページとは別。共通セクション仕様はここ
- **色の条件**
  - 以前の `#5c3a28` より薄め（控えめな明るさ）
  - 変更対象は CONTACT 背景の `brown` のみ。`brown-deep`（フッター）は触らない
  - クリーム文字（`foreground`）とのコントラストは維持する（極端に明るくしない）
  - トークン定義: `app/globals.css` の `--color-brown`

## パンくず

- **Work 詳細・Blog 詳細のみ**表示（一覧・About・Contact には置かない）
- **スマホでは非表示**（`hidden sm:block`）。帯よけ余白と見出しが重なってバランスが崩れるため。帯は残す
- 左上帯と同じセクション内に置き、帯と重ならないよう左に余白を取る（`withRibbon`）

## 戻るアイコン（Back to top）

- CONTACT セクションが見えた位置で右下に固定表示
- 画像: `/products/pisces-page-top.png`（提供イラストから魚＋つなぎを白抜き・背景透過・キラキラ／黄星座線なし・線の太さは元絵ベースで膨張なし）
- 下に `PAGE TOP` ラベル
- 横長。SP はヘッダーロゴ（`10.5vw`）より少し大きめ `w-[13.5vw]`（`max-w-[4.75rem]`）／ PC `sm:w-[9.5vw]`。ラベルも SP はやや小さめ

## 帯（トリコロールリボン）

- 左上・右下に帯を付けるページあり（各ページ MD 参照）
- 角に密着させ、隙間を作らない（端は overflow で切れ、コーナー帯として見せる）
- **sticky と併用するとき**: コンテンツ親に `overflow-hidden` を付けない（sticky が無効化される）。帯のクリップは `absolute inset-0 overflow-hidden` の別レイヤーで行う（Blog 詳細など）

## 星空アニメーション

- **適用**: ネイビー背景のセクションのみ（メインビジュアル、WORKS 等）
- **非適用**: 明るい背景（クリーム等）、ブラウン
- 小さく繊細な光の粒子が明滅・浮遊
- 数秒〜十数秒に 1 回、短い流れ星
- 上品・控えめ、閲覧を邪魔しない透明度
- 軽量 CSS（または軽量 Canvas）、SP でも重くしない

## 実装プロンプトの使い方

1. [README.md](./README.md) と対象ページの MD を確認
2. [prompt.md](./prompt.md) の方針で実装依頼
