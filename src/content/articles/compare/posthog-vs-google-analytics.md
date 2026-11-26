---
title: "PostHog vs Google Analytics: Which One Fits Your Team?"
seoTitle: "PostHog vs Google Analytics (GA4): Which Should You Use?"
description: "PostHog vs Google Analytics 4: free tiers, pricing, retention, and cookies compared, plus when to pick one tool, when to run both, and what each misses."
kicker: Compare
lede: |
  Choose **Google Analytics 4** if your growth runs on Google Ads, or if your team already relies on a working GA4 setup. It is free, and it connects natively to Google’s ad tools. Choose **PostHog** if you need to see what people do inside your product: session replays, feature flags, experiments, and event funnels. Its first 1 million analytics events each month are free.

  Many teams end up using both: GA4 on the marketing site and PostHog in the app. If your real question is which channel brings paying customers, neither tool answers it out of the box. That is where a revenue-focused tool like DataFast fits.
accent: "PostHog vs Google Analytics"
updated: 2026-11-25
section: compare
breadcrumb: PostHog vs GA4
order: 80
exactTitle: true
tldrTitle: Quick answer
tldr:
  - "**Pick GA4** if Google Ads, audiences, or a BigQuery export are part of how you work."
  - "**Pick PostHog** if your product team needs events, replays, feature flags, or A/B tests."
  - "**Run both** if your marketing site and your product need different answers."
  - "**Add DataFast** if you want revenue tied to the channel or page that drove it, without building it yourself."
tldrNote: "Standard GA4 is free. PostHog is free up to 1 million analytics events a month, then usage-based."
faqs:
  - q: "Is PostHog a good Google Analytics alternative?"
    a: "For product analytics, yes. PostHog goes deeper on in-app behavior and adds replay, flags, and experiments. For a marketing site that depends on Google Ads, GA4 is still the better fit. See [GA4 alternatives](/alternatives/google-analytics/) and [PostHog alternatives](/alternatives/posthog/) for other options."
  - q: "Is PostHog free?"
    a: "Yes, up to monthly limits that include 1 million analytics events and 5,000 session recordings. The free plan stops at those limits. On pay-as-you-go, usage beyond them is billed."
  - q: "Is Google Analytics 4 free?"
    a: "Yes. Standard GA4 is free. Analytics 360, the enterprise tier, adds higher limits and up to 50 months of data retention, with quote-only pricing."
  - q: "Can I use PostHog and Google Analytics together?"
    a: "Yes. A common setup is GA4 on the marketing site and PostHog in the product. Avoid sending every marketing pageview to PostHog as an identified event, because that raises your bill without adding insight."
related:
  - href: /pricing/posthog/
    type: Pricing
    title: PostHog pricing
    description: free allowances and per-event rates
  - href: /alternatives/google-analytics/
    type: Alternatives
    title: Google Analytics alternatives
    description: lighter tools for marketing sites
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: revenue attribution next to a product suite
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: how each tool credits a sale
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: features, pricing, and who it suits
sourcesExclusive: true
sources:
  - label: PostHog pricing
    href: https://posthog.com/pricing
  - label: PostHog product analytics pricing
    href: https://posthog.com/docs/product-analytics/pricing
  - label: PostHog anonymous vs identified events
    href: https://posthog.com/docs/data/anonymous-vs-identified-events
  - label: Google Analytics
    href: https://marketingplatform.google.com/about/analytics/
  - label: GA4 data retention
    href: https://support.google.com/analytics/answer/7667196
  - label: Analytics 360 limits
    href: https://support.google.com/analytics/answer/11202874
  - label: GA4 BigQuery Export
    href: https://support.google.com/analytics/answer/9358801
  - label: DataFast
    href: https://datafa.st/?via=sortino
---

## PostHog vs GA4 at a glance

<div class="table-scroll">
<table class="compare">
<thead>
<tr>
<th></th>
<th>PostHog</th>
<th>Google Analytics 4</th>
<th>DataFast</th>
</tr>
</thead>
<tbody>
<tr>
<td>Best for</td>
<td data-label="PostHog">Product analytics, replay, feature flags</td>
<td data-label="Google Analytics 4">Marketing sites tied to Google Ads</td>
<td data-label="DataFast">Seeing which channels bring paying customers</td>
</tr>
<tr>
<td>Starting price</td>
<td data-label="PostHog">Free for 1M events a month</td>
<td data-label="Google Analytics 4">Free (Analytics 360 is quote-only)</td>
<td data-label="DataFast">From $9 a month</td>
</tr>
<tr>
<td>Data retention</td>
<td data-label="PostHog">1 year free, 2 years on pay-as-you-go</td>
<td data-label="Google Analytics 4">Up to 14 months for event data</td>
<td data-label="DataFast">3 years on Starter</td>
</tr>
<tr>
<td>Revenue attribution</td>
<td data-label="PostHog">Possible if you send payment events</td>
<td data-label="Google Analytics 4">Through ads reports and explorations</td>
<td data-label="DataFast">Built in</td>
</tr>
<tr>
<td>Cookies</td>
<td data-label="PostHog">Configurable</td>
<td data-label="Google Analytics 4">Uses cookies by default</td>
<td data-label="DataFast">Cookie or cookieless</td>
</tr>
<tr>
<td></td>
<td data-label="PostHog"><div class="visit-row"><a class="btn btn-primary btn-sm" href="https://posthog.com/" rel="nofollow noopener" target="_blank">Visit PostHog</a></div></td>
<td data-label="Google Analytics 4"><div class="visit-row"><a class="btn btn-primary btn-sm" href="https://marketingplatform.google.com/about/analytics/" rel="nofollow noopener" target="_blank">Visit Google Analytics</a></div></td>
<td data-label="DataFast"><div class="visit-row"><a class="btn btn-primary btn-sm datafast-cta" href="https://datafa.st/?via=sortino" rel="sponsored nofollow noopener" target="_blank" data-placement="posthog-vs-ga-table">Visit DataFast</a></div></td>
</tr>
</tbody>
</table>
</div>

## When Google Analytics 4 is the better choice

GA4 is the default for a reason: it costs nothing and connects directly to Google Ads. If paid search or Google audiences drive your growth, GA4 is hard to replace.

**Where GA4 is strong**

- Free for standard properties. Only Analytics 360, the enterprise tier, carries a fee, and its pricing is quote-only.
- Native links to Google Ads and the rest of Google's marketing stack.
- BigQuery export on the free tier, with a daily limit of 1 million events.

**Where GA4 falls short**

- Event data is kept for 2 or 14 months on standard properties. Longer retention requires Analytics 360.
- The standard tag sets cookies. In many regions, that means you need a consent banner.
- The interface rewards people who use it every week. Founders who log in twice a month often struggle to find the report they need.

Stay on GA4 if your team runs Google Ads or already queries a BigQuery export. If nobody opens GA4 and you don't run ads, a lighter tool may serve you better. See our [Google Analytics alternatives](/alternatives/google-analytics/).

<div class="visit-row">
<a class="btn btn-primary btn-sm" href="https://marketingplatform.google.com/about/analytics/" rel="nofollow noopener" target="_blank">Visit Google Analytics</a>
</div>

## When PostHog is the better choice

PostHog is built for product teams. It bundles product analytics, session replay, feature flags, experiments, error tracking, and surveys, each with its own monthly free allowance.

**What you get free every month**

- 1 million analytics events
- 5,000 session recordings
- 1 million feature flag requests
- 100,000 exceptions
- 1,500 survey responses

The free plan includes 1 project and 1 year of data retention, and it stops at the limits instead of billing you. Pay-as-you-go keeps the same free allowance, then charges for what you use beyond it. It also raises the limits to 6 projects and 2 years of retention.

### PostHog pricing above the free tier

<div class="table-scroll">
<table class="compare">
<thead>
<tr>
<th>Analytics events per month</th>
<th>Price per event</th>
</tr>
</thead>
<tbody>
<tr>
<td>First 1 million</td>
<td data-label="Price per event">Free</td>
</tr>
<tr>
<td>1-2 million</td>
<td data-label="Price per event">$0.00005</td>
</tr>
<tr>
<td>2-15 million</td>
<td data-label="Price per event">$0.0000343</td>
</tr>
<tr>
<td>15-50 million</td>
<td data-label="Price per event">$0.0000295</td>
</tr>
<tr>
<td>50-100 million</td>
<td data-label="Price per event">$0.0000218</td>
</tr>
<tr>
<td>100-250 million</td>
<td data-label="Price per event">$0.000015</td>
</tr>
<tr>
<td>250 million and above</td>
<td data-label="Price per event">$0.000009</td>
</tr>
</tbody>
</table>
</div>

These rates apply to anonymous events. Identified events, which attach activity to a user profile, cost more. PostHog says anonymous events can be up to 4 times cheaper, so send identified events only where you need a user profile. Our [PostHog pricing guide](/pricing/posthog/) works through example bills.

Pick PostHog if a developer will instrument events and someone will act on replays, flags, or experiments. Using it only for marketing-site pageviews usually costs more effort than it saves.

<div class="visit-row">
<a class="btn btn-primary btn-sm" href="https://posthog.com/" rel="nofollow noopener" target="_blank">Visit PostHog</a>
</div>

## Where PostHog and Google Analytics overlap

Both tools show traffic sources, top pages, and funnels you define. Both install with a snippet or an SDK. For basic traffic reports, either works.

The differences are what matter:

- **Advertising:** GA4 connects to Google Ads. PostHog does not offer the same native link.
- **Product tools:** PostHog includes session replay, feature flags, and experiments. GA4 has none of these.
- **Cookies:** GA4's standard tag sets first-party cookies. PostHog lets you configure persistence, including options that use fewer cookies, but it is not cookieless by default. If you need a cookieless setup, see our [cookieless analytics guide](/guides/cookieless-analytics/).

## Using PostHog and GA4 together

Running both is often the right call when your marketing site and your product have different owners and different questions. A common split looks like this:

- **Marketing site:** GA4, or a lighter tool such as Plausible, Fathom, or DataFast.
- **Product:** PostHog.

Before you add PostHog, write one sentence for each tool, for example: "GA4 answers paid-search questions. PostHog shows what happens inside the app." If you can't write the PostHog sentence, you probably don't need it yet.

Three mistakes to avoid when you switch or add a tool:

1. **Removing GA4 too early.** Run both for at least two weeks and compare one campaign you trust before you turn GA4 off.
2. **Sending every pageview as an identified event.** On a busy blog, this inflates your PostHog bill without adding insight. Use anonymous events on marketing pages.
3. **Leaving tools without an owner.** Give each tool one person who is responsible for it, even if that person is the founder.

## Where DataFast fits

DataFast is not a replacement for either tool. It does one job: it connects revenue to the channel, campaign, or page that brought the customer. GA4 can get close through ads reports and explorations. PostHog can get there if you send payment events and build the report yourself.

Consider DataFast if you've tried both and still can't see which channels drive sales. Plans start at $9 a month. Read our [DataFast review](/reviews/datafast/), check [DataFast pricing](/pricing/datafast/), or see how it compares in [DataFast vs PostHog](/compare/datafast-vs-posthog/) and [DataFast vs Google Analytics](/compare/datafast-vs-google-analytics/).

<div class="visit-row">
<a class="btn btn-primary btn-sm datafast-cta" href="https://datafa.st/?via=sortino" rel="sponsored nofollow noopener" target="_blank" data-placement="posthog-vs-ga-cta">Visit DataFast</a>
<em>(affiliate link)</em>
</div>

## How to decide

List the five questions you asked your analytics tool last month, then sort them:

- **Mostly ads and acquisition:** stay on GA4.
- **Mostly in-app behavior:** try PostHog alongside GA4, and estimate your event volume against the free tier first.
- **Mostly "which channel made us money":** read our [marketing attribution guide](/guides/marketing-attribution-tools/) and trial a revenue tool like DataFast.
- **A mix:** split the tools by site and app.

Comparing PostHog with other product analytics tools instead? See our [Mixpanel pricing](/pricing/mixpanel/) and [Amplitude pricing](/pricing/amplitude/) guides.
