# Blog 詳細

パス: `/blog/[id]`  
← [README](./README.md) / [一覧](./blog.md)

## 方針

- いずれ WordPress 連携を想定したレイアウト
- デザインは Blog 一覧と揃える

## レイアウト

- パンくずあり（帯あり `withRibbon`）。例: Home / Blog / 記事タイトル
- **2 カラム**
  - 左: 本文
  - 右: サイドバー（Category / Archive）
- 背景: `paper`（`#faf9f6`）。真っ白ではなく、額縁内側と同系の温かい紙色。クリームより可読性優先
- Category・Archive をクリック → 一覧を該当フィルター状態で表示
  - 例: 「暮らしと思考」→ `/blog?category=...`
  - 例: 「2026年」→ `/blog?year=2026`

## SNS アイコン

- Instagram / X / note（将来リンク想定、現状は遷移なし）
- **上下どちらか一方のみ**（重複表示しない）
- 配置: 本文下（BACK TO BLOG と同じフッタ行）
- タイトル直下（日付横）には置かない

## サイドバー（条件）

- PC（`lg`〜）で **sticky 固定**。本文をスクロールしても Category / Archive が上に流れて消えない
- sticky の `top` はヘッダー高さに合わせる（`py-4`×2 + ロゴ `4.5vw` + 余白）。例: `top-[calc(2rem+4.5vw+0.75rem)]`。固定値だと広い画面でカテゴリーが見切れる
- 親セクションに `overflow-hidden` を付けない（sticky が無効化される）
- 帯のクリップは `absolute inset-0 overflow-hidden` の別レイヤーで行う（帯仕様は [common.md](./common.md)）
- SP では sticky 不要（1 カラム想定）

## 記事データ

- `content/blog/details_*.tsx`（React / JSX）
- 新規は `_template.tsx` をコピー → `index.ts` に追加
- 現状のサンプルはカテゴリ 1 本ずつ（`details_1` 本の読書 / `details_2` AIキャリア / `details_5` 結婚式）。本文は仮テキスト、画像はテーマ別（`life-book-*` / `career-ai-*` / `wedding-*`）
- メタ: `id` / `category` / `title` / `date` / `image` / `excerpt`
- 本文: `Content` 内を HTML 風に編集
  - `<P>` 段落
  - `<Img src alt />` 単体画像
  - `<Row><Img /><Img /></Row>` 2カラム
- 部品定義: `content/blog/blocks.tsx`（`definePost` / `P` / `Img` / `Row`）
- カバー画像: `image`（`public/products/blog/`）
