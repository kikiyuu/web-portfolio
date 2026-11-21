import { definePost, Img, P, Row } from "./blocks";

export default definePost({
  id: "2",
  category: "career",
  title: "AIによるこれからのキャリアについて考える",
  date: "2026.03.12",
  image: "/products/blog/career-ai-laptop.jpg",
  excerpt: "テキストテキストテキスト。",
  Content: () => (
    <>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキスト。</P>

      <Img src="/products/blog/career-ai-laptop.jpg" alt="AIとノートPC" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>
      <P>テキストテキスト。</P>

      <Row>
        <Img src="/products/blog/career-ai-desk.jpg" alt="ワークスペース" />
        <Img src="/products/blog/career-ai-network.jpg" alt="ネットワーク" />
      </Row>

      <P>テキストテキストテキストテキスト。</P>
      <P>テキストテキストテキスト。</P>
      <P>テキストテキストテキストテキストテキスト。</P>

      <Img src="/products/blog/career-ai-skyline.jpg" alt="夜の街並み" />

      <P>テキストテキストテキスト。</P>
      <P>テキストテキスト。</P>
    </>
  ),
});
