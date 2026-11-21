import type { CSSProperties } from "react";
import type { Season } from "@/lib/season";

type Particle = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  drift: number;
  variant: 1 | 2 | 3;
};

/** 位置・速度を固定して SSR / CSR でちらつかないようにする */
const particles: readonly Particle[] = [
  { left: "3%", delay: "0s", duration: "16s", size: 12, drift: 28, variant: 1 },
  { left: "9%", delay: "2.4s", duration: "18s", size: 9, drift: -22, variant: 2 },
  { left: "15%", delay: "5.1s", duration: "14s", size: 14, drift: 36, variant: 3 },
  { left: "22%", delay: "1.2s", duration: "20s", size: 10, drift: -18, variant: 1 },
  { left: "31%", delay: "7.8s", duration: "15s", size: 11, drift: 24, variant: 2 },
  { left: "38%", delay: "3.6s", duration: "17s", size: 8, drift: -30, variant: 3 },
  { left: "46%", delay: "0.8s", duration: "19s", size: 13, drift: 20, variant: 1 },
  { left: "54%", delay: "6.2s", duration: "14s", size: 9, drift: -26, variant: 2 },
  { left: "61%", delay: "4.4s", duration: "21s", size: 12, drift: 32, variant: 3 },
  { left: "69%", delay: "1.9s", duration: "16s", size: 10, drift: -14, variant: 1 },
  { left: "76%", delay: "8.5s", duration: "18s", size: 11, drift: 22, variant: 2 },
  { left: "83%", delay: "2.8s", duration: "15s", size: 8, drift: -34, variant: 3 },
  { left: "90%", delay: "5.6s", duration: "20s", size: 13, drift: 18, variant: 1 },
  { left: "96%", delay: "0.4s", duration: "17s", size: 9, drift: -20, variant: 2 },
];

export function SeasonalBackground({ season }: { season: Season }) {
  return (
    <div className={`seasonal-bg seasonal-bg--${season}`} aria-hidden>
      {particles.map((particle, index) => (
        <span
          key={index}
          className={`seasonal-particle seasonal-particle--v${particle.variant}`}
          style={
            {
              "--sx": particle.left,
              "--sd": particle.delay,
              "--su": particle.duration,
              "--ss": `${particle.size}px`,
              "--sw": `${particle.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
