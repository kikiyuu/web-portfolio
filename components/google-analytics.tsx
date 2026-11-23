import { GoogleAnalytics } from "@next/third-parties/google";

/** GA4 — `NEXT_PUBLIC_GA_MEASUREMENT_ID` があるときだけ読み込む */
export function SiteGoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  if (!gaId) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
