/** Canonical DataFast affiliate URL. Change the code here only. */
export const AFFILIATE_URL = "https://datafa.st/?via=sortino";

export const AFFILIATE_VIA = "sortino";

/** Google Tag Manager container. Empty string omits the snippet. No direct gtag; GA4 loads through this container. */
export const GTM_ID = "GTM-PJ8GQK6B";

/** Google Search Console verification token. Empty string omits the meta tag. */
export const GSC_VERIFICATION = "nywhuH-iVzOk2VJ4R3JUdPii4tMdLSR8IuWDuw0tpwE";

export const SITE_URL = "https://metricspick.com";
export const SITE_NAME = "metricspick";
export const CHECKED_LABEL = "26 November 2026";
export const CHECKED_ISO = "2026-11-26";

export function datafastUrl(path = "/"): string {
  const url = path.startsWith("http") ? new URL(path) : new URL(path, "https://datafa.st");
  if (url.hostname !== "datafa.st") {
    throw new Error(`datafastUrl only accepts datafa.st links: ${path}`);
  }
  url.protocol = "https:";
  url.hash = "";
  url.searchParams.set("via", AFFILIATE_VIA);
  return url.toString();
}

if (AFFILIATE_URL !== "https://datafa.st/?via=sortino") {
  throw new Error("AFFILIATE_URL must stay exactly https://datafa.st/?via=sortino");
}
if (datafastUrl("/") !== AFFILIATE_URL) {
  throw new Error(`datafastUrl("/") returned ${datafastUrl("/")} instead of ${AFFILIATE_URL}`);
}
if (datafastUrl("/docs/gdpr-cookieless-tracking") !== "https://datafa.st/docs/gdpr-cookieless-tracking?via=sortino") {
  throw new Error(`deep DataFast link missing via: ${datafastUrl("/docs/gdpr-cookieless-tracking")}`);
}

export function isDatafastHref(href: string): boolean {
  if (!/^https?:\/\//i.test(href)) return false;
  try {
    return new URL(href).hostname === "datafa.st";
  } catch {
    return false;
  }
}

export function withAffiliate(href: string): string {
  return isDatafastHref(href) ? datafastUrl(href) : href;
}
