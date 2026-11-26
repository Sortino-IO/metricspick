import { CHECKED_LABEL } from "../config/site";

export type ToolId =
  | "datafast"
  | "plausible"
  | "fathom"
  | "posthog"
  | "ga4"
  | "mixpanel"
  | "amplitude";

export interface ToolFact {
  id: ToolId;
  name: string;
  priceLabel: string;
  bestFor: string;
  attribution: string;
  attributionTone?: "yes" | "partial";
  cookies: string;
  href: string;
  /** Official marketing homepage. Affiliate tools are linked through AffiliateLink instead. */
  site?: string;
  affiliate?: boolean;
}

export const tools: Record<ToolId, ToolFact> = {
  datafast: {
    id: "datafast",
    name: "DataFast",
    priceLabel: "Starter from $9/mo",
    bestFor: "Which channel and page bring paying customers",
    attribution: "Built for this",
    attributionTone: "yes",
    cookies: "Cookie or cookieless",
    href: "/reviews/datafast/",
    affiliate: true,
  },
  plausible: {
    id: "plausible",
    name: "Plausible",
    priceLabel: "Starter from $9/mo",
    bestFor: "Lightweight, cookieless traffic stats",
    attribution: "Revenue on Business",
    attributionTone: "partial",
    cookies: "Cookieless",
    href: "/alternatives/plausible/",
    site: "https://plausible.io/",
  },
  fathom: {
    id: "fathom",
    name: "Fathom",
    priceLabel: "from $15/mo",
    bestFor: "Simple privacy analytics, many sites",
    attribution: "Events and revenue included",
    attributionTone: "partial",
    cookies: "Cookieless",
    href: "/alternatives/fathom-analytics/",
    site: "https://usefathom.com/",
  },
  posthog: {
    id: "posthog",
    name: "PostHog",
    priceLabel: "Free for 1M events",
    bestFor: "Product analytics, replay, and flags",
    attribution: "Via events you instrument",
    attributionTone: "partial",
    cookies: "Configurable",
    href: "/pricing/posthog/",
    site: "https://posthog.com/",
  },
  ga4: {
    id: "ga4",
    name: "GA4",
    priceLabel: "Free",
    bestFor: "Teams already in Google Ads",
    attribution: "Ads and explorations",
    attributionTone: "partial",
    cookies: "Cookies",
    href: "/alternatives/google-analytics/",
    site: "https://marketingplatform.google.com/about/analytics/",
  },
  mixpanel: {
    id: "mixpanel",
    name: "Mixpanel",
    priceLabel: "Free for 1M events",
    bestFor: "Event analytics for product teams",
    attribution: "Multi-touch on Growth+",
    attributionTone: "partial",
    cookies: "Depends on setup",
    href: "/pricing/mixpanel/",
    site: "https://mixpanel.com/",
  },
  amplitude: {
    id: "amplitude",
    name: "Amplitude",
    priceLabel: "Free for 2M events",
    bestFor: "Product analytics with a large free tier",
    attribution: "Via events you instrument",
    attributionTone: "partial",
    cookies: "Depends on setup",
    href: "/pricing/amplitude/",
    site: "https://amplitude.com/",
  },
};

const mentionedTools: { id: ToolId; pattern: RegExp }[] = [
  { id: "datafast", pattern: /\bDataFast\b/ },
  { id: "plausible", pattern: /\bPlausible\b/ },
  { id: "fathom", pattern: /\bFathom\b/ },
  { id: "posthog", pattern: /\bPostHog\b/ },
  { id: "ga4", pattern: /\bGA4\b|\bGoogle Analytics\b/ },
  { id: "mixpanel", pattern: /\bMixpanel\b/ },
  { id: "amplitude", pattern: /\bAmplitude\b/ },
];

/** Catalog tools named in a short recommendation line, in catalog order. */
export function toolsNamedIn(text: string): ToolId[] {
  return mentionedTools.filter((tool) => tool.pattern.test(text)).map((tool) => tool.id);
}

const articleVisits: Record<string, ToolId[]> = {
  "alternatives/amplitude": ["amplitude"],
  "alternatives/datafast": ["datafast"],
  "alternatives/fathom-analytics": ["fathom"],
  "alternatives/google-analytics": ["ga4"],
  "alternatives/mixpanel": ["mixpanel"],
  "alternatives/plausible": ["plausible"],
  "alternatives/posthog": ["posthog"],
  "pricing/amplitude": ["amplitude"],
  "pricing/datafast": ["datafast"],
  "pricing/mixpanel": ["mixpanel"],
  "pricing/posthog": ["posthog"],
  "reviews/datafast": ["datafast"],
  "compare/datafast-vs-amplitude": ["datafast", "amplitude"],
  "compare/datafast-vs-fathom": ["datafast", "fathom"],
  "compare/datafast-vs-google-analytics": ["datafast", "ga4"],
  "compare/datafast-vs-mixpanel": ["datafast", "mixpanel"],
  "compare/datafast-vs-plausible": ["datafast", "plausible"],
  "compare/datafast-vs-posthog": ["datafast", "posthog"],
  "compare/posthog-vs-google-analytics": ["posthog", "ga4"],
  "guides/datafast-api": ["datafast"],
  "guides/datafast-mcp": ["datafast"],
};

/** Tools a hub or guide-list entry is specifically about. Empty when the entry is not one vendor or one matchup. */
export function visitIdsForArticle(id: string): ToolId[] {
  return articleVisits[id] ?? [];
}

export interface CompareRow {
  id: ToolId;
  name: string;
  bestFor: string;
  attribution: string;
  attributionTone?: "yes" | "partial";
  cookies: string;
  price: string;
  highlight: boolean;
}

export function rows(ids: ToolId[], highlight: ToolId): CompareRow[] {
  return ids.map((id) => {
    const tool = tools[id];
    return {
      id,
      name: tool.name,
      bestFor: tool.bestFor,
      attribution: tool.attribution,
      attributionTone: tool.attributionTone,
      cookies: tool.cookies,
      price: tool.priceLabel,
      highlight: id === highlight,
    };
  });
}

const priceNote = `Public list prices as of ${CHECKED_LABEL}. DataFast amounts are the monthly USD prices on the DataFast homepage. Plausible amounts are the monthly USD prices on the Plausible homepage. PostHog, Mixpanel, and Amplitude stay free inside a published allowance and bill usage after that. Confirm the current rate before you buy.`;

export const comparisons: Record<string, { highlight: ToolId; ids: ToolId[]; note: string }> = {
  "ga-alternatives": {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom", "posthog", "ga4", "mixpanel"],
    note: priceNote,
  },
  "amplitude-alternatives": {
    highlight: "datafast",
    ids: ["amplitude", "posthog", "mixpanel", "datafast", "ga4", "plausible"],
    note: priceNote,
  },
  "posthog-alternatives": {
    highlight: "datafast",
    ids: ["posthog", "mixpanel", "amplitude", "datafast", "plausible", "ga4"],
    note: priceNote,
  },
  "mixpanel-alternatives": {
    highlight: "datafast",
    ids: ["mixpanel", "posthog", "amplitude", "datafast", "ga4", "fathom"],
    note: priceNote,
  },
  "plausible-alternatives": {
    highlight: "datafast",
    ids: ["plausible", "fathom", "datafast", "ga4", "posthog"],
    note: priceNote,
  },
  "fathom-alternatives": {
    highlight: "datafast",
    ids: ["fathom", "plausible", "datafast", "ga4", "posthog"],
    note: priceNote,
  },
  "posthog-vs-ga": {
    highlight: "posthog",
    ids: ["posthog", "ga4", "datafast", "mixpanel", "amplitude"],
    note: priceNote,
  },
  attribution: {
    highlight: "datafast",
    ids: ["datafast", "ga4", "fathom", "plausible", "mixpanel", "posthog", "amplitude"],
    note: priceNote,
  },
  cookieless: {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom", "ga4", "posthog"],
    note: priceNote,
  },
  "datafast-review": {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom", "posthog", "ga4", "mixpanel", "amplitude"],
    note: priceNote,
  },
  "posthog-pricing": {
    highlight: "posthog",
    ids: ["posthog", "mixpanel", "amplitude", "datafast", "ga4"],
    note: priceNote,
  },
  "amplitude-pricing": {
    highlight: "amplitude",
    ids: ["amplitude", "posthog", "mixpanel", "datafast", "ga4"],
    note: priceNote,
  },
  "mixpanel-pricing": {
    highlight: "mixpanel",
    ids: ["mixpanel", "posthog", "amplitude", "datafast", "ga4"],
    note: priceNote,
  },
  "datafast-alternatives": {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom", "posthog", "ga4", "mixpanel"],
    note: "DataFast prices as of 26 November 2026 are the monthly USD amounts on the DataFast homepage. Neighbor prices are the figures dated on the linked pages. Simple Analytics and Umami are discussed in the article and are not rows in this table.",
  },
  "datafast-pricing": {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom", "posthog", "ga4"],
    note: "DataFast monthly prices as of 26 November 2026 are the USD amounts on the DataFast homepage. Neighbor headline figures are from the same day. Confirm the current rate before you buy.",
  },
  "datafast-vs-plausible": {
    highlight: "datafast",
    ids: ["datafast", "plausible", "fathom"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. Plausible’s pageview ladder is from plausible.io the same day. The full DataFast ladder is on the DataFast pricing page.",
  },
  "datafast-vs-fathom": {
    highlight: "datafast",
    ids: ["datafast", "fathom", "plausible"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. Fathom’s prices are from usefathom.com/pricing the same day. The full DataFast ladder is on the DataFast pricing page.",
  },
  "datafast-vs-ga": {
    highlight: "datafast",
    ids: ["datafast", "ga4", "plausible", "posthog"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. Standard GA4 is free.",
  },
  "datafast-vs-posthog": {
    highlight: "datafast",
    ids: ["datafast", "posthog", "mixpanel", "ga4"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. PostHog’s free analytics allowance and anonymous event rates are from posthog.com the same day.",
  },
  "datafast-vs-mixpanel": {
    highlight: "datafast",
    ids: ["datafast", "mixpanel", "posthog", "amplitude"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. Mixpanel’s free cap and the 1.5 million event pack are from mixpanel.com/pricing the same day.",
  },
  "datafast-vs-amplitude": {
    highlight: "datafast",
    ids: ["datafast", "amplitude", "posthog", "mixpanel"],
    note: "DataFast prices as of 26 November 2026 are from the DataFast homepage. Amplitude’s free plan of 2 million events a month is from amplitude.com/pricing the same day.",
  },
};

export interface Ladder {
  title: string;
  intro: string;
  columns: string[];
  rows: string[][];
  note: string;
}

export const ladders: Record<string, Ladder> = {
  datafast: {
    title: "DataFast monthly prices",
    intro:
      "Monthly USD prices on the DataFast homepage as of 26 November 2026. Yearly billing is ten times the monthly price. The homepage calls that two months free.",
    columns: ["Monthly events", "Starter", "Growth"],
    rows: [
      ["10k", "$9", "$19"],
      ["100k", "$19", "$39"],
      ["200k", "$29", "$59"],
      ["500k", "$49", "$99"],
      ["1M", "$69", "$139"],
      ["2M", "$89", "$179"],
      ["5M", "$129", "$259"],
      ["10M", "$169", "$339"],
      ["10M+", "$199", "$399"],
    ],
    note: "On the 10,000-event cards, both plans include 100,000 AI bot requests and API, CLI, and MCP. Starter is 1 website, 1 team member, and 3 years of retention. Social mentions and X link attribution are off on Starter. Growth is 30 websites, 30 team members, and 5+ years of retention, and those two features are on. A 14-day trial does not require a card. Extra bot-traffic capacity is $9 per extra million requests per month. A separate AI visibility product has its own prices and is not in this table.",
  },
  plausible: {
    title: "Plausible monthly prices",
    intro:
      "Monthly USD prices from the volume control on plausible.io on 26 November 2026. Yearly billing is ten times the monthly price.",
    columns: ["Monthly pageviews", "Starter", "Growth", "Business"],
    rows: [
      ["10k", "$9", "$14", "$19"],
      ["100k", "$19", "$29", "$39"],
      ["200k", "$29", "$44", "$59"],
      ["500k", "$49", "$74", "$99"],
      ["1M", "$69", "$104", "$139"],
      ["2M", "$89", "$134", "$179"],
      ["5M", "$129", "$194", "$259"],
      ["10M", "$169", "$254", "$339"],
    ],
    note: "Plausible’s docs describe Starter as one site for solo use, Growth as the team and sharing plan (up to 3 sites and 3 members), and Business as the plan for funnels, journeys, revenue tracking, custom properties, the Stats API, and Data Studio. Enterprise is custom. Trials last 30 days and do not require a card. Usage counts pageviews and custom events across the sites in a team.",
  },
  fathom: {
    title: "Fathom monthly prices",
    intro:
      "Monthly USD prices from the pageview control on usefathom.com/pricing as of 26 November 2026. Standard is the entry plan. Business adds team seats and a higher API limit. Both include the same analytics features.",
    columns: ["Monthly pageviews", "Sites included", "Standard", "Business"],
    rows: [
      ["Up to 100k", "50", "$15", "$39"],
      ["Up to 200k", "50", "$25", "$49"],
      ["Up to 500k", "50", "$45", "$89"],
      ["Up to 1M", "75", "$60", "$119"],
      ["Up to 2M", "100", "$100", "$199"],
      ["Up to 5M", "150", "$140", "$239"],
      ["Up to 10M", "200", "$200", "$299"],
      ["Up to 15M", "250", "$290", "$439"],
      ["Up to 20M", "300", "$380", "$569"],
      ["Up to 25M", "350", "$470", "$699"],
    ],
    note: "Yearly plans cost 10 times the monthly price. Above 25 million pageviews, Fathom quotes a custom plan. Extra seats are $10 a month or $100 a year, up to 50 seats. Extra site packs of 50 are $10 a month or $100 a year. The trial is 7 days and requires a card. There is no free plan. Event and revenue tracking are listed on every plan.",
  },
  posthog: {
    title: "PostHog product analytics rates",
    intro:
      "PostHog publishes usage pricing rather than a seat fee. The free allowance and the anonymous-event rates below are from posthog.com/pricing and the product-analytics pricing doc, as of 26 November 2026.",
    columns: ["Anonymous events / month", "Price per event"],
    rows: [
      ["First 1 million", "$0"],
      ["1 to 2 million", "$0.00005"],
      ["2 to 15 million", "$0.0000343"],
      ["15 to 50 million", "$0.0000295"],
      ["50 to 100 million", "$0.0000218"],
      ["100 to 250 million", "$0.000015"],
      ["250 million and above", "$0.000009"],
    ],
    note: "Other free monthly allowances: 5,000 session recordings, 1 million feature-flag requests, 100,000 exceptions, and 1,500 survey responses. The free plan includes 1 project and 1 year of event retention, and usage stops at the free limits. Pay-as-you-go keeps the same free allowance, then bills overage, with 6 projects and 2 years of retention. Identified events share the first 1 million free and then cost more. Anonymous events can cost up to 4 times less.",
  },
  mixpanel: {
    title: "Mixpanel Growth event packs",
    intro:
      "As of 26 November 2026, Mixpanel’s free plan covers up to 1 million events per month. Growth’s published starting price is $0, with that first million included. These are the published Growth packs.",
    columns: ["Events / month", "Yearly billing", "Monthly billing"],
    rows: [
      ["1M", "$0", "$0"],
      ["1.5M", "$100", "$140"],
      ["2M", "$185", "$259"],
      ["3M", "$270", "$378"],
      ["5M", "$438", "$613"],
      ["10M", "$840", "$1,176"],
      ["20M", "$1,635", "$2,289"],
    ],
    note: "Free also includes 10,000 session replays, up to 10 active feature flags, and up to 1,000 experiment MEUs. Growth includes multi-touch attribution; the free plan does not. Group Analytics and Data Pipelines are paid add-ons, and their prices are not publicly listed. Above 20 million events, contact sales. Enterprise is custom.",
  },
  amplitude: {
    title: "Amplitude plans with a published price",
    intro:
      "As of 26 November 2026, Amplitude leads with free analytics and unlimited seats on every plan. Dollar amounts above the free allowance are not a single public list price.",
    columns: ["Plan", "Published price", "Events"],
    rows: [
      ["Free", "$0, no card", "2 million / month"],
      ["Plus", "Starting price $0, card required", "First 2 million free, scales to 70 million"],
      ["Growth", "Event-based, quoted", "Custom"],
      ["Enterprise", "Event-based, quoted", "Custom"],
    ],
    note: "The Free plan lists 10,000 monthly session replays and 1 year of retention. Plus lists 2 years of retention, custom events, 20 behavioral cohorts, alerts, and heatmaps. Qualifying startups (fewer than 20 employees and under $10 million raised) can get one year of Growth at no cost, with a published meter of up to 100 million events or 200,000 MTUs. Plus prices above the free allowance come from Amplitude’s volume calculator, not a single published rate.",
  },
};

export interface SourceLink {
  label: string;
  href: string;
}

export const priceSources: SourceLink[] = [
  { label: "DataFast homepage (plan prices and limits)", href: "https://datafa.st/" },
  { label: "DataFast terms (events, trial, plan limits)", href: "https://datafa.st/tos" },
  { label: "DataFast data processing agreement", href: "https://datafa.st/dpa" },
  { label: "DataFast cookieless tracking", href: "https://datafa.st/docs/gdpr-cookieless-tracking" },
  { label: "DataFast revenue attribution guide", href: "https://datafa.st/docs/revenue-attribution-guide" },
  { label: "DataFast MCP introduction", href: "https://datafa.st/docs/mcp-introduction" },
  { label: "Plausible homepage pricing slider", href: "https://plausible.io/" },
  { label: "Plausible subscription plans", href: "https://plausible.io/docs/subscription-plans" },
  { label: "Fathom pricing", href: "https://usefathom.com/pricing" },
  { label: "PostHog pricing", href: "https://posthog.com/pricing" },
  { label: "PostHog product analytics pricing", href: "https://posthog.com/docs/product-analytics/pricing" },
  { label: "PostHog anonymous vs identified events", href: "https://posthog.com/docs/data/anonymous-vs-identified-events" },
  { label: "Mixpanel pricing", href: "https://mixpanel.com/pricing/" },
  { label: "Mixpanel pricing docs", href: "https://docs.mixpanel.com/docs/pricing" },
  { label: "Amplitude pricing", href: "https://amplitude.com/pricing" },
  { label: "Google Analytics", href: "https://marketingplatform.google.com/about/analytics/" },
];
