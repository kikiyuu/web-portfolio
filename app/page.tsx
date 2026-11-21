import {
  AboutIntroImage,
  ContactSection,
  NightSky,
  SectionButton,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  Tricolor,
  TricolorRibbon,
  WorkImage,
  workHref,
  works,
} from "@/components/site";
import { BlogCarousel } from "@/components/blog-list";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main>
        <section
          id="home"
          className="relative grid min-h-[calc(100svh-4.5rem)] items-stretch overflow-hidden bg-navy"
        >
          <NightSky />
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-12">
            <SectionLabel>PORTFOLIO</SectionLabel>
            <h1
              data-hero-title
              className="max-w-lg text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.25]"
            >
              YUYA KIGURE
            </h1>
            <p className="mt-3 font-heading text-[11px] tracking-[0.35em] uppercase">
              WEB ENGINEER & CREATOR
            </p>
            <p className="mt-6">
              <Tricolor />
            </p>
            <a
              href="#work"
              className="mt-8 hidden items-center gap-3 font-heading text-xs tracking-[0.25em] uppercase hover:text-orange sm:inline-flex"
            >
              VIEW WORKS <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section
          id="about"
          className="relative scroll-mt-20 overflow-hidden bg-cream px-[8%] py-20 text-center text-ink sm:px-10 lg:px-16"
        >
          <TricolorRibbon corner="tl" />
          <SectionLabel>ABOUT</SectionLabel>
          <h2 className="font-sans text-2xl sm:text-3xl">自分について</h2>
          <div className="mx-auto mt-8 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <AboutIntroImage />
            <div className="text-center lg:text-left">
              <h2 className="font-sans text-2xl leading-relaxed sm:text-3xl">
                一歩踏み出せない人に、
                <br />
                二歩目はない。
              </h2>
              <p className="mx-auto mt-6 max-w-md text-sm leading-8 lg:mx-0">
                大学卒業後、携帯販売、Web制作会社での制作・更新業務を経て、現在は金融業界でITエンジニアとして活動。
                異なる分野での経験を通じて培った対応力を活かし、常に新しいことへの挑戦を大切にしています。
                変化を恐れず、学び続け、カタチにする。
              </p>
              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-3 font-heading text-xs tracking-[0.25em] uppercase hover:text-orange"
              >
                VIEW ABOUT <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="relative scroll-mt-20 overflow-hidden bg-navy px-[8%] py-20 sm:px-10 lg:px-16"
        >
          <NightSky />
          <div className="relative z-10 text-center">
            <SectionLabel>WORK</SectionLabel>
            <h2 className="font-sans text-2xl sm:text-3xl">
              これまでの制作実績
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-foreground/75">
              Webサイト制作を中心に、LP制作・コーポレートサイトなど、
              幅広いジャンルのコーディングを手がけています。
            </p>
          </div>
          <div className="relative z-10 mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
            {works.slice(0, 6).map((item) => (
              <article key={item.id} className="text-center">
                <WorkImage
                  title={item.title}
                  href={workHref(item.id)}
                  src={item.image}
                  natural={
                    "naturalImages" in item && item.naturalImages === true
                  }
                  width={
                    "imageWidth" in item ? item.imageWidth : undefined
                  }
                  height={
                    "imageHeight" in item ? item.imageHeight : undefined
                  }
                />
                <p className="mt-4 font-heading text-[11px] tracking-[0.2em] text-orange">
                  {item.n} {item.tag}
                </p>
                <h3 className="mt-1 font-sans text-base sm:text-lg">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
          <div className="relative z-10 mt-4 text-center">
            <SectionButton href="/work" variant="navy">
              VIEW ALL WORKS
            </SectionButton>
          </div>
        </section>

        <section
          id="blog"
          className="relative scroll-mt-20 overflow-hidden bg-cream px-[8%] py-20 text-center text-ink sm:px-10 lg:px-16"
        >
          <TricolorRibbon corner="br" />
          <SectionLabel>BLOG</SectionLabel>
          <h2 className="font-sans text-2xl sm:text-3xl">ブログ</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-ink/70">
            制作の過程や学びを、これから発信していきます。
          </p>
          <BlogCarousel />
          <SectionButton href="/blog" variant="cream">
            READ MORE
          </SectionButton>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
