import details_1 from "./details_1";
import details_2 from "./details_2";
import details_5 from "./details_5";
import { blogCategories, type BlogPost } from "./types";

export { blogCategories, type BlogCategoryId, type BlogPost } from "./types";
export { definePost, Img, P, Row } from "./blocks";

/**
 * 新しい記事を足すとき:
 * 1. _template.tsx をコピーして details_N.tsx を作る
 * 2. 下に import を追加し、配列へ入れる
 * 本文は P / Img / Row で HTML のように書く（content/blog/blocks.tsx）
 *
 * サンプルはカテゴリごとに 1 本:
 * - life（暮らしと思考）: details_1
 * - career（仕事とキャリア）: details_2
 * - private（プライベート）: details_5
 */
export const blogs: BlogPost[] = [details_1, details_2, details_5];

export function blogHref(id: string) {
  return `/blog/${id}`;
}

export function getBlog(id: string) {
  return blogs.find((item) => item.id === id);
}

export function formatBlogDate(date: string) {
  const [year, month, day] = date.split(".");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

export function getBlogArchiveYears() {
  const years = new Set(blogs.map((item) => item.date.slice(0, 4)));
  return [...years].sort((a, b) => Number(b) - Number(a));
}

export function getBlogExcerpt(post: BlogPost) {
  return post.excerpt ?? post.title;
}

export function getBlogCover(post: BlogPost) {
  return post.image ?? "/products/blog/journal.jpg";
}

export function blogListHref({
  category,
  year,
}: {
  category?: (typeof blogCategories)[number]["id"];
  year?: string;
} = {}) {
  const params = new URLSearchParams();

  if (category && category !== "all") {
    params.set("category", category);
  }

  if (year) {
    params.set("year", year);
  }

  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}
