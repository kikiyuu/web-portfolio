import { definePost, Img, P, Row } from "./blocks";

export default definePost({
  id: "5",
  category: "private",
  title: "異国情緒あふれる結婚式",
  date: "2025.12.08",
  image: "/products/blog/wedding-ceremony.jpg",
  excerpt: "テキストテキストテキスト。",
  Content: () => (
    <>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキスト。</P>

      <Img src="/products/blog/wedding-ceremony.jpg" alt="結婚式の式場" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>
      <P>テキストテキスト。</P>

      <Row>
        <Img src="/products/blog/wedding-bouquet.jpg" alt="ブーケ" />
        <Img src="/products/blog/wedding-reception.jpg" alt="披露宴" />
      </Row>

      <P>テキストテキストテキストテキスト。</P>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>

      <Img src="/products/blog/wedding-lanterns.jpg" alt="夜のライトアップ" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキスト。</P>
    </>
  ),
});
