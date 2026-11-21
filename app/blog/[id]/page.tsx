import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogBody } from "@/components/blog-body";
import { BlogSocialLinks } from "@/components/blog-social";
import {
  BlogCategoryBadge,
  BlogSidebar,
  BlogVisual,
  Breadcrumb,
  ContactSection,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  TricolorRibbon,
  blogs,
  formatBlogDate,
  getBlog,
  getBlogCover,
  getBlogExcerpt,
} from "@/components/site";

type BlogDetailProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogs.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlog(id);

  if (!post) {
    return { title: "Blog | Yuya Kigure Portfolio Site" };
  }

  return {
    title: `${post.title} | Yuya Kigure Portfolio Site`,
    description: getBlogExcerpt(post),
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { id } = await params;
  const post = getBlog(id);

  if (!post) {
    notFound();
  }

  const year = post.date.slice(0, 4);

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1 bg-paper text-ink">
        <section className="relative px-[8%] pb-20 pt-0 sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <TricolorRibbon corner="tl" />
            <TricolorRibbon corner="br" />
          </div>
          <Breadcrumb
            className="bg-transparent"
            withRibbon
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 pt-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-x-14">
            <article className="min-w-0 text-left">
              <div className="text-center lg:text-left">
                <SectionLabel>BLOG</SectionLabel>
                <BlogCategoryBadge categoryId={post.category} />
                <h1 className="mt-3 font-sans text-2xl sm:text-3xl">
                  {post.title}
                </h1>
                <time
                  dateTime={post.date.replaceAll(".", "-")}
                  className="mt-4 block text-xs tracking-[0.15em] text-ink/60"
                >
                  {formatBlogDate(post.date)}
                </time>
              </div>

              <BlogVisual
                src={getBlogCover(post)}
                alt={post.title}
                className="mt-10 aspect-[16/10] w-full"
              />

              <BlogBody Content={post.Content} />

              <div className="mt-12 flex flex-col items-start gap-8 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <BlogSocialLinks />
                <a
                  href="/blog"
                  className="inline-flex items-center gap-3 font-heading text-xs tracking-[0.25em] uppercase hover:text-orange"
                >
                  <span aria-hidden>←</span> BACK TO BLOG
                </a>
              </div>
            </article>

            <aside className="min-w-0 lg:sticky lg:top-[calc(2rem+4.5vw+0.75rem)] lg:self-start">
              <BlogSidebar
                activeCategory={post.category}
                activeYear={year}
              />
            </aside>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
