"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export type HobbyItem = {
  caption: string;
  image: string;
  alt: string;
  detail: string;
};

export function HobbyGallery({ items }: { items: readonly HobbyItem[] }) {
  const [active, setActive] = useState<HobbyItem | null>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.caption}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group w-full text-left transition-opacity hover:opacity-90"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <p className="mt-3 text-center text-sm">{item.caption}</p>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 p-4 sm:p-8"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[min(90svh,40rem)] w-full max-w-lg overflow-y-auto bg-cream px-6 py-8 text-ink shadow-[0_12px_40px_rgba(16,28,43,0.18)] sm:px-10 sm:py-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 font-heading text-xs tracking-[0.2em] text-ink/55 uppercase transition-colors hover:text-orange"
              aria-label="閉じる"
            >
              Close
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={active.image}
                alt={active.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 32rem, 100vw"
              />
            </div>
            <h3
              id={titleId}
              className="mt-6 font-sans text-xl sm:text-2xl"
            >
              {active.caption}
            </h3>
            <p className="mt-4 text-sm leading-8 text-ink/80 whitespace-pre-line">
              {active.detail}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
