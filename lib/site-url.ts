/** 本番の公開オリジン（末尾スラッシュなし） */
export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://kigubox-portfolio.vercel.app"
  );
}
