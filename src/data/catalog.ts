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
  },
};

export interface CompareRow {
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

const priceNote = `Public list prices checked ${CHECKED_LABEL}. DataFast amounts are the monthly USD prices in the homepage pricing data (datafa.st/pricing returned 404 that day). Plausible amounts are the monthly USD prices in the homepage slider. PostHog, Mixpanel, and Amplitude stay free inside a published allowance and bill usage after that. Confirm the current rate before you buy.`;

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
      "These are the monthly USD prices embedded in the public DataFast homepage on 24 November 2026. Yearly billing is ten times the monthly price (the homepage stores a 12-month anchor and a 10-month charge). There is no /pricing URL; that path returned 404.",
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
    note: "Starter is 1 website, 1 team member, and 3 years of retention. Growth is 30 websites, 30 team members, 5+ years of retention, social mentions, and link attribution. A 14-day trial does not require a card. Optional bot-traffic capacity above the included 100,000 requests is $9 per extra million requests per month.",
  },
  plausible: {
    title: "Plausible monthly prices",
    intro:
      "Monthly USD prices from the volume slider on plausible.io on 24 November 2026. The same script prices a year at ten times the monthly rate.",
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
    title: "Fathom prices we could verify",
    intro:
      "On 24 November 2026, usefathom.com/pricing and its meta description listed plans from $15/month for up to 100,000 monthly pageviews and 50 sites. At that 100,000 pageview step the page showed Standard at $15/month and Business at $39/month.",
    columns: ["At up to 100k pageviews", "Monthly", "What it adds"],
    rows: [
      ["Standard", "$15", "Every analytics feature, 50 sites, email support"],
      ["Business", "$39", "10 seats plus you, roles, audit log, higher API limit"],
      ["Custom", "Quote", "Above 25 million pageviews, invoicing, SLA"],
    ],
    note: "The page says yearly plans cost 10 times the monthly price. Extra seats are $10/month or $100/year. Extra site packs of 50 are $10/month or $100/year. The pageview slider continues up to 25 million; those higher dollar steps were not in the static HTML, so they are not copied here. There is a 7-day trial and the page says a card is required. Fathom says it has no free plan.",
  },
  posthog: {
    title: "PostHog product analytics rates",
    intro:
      "PostHog publishes usage pricing rather than a seat fee. The free allowance and the anonymous-event rates below are from posthog.com/pricing and the product-analytics pricing doc, checked 24 November 2026.",
    columns: ["Anonymous events / month", "Price per event"],
    rows: [
      ["First 1 million", "$0"],
      ["1–2 million", "$0.00005"],
      ["2–15 million", "$0.0000343"],
      ["15–50 million", "$0.0000295"],
      ["50–100 million", "$0.0000218"],
      ["100–250 million", "$0.000015"],
      ["250 million and above", "$0.000009"],
    ],
    note: "Other free monthly allowances on the pricing page: 5,000 session recordings, 1 million feature-flag requests, 100,000 exceptions, 1,500 survey responses. The free plan includes 1 project and 1 year of event retention, and usage stops at the free limits. Pay-as-you-go keeps the same free allowance, then bills overage, with 6 projects and 2 years of retention. Identified events share the first 1 million free and add a person-profile charge; PostHog says anonymous events can be up to 4 times cheaper. That identified rate card is not copied here.",
  },
  mixpanel: {
    title: "Mixpanel Growth event packs",
    intro:
      "Mixpanel’s pricing page, checked 24 November 2026, lists a free plan up to 1 million events per month and a Growth plan that starts at $0 with that first million included. These are the published Growth packs.",
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
    note: "Free also includes 10,000 session replays, up to 10 active feature flags, and up to 1,000 experiment MEUs. Growth includes multi-touch attribution; the free plan does not. Group Analytics and Data Pipelines are paid add-ons. The page did not print a dollar price for those add-ons in the text captured here. Above 20 million events, Mixpanel says to contact sales. Enterprise is custom.",
  },
  amplitude: {
    title: "Amplitude plans with a published price",
    intro:
      "Amplitude’s pricing page, checked 24 November 2026, leads with free analytics and says every plan includes unlimited seats. Dollar amounts above the free allowance are not a single public list price.",
    columns: ["Plan", "Published price", "Events"],
    rows: [
      ["Free", "$0, no card", "2 million / month"],
      ["Plus", "Starts at $0, card required", "First 2 million free, scales to 70 million"],
      ["Growth", "Event-based, quoted", "Custom"],
      ["Enterprise", "Event-based, quoted", "Custom"],
    ],
    note: "The Free plan lists 10,000 monthly session replays and 1 year of retention. Plus lists 2 years of retention, custom events, 20 behavioral cohorts, alerts, and heatmaps. Qualifying startups (fewer than 20 employees and under $10 million raised) can get one year of Growth at no cost, with a published meter of up to 100 million events or 200,000 MTUs. The Plus volume calculator’s dollar steps were not copied because the page presents them as an estimate rather than a single rate.",
  },
};

export interface SourceLink {
  label: string;
  href: string;
}

export const priceSources: SourceLink[] = [
  { label: "DataFast homepage (plan prices and limits)", href: "https://datafa.st/" },
  { label: "DataFast terms (events, trial, plan limits)", href: "https://datafa.st/tos" },
  { label: "DataFast cookieless tracking", href: "https://datafa.st/docs/gdpr-cookieless-tracking" },
  { label: "DataFast revenue attribution guide", href: "https://datafa.st/docs/revenue-attribution-guide" },
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
