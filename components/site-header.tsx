"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { BlogSocialLinks } from "@/components/blog-social";
import { Logo, menus } from "@/components/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const panel =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[60] sm:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-ink/15 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="メニューを閉じる"
          onClick={() => setOpen(false)}
        />

        <div
          id={panelId}
          className={`absolute left-1/2 top-1/2 z-10 flex h-[94dvh] w-[94vw] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto overscroll-contain bg-white/55 backdrop-blur-md transition-[opacity,transform] duration-300 ${
            open ? "opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex shrink-0 items-center justify-end px-[8%] py-4">
            <button
              type="button"
              className="relative z-20 flex size-10 items-center justify-center text-ink"
              aria-label="メニューを閉じる"
              onClick={() => setOpen(false)}
            >
              <span className="relative block size-[1.15rem]" aria-hidden>
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-ink" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-ink" />
              </span>
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center px-8 pb-14 pt-2 text-ink"
          >
            <a
              href="/"
              className="mb-6 shrink-0"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Yuya Kigure"
                width={608}
                height={608}
                className="size-[4.5rem] invert"
              />
            </a>

            <div className="mb-10 h-px w-full bg-ink/20" aria-hidden />

            <ul className="flex flex-col items-center gap-6 text-center font-heading text-sm tracking-[0.3em] uppercase">
              {menus.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={
                      item.name === "Contact"
                        ? "inline-block border border-ink/45 px-5 py-2 hover:border-orange hover:text-orange"
                        : "hover:text-orange"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex w-full flex-col items-center">
              <BlogSocialLinks />
            </div>
          </nav>
        </div>
      </div>,
      document.body,
    );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        open
          ? "pointer-events-none bg-transparent"
          : "bg-navy/95 backdrop-blur"
      }`}
    >
      <div className="relative z-50 flex items-center justify-between gap-4 px-[8%] py-4 sm:px-10">
        <Logo priority />

        <nav aria-label="Main" className="ml-auto hidden sm:block">
          <ul className="flex items-center justify-end gap-x-8 font-heading text-xs tracking-[0.2em] uppercase">
            {menus.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-orange">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`flex size-10 items-center justify-center sm:hidden ${
            open ? "opacity-0" : ""
          }`}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label="メニューを開く"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">メニュー</span>
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden>
            <span className="h-px w-full bg-foreground" />
            <span className="h-px w-full bg-foreground" />
            <span className="h-px w-full bg-foreground" />
          </span>
        </button>
      </div>

      {panel}
    </header>
  );
}
