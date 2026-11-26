---
title: "Cookieless analytics"
seoTitle: "Cookieless Analytics Guide"
description: "Cookieless analytics for founders: what you gain and lose with Plausible, Fathom, and DataFast when a sale happens days after the first visit, not the same day."
kicker: Guides
lede: "Choose cookieless analytics if you want a simpler consent story and you can accept a weaker memory across days. Keep a cookie, with consent handled, if a payment often happens days or weeks after the first visit and you need that first visit to stay attached. Plausible and Fathom start cookieless. DataFast offers it as a mode. GA4's standard tag uses cookies."
accent: "Cookieless analytics"
updated: 2026-11-26
section: guides
breadcrumb: Cookieless analytics
order: 20
tldr:
  - "You gain a simpler consent story for the analytics script."
  - "You lose a stable browser identity across long gaps, which delayed revenue credit wants."
  - "Plausible and Fathom lead with cookieless designs. DataFast documents a cookieless mode and its limit."
  - "GA4's standard tag uses cookies. Moving to it is not a cookieless move."
tldrNote: "Product behavior as of 26 November 2026, including DataFast's cookieless documentation."
jobs:
  - title: Avoid a banner for this script
    body: The priority is an analytics script you can explain without a consent dialog for that tool.
    who: Plausible, Fathom, or DataFast cookieless
  - title: Protect a long sales cycle
    body: The purchase can happen days after the first visit.
    who: A cookie-based script, with consent handled
  - title: Stay in Google
    body: Ads matter more than the banner.
    who: GA4
  - title: Logged-in product identity
    body: The subject is a user account, not a marketing cookie.
    who: PostHog, Mixpanel, or Amplitude
comparison: cookieless
tools:
  - id: plausible
    title: Plausible
    blurb: "No cookies, and no cookie banner required for the script. Revenue features sit on Business."
    cta: Plausible overview
    href: /alternatives/plausible/
  - id: fathom
    title: Fathom
    blurb: "No cookie banner required, and revenue tracking on every plan."
    cta: Fathom overview
    href: /alternatives/fathom-analytics/
  - id: datafast
    title: DataFast
    blurb: "Cookie by default. Cookieless is a mode with a shorter memory. The button is an affiliate link."
    cta: "Visit DataFast"
    placement: cookieless-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: ga4
    title: Google Analytics 4
    blurb: "The standard web tag uses a first-party _ga cookie."
    cta: GA4 alternatives
    href: /alternatives/google-analytics/
honestyTitle: A banner you removed can be a sale you cannot explain
honesty: |
  Cookieless totals for today can still be useful. A story that says "this campaign paid off over 30 days" is weaker when the visitor id changes every day. If that story is why you bought analytics, do not turn the cookie off to make the footer quieter.
faqs:
  - q: What is cookieless analytics?
    a: "Analytics that does not store a long-lived identifier in a browser cookie. Plausible and Fathom are built that way. DataFast offers a cookieless script beside its default cookie script. You can still see pageviews. You are less able to treat a person as the same visitor across many days."
  - q: Does DataFast work without cookies?
    a: "Yes, with a separate script. It builds a visitor id from the IP address, user agent, site domain, and a salt that rotates about every 24 hours. The same person on a later day is not one long-lived profile. The default script uses cookies and is the more accurate option for long journeys. See the [review](/reviews/datafast/)."
  - q: Which cookieless tool includes revenue?
    a: "Fathom lists event and revenue tracking on every plan, from $15 a month. Plausible puts revenue tracking on Business. DataFast's revenue join works with either script, and the cookieless mode is the weaker one for delayed payments. Compare them in [DataFast vs Plausible](/compare/datafast-vs-plausible/)."
  - q: Is GA4 cookieless?
    a: "The standard web tag stores a client ID in a first-party cookie named _ga. Switching to GA4 is not how you leave cookies. The [GA4 alternatives](/alternatives/google-analytics/) guide is the wider map."
related:
  - href: /alternatives/plausible/
    type: Alternatives
    title: Plausible alternatives
    description: The cookieless traffic product and its neighbors.
  - href: /alternatives/fathom-analytics/
    type: Alternatives
    title: Fathom Analytics alternatives
    description: Revenue on every plan, with a cookieless script.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: Which kind of credit you are trying to keep.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Default cookies, and the cookieless limit.
sources:
  - label: DataFast cookieless tracking
    href: https://datafa.st/docs/gdpr-cookieless-tracking
  - label: GA4 client ID
    href: https://support.google.com/analytics/answer/11593727?hl=en
---

Cookieless analytics can remove a banner and still tell you which pages were viewed today. It has a weaker memory across days. That tradeoff is the decision. If the sale happens in the same session, the loss is smaller. If the sale takes weeks, the loss is the attribution you bought the tool for.

Details below are as of 26 November 2026.

## What a cookie was doing

A long-lived browser identifier lets the analytics tool treat Monday's visit and Thursday's payment as the same visitor. Without it, each day can look like a new person. Totals still add up. The path from first click to payment gets shorter than the real one.

Consent rules still depend on your site, your region, and the other scripts you run. This guide is about the analytics script, not a legal opinion.

## DataFast's two scripts

DataFast's default script uses cookies. The cookieless script does not use a cookie for the visitor id. The server builds an id from the IP address, user agent, the site domain, and a salt that rotates about every 24 hours (UTC). DataFast's own note says the same person on different days is not linked as one long-lived profile.

Use the default script when the payment can happen days later and your consent setup allows the cookie. Use the cookieless script when avoiding that cookie is the constraint, and accept the shorter memory. Prices do not change with the script. Starter is still from $9 a month for 10,000 events. The [pricing page](/pricing/datafast/) is the ladder. The [review](/reviews/datafast/) is the product. The link is an affiliate link. The [alternatives](/alternatives/datafast/) page is the exit if the limit is unacceptable.

## Plausible and Fathom

[Plausible](/alternatives/plausible/) uses no cookies and does not require a cookie banner for its script. Revenue tracking is on the Business plan. At 10,000 pageviews, Business is $19 a month. Starter is $9.

[Fathom](/alternatives/fathom-analytics/) does not require a cookie banner for its script, and it lists event and revenue tracking on every plan. The entry price is $15 a month for up to 100,000 pageviews and 50 sites.

Both can show traffic without a cookie. Neither promises a year-long anonymous browser identity. If revenue on the entry plan matters, Fathom is the closer of the two. If a $9 traffic plan matters, Plausible is. The comparison with DataFast is [DataFast vs Plausible](/compare/datafast-vs-plausible/).

## GA4 and the product suites

GA4's standard web tag uses a `_ga` cookie. It is the wrong destination if cookieless is the requirement. It is the right one if Google Ads is the requirement. The [GA4 alternatives](/alternatives/google-analytics/) guide starts from that split.

PostHog, Mixpanel, and Amplitude can be configured around a logged-in user id. That is a different identifier from a marketing cookie. If the subject is a product account, the cookie debate on the marketing site is the wrong argument. Their pricing is on the [PostHog](/pricing/posthog/), [Mixpanel](/pricing/mixpanel/), and [Amplitude](/pricing/amplitude/) pages.

## How to choose

If you need today's pages and sources, and a banner for this script is the problem, start with Plausible or Fathom. If you need a 30-day "this campaign paid" story, keep a cookie you have consent for, or accept that the cookieless number will under-explain the sale. The [attribution guide](/guides/marketing-attribution-tools/) is the credit question next to this one.
