"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BlogCategoryBadge,
  BlogVisual,
  blogCategories,
  blogHref,
  blogListHref,
  blogs,
  formatBlogDate,
  getBlogArchiveYears,
  getBlogCover,
} from "@/components/site";
import type { BlogPost } from "@/content/blog";

type BlogCategoryId = (typeof blogCategories)[number]["id"];

function parseCategory(value: string | null): BlogCategoryId {
  return blogCategories.some((item) => item.id === value)
    ? (value as BlogCategoryId)
    : "all";
}

function parseYear(value: string | null) {
  if (!value) return null;
  return getBlogArchiveYears().includes(value) ? value : null;
}

const perPage = 6;

const circleBtn =
  "grid size-10 place-items-center rounded-full border border-ink/25 text-sm transition-colors hover:border-orange hover:text-orange disabled:border-ink/15 disabled:text-ink/30";

function BlogCard({
  item,
  heading,
}: {
  item: BlogPost;
  heading: "h2" | "h3";
}) {
  const Title = heading;

  return (
    <a
      href={blogHref(item.id)}
      className="block overflow-hidden bg-white text-left shadow-[0_8px_24px_rgba(42,36,28,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(42,36,28,0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <BlogVisual src={getBlogCover(item)} alt={item.title} />
      <div className="flex min-h-28 flex-col px-5 py-5">
        <BlogCategoryBadge categoryId={item.category} />
        <Title className="mt-2 font-sans text-base leading-7 text-ink">
          {item.title}
        </Title>
        <time
          dateTime={item.date.replaceAll(".", "-")}
          className="mt-auto pt-4 text-right text-xs text-ink/55"
        >
          {formatBlogDate(item.date)}
        </time>
      </div>
    </a>
  );
}

export function BlogCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft >= max - 2,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      observer.disconnect();
    };
  }, [updateEdges]);

  function move(direction: -1 | 1) {
    const el = scrollerRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = Number.parseFloat(getComputedStyle(el).columnGap || "0");
    el.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="mx-auto mt-12 max-w-6xl">
      <div className="overflow-hidden">
        <ul
          ref={scrollerRef}
          aria-label="ブログ"
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {blogs.map((item) => (
            <li
              key={item.id}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-3rem)/3)]"
            >
              <BlogCard item={item} heading="h3" />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="前の記事"
          disabled={edges.start}
          onClick={() => move(-1)}
          className={circleBtn}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="次の記事"
          disabled={edges.end}
          onClick={() => move(1)}
          className={circleBtn}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export function BlogList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = parseCategory(searchParams.get("category"));
  const year = parseYear(searchParams.get("year"));
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [category, year]);

  const items = blogs.filter((item) => {
    if (category !== "all" && item.category !== category) return false;
    if (year && !item.date.startsWith(year)) return false;
    return true;
  });
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, pageCount);
  const visible = items.slice((current - 1) * perPage, current * perPage);

  function selectCategory(next: BlogCategoryId) {
    router.replace(blogListHref({ category: next }), { scroll: false });
  }

  return (
    <>
      <div
        className="mt-10 flex flex-wrap justify-center gap-3"
        role="group"
        aria-label="ブログカテゴリ"
      >
        {blogCategories.map((item) => {
          const active = !year && category === item.id;

          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => selectCategory(item.id)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active
                  ? "border-orange bg-orange text-cream"
                  : "border-ink/25 hover:border-orange hover:text-orange"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {year ? (
        <p className="mt-6 text-sm text-ink/60">{year}年</p>
      ) : null}

      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <BlogCard item={item} heading="h2" />
          </li>
        ))}
      </ul>

      <nav
        aria-label="ページ"
        className="mt-14 flex items-center justify-center gap-2"
      >
        <button
          type="button"
          aria-label="前のページ"
          disabled={current === 1}
          onClick={() => setPage(current - 1)}
          className={circleBtn}
        >
          ‹
        </button>
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (number) => (
            <button
              key={number}
              type="button"
              aria-current={number === current ? "page" : undefined}
              onClick={() => setPage(number)}
              className={`grid size-10 place-items-center rounded-full border text-sm transition-colors ${
                number === current
                  ? "border-orange bg-orange text-cream"
                  : "border-ink/25 hover:border-orange hover:text-orange"
              }`}
            >
              {number}
            </button>
          ),
        )}
        <button
          type="button"
          aria-label="次のページ"
          disabled={current === pageCount}
          onClick={() => setPage(current + 1)}
          className={circleBtn}
        >
          ›
        </button>
      </nav>
    </>
  );
}
