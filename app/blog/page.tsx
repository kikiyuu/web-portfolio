import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogList } from "@/components/blog-list";
import { SeasonalBackground } from "@/components/seasonal-background";
import {
  ContactSection,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  TricolorRibbon,
} from "@/components/site";
import { getSeason, parseSeason } from "@/lib/season";

export const metadata: Metadata = {
  title: "Blog | Yuya Kigure Portfolio Site",
  description: "暮らしと思考、仕事とキャリア、プライベートについてのブログ",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ season?: string }>;
}) {
  const { season: seasonParam } = await searchParams;
  const season = parseSeason(seasonParam) ?? getSeason();

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1 bg-cream text-ink">
        <section className="relative overflow-hidden px-[8%] pb-20 pt-0 text-center sm:px-10 lg:px-16">
          <SeasonalBackground season={season} />
          <TricolorRibbon corner="tl" />
          <TricolorRibbon corner="br" />
          <div className="relative z-10 pt-14">
            <SectionLabel>BLOG</SectionLabel>
            <h1 className="font-sans text-2xl sm:text-3xl">ブログ</h1>
            <Suspense fallback={null}>
              <BlogList />
            </Suspense>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
