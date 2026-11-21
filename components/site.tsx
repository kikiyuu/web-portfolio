import type { ReactNode } from "react";
import Image from "next/image";
import {
  blogCategories,
  blogHref,
  blogListHref,
  blogs,
  formatBlogDate,
  getBlog,
  getBlogArchiveYears,
  getBlogCover,
  getBlogExcerpt,
} from "@/content/blog";

export {
  blogCategories,
  blogHref,
  blogListHref,
  blogs,
  formatBlogDate,
  getBlog,
  getBlogArchiveYears,
  getBlogCover,
  getBlogExcerpt,
};

export const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const;

export const workCategories = [
  { id: "web", label: "WEBサイト制作" },
  { id: "update", label: "WEBサイト・更新" },
  { id: "app", label: "スマホアプリ開発" },
] as const;

export const works = [
  {
    id: "1",
    n: "01",
    category: "web",
    tag: "Webサイト制作",
    title: "かわせみグループホーム",
    summary: "介護かわせみグループホームのサイトです。",
    scope: "コーディング",
    tools: "HTML / CSS / jQuery",
    url: "https://www.gh-kawasemi.jp/",
    image: "/products/work/w_img_02.png",
    detailImage: "/products/work/w_img_02_detail.png",
  },
  {
    id: "2",
    n: "02",
    category: "web",
    tag: "Webサイト制作",
    title: "円樹 いたばし四葉",
    summary: "有料老人ホーム/高齢者向け住宅「円樹」の公式サイト",
    scope: "コーディング",
    tools: "HTML / CSS / jQuery",
    url: "https://www.enju-kaigo.jp/index.html",
    image: "/products/work/w_img_01.png",
    detailImage: "/products/work/w_img_01_detail.png",
  },
  {
    id: "3",
    n: "03",
    category: "web",
    tag: "LP制作",
    title: "ジョリーパスタ アプリページ",
    summary:
      "おいしいスパゲッティ、ピザが自慢のパスタ専門店・ジョリーパスタのアプリページです",
    scope: "コーディング",
    tools: "HTML / CSS / jQuery",
    url: "https://www.jolly-pasta.co.jp/app/index.html",
    image: "/products/work/w_img_04.png",
    detailImage: "/products/work/w_img_04_detail.png",
  },
  {
    id: "7",
    n: "04",
    category: "web",
    tag: "LP制作",
    title: "ラーメン伝丸 アプリページ",
    summary: "ラーメン伝丸のアプリページです",
    scope: "コーディング",
    tools: "HTML / CSS",
    url: "https://www.gmfoods.co.jp/app/",
    image: "/products/work/w_img_06.png",
    detailImage: "/products/work/w_img_06_detail.png",
  },
  {
    id: "8",
    n: "05",
    category: "web",
    tag: "Webサイト制作",
    title: "SCRUM INC",
    summary: "スクラムの女性ページです",
    scope: "コーディング",
    tools: "WordPress",
    url: "https://scruminc.jp/training/registered-scrum-master-training-for-woman/",
    image: "/products/work/w_img_07.png",
    detailImage: "/products/work/w_img_07_detail.png",
  },
  {
    id: "9",
    n: "06",
    category: "web",
    tag: "Webサイト制作",
    title: "チェプラファーム",
    summary:
      "チェプラファームは、エッセンシャルメディスンを引き継ぎ、届ける 承継事業のスペシャリティーファーマです。",
    scope: "コーディング",
    tools: "TYPO3",
    url: "https://www.cheplapharm.jp/",
    image: "/products/work/w_img_03.png",
    detailImage: "/products/work/w_img_03_detail.png",
  },
  {
    id: "4",
    n: "07",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "すき家サイト",
    summary: "すき家のサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.sukiya.jp/",
    image: "/products/work/w_u_img_01.png",
    detailImage: "/products/work/w_u_img_01_detail.png",
  },
  {
    id: "5",
    n: "08",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "オリーブの丘サイト",
    summary: "オリーブの丘のサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.olivenooka.jp/",
    image: "/products/work/w_u_img_04.png",
    detailImage: "/products/work/w_u_img_04_detail.png",
  },
  {
    id: "10",
    n: "09",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "さくらみくらサイト",
    summary: "さくらみくらのサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.sakuramikura.co.jp/",
    image: "/products/work/w_u_img_05.png",
    detailImage: "/products/work/w_u_img_05_detail.png",
  },
  {
    id: "11",
    n: "10",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "かつ庵サイト",
    summary: "かつ庵のサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.katsuan.co.jp/",
    image: "/products/work/w_u_img_03.png",
    detailImage: "/products/work/w_u_img_03_detail.png",
  },
  {
    id: "12",
    n: "11",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "熟成焼肉いちばん",
    summary: "熟成焼肉いちばんのサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.jukusei-ichiban.jp/jp/",
    image: "/products/work/w_u_img_06.png",
    detailImage: "/products/work/w_u_img_06_detail.png",
  },
  {
    id: "13",
    n: "12",
    category: "update",
    tag: "Webサイト運用・更新",
    title: "ジョリーパスタサイト",
    summary: "ジョリーパスタのサイトです",
    scope: "更新・運用",
    tools: "WordPress",
    url: "https://www.jolly-pasta.co.jp/",
    image: "/products/work/w_u_img_02.png",
    detailImage: "/products/work/w_u_img_02_detail.png",
  },
  {
    id: "6",
    n: "13",
    category: "app",
    tag: "スマホアプリ開発",
    title: "Halal Scan Japan",
    summary: "Halal Scan Japanのスマホアプリです",
    scope: "アプリ開発",
    tools: "FlutterFlow",
    url: "https://apps.apple.com/jp/app/halal-scan-japan-%E3%83%8F%E3%83%A9%E3%83%BC%E3%83%AB%E5%88%A4%E5%AE%9A/id6783571622",
    urlLabel: "アプリダウンロードページ",
    image: "/products/work/app_img_01.png",
    imageWidth: 733,
    imageHeight: 233,
    detailImage: "/products/work/app_img_01_detail.png",
    detailWidth: 1109,
    detailHeight: 578,
    logoImage: "/products/work/app_img_01_logo.png",
    logoConcept:
      "イスラムのドームと、日本をイメージした桜、スキャンを重ねたアプリアイコンです。",
    naturalImages: true,
  },
] as const;

export function BlogSidebar({
  activeCategory,
  activeYear,
}: {
  activeCategory?: (typeof blogs)[number]["category"];
  activeYear?: string;
} = {}) {
  const categories = blogCategories.filter((item) => item.id !== "all");
  const years = getBlogArchiveYears();

  return (
    <aside className="space-y-10 text-left">
      <div>
        <h2 className="border-b border-ink/15 pb-3 font-heading text-[11px] tracking-[0.25em] text-orange uppercase">
          Category
        </h2>
        <ul className="mt-4 space-y-3">
          {categories.map((item) => {
            const count = blogs.filter(
              (post) => post.category === item.id,
            ).length;

            return (
              <li key={item.id}>
                <a
                  href={blogListHref({ category: item.id })}
                  className={`flex items-baseline justify-between gap-3 text-sm transition-colors hover:text-orange ${
                    activeCategory === item.id ? "text-orange" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-heading text-[11px] tracking-[0.12em] text-ink/45">
                    ({count})
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="border-b border-ink/15 pb-3 font-heading text-[11px] tracking-[0.25em] text-orange uppercase">
          Archive
        </h2>
        <ul className="mt-4 space-y-3">
          {years.map((year) => {
            const count = blogs.filter((post) =>
              post.date.startsWith(year),
            ).length;

            return (
              <li key={year}>
                <a
                  href={blogListHref({ year })}
                  className={`flex items-baseline justify-between gap-3 text-sm transition-colors hover:text-orange ${
                    activeYear === year ? "text-orange" : ""
                  }`}
                >
                  <span>{year}年</span>
                  <span className="font-heading text-[11px] tracking-[0.12em] text-ink/45">
                    ({count})
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export function BlogVisual({
  src = "/products/blog/journal.jpg",
  className = "aspect-[16/10] w-full",
  alt = "ブログ",
}: {
  src?: string;
  className?: string;
  alt?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 33vw, 100vw"
      />
    </div>
  );
}

export function workHref(id: string) {
  return `/work/${id}`;
}

export function getWork(id: string) {
  return works.find((item) => item.id === id);
}

/** 1☆ 学習経験あり → 4☆ 実務で自力対応可能 */
export const skillLevelLabels = [
  "学習経験あり",
  "調べながら対応可能",
  "実務経験あり",
  "実務で自力対応可能",
] as const;

export const skills = [
  {
    name: "HTML / CSS",
    note: "コーディング・レスポンシブ",
    level: 4,
    icon: "html",
  },
  {
    name: "JavaScript / jQuery",
    note: "フロントの動き・UI",
    level: 4,
    icon: "js",
  },
  {
    name: "WordPress",
    note: "構築・カスタマイズ・運用",
    level: 4,
    icon: "wordpress",
  },
  {
    name: "TYPO3",
    note: "構築・運用",
    level: 3,
    icon: "typo3",
  },
  {
    name: "Movable Type",
    note: "構築・運用",
    level: 3,
    icon: "movabletype",
  },
  {
    name: "Java / Spring",
    note: "業務Web・サーバーサイド",
    level: 3,
    icon: "java",
  },
  {
    name: "FlutterFlow",
    note: "アプリ制作",
    level: 3,
    icon: "flutter",
  },
  {
    name: "React / TypeScript",
    note: "画面改修・フロント実装",
    level: 2,
    icon: "react",
  },
  {
    name: "Illustrator / Photoshop",
    note: "画像加工・デザイン補助",
    level: 2,
    icon: "design",
  },
  {
    name: "Premiere Pro",
    note: "動画編集",
    level: 2,
    icon: "premiere",
  },
  {
    name: "After Effects",
    note: "モーショングラフィックス基礎",
    level: 1,
    icon: "aftereffects",
  },
  {
    name: "SQL",
    note: "学習中・データ確認",
    level: 1,
    icon: "sql",
  },
] as const;

type SkillIconId = (typeof skills)[number]["icon"];

function SkillIcon({ id }: { id: SkillIconId }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-5 shrink-0 text-brown",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (id) {
    case "html":
      return (
        <svg {...common}>
          <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3z" />
          <path d="M8 8h8l-.4 4.5H9.2l.2 2.2L12 15.5l2.5-.7.2-1.8" />
        </svg>
      );
    case "js":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M11 8v7.2c0 1.3-.6 2-1.8 2-.7 0-1.2-.2-1.6-.5" />
          <path d="M14 12.2c.4-.6 1.1-1 2-1 1.3 0 2.2.7 2.2 2.1 0 1.8-2.2 2.2-2.2 3.4v.5" />
        </svg>
      );
    case "wordpress":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M6.8 14.5c1.2 2.2 3 3.5 5.2 3.5" />
          <path d="M8.2 8.2 11 16.2h.1L14 8.2" />
          <path d="M15.2 9.5c.7-.4 1.4-.6 2.2-.6 1.4 0 2.4.7 2.8 1.8" />
          <path d="M7.2 9.8c.5-1.2 1.6-2 3-2 .7 0 1.3.2 1.8.5" />
        </svg>
      );
    case "typo3":
      return (
        <svg {...common}>
          <path d="M5 6.5h14" />
          <path d="M8 6.5v11.5" />
          <path d="M8 12h7.5" />
          <path d="M15.5 12v6" />
          <circle cx="15.5" cy="19.2" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "movabletype":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <path d="M7.5 16V9.5L10.5 14l3-4.5V16" />
          <path d="M16.5 9.5V16" />
        </svg>
      );
    case "java":
      return (
        <svg {...common}>
          <path d="M12 14.5c2.2 0 3.5-1 3.5-2.2 0-1.5-1.5-2-3-2.5s-3-1.2-3-2.8C9.5 5.5 11 4.5 13 4.5c1.4 0 2.5.5 3.2 1.3" />
          <path d="M8.5 17.5c.8.7 2.2 1.3 3.5 1.3s2.7-.5 3.5-1.3" />
          <path d="M9.5 19.5c.7.5 1.8.9 2.5.9s1.8-.3 2.5-.9" />
        </svg>
      );
    case "flutter":
      return (
        <svg {...common}>
          <path d="M14 3 5.5 11.5 9 15l12-12" />
          <path d="M9 15 5.5 18.5 9 22l3.5-3.5" />
          <path d="M12.5 18.5 16 15l-3.5-3.5" />
        </svg>
      );
    case "react":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 3.5v17" />
          <path d="M12 12h8.5" />
          <path d="M12 12 6.5 18" />
        </svg>
      );
    case "premiere":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M9 8.2v7.6" />
          <path d="M9 8.2h2.4c1.7 0 2.8 1 2.8 2.5S13.1 13.2 11.4 13.2H9" />
        </svg>
      );
    case "aftereffects":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M8.2 15.8 12 8.2l3.8 7.6" />
          <path d="M9.6 13.2h4.8" />
        </svg>
      );
    case "sql":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
          <path d="M5.5 6.5v11c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-11" />
          <path d="M5.5 12c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
        </svg>
      );
  }
}

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <a href="/" className="inline-flex shrink-0 items-center">
      <Image
        src="/logo.png"
        alt="Yuya Kigure"
        width={608}
        height={608}
        priority={priority}
        className="size-[10.5vw] sm:size-[4.5vw]"
      />
    </a>
  );
}

export function Placeholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-500 text-xs text-white sm:text-sm ${className}`}
    >
      サンプル
    </div>
  );
}

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 font-heading text-[11px] tracking-[0.35em] uppercase">
      <span className="inline-block h-px w-8 translate-y-[-4px] bg-current opacity-40" />
      <span className="mx-3">{children}</span>
      <span className="inline-block h-px w-8 translate-y-[-4px] bg-current opacity-40" />
    </p>
  );
}

export function Tricolor() {
  return (
    <span className="tricolor" aria-hidden>
      <span />
      <span />
      <span />
    </span>
  );
}

function TricolorStripes() {
  return (
    <>
      <span />
      <span />
      <span />
    </>
  );
}

export function TricolorBar() {
  return (
    <span className="tricolor-bar" aria-hidden>
      <TricolorStripes />
    </span>
  );
}

export function TricolorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="tricolor-frame">
      <div className="tricolor-frame__body">{children}</div>
    </div>
  );
}

export function SectionHeadingRow({
  ja,
  en,
  size = "md",
}: {
  ja: string;
  en?: string;
  size?: "sm" | "md";
}) {
  const heading =
    size === "sm" ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl";

  return (
    <div className="flex items-center gap-3 text-left">
      <TricolorBar />
      <h2 className={`font-sans ${heading}`}>
        {ja}
        {en ? (
          <span className="ml-3 font-heading text-xs tracking-[0.25em] text-ink/45 uppercase sm:ml-4 sm:text-sm">
            — {en} —
          </span>
        ) : null}
      </h2>
    </div>
  );
}

export function TricolorRibbon({
  corner,
  className = "",
}: {
  corner: "tl" | "br";
  className?: string;
}) {
  return (
    <span
      className={`tricolor-ribbon tricolor-ribbon--${corner} ${className}`}
      aria-hidden
    >
      <span />
      <span />
      <span />
    </span>
  );
}

export function NightSky() {
  return (
    <div className="night-sky" aria-hidden>
      <div className="night-sky-milky" />
      <div className="night-sky-stars" />
      <div className="night-sky-stars night-sky-stars--drift" />
      <div className="night-sky-bright" />
      <span className="night-sky-meteor" />
      <span className="night-sky-meteor night-sky-meteor--late" />
    </div>
  );
}

const sectionBtnBase =
  "mt-12 inline-flex items-center gap-3 font-heading text-xs tracking-[0.25em] uppercase transition-colors duration-300";

export function SectionButton({
  href,
  children,
  variant,
}: {
  href: string;
  children: string;
  variant: "navy" | "cream" | "brown";
}) {
  const styles = {
    navy: `${sectionBtnBase} border border-foreground/35 px-8 py-3.5 text-foreground hover:border-orange hover:text-orange`,
    cream: `${sectionBtnBase} border border-ink/30 bg-ink px-8 py-3.5 text-cream hover:border-orange hover:bg-orange`,
    brown: `${sectionBtnBase} border border-foreground/40 px-8 py-3.5 text-foreground hover:border-orange hover:bg-orange hover:text-cream`,
  } as const;

  return (
    <a href={href} className={styles[variant]}>
      {children} <span aria-hidden>→</span>
    </a>
  );
}

export { SiteHeader } from "@/components/site-header";

export function Breadcrumb({
  items,
  className = "bg-cream",
  withRibbon = false,
}: {
  items: readonly { label: string; href?: string }[];
  className?: string;
  /** 左上帯と同じセクション内に置くとき。帯と重ならないよう余白を取る */
  withRibbon?: boolean;
}) {
  return (
    <nav
      aria-label="パンくずリスト"
      className={
        withRibbon
          ? `relative z-10 hidden px-0 pt-6 pb-1 text-left text-ink sm:block ${className}`
          : `hidden ${className} px-4 pt-6 text-ink sm:block sm:px-10 lg:px-16`
      }
    >
      <ol
        className={
          withRibbon
            ? "flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 pl-[min(32vw,10.5rem)] font-heading text-[11px] tracking-[0.18em] uppercase text-ink/55 sm:pl-40"
            : "mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 font-heading text-[11px] tracking-[0.18em] uppercase text-ink/55"
        }
      >
        <li>
          <a href="/" className="hover:text-orange">
            Home
          </a>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden className="text-ink/30">
              /
            </span>
            {item.href ? (
              <a href={item.href} className="hover:text-orange">
                {item.label}
              </a>
            ) : (
              <span className="text-ink/80" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BlogCategoryBadge({
  categoryId,
}: {
  categoryId: (typeof blogs)[number]["category"];
}) {
  const category = blogCategories.find((entry) => entry.id === categoryId);

  if (!category || category.id === "all") return null;

  return (
    <span className="inline-block w-fit rounded border border-ink/25 px-1.5 py-0.5 text-[11px] leading-none text-ink/70">
      {category.label}
    </span>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-brown px-[8%] py-20 text-center text-foreground sm:px-10 lg:px-16"
    >
      <SectionLabel>CONTACT</SectionLabel>
      <h2 className="font-sans text-2xl sm:text-3xl">お問い合わせ</h2>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-foreground/80">
        ご連絡・ご相談はこちらからお気軽にどうぞ。
      </p>
      <SectionButton href="/contact" variant="brown">
        CONTACT
      </SectionButton>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-brown-deep px-[8%] py-6 text-xs sm:flex-row sm:px-10">
      <Logo />
      <nav aria-label="Footer" className="hidden sm:block">
        <ul className="flex flex-wrap justify-center gap-4 font-heading tracking-[0.2em] uppercase sm:gap-6">
          {menus.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-orange">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="font-heading text-[11px] tracking-[0.18em] text-foreground/65 sm:hidden">
        © 2026 Yuya Kigure
      </p>
      <p className="hidden sm:block" aria-hidden />
    </footer>
  );
}

const SKILL_LEVEL_MAX = 4;

function SkillStars({
  level,
  className = "text-sm",
}: {
  level: number;
  className?: string;
}) {
  const clamped = Math.min(Math.max(level, 1), SKILL_LEVEL_MAX);
  const label = skillLevelLabels[clamped - 1] ?? skillLevelLabels[0];

  return (
    <p
      className={`inline-flex shrink-0 gap-0.5 leading-none ${className}`}
      aria-label={`レベル ${clamped} / ${SKILL_LEVEL_MAX}: ${label}`}
    >
      {Array.from({ length: SKILL_LEVEL_MAX }, (_, i) => (
        <span
          key={i}
          aria-hidden
          className={i < clamped ? "text-orange" : "text-ink/25"}
        >
          {i < clamped ? "★" : "☆"}
        </span>
      ))}
    </p>
  );
}

export function SkillGrid() {
  return (
    <div className="mx-auto mt-12 max-w-3xl">
      <ul className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-start justify-between gap-4 text-left"
          >
            <div className="flex min-w-0 items-start gap-3">
              <SkillIcon id={skill.icon} />
              <div className="min-w-0">
                <p className="text-sm sm:text-[0.95rem]">{skill.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/55">
                  {skill.note}
                </p>
              </div>
            </div>
            <SkillStars level={skill.level} />
          </li>
        ))}
      </ul>
      <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-ink/50">
        {skillLevelLabels.map((label, i) => (
          <li key={label} className="inline-flex items-center gap-1.5">
            <SkillStars level={i + 1} className="text-[11px]" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkVisual({
  src,
  className = "aspect-[16/10] w-full",
  alt = "成果物",
  natural = false,
  width,
  height,
}: {
  src: string;
  className?: string;
  alt?: string;
  /** 画像の縦横比に合わせる（アプリの横長サンプルなど）。固定フレームにしない */
  natural?: boolean;
  width?: number;
  height?: number;
}) {
  if (natural) {
    return (
      <div className={`overflow-hidden bg-cream ${className || "w-full"}`}>
        <Image
          src={src}
          alt={alt}
          width={width ?? 1600}
          height={height ?? 900}
          className="h-auto w-full object-contain"
          sizes="(min-width: 1024px) 32rem, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 32rem, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}

/** Full-page site capture under the device mockup (same width). */
export function WorkDetailCapture({
  src,
  alt,
  width = 1498,
  height = 3574,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="w-full overflow-hidden bg-cream">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="(min-width: 768px) 48rem, 100vw"
      />
    </div>
  );
}

export function WorkImage({
  title,
  href,
  src,
  floatOnHover = false,
  natural = false,
  width,
  height,
}: {
  title: string;
  href: string;
  src: string;
  floatOnHover?: boolean;
  natural?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <a
      href={href}
      aria-label={`${title}の詳細`}
      className={
        floatOnHover
          ? "block transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_16px_30px_rgba(42,36,28,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
          : undefined
      }
    >
      <WorkVisual
        src={src}
        alt={title}
        natural={natural}
        width={width}
        height={height}
        className={natural ? "w-full" : undefined}
      />
    </a>
  );
}

export function AboutIntroImage() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden">
      <Image
        src="/products/top_about.jpg"
        alt="自分について"
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 28rem, 100vw"
      />
    </div>
  );
}
