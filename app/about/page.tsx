import type { Metadata } from "next";
import Image from "next/image";
import { CareerTimeline } from "@/components/career-timeline";
import { HobbyGallery } from "@/components/hobby-gallery";
import {
  ContactSection,
  NightSky,
  SectionHeadingRow,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  SkillGrid,
  TricolorFrame,
  TricolorRibbon,
} from "@/components/site";

export const metadata: Metadata = {
  title: "About | Yuya Kigure Portfolio Site",
  description:
    "木暮裕也について — 自己紹介・スキル・経歴・趣味・ビジョン・お問い合わせ",
};

const careers = [
  {
    year: "NOW",
    title: "金融IT企業 / CoE補佐（客先常駐）",
    body: "同じ金融IT企業にて、システム開発からCoE補佐へ役割を変更。客先の専業信託銀行に常駐し、UI標準の考案や脆弱性対策のガイドライン掲載提案、共通機能の利用ルール整理などをサポートしています（8名体制）。",
  },
  {
    year: "2025",
    title: "金融系システム開発（保険・信託銀行など）",
    body: "要件定義からテスト・リリースまでの一連の開発プロセスを経験。保険・信託銀行案件の品質保証に加え、React / TypeScript / Java / Spring による画面改修や要件定義書作成、影響調査にも携わりました。",
  },
  {
    year: "2023",
    title: "CMSによるWebサイトの構築・運用",
    body: "WordPress・TYPO3・Movable Type などのCMSでWeb制作・運用に従事。1年目はクライアント折衝を含む新規構築、2年目は客先常駐で飲食店サイトなどの更新・運用保守を担当しました。",
  },
  {
    year: "2022",
    title: "WebデザインスクールでWeb制作の基礎を習得",
    body: "「Web動画クリエイターコース」を受講し、HTML / CSS・jQuery・CMS・Webデザイン・Illustrator / Photoshop を学習。動画編集（After Effects / Premiere Pro）の基礎にも触れました。",
  },
  {
    year: "2017",
    title: "携帯販売代理店で接客・販売に従事",
    body: "獨協大学経済学部卒業後、携帯販売代理店で接客・販売に従事。約1年間はコンサルティングマネージャー補佐（CM補佐）として、接客調整やスタッフサポート、進捗・数値管理も経験しました。",
  },
] as const;

const hobbies = [
  {
    caption: "海を見る（みなとみらいで）",
    image: "/products/hobbies/hobby-minatomirai-sea.jpg",
    alt: "みなとみらいの海",
    detail:
      "みなとみらいで海を眺める時間が好きです。仕事の合間や休日に、波と空を見ていると頭が少し整理されます。",
  },
  {
    caption: "サウナ",
    image: "/products/hobbies/hobby-sauna.jpg",
    alt: "サウナ",
    detail:
      "サウナで整えるのが好きです。熱と水風呂のリズムでオンオフを切り替えて、また動ける状態に戻しています。",
  },
  {
    caption: "お笑い",
    image: "/products/hobbies/comedy.jpg",
    alt: "お笑い",
    detail:
      "ライブや配信など、お笑いを観て笑う時間がリフレッシュになっています。好きな芸人やネタの話で人とつながるのも好きです。",
  },
  {
    caption: "音楽（ギターお休み中）",
    image: "/products/hobbies/bass.jpg",
    alt: "ベース",
    detail:
      "ベース・ギターを触るのが趣味です。いまは少しお休み中ですが、また音を出す時間を増やしていきたいと思っています。",
  },
  {
    caption: "部活・習い事",
    image: "/products/blog/blog-space.jpg",
    alt: "部活・習い事",
    detail:
      "学生時代の部活や、これまでに続けてきた習い事の経験は、いまの仕事のリズムにもつながっていると感じます。続けること、人と合わせることの感覚は、今も大事にしています。",
  },
  {
    caption: "好きな食べ物／飲み",
    image: "/products/blog/hoppy.jpg",
    alt: "好きな食べ物と飲み物",
    detail:
      "ホッピーや居酒屋ごはんが好きです。おいしいものを囲む時間が、いちばんの息抜きになります。群馬出身なので、地元の味もつい探してしまいます。",
  },
  {
    caption: "最近ハマってること",
    image: "/products/blog/blog-forest.jpg",
    alt: "最近ハマっていること",
    detail:
      "休日の散歩や、静かに過ごす時間を大切にしています。仕事とオフの切り替えのために、小さな習慣を増やすのがいまのマイブームです。",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-cream px-[8%] pb-20 pt-0 text-center text-ink sm:px-10 lg:px-16">
          <TricolorRibbon corner="tl" />
          <div className="relative z-10 pt-20 sm:pt-24">
            <SectionLabel>ABOUT</SectionLabel>
            <h1 className="font-sans text-2xl sm:text-3xl">自分について</h1>
            {/* 左=縦長テキスト広め / 右=横長画像（幅・高さともやや大きめ） */}
            <div className="mx-auto mt-12 w-full max-w-lg sm:mt-14 lg:max-w-4xl">
              <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-8">
                <div className="w-full lg:w-[52%] lg:shrink-0">
                  <TricolorFrame>
                    <div className="bg-[color-mix(in_srgb,var(--color-navy)_88%,white)] px-8 py-12 text-left text-cream sm:px-10 sm:py-14">
                      <p className="text-sm leading-8 sm:text-[0.9375rem] sm:leading-8">
                        群馬県出身の31歳。
                        <br />
                        大学卒業後、携帯販売、Web制作会社での制作・更新業務を経て、現在は金融業界でITエンジニアとして活動。
                        <br />
                        異なる分野での経験を通じて培った対応力を活かし、常に新しいことへの挑戦を大切にしています。
                      </p>
                    </div>
                  </TricolorFrame>
                </div>
                <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden lg:mx-0 lg:w-[48%] lg:max-w-none">
                  <Image
                    src="/products/top_about.jpg"
                    alt="自分について"
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 28rem, 90vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream px-[8%] py-20 text-ink sm:px-10 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <SectionHeadingRow ja="できること" en="SKILL" />
            <SkillGrid />
          </div>
        </section>

        <section className="relative bg-cream px-[8%] py-20 text-ink sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden
          >
            <TricolorRibbon corner="br" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl">
            <SectionHeadingRow ja="経歴" en="CAREER" />
            <CareerTimeline items={careers} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-navy px-[8%] py-20 text-center sm:px-10 lg:px-16">
          <NightSky />
          <div className="relative z-10">
            <SectionLabel>INTERESTS & HOBBIES</SectionLabel>
            <h2 className="font-sans text-2xl sm:text-3xl">
              プライベート・趣味
            </h2>
            <HobbyGallery items={hobbies} />
          </div>
        </section>

        <section className="bg-cream px-[8%] py-20 text-center text-ink sm:px-10 lg:px-16">
          <SectionLabel>VISION</SectionLabel>
          <h2 className="font-sans text-2xl sm:text-3xl">これからのこと</h2>
          <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden">
              <Image
                src="/products/vision_cat.jpg"
                alt="これからのこと"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
            <p className="text-sm leading-8 text-ink/80 lg:text-left">
              携帯販売での接客・現場感覚、Web制作でのサイト制作・運用、金融ITでのシステム開発——これまでの経験を活かし、これからはECサイトの運営やデジタルマーケティングにも挑戦していきたいと考えています。
              <br />
              SQLによるデータ活用や、AI駆動の開発・業務改善も取り入れながら、ビジネスとテクノロジーの両方から価値を届けられる存在を目指します。
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
