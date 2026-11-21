import type { Metadata } from "next";
import { Cinzel, La_Belle_Aurore, Shippori_Mincho } from "next/font/google";
import Script from "next/script";
import { BackToTop } from "@/components/back-to-top";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const laBelleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  weight: "400",
  display: "block",
  adjustFontFallback: false,
  variable: "--font-belle",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "Yuya Kigure Portfolio Site",
  description: "Yuya Kigure Portfolio Site",
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const loadingChars = "YUYA KIGURE".split("");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${cinzel.variable} ${shipporiMincho.variable} ${laBelleAurore.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script id="loading-played" strategy="beforeInteractive">
          {`try{if(sessionStorage.getItem("loading-played")==="1"){var s=document.createElement("style");s.textContent="#loading-screen{display:none!important}";document.head.appendChild(s)}}catch(e){}`}
        </Script>
        <div id="loading-screen" className="loading-screen" aria-hidden>
          <div className="night-sky">
            <div className="night-sky-milky" />
            <div className="night-sky-stars" />
            <div className="night-sky-stars night-sky-stars--drift" />
            <div className="night-sky-bright" />
            <span className="night-sky-meteor" />
            <span className="night-sky-meteor night-sky-meteor--late" />
          </div>
          <p id="loading-script" className="loading-script">
            <span className="loading-script-text" aria-label="YUYA KIGURE">
              {loadingChars.map((char, i) => (
                <span
                  key={`${char}-${i}`}
                  className="loading-char"
                  style={{ ["--i" as string]: i }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </p>
        </div>
        <div id="site" className="contents">
          {children}
          <BackToTop />
        </div>
        <LoadingScreen />
      </body>
    </html>
  );
}
