import { definePost, Img, P, Row } from "./blocks";

export default definePost({
  id: "1",
  category: "life",
  title: "人生は気分が１０割という本を読んだ",
  date: "2026.11.14",
  image: "/products/blog/life-book-desk.jpg",
  excerpt: "テキストテキストテキスト。",
  Content: () => (
    <>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキスト。</P>

      <Img src="/products/blog/life-book-desk.jpg" alt="本とお茶" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>
      <P>テキストテキスト。</P>

      <Row>
        <Img src="/products/blog/life-book-pages.jpg" alt="開いた本" />
        <Img src="/products/blog/life-book-reading.jpg" alt="読書" />
      </Row>

      <P>テキストテキストテキストテキスト。</P>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>

      <Img src="/products/blog/life-book-notes.jpg" alt="読書メモ" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキスト。</P>
    </>
  ),
});
