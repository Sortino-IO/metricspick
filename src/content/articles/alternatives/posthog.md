---
title: "PostHog alternatives for founders"
seoTitle: "Best PostHog alternatives for founders"
description: "PostHog alternatives compared honestly: Mixpanel and Amplitude for product analytics, DataFast for revenue attribution, and GA4 or Plausible when the suite is more product than you need."
kicker: Alternatives
lede: "PostHog is a product suite with a wide free tier. An alternative only helps if you know which part of the suite you use, and which part you installed because the homepage made it look easy."
accent: "PostHog alternatives"
updated: 2026-11-24
section: alternatives
breadcrumb: PostHog
order: 30
tldr:
  - "Mixpanel and Amplitude are the alternatives when you still want product analytics."
  - "DataFast is the alternative when the question is revenue by channel, not replay and flags."
  - "GA4, Plausible, and Fathom are the alternatives when PostHog was only ever a marketing-site tag."
  - "PostHog’s first million analytics events each month are free. Check your volume before you leave to save money."
tldrNote: "Public pages checked 24 November 2026. DataFast is not offered here as a full PostHog replacement."
jobs:
  - title: Another product suite
    body: You use funnels, replay, or flags, and you want a different vendor for that same job.
    who: Mixpanel or Amplitude
  - title: Revenue by channel
    body: You want payments tied to marketing sources, and you do not use the rest of the suite.
    who: Start with DataFast
  - title: A calmer marketing tag
    body: The project is a website. Replay and flags are unused.
    who: Plausible, Fathom, or GA4
  - title: The free tier fits
    body: You are inside 1 million events, 5,000 recordings, and the other free allowances.
    who: Stay on PostHog
comparison: posthog-alternatives
ladders:
  - posthog
  - mixpanel
tools:
  - id: mixpanel
    title: Mixpanel
    blurb: "Event analytics with its own free million events. Multi-touch attribution starts on Growth."
    cta: Mixpanel alternatives
    href: /alternatives/mixpanel/
  - id: amplitude
    title: Amplitude
    blurb: "A larger published free event tier, at 2 million events a month, and a Plus plan that starts at $0."
    cta: Amplitude pricing
    href: /pricing/amplitude/
  - id: datafast
    title: "DataFast — revenue, not the suite"
    blurb: "Use it for channel and page revenue. Keep PostHog if you still need replay, flags, or product funnels."
    cta: "Visit DataFast"
    placement: posthog-alt-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: plausible
    blurb: "A cookieless marketing-site tool. Revenue tracking is a Business-plan feature in Plausible’s docs."
    cta: Plausible overview
    href: /alternatives/plausible/
honestyTitle: When you should not rip PostHog out
honesty: |
  Stay if replay, feature flags, or experiments are in the weekly workflow, if you self-host the open-source product on purpose, or if your event volume still fits the free allowances and the bill is the fear rather than the invoice. A second tool for marketing revenue can sit beside PostHog. It does not have to replace it.
faqs:
  - q: Is DataFast a PostHog alternative?
    a: "For revenue attribution, yes. As a full replacement, no. PostHog’s pricing page is a suite: analytics, replay, flags, experiments, and more. DataFast’s docs center on traffic joined to payments. Read the [DataFast review](/reviews/datafast/) and the [PostHog vs GA4](/compare/posthog-vs-google-analytics/) comparison before you treat them as substitutes."
  - q: What is the cheapest way to leave PostHog?
    a: "First check whether you are inside the free tier. The first million analytics events, 5,000 recordings, and 1 million flag requests each month are free. If you are over that and you only needed a marketing dashboard, Plausible or Fathom can be cheaper than a product suite. If you still need the suite, price Mixpanel and Amplitude at the same event volume."
  - q: Does PostHog do revenue attribution?
    a: "You can send payment events and analyze them. That is instrumentation, not a packaged “which channel paid” product. Mixpanel marks multi-touch attribution as a Growth feature. DataFast’s product is built around the payment join. Pick the level of assembly you want to do yourself."
  - q: Are the DataFast links affiliate links?
    a: "Yes. They include via=sortino. PostHog, Mixpanel, Amplitude, and Plausible links here are citations, not affiliate links."
related:
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: A fixed revenue tier beside PostHog’s free allowances.
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing, explained for founders
    description: Free allowances, anonymous event rates, and a worked example.
  - href: /compare/posthog-vs-google-analytics/
    type: Compare
    title: PostHog vs Google Analytics
    description: Which overlap is real, and which job belongs to which tool.
  - href: /alternatives/mixpanel/
    type: Alternatives
    title: Mixpanel alternatives
    description: The other product-analytics shortlist.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Published prices, payment providers, and the cookieless limit.
---

PostHog’s pricing page is unusually direct. It says most companies use the product for free, lists a monthly allowance for each product, and then publishes usage rates. On 24 November 2026 those allowances included 1 million analytics events, 5,000 session recordings, 1 million feature-flag requests, 100,000 error-tracking exceptions, and 1,500 survey responses. The free plan is one project and one year of event retention, and usage stops at the limits so you are not surprised by a bill. Pay-as-you-go keeps the same free bucket, adds a card, and bills what you use beyond it, with six projects and two years of retention.

Anonymous product-analytics events above 1 million start at $0.00005 each for the next million and step down from there. The full card is on the [PostHog pricing](/pricing/posthog/) page. Identified events add a person-profile charge. PostHog says anonymous events can be up to four times cheaper. That is the product people mean when they search for a PostHog alternative: a suite with a real free tier and a usage curve, not a single dashboard.

## Name the part you actually use

PostHog is easy to install as “our analytics” and then use as three different products.

If the weekly habit is session replay and feature flags, an alternative has to cover that habit. Mixpanel’s current pricing page includes replay on Free, Growth, and Enterprise, with 10,000 replays on Free and a much higher ceiling on Growth. Amplitude’s pricing page includes replay on the plans it lists, with 10,000 recordings on Free. Neither copy is a promise that the replay product feels like PostHog’s. It is a promise that you are still shopping in the suite aisle.

If the weekly habit is a funnel of product events, Mixpanel and Amplitude are the direct alternatives. Both are event tools. Both will feel familiar the week you have to rename an event. The [Mixpanel alternatives](/alternatives/mixpanel/) and [Amplitude alternatives](/alternatives/amplitude/) pages compare their published allowances. Amplitude’s free tier is 2 million events. PostHog’s analytics free tier is 1 million. Mixpanel’s free tier is 1 million. A team at 1.5 million anonymous events should do the arithmetic before calling any of them the cheap option.

If the weekly habit is “which page made money,” you are not using the suite. You are using PostHog as a marketing tag with extra buttons. DataFast, Plausible, Fathom, or GA4 are the alternatives, and they are not interchangeable with each other either.

## DataFast for the revenue question

DataFast is the recommendation on this site when the job is revenue attribution. It is not a full replacement for PostHog. The homepage asks which marketing channels drive paying customers. The docs show how to connect Stripe, Lemon Squeezy, Polar, and Paddle. Starter is $9 per month at 10,000 events. Growth is $19 at the same allowance, with more sites, more seats, longer retention, social mentions, and link attribution. The [review](/reviews/datafast/) has the rest of the ladder.

What you lose by leaving PostHog for DataFast is the suite: replay, flags, experiments, error tracking, the warehouse-shaped features. What you gain, if those were idle, is a product whose terms and docs talk about payments as events and about channels as the thing the dashboard is for. The default script uses cookies. The cookieless script trades away long-horizon identity. DataFast writes that trade-off down. Read it in the [cookieless guide](/guides/cookieless-analytics/) if a banner is the reason you want to leave PostHog’s cookie choices.

PostHog’s persistence is configurable. This page does not pretend there is one PostHog cookie story for every install. If your reason for leaving is privacy paperwork, read PostHog’s privacy docs for the install you have, then read DataFast’s cookieless doc, then decide. A logo swap does not finish a privacy review.

## Mixpanel and Amplitude if you still want events

Mixpanel Growth starts at $0 and then steps up in published packs. At 1.5 million events the yearly price on the pricing page is $100 per month, and the monthly price is $140. Multi-touch attribution is a Growth feature. If you adopted PostHog partly for “attribution” and you meant multi-touch product attribution, Mixpanel’s matrix is the one to read. If you meant “the blog post that sold the annual plan,” you are back to DataFast or to GA4’s ads reports.

Amplitude Plus starts at $0 after a free 2 million events. The page does not give a single dollar rate for the steps above that. It tells you to estimate. We did not invent the estimate. The [Amplitude pricing](/pricing/amplitude/) guide lists what is published: retention lengths, the Plus feature list, and the startup year of Growth for companies under the stated size and funding caps.

Choose Mixpanel or Amplitude when a person on the team will own the event plan. Choose to stay on PostHog when that person already owns the PostHog project and the invoice is inside a billing limit you set. PostHog’s pricing FAQ says you can set billing limits on most products and that hitting the limit drops additional events rather than charging past it. That control is part of the product. An alternative that lacks it can be a worse deal at the same per-event price.

## Marketing-site alternatives

Plausible’s homepage is a cookieless analytics product with a slider from $9 a month. Revenue tracking is described in the docs as a reason to choose Business. Fathom starts at $15 a month for up to 100,000 pageviews and lists event and revenue tracking on all plans. GA4 is free and is the tool to keep if Google Ads is the spend. The [GA4 alternatives](/alternatives/google-analytics/) page is the long version, and it is the right page if PostHog was never inside the app.

A sensible pattern for a small SaaS company is two tools on purpose. PostHog, Mixpanel, or Amplitude on the product host. DataFast, Plausible, Fathom, or GA4 on the marketing host. The mistake is one tool forced to answer both questions badly. PostHog can ingest the marketing site. It can also become a bill of identified pageviews you did not need person profiles for. Anonymous events are the cheaper PostHog path for a content site. Their docs say so. Use that setting if you stay.

## A leaving checklist

Write the three PostHog screens someone opened in the last month. If the list is replay and flags, shortlist Mixpanel and Amplitude and price them at your event volume. If the list is a web-analytics dashboard, shortlist Plausible, Fathom, and GA4. If the list is a wish for revenue by channel, shortlist DataFast and read the review before you export anything.

Do not delete the PostHog project in the same afternoon. PostHog retains events for a year on the free plan and two years on pay-as-you-go. Your history is part of the value. Run the new tool in parallel until one real question has been answered twice.

The [how we test](/how-we-test/) page records what we did not do: we did not replay your project, and we did not receive a PostHog invoice. The rates above are the public card. Your mix of anonymous and identified events will not match a stranger’s example, including the $25 illustration on the pricing page, which assumes 1.5 million anonymous events and no other product.
