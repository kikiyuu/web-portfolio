/**
 * 新しい記事の作り方
 * 1. このファイルをコピーして details_N.tsx を作る（例: details_10.tsx）
 * 2. メタ（id / title / date …）と本文 JSX を書き換える
 * 3. content/blog/index.ts に import と配列への追加をする
 *
 * 本文は HTML のように書く:
 *   <P>段落</P>
 *   <Img src="..." alt="..." />
 *   <Row><Img ... /><Img ... /></Row>  ← 2カラム
 */
import { definePost, Img, P, Row } from "./blocks";

export default definePost({
  id: "0",
  category: "life",
  title: "記事タイトルをここに",
  date: "2026.01.01",
  image: "/products/blog/journal.jpg",
  excerpt: "リード文（一覧・meta 用）。本文の先頭と同じでよい。",
  Content: () => (
    <>
      <P>リード文です。記事の導入をここに書きます。</P>
      <P>続きの段落も同じように並べます。</P>

      <Img src="/products/blog/journal.jpg" alt="本文画像" />

      <P>1枚目画像のあとの本文。</P>
      <P>自由に段落を足したり減らしたりしてOK。</P>

      <Row>
        <Img src="/products/blog/blog-desk.jpg" alt="左" />
        <Img src="/products/blog/blog-space.jpg" alt="右" />
      </Row>

      <P>2カラム画像のあとの本文。</P>

      <Img src="/products/blog/blog-forest.jpg" alt="本文画像" />

      <P>まとめや余韻をここに書きます。</P>
    </>
  ),
});
