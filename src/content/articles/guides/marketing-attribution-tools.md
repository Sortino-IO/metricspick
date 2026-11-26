---
title: "Marketing attribution tools"
seoTitle: "Marketing Attribution Tools"
description: "Marketing attribution tools for founders who need credit for a payment. DataFast, GA4, Fathom, Plausible, Mixpanel, PostHog, and Amplitude, by what they show."
kicker: Guides
lede: "Pick a marketing attribution tool by the credit you need. DataFast fits a payment joined to a channel or page. GA4 fits ad clicks inside Google's stack. Fathom and Plausible fit a lighter revenue line on a site dashboard. Mixpanel, PostHog, and Amplitude fit a product action, and they are a project, not a snippet."
accent: "Marketing attribution tools"
updated: 2026-11-26
section: guides
breadcrumb: Attribution tools
order: 10
tldr:
  - "DataFast is the pick when you want a payment joined to a channel or page without designing an event system."
  - "GA4 is the pick when the payment is downstream of Google Ads."
  - "Fathom includes revenue tracking on all plans. Plausible puts that feature on Business."
  - "Mixpanel, PostHog, and Amplitude can attribute product events. They are a project."
tldrNote: "These tools use different credit rules. This guide does not rank them on accuracy. Details as of 26 November 2026."
jobs:
  - title: Credit a payment
    body: You want the channel, campaign, or page that showed up when money arrived.
    who: Start with DataFast
  - title: Credit an ad click
    body: Google Ads is the spend, and the ad account is already the record.
    who: Stay close to GA4
  - title: A light revenue line
    body: You want revenue on a simple site dashboard.
    who: Fathom, or Plausible Business
  - title: Credit a product action
    body: The conversion is a behavior inside the app, not only a charge.
    who: PostHog, Mixpanel, or Amplitude
comparison: attribution
tools:
  - id: datafast
    title: "DataFast, for payment credit"
    blurb: "Built to connect traffic sources to payments. Not a full product-analytics suite."
    cta: "Visit DataFast"
    placement: attribution-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: ga4
    title: Google Analytics 4
    blurb: "Free, and tied to Google Ads."
    cta: GA4 alternatives
    href: /alternatives/google-analytics/
  - id: fathom
    title: Fathom
    blurb: "Revenue tracking on every plan, from $15 a month."
    cta: Fathom alternatives
    href: /alternatives/fathom-analytics/
  - id: plausible
    title: Plausible
    blurb: "Cookieless traffic. Revenue tracking is on Business."
    cta: Plausible alternatives
    href: /alternatives/plausible/
honestyTitle: One word, three reports
honesty: |
  "Attribution" on a product-analytics plan is not automatically the same report as channel revenue or as an ads campaign. If the sentence you need is "this Stripe charge came from this page," buy the tool that shows that sentence. If the sentence is "this ad click came from this campaign," keep the ad platform's report.
faqs:
  - q: What is a marketing attribution tool?
    a: "A product that assigns credit for a conversion, usually a payment or a signup, to a visit, channel, campaign, or ad. The tools on this page do not all assign that credit the same way."
  - q: Which one shows revenue by channel without a tracking plan?
    a: "DataFast, once you connect a documented payment provider. Starter is from $9 a month for 10,000 events. Fathom lists revenue tracking on every plan, from $15 a month. Plausible puts it on Business. See the [DataFast review](/reviews/datafast/) and [DataFast vs Plausible](/compare/datafast-vs-plausible/)."
  - q: Do I need cookies?
    a: "Long gaps between the first visit and the payment are harder without a stable identifier. The [cookieless guide](/guides/cookieless-analytics/) is that tradeoff. GA4's standard tag uses cookies."
  - q: Are the DataFast links affiliate links?
    a: "Yes. They use via=sortino."
related:
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: The revenue tool, scoped to what it actually does.
  - href: /pricing/datafast/
    type: Pricing
    title: DataFast pricing
    description: The monthly event ladder.
  - href: /alternatives/google-analytics/
    type: Alternatives
    title: Google Analytics alternatives
    description: When a lighter tool replaces GA4, and when it should not.
  - href: /guides/cookieless-analytics/
    type: Guides
    title: Cookieless analytics
    description: What you lose on a long sales cycle.
  - href: /pricing/mixpanel/
    type: Pricing
    title: Mixpanel pricing
    description: Where multi-touch sits on the plans.
sources:
  - label: DataFast revenue attribution guide
    href: https://datafa.st/docs/revenue-attribution-guide
---

Marketing attribution tools answer which visit should get credit for a payment. They do not all mean the same thing by that word. This guide separates the reports so you do not buy a suite to see a referrer, or a traffic script to see an ad account.

Figures are as of 26 November 2026.

## Three questions hiding in one word

**Which channel brought a payment on the website?** You connect a payment provider and read revenue by source, campaign, or page.

**Which ad click should get credit?** The ad platform, often Google Ads, is already keeping that record, and GA4 is how many teams read it.

**Which product action mattered?** A signup, a feature use, or a renewal inside the app. That is an event you define, then analyze in PostHog, Mixpanel, or Amplitude.

Write the question in one sentence before you compare prices.

## DataFast for the payment join

DataFast is built for the first question. Starter is $9 a month and Growth is $19 a month. Both figures are published starting prices for 10,000 events. You connect Stripe, Lemon Squeezy, Polar, Shopify, or send payments through the API. You give up replay, flags, and Google Ads reporting. The [pricing page](/pricing/datafast/) is the ladder. The [review](/reviews/datafast/) is the product. The link is an affiliate link. The [alternatives](/alternatives/datafast/) page is where to go if the payment join is not what you wanted.

## GA4 when ads are the system

Standard GA4 is free and connected to Google's advertising products. Keep it when the spend is in Google Ads. Add another tool beside it when you still cannot see which non-ad page brought a payment. The [GA4 alternatives](/alternatives/google-analytics/) guide and [PostHog vs Google Analytics](/compare/posthog-vs-google-analytics/) cover the cases where GA4 is the tool you might leave.

## Fathom and Plausible as lighter revenue lines

Fathom lists event and revenue tracking on every plan, from $15 a month for up to 100,000 pageviews and 50 sites. Plausible keeps revenue tracking on Business. At 10,000 pageviews, Business is $19 a month. Both are cookieless traffic products with a revenue feature, not a payment-join product in the way DataFast is. The comparisons are [DataFast vs Plausible](/compare/datafast-vs-plausible/) and the [Fathom](/alternatives/fathom-analytics/) and [Plausible](/alternatives/plausible/) alternatives pages.

## Product suites, when the conversion is a behavior

Mixpanel lists multi-touch attribution on Growth and Enterprise, not on Free. The first paid Growth pack is 1.5 million events at $100 a month on yearly billing. PostHog can record the events you send, with a free million analytics events, and you still have to define them. Amplitude is free for 2 million events and then uses an estimator. The [Mixpanel pricing](/pricing/mixpanel/) page is the pack table. These tools are the right attribution stack when the conversion lives inside the product.

## A small-stack order

1. If Google Ads is the spend, keep GA4 for that report.
2. If the missing sentence is which page or channel brought a Stripe payment, trial DataFast or price Fathom's revenue line.
3. If the conversion is a behavior in the app, instrument one event in PostHog, Mixpanel, or Amplitude before you buy a year.
4. If the sale takes weeks and you refuse a stable visitor id, read the [cookieless guide](/guides/cookieless-analytics/) before you trust the credit.
