---
title: "PostHog vs Google Analytics"
seoTitle: "PostHog vs Google Analytics for founders"
description: "PostHog vs Google Analytics for founders: which job each tool actually does, what the free tiers include, and when to run both instead of picking a winner."
kicker: Compare
lede: "PostHog and GA4 overlap on pageviews and funnels. They diverge on ads, warehouses, replay, and flags. Most teams that feel forced to pick one should keep the one they already use well and add the other only for a missing job."
accent: "PostHog vs Google Analytics"
updated: 2026-11-24
section: compare
breadcrumb: PostHog vs GA4
order: 10
tldr:
  - "Choose GA4 when Google Ads, a finished GA4 practice, or a BigQuery export is the thing you would miss."
  - "Choose PostHog when the product needs events, replay, flags, or experiments, and you want that suite on a usage bill."
  - "Standard GA4 is free. PostHog’s first million analytics events a month are free, then usage pricing starts."
  - "Neither is the revenue-attribution specialist. DataFast is the third name when that is the actual question."
tldrNote: "Compared from public pricing and product pages on 24 November 2026."
jobs:
  - title: Ads and the Google stack
    body: Campaigns, audiences, and a team that already trusts GA4.
    who: Stay on GA4
  - title: The product suite
    body: Replay, flags, and product funnels are the weekly work.
    who: Look at PostHog
  - title: Revenue by channel
    body: You want the payment tied to a page or campaign without a suite.
    who: Start with DataFast
  - title: Run both
    body: The marketing host and the product host are different questions.
    who: GA4 or a light tool, plus PostHog
comparison: posthog-vs-ga
ladders:
  - posthog
tools:
  - id: posthog
    title: PostHog
    blurb: "The suite side of this comparison. Free allowances, then a public usage card."
    cta: PostHog pricing
    href: /pricing/posthog/
  - id: ga4
    title: Google Analytics 4
    blurb: "The free, ads-connected side. Cookies and complexity included."
    cta: GA4 alternatives
    href: /alternatives/google-analytics/
  - id: datafast
    title: "DataFast — if revenue is the missing report"
    blurb: "Not a winner of PostHog vs GA4. A third tool when neither answer is the payment join."
    cta: "Visit DataFast — affiliate"
    placement: posthog-vs-ga-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
honestyTitle: There is often no single winner
honesty: |
  Replacing GA4 with PostHog because a thread said GA4 is confusing will also delete ads reporting. Replacing PostHog with GA4 because GA4 is free will delete replay and flags. If both reports are real, the honest architecture is both tools, scoped to the host each one is good at.
faqs:
  - q: Is PostHog a Google Analytics alternative?
    a: "For product analytics, it is a different and often better instrument. For a marketing site tied to Google Ads, GA4 remains the tool that speaks Google’s ad stack. See [PostHog alternatives](/alternatives/posthog/) if you are leaving PostHog, and [GA4 alternatives](/alternatives/google-analytics/) if you are leaving GA4."
  - q: Which one is free?
    a: "Standard GA4 is free on Google’s analytics page. PostHog is free inside monthly allowances, including 1 million analytics events, and bills usage after that on pay-as-you-go. A busy product can outgrow the allowance. A brochure site on GA4 does not get a usage invoice from Google for the standard product."
  - q: Can I use both?
    a: "Yes. A common split is GA4, Plausible, Fathom, or DataFast on the marketing site, and PostHog on the app. Double-tagging every page into both, with PostHog identified events, is how the PostHog bill grows without a new insight."
  - q: Where does DataFast fit?
    a: "Beside this comparison, not instead of it. DataFast is for revenue attribution. It does not replace PostHog’s suite or GA4’s ads reports. The [review](/reviews/datafast/) has the price ladder. Links to DataFast are affiliate links."
related:
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing
    description: The allowances and the anonymous event card.
  - href: /alternatives/google-analytics/
    type: Alternatives
    title: Google Analytics alternatives
    description: Lighter tools if PostHog is more suite than you wanted.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: How credit for a payment differs across these products.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: The revenue pick, scoped so it does not swallow this comparison.
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: The revenue tool beside PostHog, when GA4 is not the other name.
---

PostHog versus Google Analytics is a popular comparison because both can tell you that a page was viewed. That overlap is real and it is the smallest part of either product. GA4 is Google’s free measurement product for sites and apps, connected to Google’s advertising tools. PostHog is a product suite that prices analytics, replay, flags, experiments, and other meters separately, with a large monthly free tier. Choosing between them as if they were two themes for the same dashboard is how teams delete the report they still need.

This page uses the public record as of 24 November 2026. It does not include a bake-off of the same website in both tools. We did not run one.

## What GA4 is for

Google’s analytics marketing page says the product is free of charge and aimed at understanding customers across sites and apps, with connections into Google Ads and the rest of Google’s advertising stack. Standard GA4 does not have a monthly list price. Analytics 360 is the enterprise offer. We did not find a public 360 price on the page we checked, so none is printed here.

The standard web tag uses cookies. If your consent setup requires a banner before those cookies, the banner is part of operating GA4. The interface is deep. Explorations, audiences, and attribution models repay a person who learns them. They punish a founder who opens the property twice a month. That is a description of the product’s shape, not a statistic about failure rates.

Keep GA4 if someone on the team uses Google Ads reporting, if a BigQuery export is already in a warehouse someone queries, or if the property is already trusted and the pain is a single missing chart you could build. Leaving because the navigation feels dated is a weak reason if the ads account is the company’s acquisition engine.

## What PostHog is for

PostHog’s pricing page lists a free monthly bucket: 1 million analytics events, 5,000 session recordings, 1 million feature-flag requests, 100,000 exceptions, 1,500 survey responses, and more. The free plan is one project and one year of event retention, and it stops at the limits instead of billing you. Pay-as-you-go keeps the bucket and bills the rest, with six projects and two years of retention. Anonymous events past the first million start at $0.00005 on the published card. The [pricing guide](/pricing/posthog/) does the arithmetic and points at the identified-event caveat.

You adopt PostHog when a developer will send events, when someone will watch a replay, or when flags and experiments are part of shipping. You can also point it at a marketing site. Doing only that, with identified events, is an expensive way to redraw GA4. PostHog’s own docs recommend anonymous events when you do not need a person profile, and they say those events can be up to four times cheaper.

## Where they actually overlap

Both can show traffic sources, pages, and a funnel if you define the steps. Both can be installed on a website with a snippet or an SDK. Both will produce a chart that looks like “users this week” within an hour of a careful install.

The overlap ends at the edges that make each product worth paying attention to. GA4’s edge is Google’s ad and measurement ecosystem. PostHog’s edge is the suite around the event: replay of a session, a flag that changes the product, an experiment, an error. A fair comparison asks which edge you will touch in the next month. The chart of pageviews is a tie you do not need to break.

Cookies are not a tie. GA4’s standard tag sets first-party analytics cookies. PostHog’s persistence depends on configuration, including options aimed at fewer cookies. This page will not claim PostHog is cookieless in every install. Read the persistence docs for the SDK you will ship. The [cookieless guide](/guides/cookieless-analytics/) is about tools that lead with that design, which is a third group: Plausible, Fathom, and DataFast’s optional cookieless script.

## A practical split that respects both

Put GA4 on the marketing site if ads spend is real. Put PostHog on the application if the product team will use it. Give each a job sentence. “GA4 answers paid-search questions. PostHog answers what happened inside the app.” If you cannot write the second sentence, do not add PostHog yet. If you cannot write the first, and nobody opens GA4, a lighter marketing tool may be the GA4 replacement, and PostHog is not required for that replacement. The [GA4 alternatives](/alternatives/google-analytics/) page is that shortlist: Plausible, Fathom, and DataFast, with PostHog kept in its own section.

DataFast enters when the missing sentence is “which channel brought the payment.” GA4 can approach that through ads and explorations. PostHog can approach it if you send a payment event and build the insight. DataFast’s product is that join, with Starter at $9 per month for 10,000 events on the homepage we checked. It will not evaluate a feature flag. Recommending it as the winner of PostHog versus GA4 would be a category error. Recommending it when both of those tools have failed to make revenue obvious is the point of the [review](/reviews/datafast/). The link is an affiliate link. The category error would still be an error without it.

## Migration mistakes

The expensive mistake is deleting GA4 the day PostHog’s snippet returns 200. You lose the overlap period that tells you whether sources match well enough to trust. Keep two weeks. Compare one source you believe, such as a single campaign with a known spend.

The quiet mistake is sending every marketing pageview into PostHog as an identified event because the example code did it that way. The bill then measures your blog’s success. Anonymous events, or a different tool on the marketing host, avoid that.

The organizational mistake is assigning both tools to “whoever has a minute.” GA4 without an owner becomes a login nobody shares. PostHog without an owner becomes an event name nobody can define. One owner per tool, even if that owner is the founder, is the minimum.

## How to decide in an afternoon

List the five questions you asked analytics last month. Mark each GA4, PostHog, or neither.

If they are all ads and acquisition, stay on GA4 and ignore PostHog until the product needs it. If they are all in-app behavior, price PostHog’s allowance against your event volume and try it beside GA4, not instead of a warehouse export you still query. If they are all “did this article make money,” read the [attribution guide](/guides/marketing-attribution-tools/) and trial DataFast or another marketing tool. If the list is mixed, split the tools by host and stop looking for a winner.

Mixpanel and Amplitude belong in the same conversation as PostHog, not as GA4. Their pricing guides are [here](/pricing/mixpanel/) and [here](/pricing/amplitude/). Use them when the suite shortlist has more than one logo. Use this page when the other logo is Google.
