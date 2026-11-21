export const seasons = ["spring", "summer", "autumn", "winter"] as const;

export type Season = (typeof seasons)[number];

/** 日本（Asia/Tokyo）の月で判定。春 3–5 / 夏 6–8 / 秋 9–11 / 冬 12–2 */
export function getSeason(date: Date = new Date()): Season {
  const month = getTokyoMonth(date);
  if (month >= 3 && month <= 5) return "spring";
  if (month >= 6 && month <= 8) return "summer";
  if (month >= 9 && month <= 11) return "autumn";
  return "winter";
}

export function parseSeason(value: string | null | undefined): Season | null {
  if (!value) return null;
  return seasons.includes(value as Season) ? (value as Season) : null;
}

function getTokyoMonth(date: Date): number {
  const part = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
  })
    .formatToParts(date)
    .find((item) => item.type === "month");
  return Number(part?.value ?? date.getMonth() + 1);
}
