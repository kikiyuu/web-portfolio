"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      if (!contact) {
        setVisible(false);
        return;
      }
      setVisible(contact.getBoundingClientRect().top < window.innerHeight);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-3 bottom-5 z-40 flex flex-col items-center gap-1 transition-all duration-500 sm:right-8 sm:bottom-8 sm:gap-1.5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="ページ上部へ戻る"
    >
      <Image
        src="/products/pisces-page-top.png?v=5"
        alt=""
        width={609}
        height={444}
        unoptimized
        className="h-auto w-[13.5vw] max-w-[4.75rem] sm:w-[9.5vw] sm:max-w-none"
      />
      <span className="font-heading text-[8px] tracking-[0.22em] text-cream sm:text-[10px] sm:tracking-[0.28em]">
        PAGE TOP
      </span>
    </button>
  );
}
