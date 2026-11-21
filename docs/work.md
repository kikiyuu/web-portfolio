# Work（制作実績一覧）

パス: `/work`  
← [README](./README.md) / [共通](./common.md) / [詳細](./work-detail.md)

## レイアウト

- 左上・右下に帯（トリコロールリボン）
- 帯クリップは `absolute inset-0 overflow-hidden` の別レイヤー（sticky 無効化防止。詳細は [common.md](./common.md)）
- パンくずなし（詳細のみ。仕様は [common.md](./common.md) / [work-detail.md](./work-detail.md)）
- **2 カラム**
  - 左: 見出し + 制作一覧
  - 右: カテゴリサイドバー（PC `lg`〜）
- ページ見出し（これまでの制作実績）は **成果物2カラム幅の中央**（例: かわせみ〜円樹の画像並び幅基準）。サイドバー幅は含めない
- 成果物は **横 2 つずつ（2 カラム）**
- HOME・一覧・詳細で **同じ画像** を使う
- 画像クリック → 詳細 `/work/[id]`
- 一覧画像ホバーで浮かび上がる
- 画像マット（余白・透過まわり）は白ではなく **cream**（`#f3efe6`）。`WorkVisual` / `WorkDetailCapture` 共通
- スマホアプリは縦長固定にせず、画像の縦横比に合わせる（`naturalImages`）

## カテゴリ見出し

大見出しより小さめ。上部余白:

| カテゴリ | 余白メモ |
| --- | --- |
| WEBサイト制作 | — |
| WEBサイト・更新 | 上部約 `4rem` |
| スマホアプリ開発 | 上部約 `4rem` |

## サイドバー（条件）

- 配置: **右**（左ではない）
- PC（`lg`〜）で sticky 固定。`top` はヘッダー高さに合わせる（Blog 詳細と同式）
- 見出し `Category` + 件数表示（Blog サイドバーと同系）
- リンク先頭の「ー」は付けない
- SP は横並びナビ（サイドバー非表示）

メニュー:

- WEBサイト制作
- WEBサイト・更新
- スマホアプリ開発

## 制作物データ

実装データは `components/site.tsx` の `works`。内容の正は [work-detail.md](./work-detail.md)（画像パス・詳細画像も同 MD に記載）。
