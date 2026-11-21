import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import type { BlogCategoryId, BlogPost } from "./types";

/** 記事メタ + 本文コンポーネントをまとめて返す */
export function definePost(post: {
  id: string;
  category: BlogCategoryId;
  title: string;
  date: string;
  image?: string;
  excerpt?: string;
  Content: ComponentType;
}): BlogPost {
  return post;
}

/** 段落 */
export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

/** 単体画像（フル幅） */
export function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-white sm:aspect-[16/10]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 48rem, 100vw"
      />
    </div>
  );
}

/** 2カラム画像（中に Img を2つ）。SP は縦並び */
export function Row({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {children}
    </div>
  );
}
