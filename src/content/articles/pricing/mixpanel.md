---
title: "Mixpanel pricing, explained for founders"
seoTitle: "Mixpanel pricing explained for founders"
description: "Mixpanel pricing for founders: the free million events, Growth packs from the official pricing page, and which features sit on Free versus Growth."
kicker: Pricing
lede: "Mixpanel’s free plan covers a million events a month. Growth’s published starting price is $0. It then sells event packs, with a visible jump at 1.5 million events. The table below is what is published."
accent: "Mixpanel pricing"
updated: 2026-11-24
section: pricing
breadcrumb: Mixpanel
order: 30
tldr:
  - "Free is up to 1 million events, 10,000 replays, and no card."
  - "Growth includes that million, then 1.5 million events is $100 a month on yearly billing or $140 on monthly billing."
  - "Multi-touch attribution is on Growth, not on Free."
  - "Group Analytics and Data Pipelines are paid add-ons. Their prices are not publicly listed."
tldrNote: "Packs as of 24 November 2026, from mixpanel.com/pricing."
comparison: mixpanel-pricing
ladders:
  - mixpanel
tools:
  - id: mixpanel
    title: Mixpanel
    blurb: "The packs below are the price if you already know you need event analytics."
    cta: Mixpanel alternatives
    href: /alternatives/mixpanel/
  - id: posthog
    title: PostHog
    blurb: "Usage rates after a free million events, with billing limits."
    cta: PostHog pricing
    href: /pricing/posthog/
  - id: amplitude
    title: Amplitude
    blurb: "A free tier of 2 million events, then an estimator rather than a pack table."
    cta: Amplitude pricing
    href: /pricing/amplitude/
  - id: datafast
    title: DataFast
    blurb: "A small fixed tier when the report is revenue by channel, not product cohorts."
    cta: "Visit DataFast"
    placement: mixpanel-pricing-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
honestyTitle: Add-ons without a public price
honesty: |
  Group Analytics and Data Pipelines are add-ons on paid plans, and Metric Trees is an Enterprise add-on. Their monthly fees are not publicly listed. Ask Mixpanel for those lines. A third-party “per thousand events” figure that disagrees with the pack table is not used here.
faqs:
  - q: Is Mixpanel free?
    a: "Yes, inside the free plan: up to 1 million events a month, 10,000 replays, up to 10 feature flags, up to 1,000 experiment MEUs, funnels and retention, and unlimited seats. Querying pauses when a free project goes over the event limit, while collection continues, until you upgrade."
  - q: What is the first paid step?
    a: "Growth’s published starting price is $0, with 1 million events included. The next yearly step is 1.5 million events at $100 a month ($1,200 a year). Monthly billing at 1.5 million is $140. Both figures are published prices for that step. At 2 million events the prices are $185 yearly or $259 monthly."
  - q: Does the free plan include attribution?
    a: "Campaign reporting is listed on Free. Multi-touch attribution is listed as not available on Free and available on Growth and Enterprise. If that line is why you would pay, it belongs in the decision."
  - q: How does DataFast’s price compare?
    a: "DataFast Starter is $9 a month at 10,000 events for a different job. It does not include Mixpanel’s cohort product. See the [pricing ladder](/pricing/datafast/), [DataFast vs Mixpanel](/compare/datafast-vs-mixpanel/), the [alternatives](/alternatives/datafast/), and the [review](/reviews/datafast/)."
related:
  - href: /alternatives/mixpanel/
    type: Alternatives
    title: Mixpanel alternatives
    description: When another suite is cheaper, and when you should leave the category.
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing
    description: Per-event rates you can multiply.
  - href: /pricing/amplitude/
    type: Pricing
    title: Amplitude pricing
    description: The 2 million event free plan.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: Multi-touch on Growth versus a marketing-side tool.
---

Mixpanel prices events, not seats. As of 24 November 2026, Free, Growth, and Enterprise include unlimited seats. The number that moves the invoice is how many events the organization ingests. The count is across projects, and some calls do not count: identify, alias, merge, opt-in, a session-recording checkpoint, and profile updates. Pageviews and product actions you choose to send do count. If you are estimating from a GA4 session number, you are estimating the wrong unit until you decide which actions become events.

## Free, and the pause when you pass it

Free includes up to 1 million events a month, 10,000 session replays, up to 1,000 experiment MEUs, up to 10 active feature flags, and funnels and retention. Saved reports are unlimited on the current matrix. Web and mobile analytics, autocapture, and the ingestion API are listed as available. Query API access, custom properties, borrowed properties, and multi-touch attribution are not on Free. Behavioral cohorts can be created and, on the matrix, not saved. Alerts are not on Free. Replay retention is 30 days.

The pricing docs describe the overage behavior. On Free, Mixpanel keeps collecting after you pass the monthly event limit, and querying pauses until you move to Growth. Growth then counts the month’s events, including the ones already collected, toward the allowance you buy. That is a gentler failure than a hard delete, and it is still a week where the team cannot query. If you are close to 1 million, watch the meter before a launch.

## Growth packs

Growth’s published starting price is $0. The first million events sit inside that base. Yearly billing:

1 million, $0. 1.5 million, $100 a month. 2 million, $185. 3 million, $270. 5 million, $438. 10 million, $840. 20 million, $1,635.

Monthly billing at the same steps: $0, $140, $259, $378, $613, $1,176, and $2,289. Mixpanel also publishes the in-between steps (4 million, 6.5 million, 8 million, and so on) and the annual savings versus monthly. Above 20 million events, both columns say to contact sales. The table on this page keeps the steps a founder is most likely to hit. The source page has the rest, unsmoothed.

Growth also raises the ceilings: up to 20 million events, up to 500,000 replays as a ceiling with 20,000 included in the base description, more experiment room, up to 50 feature flags before further purchases, saved cohorts, custom properties, and up to five alerts per project. Multi-touch attribution flips to available. Data warehouse connectors flip to available. Group Analytics and Data Pipelines stay add-ons.

Enterprise keeps the add-ons, adds anomaly detection, root-cause analysis, governance features, custom retention, and a success team. Metric Trees is an Enterprise add-on. Those lines are custom or add-on, not a published dollar price.

## The startup year

Early-stage companies founded less than five years ago, with up to $8 million in total funding, that have not redeemed another offer, are offered a first year on a startup plan. The pricing page’s summary includes a very large event and replay allowance for that year. Read the startup page before you count it in a budget. Eligibility is theirs to judge. It is not the same offer as Amplitude’s under-20-employees, under-$10-million year of Growth.

## Comparing the first paid dollar

At 1 million events, Mixpanel, PostHog, and Amplitude can all be $0, and Amplitude can stay $0 until 2 million. At 1.5 million, Mixpanel prints $100 a month on yearly billing. PostHog’s anonymous card prices the extra 500,000 events at $0.00005, which is $25, if you send anonymous events and nothing else. Amplitude wants the Plus estimator. Those three sentences are the whole honest comparison at that volume. The [PostHog](/pricing/posthog/) and [Amplitude](/pricing/amplitude/) pricing guides hold the detail, and the [alternatives](/alternatives/mixpanel/) page tells you when not to switch at all.

Replay, experiments, and flags can dominate a Mixpanel or PostHog bill even when the event pack looks small. Price the meters you will turn on. A free event tier with paid replay is still a paid product.

## If the price you want is a marketing price

Mixpanel’s packs are product-analytics prices. A content site that only needs referrers should not buy 1.5 million product events to see them. Plausible and Fathom publish pageview prices. GA4 is free. DataFast publishes Starter at $9 a month for 10,000 events when the report is revenue by channel. The [pricing page](/pricing/datafast/) is that ladder, [DataFast vs Mixpanel](/compare/datafast-vs-mixpanel/) is the job split, and the [DataFast alternatives](/alternatives/datafast/) page is where to go if the channel report is not what you wanted. The [review](/reviews/datafast/) explains the cap and the affiliate link.

Multi-touch on Mixpanel Growth is a product-analytics feature. It is not automatically the same report as DataFast’s channel revenue or GA4’s ads attribution. The [attribution guide](/guides/marketing-attribution-tools/) separates those meanings so a pricing page does not do it by accident.

If you are under 1 million events and the free matrix covers the reports you open, the correct Mixpanel price is $0. Pay when the pause is close or when a Growth-only line, such as saved cohorts or multi-touch, is the reason the team is blocked.

## How to read the yearly and monthly columns together

The savings column on Mixpanel’s page is the difference between twelve monthly invoices and the yearly price. At 1.5 million events, monthly billing is $140 and yearly is $100, and the page’s own savings figure for that step is $480 a year. You do not need a spreadsheet to see the direction. You do need a reason to believe the volume will still be 1.5 million in month eight. A yearly pack bought for a launch that then quiets down is the expensive version of a tool you are not opening.

A Growth plan counts the current month’s events, including events collected while you were on Free, toward the new allowance. Upgrading on the 20th does not give you a fresh million. If you are already over the free limit when you upgrade, the overage logic they describe can put those events on the invoice. Upgrade before the pause, not after a week of hoping the chart comes back.

Replay has its own included amount. Free replay allowances differ by plan, and older plans may not match the current page. If your organization still shows a “make the switch” style prompt, you are not on the table this article quotes. Confirm the plan version in the billing screen before you argue with a number from this page.

Add-ons are the other way a “$100 plan” becomes something else. If a sales note adds Group Analytics or a pipeline, get the add-on price in the same note. Those prices are not publicly listed. A founder who only needs the event packs can stop at the table above. A founder who needs account-level analytics should not treat the table as the whole bill.

The [alternatives](/alternatives/mixpanel/) article is the right next page if the pack you need is larger than the reports you open. Sometimes the cheaper move is fewer events, not a different logo: drop autocapture you do not query, and the free million lasts longer. Estimate from a week of real use rather than from a guess.
