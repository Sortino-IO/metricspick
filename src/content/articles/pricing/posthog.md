---
title: "PostHog pricing"
seoTitle: "PostHog Pricing Explained"
description: "PostHog pricing for founders: 1 million free events, then anonymous event rates. See what a small overage costs and when a fixed monthly plan is enough."
kicker: Pricing
lede: "PostHog pricing is a free monthly allowance, then usage. The first million analytics events are free. The next anonymous events are where a small bill can start. Stay on the free plan if those limits cover you. Add a card only when you need the overage, more projects, or a feature that requires it."
accent: "PostHog pricing"
updated: 2026-11-26
section: pricing
breadcrumb: PostHog
order: 10
tldr:
  - "The first 1 million product-analytics events each month are free, and the allowance resets."
  - "Anonymous events from 1 to 2 million are $0.00005 each on the published card."
  - "Session replay includes 5,000 recordings a month free. Flags include 1 million requests."
  - "The free plan drops usage past the allowance. Pay-as-you-go bills the overage."
tldrNote: "Rates as of 26 November 2026, from posthog.com/pricing and the product-analytics pricing doc."
comparison: posthog-pricing
ladders:
  - posthog
tools:
  - id: posthog
    title: PostHog
    blurb: "Stay if the suite is the point and the free allowance covers the month you have."
    cta: PostHog alternatives
    href: /alternatives/posthog/
  - id: mixpanel
    title: Mixpanel
    blurb: "A different free million, then published packs."
    cta: Mixpanel pricing
    href: /pricing/mixpanel/
  - id: amplitude
    title: Amplitude
    blurb: "Free for 2 million events. Plus has a published starting price of $0."
    cta: Amplitude pricing
    href: /pricing/amplitude/
  - id: datafast
    title: DataFast
    blurb: "A fixed monthly tier if the only question is revenue by channel. Not a substitute for replay and flags."
    cta: "Visit DataFast"
    placement: posthog-pricing-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
honestyTitle: Some lines are not a single public number
honesty: |
  Identified-event rates above the free million, platform-package fees, and annual discounts are not one public number on a single card. Use PostHog's pricing calculator for those. The worked example below uses only the anonymous rates.
faqs:
  - q: Is PostHog free?
    a: "PostHog is free inside the monthly allowances, with no time limit and no card. Past the allowance, the free plan drops extra usage. Pay-as-you-go bills the overage. The first million analytics events, 5,000 recordings, and 1 million flag requests are the allowances founders notice first."
  - q: What does 1.5 million anonymous events cost?
    a: "On the published anonymous card, the first million is $0 and the next 500,000 events at $0.00005 are $25. That illustration ignores replay, flags, and identified events."
  - q: Are anonymous events cheaper?
    a: "PostHog says anonymous events can be up to 4× cheaper than identified events, because they skip the person profile. The first million events are free either way."
  - q: When is a fixed monthly plan the cheaper question?
    a: "When you do not want the suite. DataFast Starter is $9 a month at 10,000 events. It will not give you replay and flags. See the [pricing ladder](/pricing/datafast/), [DataFast vs PostHog](/compare/datafast-vs-posthog/), and the [review](/reviews/datafast/)."
related:
  - href: /alternatives/posthog/
    type: Alternatives
    title: PostHog alternatives
    description: When to leave, and which tool matches the part you use.
  - href: /compare/posthog-vs-google-analytics/
    type: Compare
    title: PostHog vs Google Analytics
    description: Free GA4 versus PostHog's usage curve.
  - href: /pricing/mixpanel/
    type: Pricing
    title: Mixpanel pricing
    description: The other event pack table.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Fixed tiers for revenue attribution.
sources:
  - label: PostHog pricing
    href: https://posthog.com/pricing
  - label: PostHog product analytics pricing
    href: https://posthog.com/docs/product-analytics/pricing
  - label: Anonymous vs identified events
    href: https://posthog.com/docs/data/anonymous-vs-identified-events
---

PostHog pricing is usage, not a seat fee. As of 26 November 2026, the free allowance renews every month whether or not a card is on file. PostHog says the large majority of companies use the product without paying. That is their figure.

## The free allowances

Analytics: 1 million events. Session replay: 5,000 recordings. Feature flags: 1 million requests. Experiments are billed with flags. Error tracking: 100,000 exceptions. Surveys: 1,500 responses. Unused allowance does not roll over.

On the free plan you get one project and one year of event retention. Usage stops at the limits, so a spike does not become an invoice.

Pay-as-you-go keeps every free allowance, then bills past it. You get six projects and two years of event retention. You can set a billing limit per product. Hitting the limit drops further usage instead of charging past the cap.

Inviting a cofounder does not, by itself, move you up a plan. Sending more events does.

## Anonymous event rates

Above 1 million analytics events, the product-analytics doc publishes a declining per-event price for anonymous events:

The first million is $0. From 1 to 2 million, $0.00005. From 2 to 15 million, $0.0000343. From 15 to 50 million, $0.0000295. From 50 to 100 million, $0.0000218. From 100 to 250 million, $0.000015. Above 250 million, $0.000009.

A month of 1.5 million anonymous events is one million free plus 500,000 times $0.00005, which is $25. Ten million anonymous events is not ten times $0.00005. The first million is free, the second million is $50, and the next eight million fall into the $0.0000343 band, about $274, for a rough total near $324 before any other product. Recalculate with PostHog's calculator before you commit.

Identified events share the free first million. PostHog says anonymous events can be up to 4× cheaper than identified ones. If your app calls identify on every pageview, do not budget the anonymous example. Rates are on [PostHog's pricing page](https://posthog.com/pricing).

## What else can show up

Replay above 5,000 recordings, flags above 1 million requests, surveys, and exceptions are separate meters. Platform packages for SSO and advanced permissions are not given as a single public monthly fee on the pricing page. Ask for those prices. Billing is organization-wide. Extra projects do not each get a fresh free million.

## How this compares with a fixed bill

At 1.5 million events, Mixpanel publishes $100 a month on yearly billing. PostHog's anonymous example at that count is about $25, if you send anonymous events and nothing else. Amplitude Free covers 2 million events, so a team between 1 and 2 million may pay PostHog or Mixpanel and pay Amplitude nothing. The [Mixpanel pricing](/pricing/mixpanel/) and [Amplitude pricing](/pricing/amplitude/) guides hold those tables. The [PostHog alternatives](/alternatives/posthog/) page is the leaving version.

Standard GA4 is free. You pay in cookies and complexity, and you do not get PostHog's replay and flags. The [comparison](/compare/posthog-vs-google-analytics/) is the right page if GA4 is the other bid.

DataFast is a fixed tier, Starter from $9 a month at 10,000 events, for revenue attribution. It is the wrong comparison if you need PostHog. It is the right comparison if the bill is marketing pageviews you never needed as product events. The [DataFast pricing](/pricing/datafast/) page is the ladder. Affiliate links to DataFast do not change the PostHog rates above.

## How to avoid a surprise

Install PostHog, leave the card off or set a billing limit, and read the projection after a few days. If the projection is mostly person profiles on a marketing site, switch those events to anonymous. If the projection is replay you do not watch, cap replay. If the projection is the product and the number is fine, stay.

Free-plan events are retained for one year and pay-as-you-go events for two. A cheap event you cannot keep is a different promise from a tool that keeps a simple dashboard while you subscribe. Projects share one allowance, so a staging project that mirrors production can double usage. The [alternatives](/alternatives/posthog/) page is where to go if the number is fine and the product is still the wrong shape.
