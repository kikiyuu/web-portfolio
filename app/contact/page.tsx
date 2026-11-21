import type { Metadata } from "next";
import {
  SectionLabel,
  SiteFooter,
  SiteHeader,
  TricolorRibbon,
} from "@/components/site";

export const metadata: Metadata = {
  title: "Contact | Yuya Kigure Portfolio Site",
  description: "お問い合わせ",
};

const fields = [
  { name: "name", label: "NAME", type: "text" },
  { name: "email", label: "MAIL ADDRESS", type: "email" },
] as const;

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex-1 bg-cream text-ink">
        <section
          id="contact"
          className="relative overflow-hidden px-[8%] pb-20 pt-0 text-center sm:px-10 lg:px-16"
        >
          <TricolorRibbon corner="tl" className="!hidden sm:!flex" />
          <TricolorRibbon corner="br" className="!hidden sm:!flex" />
          <div className="relative z-10 pt-14">
            <SectionLabel>CONTACT</SectionLabel>
            <h1 className="font-sans text-2xl sm:text-3xl">お問い合わせ</h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/55">
              ポートフォリオサイトのサンプルにつき、実際の送信はできません。
            </p>

            <form className="mx-auto mt-12 max-w-lg text-left">
              {fields.map((field) => (
                <label key={field.name} className="mt-8 block first:mt-0">
                  <span className="font-heading text-[11px] tracking-[0.25em] text-brown">
                    {field.label}
                  </span>
                  <input
                    name={field.name}
                    type={field.type}
                    className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink"
                  />
                </label>
              ))}

              <label className="mt-8 block">
                <span className="font-heading text-[11px] tracking-[0.25em] text-brown">
                  MESSAGE
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink"
                />
              </label>

              <button
                type="submit"
                disabled
                className="mt-10 w-full border border-brown px-8 py-3.5 font-heading text-xs tracking-[0.25em] text-brown/45"
              >
                送信する
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
