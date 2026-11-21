import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  ContactSection,
  Placeholder,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  TricolorRibbon,
  WorkDetailCapture,
  WorkVisual,
  getWork,
  workHref,
  works,
} from "@/components/site";

type WorkDetailProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return works.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: WorkDetailProps): Promise<Metadata> {
  const { id } = await params;
  const work = getWork(id);

  if (!work) {
    return { title: "Work | Yuya Kigure Portfolio Site" };
  }

  return {
    title: `${work.title} | Yuya Kigure Portfolio Site`,
    description: work.summary,
  };
}

const fields = ["概要", "担当範囲", "使用ツール", "URL"] as const;

export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { id } = await params;
  const work = getWork(id);

  if (!work) {
    notFound();
  }

  const values = {
    概要: work.summary,
    担当範囲: work.scope,
    使用ツール: work.tools,
    URL: work.url,
  } as const;
  const urlLabel =
    "urlLabel" in work && work.urlLabel ? work.urlLabel : work.url;
  const natural =
    "naturalImages" in work && work.naturalImages === true;
  const imageWidth =
    "imageWidth" in work && typeof work.imageWidth === "number"
      ? work.imageWidth
      : undefined;
  const imageHeight =
    "imageHeight" in work && typeof work.imageHeight === "number"
      ? work.imageHeight
      : undefined;
  const detailWidth =
    "detailWidth" in work && typeof work.detailWidth === "number"
      ? work.detailWidth
      : undefined;
  const detailHeight =
    "detailHeight" in work && typeof work.detailHeight === "number"
      ? work.detailHeight
      : undefined;
  const logoImage =
    "logoImage" in work && typeof work.logoImage === "string"
      ? work.logoImage
      : null;
  const logoConcept =
    "logoConcept" in work && typeof work.logoConcept === "string"
      ? work.logoConcept
      : null;
  const index = works.findIndex((item) => item.id === work.id);
  const prev = index > 0 ? works[index - 1] : null;
  const next = index >= 0 && index < works.length - 1 ? works[index + 1] : null;

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1 bg-cream text-ink">
        <section className="relative overflow-hidden px-[8%] pt-0 sm:px-10">
          <TricolorRibbon corner="tl" />
          <TricolorRibbon corner="br" />
          <Breadcrumb
            className="bg-transparent"
            withRibbon
            items={[
              { label: "Work", href: "/work" },
              { label: work.title },
            ]}
          />
          <article className="relative z-10 mx-auto max-w-3xl px-0 pt-14 pb-20 text-center">
            <SectionLabel>WORK</SectionLabel>
            <h1 className="font-sans text-2xl sm:text-3xl">{work.title}</h1>
            <p className="mt-3 font-heading text-[11px] tracking-[0.2em] text-orange">
              {work.n} {work.tag}
            </p>

            <div className="mt-10">
              <WorkVisual
                src={work.image}
                alt={work.title}
                natural={natural}
                width={imageWidth}
                height={imageHeight}
                className={natural ? "w-full" : undefined}
              />
            </div>

            <dl className="mt-12 space-y-6 text-left">
              {fields.map((label) => (
                <div
                  key={label}
                  className="grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline sm:gap-x-8"
                >
                  <dt className="font-heading text-[11px] tracking-[0.25em] text-orange">
                    {label}
                  </dt>
                  <dd className="min-w-0 text-sm leading-7 break-words">
                    {label === "URL" ? (
                      <a
                        href={values.URL}
                        className="hover:text-orange"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {urlLabel}
                      </a>
                    ) : (
                      values[label]
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {logoImage ? (
              <div className="mt-12 text-left">
                <h2 className="font-heading text-[11px] tracking-[0.25em] text-orange">
                  アプリロゴ
                </h2>
                <div className="mt-6 flex justify-center">
                  <div className="relative size-28 overflow-hidden bg-cream sm:size-32">
                    <Image
                      src={logoImage}
                      alt={`${work.title}のアプリロゴ`}
                      fill
                      className="object-contain"
                      sizes="8rem"
                    />
                  </div>
                </div>
                {logoConcept ? (
                  <p className="mt-6 text-sm leading-7 text-ink/80">
                    {logoConcept}
                  </p>
                ) : null}
              </div>
            ) : null}

            <div className="mt-12">
              {work.detailImage ? (
                <WorkDetailCapture
                  src={work.detailImage}
                  alt={`${work.title}のサンプル`}
                  width={detailWidth}
                  height={detailHeight}
                />
              ) : (
                <Placeholder className="aspect-[3/4] w-full" />
              )}
            </div>

            <nav
              aria-label="前後の制作物"
              className="mt-12 grid grid-cols-2 gap-4 text-left"
            >
              {prev ? (
                <a
                  href={workHref(prev.id)}
                  className="group min-w-0 hover:text-orange"
                >
                  <span className="font-heading text-[11px] tracking-[0.25em] text-ink/45 group-hover:text-orange">
                    ← 前へ
                  </span>
                  <span className="mt-2 block truncate text-sm">{prev.title}</span>
                </a>
              ) : (
                <span />
              )}
              {next ? (
                <a
                  href={workHref(next.id)}
                  className="group min-w-0 text-right hover:text-orange"
                >
                  <span className="font-heading text-[11px] tracking-[0.25em] text-ink/45 group-hover:text-orange">
                    次へ →
                  </span>
                  <span className="mt-2 block truncate text-sm">{next.title}</span>
                </a>
              ) : (
                <span />
              )}
            </nav>

            <a
              href="/work"
              className="mt-10 inline-flex items-center gap-3 font-heading text-xs tracking-[0.25em] uppercase hover:text-orange"
            >
              <span aria-hidden>←</span> BACK TO WORKS
            </a>
          </article>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
