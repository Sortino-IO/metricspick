---
title: "PostHog pricing, explained for founders"
seoTitle: "PostHog pricing explained for founders"
description: "PostHog pricing for founders: the free monthly allowances, anonymous event rates, and what a small overage costs, checked against PostHog’s own pricing page."
kicker: Pricing
lede: "PostHog does not charge per seat. You get a monthly free allowance on each product, and you pay usage after that. The first million analytics events are free. The next million of anonymous events is where a small bill can start."
accent: "PostHog pricing"
updated: 2026-11-24
section: pricing
breadcrumb: PostHog
order: 10
tldr:
  - "The first 1 million product-analytics events each month are free, and the allowance resets."
  - "Anonymous events from 1 to 2 million are $0.00005 each on the published card."
  - "Session replay includes 5,000 recordings a month free. Flags include 1 million requests."
  - "Set a billing limit if you add a card. The free plan drops usage past the allowance instead of charging you."
tldrNote: "Rates from posthog.com/pricing and the product-analytics pricing doc on 24 November 2026."
comparison: posthog-pricing
ladders:
  - posthog
tools:
  - id: posthog
    title: PostHog
    blurb: "Stay if the suite is the point and the free allowance covers the month you actually have."
    cta: PostHog alternatives
    href: /alternatives/posthog/
  - id: mixpanel
    title: Mixpanel
    blurb: "A different free million, then published packs. Compare at your volume, not at the logo."
    cta: Mixpanel pricing
    href: /pricing/mixpanel/
  - id: amplitude
    title: Amplitude
    blurb: "Free for 2 million events. Plus starts at $0 and then scales."
    cta: Amplitude pricing
    href: /pricing/amplitude/
  - id: datafast
    title: DataFast
    blurb: "A fixed monthly tier if the only question is revenue by channel. Not a PostHog substitute for replay and flags."
    cta: "Visit DataFast — affiliate"
    placement: posthog-pricing-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
honestyTitle: What this page will not pretend to know
honesty: |
  Identified-event rates, platform-package fees, and annual discount thresholds are mentioned by PostHog and are not copied here, because the pages we read did not give a single number we were willing to freeze. Open the pricing calculator for those. The worked example below uses only the anonymous card.
faqs:
  - q: Is PostHog free?
    a: "The pricing page says you can use it free inside the monthly allowances, with no time limit and no card. Past the allowance, the free plan drops extra usage. Pay-as-you-go bills the overage. The first million analytics events, 5,000 recordings, and 1 million flag requests are the allowances founders notice first."
  - q: What does 1.5 million anonymous events cost?
    a: "Using the published card only: the first million is $0 and the next 500,000 events at $0.00005 are $25. That illustration ignores replay, flags, and identified events. It is arithmetic, not a quote from PostHog and not a bill we paid."
  - q: Are events cheaper if users are anonymous?
    a: "PostHog’s anonymous-versus-identified doc says anonymous events can be up to four times cheaper because they skip the person profile. The first million events are free either way. Use anonymous events for a marketing site if you do not need person profiles."
  - q: When is DataFast the cheaper question?
    a: "When you do not want the suite. DataFast Starter is $9 a month at 10,000 events. It will not give you PostHog’s replay and flags. The [review](/reviews/datafast/) is the scoped recommendation."
related:
  - href: /alternatives/posthog/
    type: Alternatives
    title: PostHog alternatives
    description: When to leave, and which tool matches the part you use.
  - href: /compare/posthog-vs-google-analytics/
    type: Compare
    title: PostHog vs Google Analytics
    description: Free GA4 versus PostHog’s usage curve.
  - href: /pricing/mixpanel/
    type: Pricing
    title: Mixpanel pricing
    description: The other event pack table.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Fixed tiers for revenue attribution.
---

PostHog’s pricing page is the rare vendor page that tries to answer “what will this cost?” with a table instead of a form. Checked on 24 November 2026, it says the free allowance renews every month whether or not a card is on file, and that you add a card when you need higher limits, more projects, or features that require it. The headline claim on the page is that the large majority of companies use PostHog without paying. We repeat that as their claim, not as our census.

## The free bucket founders should memorize

Analytics: 1 million events. Session replay: 5,000 recordings. Feature flags: 1 million requests. Experiments are billed with flags. Error tracking: 100,000 exceptions. Surveys: 1,500 responses. There are further allowances for logs, sources, and newer products. The pricing page is the full list. Unused allowance does not roll over.

On the free plan you get one project, one year of event retention, and community support. Usage stops at the limits. PostHog’s FAQ says additional events are dropped and flags can return a quota response, so a spike does not become an invoice. Recordings on the free plan are kept for one month, according to the same FAQ.

Pay-as-you-go keeps every free allowance, then bills past it. You get six projects, two years of event retention, and email support. Recordings on that plan are kept for 90 days in the FAQ’s retention section. You can set a billing limit per product. Hitting the limit drops further usage instead of charging past the cap. The exception they call out is logs custom retention, which the logs limit does not cap, at $0.05 per GB-month beyond the default 14 days. Prices are USD and exclude tax.

There is no per-seat fee in this model. Inviting a cofounder does not move you up a plan. Sending more events does.

## The anonymous event card

Above 1 million analytics events, the product-analytics doc publishes a declining per-event price for anonymous events:

The first million is $0. From 1 to 2 million, $0.00005. From 2 to 15 million, $0.0000343. From 15 to 50 million, $0.0000295. From 50 to 100 million, $0.0000218. From 100 to 250 million, $0.000015. Above 250 million, $0.000009.

A worked example, labeled as arithmetic on that card: 1.5 million anonymous events in a month. One million free. Five hundred thousand times $0.00005 is $25. Ten million anonymous events is not “10 times $0.00005.” The rate steps down. The first million is free, the second million is $50 at $0.00005, and the next eight million fall into the $0.0000343 band, which is about $274, for a rough total near $324 before any other product. Recalculate with their calculator if you are about to sign. Rounding in this paragraph is ours.

Identified events are a second line. They share the free first million. Above that, PostHog adds a person-profile charge and says anonymous events can be up to four times cheaper. The identified table is on their pricing page. It is not reproduced here. If your app calls `identify` on every pageview, do not budget the anonymous example.

## What else can show up on the bill

Replay above 5,000 recordings, flags above 1 million requests, surveys, exceptions, and logs are separate meters. A quiet analytics project can still record enough sessions to matter. The pricing page’s calculator is the place those meters sit together. We did not freeze a per-recording dollar rate because the text we saved did not state one flat number independent of volume.

Platform packages exist for SSO, audit logs, custom roles, and project permissions. The page describes them and does not, in the text we kept, print a Boost or Scale monthly fee. Annual commitments are available. The FAQ says there is no required minimum or annual contract. Ask sales for the package price rather than trusting a number from a secondary blog.

Billing is organization-wide. Extra projects do not each get a fresh free million. The free plan’s single project is part of the design. Pay-as-you-go’s six projects still share one allowance.

## How this compares with a fixed monthly analytics bill

Mixpanel Free is 1 million events, then Growth packs. At 1.5 million events Mixpanel publishes $100 a month on yearly billing. That is a different shape from PostHog’s roughly $25 anonymous example at the same count, and it includes a different feature mix. Amplitude Free is 2 million events, so a team between 1 and 2 million events may pay PostHog or Mixpanel and pay Amplitude nothing. The [Mixpanel pricing](/pricing/mixpanel/) and [Amplitude pricing](/pricing/amplitude/) guides hold those tables. The [PostHog alternatives](/alternatives/posthog/) page is the “should we leave” version.

GA4’s standard product is free. You pay in cookies, complexity, and the absence of PostHog’s replay and flags. The [comparison](/compare/posthog-vs-google-analytics/) is the right page if GA4 is the other bid.

DataFast is a fixed tier, Starter from $9 a month at 10,000 events, for revenue attribution. It is the wrong comparison if you need PostHog. It is the right comparison if PostHog’s bill is coming from marketing pageviews you never needed as product events. The [review](/reviews/datafast/) keeps that scope tight. Affiliate links to DataFast are labeled and do not change the PostHog rates above.

## How to avoid a surprise

Install PostHog, leave the card off or set the billing limit at $0, and read the projection after a few days. PostHog’s own FAQ recommends that. It is better advice than any example in this article, because your identified fraction is yours.

If the projection is mostly person profiles on a marketing site, switch those events to anonymous and look again. If the projection is replay you do not watch, cap replay. If the projection is the product and the number is fine, stay. The price list is public so you can do that without a call.

## Retention is part of the price

A cheap event you cannot keep is not as cheap as it looks. The pricing FAQ says free-plan events are retained for one year and pay-as-you-go events for two. Platform packages can extend that, up to the multi-year figures they list for Boost, Scale, and Enterprise. Recordings are shorter: one month on free, 90 days on pay-as-you-go, longer only on the add-ons. Logs default to 14 days, and keeping them longer is the $0.05 per GB-month line.

If your reason for looking at PostHog is “we want the history,” check the retention before you compare a $25 event example with a tool that keeps a simple dashboard for as long as you subscribe. Fathom, for example, says history lasts while you are a customer. DataFast’s homepage FAQ says three years on Starter and five or more on Growth. Those are different promises, for different products. A one-year free PostHog project is a lot of product analytics. It is not a five-year marketing archive.

Projects share one allowance. A staging project that mirrors production can double the bill without anyone learning something new. The docs suggest separate projects for development, staging, and production, and the billing FAQ says they share the free tier. Use the billing limit on staging, or send fewer events there. That is the sort of cost control that does not require a sales call, which is the best thing about this price list.

When the calculator and this article disagree, the calculator wins. Rates move. The check date on this page is 24 November 2026. The [alternatives](/alternatives/posthog/) page is where to go if the number is fine and the product is still the wrong shape, and the [comparison with GA4](/compare/posthog-vs-google-analytics/) is where to go if the other option is the free Google tag you already have.
