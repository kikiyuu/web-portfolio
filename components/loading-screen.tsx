"use client";

import { useEffect } from "react";

const STORAGE_KEY = "loading-played";
const WRITE_MS = 2200;
const HOLD_MS = 600;
const OUT_MS = 550;

type Phase = "boot" | "writing" | "hold" | "out" | "done";

const runtime = {
  started: false,
  phase: "boot" as Phase,
  timers: [] as number[],
};

function markPlayed() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // private mode
  }
}

function wasPlayed() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function screen() {
  return document.getElementById("loading-screen");
}

function scriptEl() {
  return document.getElementById("loading-script");
}

function clearTimers() {
  for (const id of runtime.timers) window.clearTimeout(id);
  runtime.timers = [];
}

function unlock() {
  document.getElementById("site")?.removeAttribute("inert");
  document.documentElement.classList.remove("is-loading");
}

function pinScriptToHero() {
  const script = scriptEl();
  const target = document.querySelector<HTMLElement>("[data-hero-title]");
  if (!script || !target) return;

  const rect = target.getBoundingClientRect();
  const style = getComputedStyle(target);
  script.classList.add("is-pinned");
  script.style.top = `${Math.round(rect.top)}px`;
  script.style.left = `${Math.round(rect.left + rect.width / 2)}px`;
  script.style.width = "auto";
  script.style.height = "auto";
  script.style.fontFamily = style.fontFamily;
  script.style.fontSize = style.fontSize;
  script.style.fontWeight = style.fontWeight;
  script.style.lineHeight = style.lineHeight;
  script.style.letterSpacing = style.letterSpacing;
}

/** 1文字ずつの span だと字間が変わるので、書いたあと本文と同じ1テキストに戻す */
function flattenScript() {
  const script = scriptEl();
  if (!script || script.classList.contains("is-plain")) return;
  script.textContent = "YUYA KIGURE";
  script.classList.add("is-plain");
  pinScriptToHero();
}

function applyPhase(phase: Phase) {
  runtime.phase = phase;
  const el = screen();
  if (!el) return;

  el.classList.toggle(
    "is-active",
    phase === "writing" || phase === "hold" || phase === "out",
  );
  el.classList.toggle("is-hold", phase === "hold");
  el.classList.toggle("is-out", phase === "out");

  if (phase === "hold") flattenScript();
}

function finish() {
  clearTimers();
  markPlayed();
  unlock();
  runtime.phase = "done";
  screen()?.remove();
}

function beginLoading() {
  if (runtime.started) return;
  runtime.started = true;

  if (wasPlayed()) {
    finish();
    return;
  }

  document.documentElement.classList.add("is-loading");
  document.getElementById("site")?.setAttribute("inert", "");
  applyPhase("boot");
  pinScriptToHero();

  const onResize = () => {
    if (runtime.phase !== "done") pinScriptToHero();
  };
  window.addEventListener("resize", onResize);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      finish();
    }
  };
  window.addEventListener("keydown", onKeyDown);

  if (prefersReducedMotion()) {
    runtime.timers.push(
      window.setTimeout(() => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("resize", onResize);
        finish();
      }, 350),
    );
    return;
  }

  const startWriting = () => {
    if (runtime.phase !== "boot") return;
    pinScriptToHero();
    applyPhase("writing");

    runtime.timers.push(
      window.setTimeout(() => {
        applyPhase("hold");

        runtime.timers.push(
          window.setTimeout(() => {
            applyPhase("out");

            runtime.timers.push(
              window.setTimeout(() => {
                window.removeEventListener("keydown", onKeyDown);
                window.removeEventListener("resize", onResize);
                finish();
              }, OUT_MS),
            );
          }, HOLD_MS),
        );
      }, WRITE_MS),
    );
  };

  const bootTimer = window.setTimeout(startWriting, 500);
  runtime.timers.push(bootTimer);
  document.fonts.ready.then(() => {
    window.clearTimeout(bootTimer);
    startWriting();
  });
}

/** layout の固定オーバーレイを制御する（Strict Mode 再マウントで消えない） */
export function LoadingScreen() {
  useEffect(() => {
    beginLoading();
  }, []);

  return null;
}
