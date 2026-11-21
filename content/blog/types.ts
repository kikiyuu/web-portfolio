import type { ComponentType } from "react";

export const blogCategories = [
  { id: "all", label: "All" },
  { id: "life", label: "暮らしと思考" },
  { id: "career", label: "仕事とキャリア" },
  { id: "private", label: "プライベート" },
] as const;

export type BlogCategoryId = Exclude<
  (typeof blogCategories)[number]["id"],
  "all"
>;

export type BlogPost = {
  /** URL: /blog/{id} — details_1.tsx なら通常 "1" */
  id: string;
  category: BlogCategoryId;
  title: string;
  date: string;
  /** 一覧・詳細ヒーロー用。なければ /products/blog/journal.jpg */
  image?: string;
  /** meta description / 抜粋。なければ title */
  excerpt?: string;
  /** 詳細本文（JSX）。`content/blog/blocks` の P / Img / Row で書く */
  Content: ComponentType;
};
