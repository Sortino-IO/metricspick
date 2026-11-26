---
title: "Google Analytics alternatives"
seoTitle: "Google Analytics Alternatives"
description: "Google Analytics alternatives for founders who want a clearer revenue report. Compare Plausible, Fathom, DataFast, and PostHog on price, cookies, and tradeoffs."
kicker: Alternatives
lede: "Leave GA4 if the dashboard is not telling you which channel brings paying customers, and nobody on the team has finished the setup. Stay if Google Ads or a warehouse export is a report you use. Plausible and Fathom fit a lighter traffic view. DataFast fits revenue by channel. PostHog, Mixpanel, and Amplitude fit product behavior."
accent: "Google Analytics alternatives"
updated: 2026-11-26
section: alternatives
breadcrumb: Google Analytics
order: 10
tldr:
  - "For revenue by channel, start with DataFast."
  - "For cookieless traffic stats, look at Plausible or Fathom."
  - "For product analytics, replay, or flags, look at PostHog, Mixpanel, or Amplitude."
  - "Stay on GA4 if you depend on Google Ads or an export the team already uses."
tldrNote: "Prices and product details as of 26 November 2026."
jobs:
  - title: See what pays
    body: You want traffic joined to payments, without a full product stack.
    who: Start with DataFast
  - title: Keep it light
    body: You want simple, privacy-first traffic. Revenue can be a later add-on.
    who: Plausible or Fathom
  - title: Instrument a product
    body: You need events, replay, flags, or experiments inside the app.
    who: Look at PostHog
  - title: Already in Google
    body: Ads or a warehouse export are already part of the work.
    who: Stay on GA4
comparison: ga-alternatives
ladders:
  - datafast
  - plausible
tools:
  - id: datafast
    title: "DataFast, for revenue by channel"
    blurb: "Best when you want payments joined to channels and pages. It does not replace a product suite."
    cta: "Visit DataFast"
    placement: ga-alt-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: plausible
    blurb: "Cookieless traffic analytics. Revenue tracking, funnels, and journeys are on the Business plan."
    cta: Read the Plausible overview
    href: /alternatives/plausible/
  - id: fathom
    blurb: "Privacy-first analytics with event and revenue tracking on every plan. The entry price covers up to 100,000 pageviews and 50 sites."
    cta: Read the Fathom overview
    href: /alternatives/fathom-analytics/
  - id: posthog
    blurb: "Events, replay, flags, and funnels in one suite. The first million product-analytics events each month are free."
    cta: See PostHog pricing
    href: /pricing/posthog/
honestyTitle: When you should not switch
honesty: |
  Stay on GA4 if acquisition is mostly Google Ads, or if you already export GA4 and someone uses that export. A lighter tool can feel easier and still delete a report you depend on. Also stay if the gap is product behavior inside a logged-in app. That is a PostHog, Mixpanel, or Amplitude project. DataFast is not a full replacement for those suites.
faqs:
  - q: Is DataFast a full replacement for Google Analytics?
    a: "No. DataFast fits when you want to see which channel or page brings paying customers. It is not a swap for GA4's ads reports, and it is not a product suite like PostHog. Read the [DataFast review](/reviews/datafast/) next to the [DataFast vs Google Analytics](/compare/datafast-vs-google-analytics/) comparison."
  - q: Do I need cookies for revenue attribution?
    a: "DataFast's default script uses cookies and is the more accurate option for long journeys. The cookieless script weakens attribution when a payment happens days or weeks later. Plausible and Fathom are cookieless. GA4's standard web tag uses a first-party _ga cookie."
  - q: What will these tools cost?
    a: "Standard GA4 is free. DataFast Starter is from $9 a month for 10,000 events. Plausible Starter is from $9 a month for 10,000 pageviews. Fathom is from $15 a month for up to 100,000 pageviews. PostHog's first million analytics events each month are free. These are public prices as of 26 November 2026."
  - q: Are the DataFast links affiliate links?
    a: "Yes. Links to datafa.st include via=sortino. Plausible, Fathom, PostHog, Mixpanel, Amplitude, and Google are covered without an affiliate link on this site."
related:
  - href: /compare/datafast-vs-google-analytics/
    type: Compare
    title: DataFast vs Google Analytics
    description: When the revenue tool sits beside GA4 instead of replacing it.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: How to tell a click from a customer.
  - href: /guides/cookieless-analytics/
    type: Guides
    title: Cookieless analytics
    description: Privacy-friendly scripts and long revenue journeys.
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing
    description: The free event allowance and anonymous-event rates.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Revenue attribution, the price ladder, and the limits.
---

Most founders who look for Google Analytics alternatives do not have a traffic problem. They have an attribution problem. Sessions go up, and the payments do not line up with a channel they can name. The tools below are grouped by the report they answer.

[GA4](https://marketingplatform.google.com/about/analytics/) is free for smaller teams, with connections into Google's advertising products. Standard GA4 has no monthly list price. Google Analytics 360 is quote-only.

## What people mean by a Google Analytics alternative

The phrase covers at least four purchases.

Some people want the same marketing questions with less interface: pageviews, referrers, countries, and a goal. [Plausible](/alternatives/plausible/) and [Fathom](/alternatives/fathom-analytics/) are built for that.

Some people want the marketing question tied to money: the channel, campaign, or landing page that showed up when Stripe, Lemon Squeezy, Polar, or Paddle recorded a payment. DataFast is built around that. The [DataFast review](/reviews/datafast/) goes through the price ladder and the cookieless limit.

Some people want product analytics: events inside an app, retention, cohorts, replay, and flags. PostHog, Mixpanel, and Amplitude are that category. Calling them a GA4 skin is how teams buy the wrong migration. [Mixpanel alternatives](/alternatives/mixpanel/) and [Amplitude alternatives](/alternatives/amplitude/) start from that side.

Some people should stay in Google because Google Ads and a warehouse export are already part of the work. For that team, an alternative is a second tool, not a replacement.

## What you give up when you leave GA4

GA4 is free, widely installed, and connected to Google Ads. The standard web tag uses first-party cookies, including the `_ga` cookie. If your site needs a consent banner for that tag, the banner is part of the cost even though the product fee is zero.

The other cost is time. If nobody opens GA4 except to glance at sessions, you are paying in confusion. A lighter tool removes Google Ads reporting. Write down the three reports someone actually opens before you delete the tag.

## DataFast when the question is which channel pays

DataFast is the pick on this page for revenue attribution only. As of 26 November 2026, Starter is $9 a month and Growth is $19 a month. Both figures are published starting prices for 10,000 monthly events. Starter is one website, one team member, and three years of retention. Growth is 30 websites, 30 members, five or more years of retention, plus social mentions and link attribution. Yearly billing is ten times the monthly price. There is a 14-day trial and no card is required.

It is not a session-replay suite or a feature-flag platform. If your week is spent on a button inside the app, read the [PostHog pricing](/pricing/posthog/) notes. If your week is spent asking which article brought the last twenty payments, DataFast is the tool this site recommends for that question. The affiliate link is labeled.

The default script uses cookies. The cookieless script builds a visitor id from signals such as IP address, user agent, the site domain, and a salt that rotates about every 24 hours. Daily totals can still be useful. A 30-day campaign story is weaker. The [cookieless guide](/guides/cookieless-analytics/) puts that limit next to Plausible and Fathom.

The terms say the dashboard locks once you pass the plan's event limit, while tracking continues, until you upgrade to a tier that covers the cycle. Read that before you pick a tier that is already tight. The direct comparison is [DataFast vs Google Analytics](/compare/datafast-vs-google-analytics/).

## Plausible and Fathom when you want a small script

Plausible prices Starter, Growth, and Business by monthly pageviews. At 10,000 pageviews the monthly prices are $9, $14, and $19. At 100,000 they are $19, $29, and $39. Yearly billing is ten times the monthly price. A 30-day trial does not require a card. Choose Business if you need funnels, journeys, revenue tracking, custom properties, the Stats API, or Data Studio.

Fathom is from $15 a month, for up to 100,000 monthly pageviews and 50 sites. At that step, Business is $39. Both figures are published prices for that step. Every plan includes event and revenue tracking. The trial is 7 days and requires a card. There is no free plan. Higher steps are on the [Fathom alternatives](/alternatives/fathom-analytics/) page.

Choose between them on sites, seats, and whether revenue has to be on the cheapest plan. Choose DataFast when the point of the install is the payment join.

## PostHog, Mixpanel, and Amplitude

PostHog gives product analytics a free first million events every month. The published rate for the next million of anonymous events is $0.00005. Five thousand session recordings and a million feature-flag requests are also inside the free allowances. PostHog says anonymous events can be up to 4× cheaper than identified events. Read [PostHog vs GA4](/compare/posthog-vs-google-analytics/) if you are choosing between those two.

Mixpanel's free plan covers up to 1 million events. The first paid Growth pack is 1.5 million events: $100 a month on yearly billing, or $140 on monthly billing. Both figures are published prices for that step. Amplitude's free plan is 2 million events a month with no card. Neither free allowance makes them a blog analytics tool. Both are serious options when the subject is a user inside the product.

## If you do switch

Keep GA4 in place while the new script runs, so you have an overlap rather than a gap.

If you need revenue, install DataFast, connect a documented payment provider, and check that a test payment lands on a channel. Use the default script if the sale can happen days after the first visit and your consent setup allows the cookie.

If you need a simple public dashboard, trial Plausible or Fathom and compare a week of referrers with the GA4 referrers you trust.

If you need the product, do not remove GA4 in the same week you adopt PostHog. Instrument one core event, confirm it arrives, and only then talk about retiring the old tag.

Write the decision in one sentence: we bought this tool to answer X. The [attribution guide](/guides/marketing-attribution-tools/) is the longer version of that sentence.
