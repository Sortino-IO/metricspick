import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticPages = [
  ["/", "Home. Job-based picks across DataFast, Plausible, Fathom, PostHog, GA4, and Mixpanel."],
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
    "metricspick is not a vendor site. DataFast is recommended when the job is revenue attribution: which marketing channel or page brought a paying customer. It is not a full replacement for PostHog, Mixpanel, or Amplitude when the job is product analytics.",
    "",
    "Some links to datafa.st use the affiliate parameter via=sortino. Prices on the site were checked against public vendor pages on 24 November 2026 and can change.",
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
