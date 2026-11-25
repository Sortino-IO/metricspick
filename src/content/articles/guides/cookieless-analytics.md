---
title: "Cookieless analytics: what you gain and lose"
seoTitle: "Cookieless analytics: what you gain and lose"
description: "What cookieless analytics changes for founders: Plausible, Fathom, and DataFast’s cookieless script, and why long revenue journeys get harder without a stable visitor id."
kicker: Guides
lede: "A cookieless script can remove a banner and still tell you which pages were viewed today. It has a weaker memory across days. That trade is the whole decision."
accent: "Cookieless analytics"
updated: 2026-11-24
section: guides
breadcrumb: Cookieless analytics
order: 20
tldr:
  - "You gain a simpler consent story and, on several of these tools, a smaller public pitch about personal data."
  - "You lose a stable browser identity across long gaps, which is exactly what delayed revenue attribution wants."
  - "Plausible and Fathom lead with cookieless designs. DataFast offers cookieless as a mode, and documents the accuracy cost."
  - "GA4’s standard tag uses cookies. Switching to it is not a cookieless move."
tldrNote: "Behavior described from vendor pages on 24 November 2026, especially DataFast’s cookieless doc."
jobs:
  - title: Avoid a banner
    body: The priority is a script you can explain without a consent dialog for that tool.
    who: Plausible, Fathom, or DataFast cookieless
  - title: Protect long attribution
    body: Sales take weeks, and you want the first visit to remain visible.
    who: A cookie-based script, with consent handled
  - title: Stay in Google
    body: Ads matter more than the banner. Accept GA4’s cookies or do the consent work.
    who: GA4
  - title: Product identity
    body: Logged-in users are the subject. A marketing cookie is the wrong debate.
    who: PostHog, Mixpanel, or Amplitude, configured on purpose
comparison: cookieless
tools:
  - id: plausible
    title: Plausible
    blurb: "Homepage position: no cookies, and no cookie banner required. Revenue features sit on Business."
    cta: Plausible overview
    href: /alternatives/plausible/
  - id: fathom
    title: Fathom
    blurb: "Pricing page: no cookie banner required, and revenue tracking listed on every plan."
    cta: Fathom overview
    href: /alternatives/fathom-analytics/
  - id: datafast
    title: "DataFast — cookie or cookieless"
    blurb: "Two scripts. The cookieless one is documented as less accurate for long revenue journeys."
    cta: "Visit DataFast"
    placement: cookieless-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: ga4
    blurb: "The standard tag uses cookies. It is the comparison point, not a cookieless option."
    cta: GA4 alternatives
    href: /alternatives/google-analytics/
honestyTitle: Cookieless is not anonymous in every legal sense
honesty: |
  A script can avoid cookies and still process IP addresses or similar signals. DataFast’s cookieless doc says the customer remains responsible for privacy notices and lawful basis. This page is not legal advice. It is a product comparison.
faqs:
  - q: What does cookieless mean here?
    a: "It means the analytics script does not set a cookie to remember the browser. It does not mean the vendor stores nothing. DataFast describes a hashed id built from signals such as IP, user agent, domain, and a rotating salt. Plausible and Fathom describe cookieless products in their own marketing. Read each privacy page before you promise customers a legal outcome."
  - q: Will I still see referrers?
    a: "Yes, in the ordinary case. The loss shows up when you need the same browser to be the same person next week. Aggregates for a day can look fine. A 30-day path to payment looks worse. DataFast writes this explicitly."
  - q: Which DataFast script should I use?
    a: "Use the default cookie script if attribution across days is the reason you bought it and your consent setup allows it. Use the cookieless script if avoiding that cookie is the constraint. The [review](/reviews/datafast/) links the doc. The choice is a setting, not two products."
  - q: Do product-analytics tools avoid this trade-off?
    a: "They often identify logged-in users, which is a different identifier than a marketing cookie. PostHog, Mixpanel, and Amplitude can be configured in more than one way. That is a privacy review of your SDK, not a slogan. Their pricing guides are [PostHog](/pricing/posthog/), [Mixpanel](/pricing/mixpanel/), and [Amplitude](/pricing/amplitude/)."
related:
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: Why the identifier exists in the first place.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: Both scripts, the prices, and the job the product is for.
  - href: /alternatives/plausible/
    type: Alternatives
    title: Plausible alternatives
    description: A cookieless-first product and its neighbors.
  - href: /alternatives/fathom-analytics/
    type: Alternatives
    title: Fathom alternatives
    description: Another cookieless-first product, with revenue on all plans.
---

Cookieless analytics is usually sold as relief. No banner, a short script, a dashboard that still shows pages and sources. The relief is real for a content site whose decisions are “which post worked this week.” The relief is expensive for a business whose payment arrives two weeks after the first visit, because the thing a cookie was doing was remembering that gap.

This guide explains the trade with the products we cover. It is not a legal memo. Privacy law depends on where you and your visitors are, and on what else your site stores. A vendor’s “no cookie banner” sentence is their description of their script, not a certificate for your whole page.

## What a cookie was doing in analytics

A first-party analytics cookie gives the browser a stable id. The next visit can be tied to the last one. New versus returning, a first-touch channel, and a payment that happens on a later day all lean on that stability. GA4’s standard web tag participates in this pattern. Google documents analytics cookies, including `_ga`. If you need consent before those cookies, the banner is the visible cost of the memory.

Remove the cookie and the vendor has to either forget the browser at the end of a short window or rebuild a guess from other signals. Both approaches show up in the market. The guess is where privacy reviews get serious, because an IP address plus a user agent is still a signal even when it is hashed.

## DataFast’s two scripts, in their own terms

DataFast documents a default script and a cookieless script. The default uses cookies for visitor identification and is described as the higher-accuracy option, including for long and multi-touch journeys. Depending on your setup, that script may need a cookie banner. The cookieless script does not use cookies for the visitor id. DataFast says it is designed so you usually do not need a banner for DataFast itself.

The cookieless mechanics, from that doc: no long-lived visitor cookie, possible session storage for the current tab session, and a server-side pseudonymous id hashed from signals such as IP address, browser user agent, your domain, and a salt that rotates about every 24 hours. The same person on a later day is not linked as one long-lived profile. Cross-domain linking is off. Returning-visitor breakdowns, visit-count filters, and the user or journey tabs are unavailable or less reliable. Identify features used with the default script are not applied the same way.

The doc’s revenue paragraph is the one founders should read twice. DataFast’s value is tying revenue to traffic sources. Without a stable key, multi-touch and delayed conversions attribute less completely. Daily aggregates can still mean something. A story that needs the first touch from last quarter will not survive the rotating salt. They also say this limit is shared by cookieless products generally, and that teams who need long-cycle accuracy should use the default script and plan for consent.

That is as clear as vendor writing gets. The [DataFast review](/reviews/datafast/) treats the default script as the one that matches the revenue recommendation, and the cookieless script as a conscious downgrade when the banner is the binding constraint. Starter still starts at $9 per month either way. The mode does not change the invoice. It changes the memory. The [pricing page](/pricing/datafast/) is that invoice, [DataFast vs Plausible](/compare/datafast-vs-plausible/) is the cookieless neighbor, and the [alternatives](/alternatives/datafast/) page is the wider shortlist if the cookie trade means you should leave. Our link to the doc carries the affiliate parameter `via=sortino`.

## Plausible and Fathom, which start from cookieless

Plausible’s homepage says there are no cookies and that a cookie banner is not required for their script. The product is positioned as a Google Analytics alternative that respects visitor privacy, made and hosted in the EU. You should expect the same class of limit DataFast describes, even though Plausible’s marketing does not use the salt paragraph we quoted. A cookieless design does not reconstruct a six-week committee purchase. Plausible’s revenue features, per their plan docs, are a reason to choose Business, not a promise that cookieless revenue is long-horizon multi-touch. The [Plausible alternatives](/alternatives/plausible/) page has the prices: Starter from $9 a month at 10,000 pageviews.

Fathom’s pricing page says a cookie banner is not required and lists event and revenue tracking on every plan, from $15 a month at up to 100,000 pageviews. Again, the presence of a revenue feature is not a measurement of how far back a first touch survives. We did not test that distance. We can say the feature is on the price list, and we can say the privacy pitch is cookieless. The [Fathom page](/alternatives/fathom-analytics/) keeps those claims separate.

If your sales cycle is a same-day checkout, both products can show a source on a payment often enough to be useful. If your sales cycle is a quarter, ask the vendor, in writing, how a first visit is stored, before you promise the board a first-touch chart. That question is more useful than another logo comparison.

## GA4 and the product suites

Moving from Plausible to GA4 to “get better attribution” is a move back to cookies. It can be the right move when Google Ads is the channel and you will do the consent work. It is a contradictory move if the banner was the problem you paid to remove. The [GA4 alternatives](/alternatives/google-analytics/) page assumes that contradiction is possible and tells you when to stay on GA4 anyway.

PostHog, Mixpanel, and Amplitude are often used with logged-in identifiers. A user id your app already has is not a third-party marketing cookie, and it is also not “cookieless” as a moral category. It is personal data you chose to send, under your privacy notice. These tools can be configured with more or less browser persistence. Budget a privacy review of the SDK, not a slogan. Their value is product analytics. The [attribution guide](/guides/marketing-attribution-tools/) separates that job from channel revenue so the cookie debate does not swallow it.

## How to choose the mode

If you publish a content site and you look at yesterday’s referrers, pick a cookieless-first tool and stop negotiating with yourself. Plausible and Fathom are the straight versions of that choice. DataFast’s cookieless mode is the version to pick if you also want its revenue screen and you accept the documented loss on long gaps.

If you sell with a delay, and the first article is the thing you are trying to fund, use a stable id. On DataFast that means the default script plus whatever consent you owe. On your own database it might mean storing the first-touch UTM on the customer when they sign up, which survives even if the analytics cookie later disappears. That database field is often more honest than any analytics product, cookieless or not.

If you are not sure of the delay, look at ten recent payments and write down the days since the first visit you know about. A cluster of zeros and ones supports a cookieless tool. A cluster of twenties supports a cookie, a login, or a field in your own app. The [how we test](/how-we-test/) page is why this guide stops before pretending we timed those ten payments for you.
