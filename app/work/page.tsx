import type { Metadata } from "next";
import {
  ContactSection,
  SectionHeadingRow,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  TricolorRibbon,
  WorkImage,
  workCategories,
  workHref,
  works,
} from "@/components/site";

export const metadata: Metadata = {
  title: "Work | Yuya Kigure Portfolio Site",
  description: "これまでの制作実績 — Webサイト制作・更新・スマホアプリ開発",
};

function WorkNav({ stacked = false }: { stacked?: boolean }) {
  return (
    <nav aria-label="成果物カテゴリ">
      {stacked ? (
        <h2 className="border-b border-ink/15 pb-3 font-heading text-[11px] tracking-[0.25em] text-orange uppercase">
          Category
        </h2>
      ) : null}
      <ul
        className={
          stacked
            ? "mt-4 flex flex-col gap-3 text-left"
            : "flex flex-wrap justify-center gap-x-5 gap-y-2"
        }
      >
        {workCategories.map((category) => {
          const count = works.filter(
            (item) => item.category === category.id,
          ).length;

          return (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className={
                  stacked
                    ? "flex items-baseline justify-between gap-3 text-sm transition-colors hover:text-orange"
                    : "whitespace-nowrap text-sm tracking-wide text-ink/75 transition-colors hover:text-orange"
                }
              >
                <span>{category.label}</span>
                {stacked ? (
                  <span className="font-heading text-[11px] tracking-[0.12em] text-ink/45">
                    ({count})
                  </span>
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function WorkPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1 bg-cream text-ink">
        <section className="relative px-[8%] pb-20 pt-0 sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <TricolorRibbon corner="tl" />
            <TricolorRibbon corner="br" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 pt-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-x-14">
            <div className="min-w-0">
              <div className="text-center">
                <SectionLabel>WORK</SectionLabel>
                <h1 className="font-sans text-2xl sm:text-3xl">
                  これまでの制作実績
                </h1>
              </div>

              <div className="mt-8 overflow-x-auto lg:hidden">
                <WorkNav />
              </div>

              <div className="mt-12">
                {workCategories.map((category) => {
                  const items = works.filter(
                    (item) => item.category === category.id,
                  );

                  return (
                    <section
                      key={category.id}
                      id={category.id}
                      className={
                        category.id === "web"
                          ? "scroll-mt-28"
                          : "scroll-mt-28 mt-16"
                      }
                    >
                      <SectionHeadingRow ja={category.label} size="sm" />
                      <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {items.map((item) => (
                          <li key={item.id} className="text-center">
                            <WorkImage
                              title={item.title}
                              href={workHref(item.id)}
                              src={item.image}
                              floatOnHover
                              natural={
                                "naturalImages" in item &&
                                item.naturalImages === true
                              }
                              width={
                                "imageWidth" in item
                                  ? item.imageWidth
                                  : undefined
                              }
                              height={
                                "imageHeight" in item
                                  ? item.imageHeight
                                  : undefined
                              }
                            />
                            <p className="mt-4 font-heading text-[11px] tracking-[0.2em] text-orange">
                              {item.n} {item.tag}
                            </p>
                            <h3 className="mt-1 font-sans text-base">
                              {item.title}
                            </h3>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </div>
            </div>

            <aside className="hidden min-w-0 lg:sticky lg:top-[calc(2rem+4.5vw+0.75rem)] lg:block lg:self-start">
              <WorkNav stacked />
            </aside>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
