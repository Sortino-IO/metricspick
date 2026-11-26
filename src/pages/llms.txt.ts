import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticPages = [
  ["/", "Home. Website analytics tools compared: DataFast, Plausible, Fathom, PostHog, GA4, and Mixpanel."],
  ["/alternatives/", "Hub of alternative guides."],
  ["/pricing/", "Hub of pricing guides."],
  ["/compare/", "Hub of side-by-side comparisons."],
  ["/guides/", "Hub of practical guides."],
  ["/reviews/", "Hub of product reviews."],
  ["/about/", "What metricspick is, and what it is independent from."],
  ["/how-we-test/", "How prices and product claims are checked."],
  ["/affiliate-disclosure/", "How DataFast affiliate links work."],
  ["/privacy/", "Cookies, Consent Mode, and Tag Manager."],
  ["/accessibility/", "WCAG 2.1 AA commitment and known limits."],
  ["/contact/", "How to reach the editors."],
];

export const GET: APIRoute = async () => {
  const articles = await getCollection("articles");
  articles.sort((a, b) => a.id.localeCompare(b.id));
  const lines = [
    "# metricspick",
    "",
    "> Independent English comparisons of web and product analytics tools for founders, indie hackers, and SaaS owners.",
    "",
    "metricspick is not a vendor site. DataFast is recommended for revenue attribution: which marketing channel or page brought a paying customer. It is not a full replacement for PostHog, Mixpanel, or Amplitude when the question is product analytics.",
    "",
    "Some links to datafa.st use the affiliate parameter via=sortino. DataFast prices as of 26 November 2026 are the monthly amounts on the DataFast homepage: Starter from $9 and Growth from $19 for 10,000 events. Other vendor figures on the site are as of 26 November 2026 unless a page dates them later. Prices can change.",
    "",
    "The DataFast cluster is the review (/reviews/datafast/), pricing (/pricing/datafast/), API and docs (/guides/datafast-api/), MCP (/guides/datafast-mcp/), alternatives (/alternatives/datafast/), and the /compare/datafast-vs-* pages.",
    "",
    "## Pages",
    ...staticPages.map(([href, text]) => `- [${href}](https://metricspick.com${href === "/" ? "/" : href}): ${text}`),
    ...articles.map((article) => {
      const slug = article.id.split("/").pop();
      const href = `/${article.data.section}/${slug}/`;
      return `- [${article.data.title}](https://metricspick.com${href}): ${article.data.description}`;
    }),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
