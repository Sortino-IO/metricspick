---
title: "DataFast review"
seoTitle: "DataFast review for founders"
description: "An independent DataFast review for founders: published prices, payment providers, the cookieless trade-off, and when PostHog or GA4 is the better tool. Affiliate links are labeled."
kicker: Review
lede: "DataFast is a revenue-first analytics product for founders who want to see which channel or page brought a payment. It is a good fit for that job. It is not a full replacement for PostHog, Mixpanel, or Amplitude."
accent: "DataFast review"
updated: 2026-11-24
section: reviews
breadcrumb: DataFast
schemaType: Review
order: 10
tldr:
  - "Buy it when the weekly question is which marketing source brought paying customers."
  - "Starter starts at $9 per month for 10,000 events. Growth starts at $19. Figures are from the homepage on 24 November 2026."
  - "The default script uses cookies and remembers longer journeys. The cookieless script does not, and DataFast says attribution gets weaker."
  - "Do not buy it as a session-replay suite, a feature-flag tool, or a Google Ads replacement."
tldrNote: "This review reads public pages. It is not a paid lab test. Links to DataFast are affiliate links."
jobs:
  - title: Channel revenue
    body: You will connect a payment provider and look at revenue by source.
    who: DataFast fits
  - title: Many client sites
    body: You need dozens of quiet sites on one cheap plan.
    who: Compare Fathom’s 50-site entry plan
  - title: Product behavior
    body: You need cohorts, replay, or flags inside the app.
    who: PostHog, Mixpanel, or Amplitude
  - title: Google Ads is the channel
    body: The ad account is the attribution system you already run.
    who: Keep GA4 in the stack
comparison: datafast-review
ladders:
  - datafast
tools:
  - id: datafast
    title: "DataFast — the revenue pick"
    blurb: "The product this review recommends for one job. The button is an affiliate link."
    cta: "Visit DataFast — affiliate"
    placement: review-card
    featured: true
  - id: plausible
    title: Plausible
    blurb: "Choose it for cookieless traffic stats, and Business if you want Plausible’s revenue features."
    cta: Plausible overview
    href: /alternatives/plausible/
  - id: fathom
    title: Fathom
    blurb: "Choose it for a simple dashboard, many sites, and revenue tracking on the entry plan."
    cta: Fathom overview
    href: /alternatives/fathom-analytics/
  - id: posthog
    title: PostHog
    blurb: "Choose it when the suite is the requirement. The first million events a month are free."
    cta: PostHog pricing
    href: /pricing/posthog/
honestyTitle: When this review says no
honesty: |
  Say no if you need replay, feature flags, or product cohorts. Say no if you will not connect a payment provider and you only want pageviews; Plausible or Fathom may be the calmer buy. Say no if you need Google Ads reporting that you already get from GA4. Say no to the cookieless mode if the sale takes weeks and the first touch is the whole point, unless you have read DataFast’s accuracy section and still accept it.
faqs:
  - q: Is this an affiliate review?
    a: "Yes. Links to datafa.st use via=sortino. We may earn a commission if you subscribe, at no extra cost. The [disclosure](/affiliate-disclosure/) is the full note. The recommendation is limited to revenue attribution. Other tools are reviewed without an affiliate link."
  - q: Who makes DataFast?
    a: "The homepage is written in Marc Lou’s voice and calls him the creator. The data processing agreement names JustShipIt Pte. Ltd. as the company trading as DataFast. We use those pages as the source, not a personal relationship."
  - q: What happens if I pass my event limit?
    a: "The terms say tracking continues, you are warned around 75 percent, and the dashboard locks at 100 percent until you upgrade to a plan that covers the cycle. You can instead enable a setting that pauses tracking at the limit and leaves the dashboard open. Read the current terms before you rely on a paraphrase."
  - q: Is there a free plan?
    a: "The terms describe a 14-day trial, not an ongoing free tier. The homepage says no card is required to start. If you do not subscribe, the terms say the dashboard locks, tracking stops, and data is deleted 7 days after the trial ends."
related:
  - href: /alternatives/google-analytics/
    type: Alternatives
    title: Google Analytics alternatives
    description: DataFast in the GA4 shortlist, next to Plausible and Fathom.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: How this recommendation sits next to GA4 and the product suites.
  - href: /guides/cookieless-analytics/
    type: Guides
    title: Cookieless analytics
    description: The salt, the gap, and the reason the default script exists.
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing
    description: What to buy instead when the job is the product suite.
---

DataFast is the analytics product this site recommends when a founder wants one answer: which channel, campaign, or page showed up on a paying customer. The homepage says that in Marc Lou’s words. The docs are organized around installation, payment providers, UTMs, goals, funnels, and a revenue-attribution guide. The recommendation stops there. DataFast is not a full replacement for PostHog, Mixpanel, or Amplitude, and it is not a reason to delete GA4 if Google Ads is how you buy customers.

This is an affiliate review. Buttons and doc links to datafa.st include `via=sortino`. A paid subscription started through them may pay metricspick a commission. It does not change DataFast’s price. The rest of this page is a reading of public pages on 24 November 2026. We did not operate a production account for a scored test, and we do not print a star rating.

## What you are buying

You install a script, connect a site, and connect a payment provider if you want the revenue view. The docs index includes Stripe, Lemon Squeezy, Polar, and Paddle, each with more than one integration path. The terms define an event as any point the script tracks: pageviews, payment events, free-trial signups, and custom goals, counted equally, across every site on the account, inside the monthly cycle. A yearly subscription still meters events monthly.

The homepage FAQ and the plan cards describe two shapes. Starter is one website, one team member, and three years of data retention, aimed at a solo founder. Growth is 30 websites, 30 team members, and five or more years of retention, plus social mentions on X and Reddit and link attribution. The pricing config behind the homepage matches the site counts and the mention limit. We cite both the visible FAQ and that config because the FAQ is what a reader sees and the config is where the dollar amounts live.

There is no reliable `/pricing` URL. On the day we checked, it returned a 404. The prices below are from the homepage.

## The price ladder

Monthly USD prices in the homepage data:

Starter: $9 at 10,000 events, $19 at 100,000, $29 at 200,000, $49 at 500,000, $69 at 1 million, $89 at 2 million, $129 at 5 million, $169 at 10 million, and $199 at 10 million plus.

Growth: $19, $39, $59, $99, $139, $179, $259, $339, and $399 at those same steps.

Yearly prices in the same data are ten times the monthly price, against a twelve-month anchor, which is two months free. A 10,000-event Starter year is $90, not $108. The table on this page lists the monthly numbers. Multiply by ten if you pay yearly.

Bot traffic is a separate meter. The homepage and Marc Lou’s August 2026 changelog say every account includes 100,000 accepted bot-traffic requests per billing cycle after 15 September 2026, and that an extra million requests is $9 per month, optional, and not an automatic overage. Normal web analytics keeps running if bot ingestion pauses. Do not confuse that $9 with the Starter plan.

An optional AI visibility product appears in the same code with its own prices. We are not reviewing it and we are not listing those prices. This review is the analytics plans above.

## Trial, limits, and the lock

The terms, effective 15 February 2026 on the copy we read, say new users get a 14-day trial. The homepage says no card is required to start. If you do not subscribe, the dashboard locks, tracking stops, and collected data is deleted seven days after the trial ends. If you cancel a paid plan, tracking continues for 30 days and is then deleted. That deletion policy matters if you were hoping to export a year later. The terms also say DataFast does not provide a consolidated raw-event archive. There is API access to data processed for the customer. Plan the export habit while the account is alive.

Past the event cap, the terms say data is not dropped. You get a warning around 75 percent. At 100 percent the dashboard locks until you upgrade to a tier that covers the cycle. You cannot pick a lower tier than the usage you already have. A docs page also describes a “pause tracking at limit” toggle that stops new events, keeps the dashboard open, and stops new revenue attribution until the cycle resets. Know which behavior you turned on. A lock you did not expect feels like an outage. A pause you chose is a ceiling.

## Cookies and the attribution limit

The default script uses cookies. The data processing agreement we read is written for that script and says the customer is the controller and DataFast is the processor. It also says much of the infrastructure is outside the EU, including in the United States. The terms tell the customer to handle cookie consent for the default script.

The cookieless doc describes the other script. No cookie for the visitor id. A hashed id from IP, user agent, domain, and a salt that rotates about every 24 hours. Long gaps do not stay one visitor. Journey views get worse. Revenue attribution, which is the reason to buy the product, is the feature that suffers. Daily numbers can remain useful. A first touch from last quarter will not. If that sentence describes your sale, use the default script and do the consent work, or store first-touch yourself when the visitor becomes a known customer.

We recommend DataFast for revenue attribution with that choice made on purpose. We do not recommend the cookieless mode as a silent default for long cycles. The [cookieless guide](/guides/cookieless-analytics/) is the longer explanation.

## How it compares with the neighbors

Plausible is the cookieless traffic tool with a published ladder from $9 a month and with revenue tracking aimed at the Business plan. Fathom starts at $15 a month for up to 100,000 pageviews and 50 sites, lists revenue on every plan, and has no free tier. Either can be a better buy than DataFast if you have many sites or you want a calmer traffic page more than a payment join. The [Plausible](/alternatives/plausible/) and [Fathom](/alternatives/fathom-analytics/) guides do that comparison without a fake accuracy score.

GA4 is free and is the tool to keep beside ads. PostHog’s first million events are free and the product is a suite. Mixpanel and Amplitude are the other product-analytics choices, with their own free event tiers. Use them when the question is what people do in the product. The [attribution guide](/guides/marketing-attribution-tools/) and the [PostHog vs GA4](/compare/posthog-vs-google-analytics/) page keep those jobs from collapsing into one ranking.

## Who should start the trial

Start the 14-day trial if you have a payment provider DataFast documents, a marketing site that already gets traffic, and a question you can write on one line. Connect the provider. Send one real or test payment. See whether the source on that payment matches what you believe. Use the default script unless you have already decided the cookie is unacceptable.

Skip the trial if you are shopping for replay, if you will not connect payments, or if you need a 50-site client roster on the cheapest invoice. Those are different products. The [how we test](/how-we-test/) page records the boundary of this review: public pages, a date, labeled ads, and no invented win rate.
---
