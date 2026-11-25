---
title: "DataFast API"
seoTitle: "DataFast API and docs: events, revenue, CLI, and MCP"
description: "The DataFast API and the datafa.st docs: website keys versus account tokens, how to send goal events and revenue, and what the CLI and MCP cover. As of 25 November 2026."
kicker: Guides
lede: "The DataFast API is how a backend sends goal events and revenue into datafa.st, and how a script reads analytics back out. The docs, the CLI, and the MCP server are three doors into that same account. The paths below are as of 25 November 2026."
accent: "DataFast API"
updated: 2026-11-25
section: guides
breadcrumb: DataFast API
order: 35
tldr:
  - "DataFast docs live at datafa.st/docs. The API getting-started page is datafa.st/docs/api. Adding .md to a docs URL returns a markdown copy."
  - "A df_ website key is for one site: analytics, goals, payments, and identify. A dft_ account token is for the account, the CLI, and agents."
  - "Custom events go to POST /api/v1/goals, or through the datafast() script call. Revenue goes through a connected payment provider, or POST /api/v1/payments."
  - "API, CLI, and MCP are included on both the $9 Starter card and the $19 Growth card at 10,000 events. There is no separate API fee."
tldrNote: "Paths, fields, and plan details as of 25 November 2026. Links to datafa.st are affiliate links. Do not paste a real token into a page or a chat."
jobs:
  - title: Send a signup or a payment from your server
    body: You want a goal or a charge recorded after your backend confirms it.
    who: Website API with a df_ key
  - title: Ask an agent about an account you already have
    body: You want analytics or account changes from a terminal or an MCP client.
    who: CLI, or the MCP guide
  - title: You only wanted the dashboard
    body: Connecting Stripe, Lemon Squeezy, Polar, or another documented provider may be enough.
    who: Skip the API until a custom flow needs it
  - title: You meant a different DataFast
    body: The Arizona IT company and the Ecuador payments company do not publish this API.
    who: The review separates the names
tools:
  - id: datafast
    title: "DataFast — open the docs"
    blurb: "Keys are created in the account, not on this page. The button is an affiliate link."
    cta: "Visit DataFast"
    placement: datafast-api-card
    featured: true
    secondaryHref: /guides/datafast-mcp/
    secondaryCta: DataFast MCP guide
  - id: posthog
    title: PostHog
    blurb: "A different API, attached to a product suite, with a free event allowance."
    cta: DataFast vs PostHog
    href: /compare/datafast-vs-posthog/
honestyTitle: Tokens are secrets, and this page is not a client library
honesty: |
  The examples in DataFast’s docs use placeholders such as df_xxx. A real website key or account token can read or change whatever it was allowed to change, until you revoke it. Do not commit one, and do not send one to this site. If a field below is not on the linked doc, it is not filled in here. The official page wins when the two disagree.
faqs:
  - q: Where are the DataFast docs?
    a: "The documentation home is [datafa.st/docs](https://datafa.st/docs). The API introduction is [Get started with the DataFast API](https://datafa.st/docs/api). Every docs page has a markdown version if you add .md to the URL. As of 25 November 2026 that was true for the API, goals, payments, CLI, and MCP pages. The [MCP guide](/guides/datafast-mcp/) on this site is the assistant setup. This page is the HTTP and CLI reading."
  - q: What is the DataFast API base URL?
    a: "The base URL for v1 endpoints is https://datafa.st/api/v1/. Requests use a Bearer token. Website keys are created under Website settings, API. Account tokens are created under Account settings, API, or with the CLI command datafast tokens create."
  - q: How do I send an event?
    a: "There are three ways. In the browser, call datafast() with a goal name, or put data-fast-goal on an element. From a server, POST /api/v1/goals with datafast_visitor_id and name. Both of those body fields are required, the name identify is reserved, and a visitor with no pageviews on the site returns 404. Payments are a different endpoint. Do not send a charge as a custom goal if you want the revenue report."
  - q: How do I send revenue?
    a: "If the provider is one DataFast connects, use the Revenue tab in site settings. The automatic path covers Stripe, Lemon Squeezy, Polar, Paddle, Shopify, and WooCommerce. For a custom provider, POST /api/v1/payments. The create-payment call requires amount, currency, and transaction_id, and you should include datafast_visitor_id when you can so the payment is attributed."
  - q: Does the DataFast API cost extra?
    a: "As of 25 November 2026 the 10,000-event homepage cards include API, CLI, and MCP on both Starter ($9 a month) and Growth ($19). There is no separate API line item. Events you send still count toward the monthly allowance. The [pricing page](/pricing/datafast/) is the ladder."
related:
  - href: /guides/datafast-mcp/
    type: Guides
    title: DataFast MCP
    description: The remote server at datafa.st/api/mcp, and what it will not do.
  - href: /pricing/datafast/
    type: Pricing
    title: DataFast pricing
    description: Starter and Growth, including the API, CLI, and MCP tick.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: What the analytics product is, and which DataFast it is not.
  - href: /alternatives/datafast/
    type: Alternatives
    title: DataFast alternatives
    description: When another analytics tool is the honest fit.
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: A revenue API beside a product-analytics suite.
sources:
  - label: DataFast documentation home
    href: https://datafa.st/docs
  - label: Get started with the DataFast API
    href: https://datafa.st/docs/api
  - label: Authentication and scopes
    href: https://datafa.st/docs/api/authentication
  - label: Custom goals
    href: https://datafa.st/docs/custom-goals
  - label: Create a custom goal
    href: https://datafa.st/docs/api/website/goals/create
  - label: Payments API
    href: https://datafa.st/docs/api/website/payments
  - label: Create a payment
    href: https://datafa.st/docs/api/website/payments/create
  - label: Connect a payment provider
    href: https://datafa.st/docs/connect-payment-provider
  - label: Revenue attribution guide
    href: https://datafa.st/docs/revenue-attribution-guide
  - label: Custom payment providers
    href: https://datafa.st/docs/payments-api
  - label: DataFast CLI
    href: https://datafa.st/docs/cli-introduction
  - label: DataFast MCP introduction
    href: https://datafa.st/docs/mcp-introduction
  - label: DataFast llms.txt
    href: https://datafa.st/llms.txt
---

The DataFast API is the HTTP surface of the analytics product at [datafa.st](https://datafa.st/). It is the way to read analytics, send server-side events, and manage the account from a backend, a script, or an AI agent. The [DataFast docs](https://datafa.st/docs) are the source. This guide maps those pages as of 25 November 2026, so a search for the DataFast API or the DataFast docs lands on the real URLs. It is not a second client, and it is not a changelog.

Two other companies use the DataFast name. Neither one publishes this API. The [review](/reviews/datafast/) separates datafa.st from DataFast Networks in Arizona and from Datafast S.A. in Ecuador. Links below to datafa.st are affiliate links. They do not change the price of a plan.

## Where the DataFast docs are

The documentation home is [datafa.st/docs](https://datafa.st/docs). The page a developer should open first for HTTP is [Get started with the DataFast API](https://datafa.st/docs/api). Authentication is a separate page, [Authentication and scopes](https://datafa.st/docs/api/authentication). There is also an [API playground](https://datafa.st/docs/api/playground) for trying website and account endpoints while signed in.

DataFast publishes [llms.txt](https://datafa.st/llms.txt) for agents. Every documentation page has a markdown copy: add `.md` to the docs URL. As of 25 November 2026, the API introduction, the goal and payment pages, the CLI introduction, and the MCP introduction each returned markdown. Use those URLs if you are reading the docs from a script. Use the HTML URLs if you are a person. If a `.md` URL and the HTML page ever disagree, treat the HTML docs as the product and tell us.

The same llms.txt file also lists older short paths such as `/docs/api-introduction` and `/docs/api-create-payment`. As of 25 November 2026, the introduction short path returned the same getting-started document as `/docs/api`. The links below use the paths the docs name.

## What the API, the CLI, and MCP are for

The getting-started doc draws three surfaces, not one blob called “the API.”

The website API uses a key whose prefix is `df_`. It is for one website: read analytics, list visitors, send goals, send payments, identify users, or query that site. You create it under Website settings, then API. With that key, the website is inferred. You do not pass a website id on the public website routes.

The account API uses a token whose prefix is `dft_`. It is for managing websites, creating API keys, creating funnels, managing alerts, inviting team members, connecting integrations, or letting an agent manage the account. You create it under Account settings, then API. On public website routes, a `dft_` token has to pass `websiteId`. The token can also be limited to a permission list and to specific websites. Viewers are read-only. Members manage most website settings. Owners manage team members. Permission names include `analytics:read`, `goals:write`, `payments:write`, and `identify:write`, plus read and write pairs for websites, settings, keys, funnels, alerts, notes, and team. A star permission is full access. The [Account API](https://datafa.st/docs/api/account) page is the full list.

The CLI is the same workflows from a terminal. It is a wrapper around the API, aimed at people and at coding agents. The package name is `@datafast/cli`. Install with `npm install -g @datafast/cli`, or `npx @datafast/cli login` if you do not want a global install. `datafast login` opens the account API tab so you can create a `dft_` token. The token is saved at `~/.config/datafast/config.json`. A `df_` key can be used instead when you only want one website. Environment variables are `DATAFAST_TOKEN`, `DATAFAST_SITE_KEY`, and `DATAFAST_API_BASE` (default `https://datafa.st`). Commands cover websites, tokens, analytics, visitors, goals, alerts, funnels, and shell completion. `datafast logout` removes the saved token.

MCP is the third door. DataFast’s llms.txt and the MCP introduction name the server URL `https://datafa.st/api/mcp`. It uses Streamable HTTP, with OAuth or a bearer token. It can query analytics and change objects you authorize. It cannot delete websites, and it cannot connect or disconnect payment providers. Those two limits are in the docs, and they matter: revenue still starts with a person connecting a provider, or with the payments endpoint below. The longer setup, including the warning about pasting a `dft_` token into a chat, is the [MCP guide](/guides/datafast-mcp/) on this site and the [MCP introduction](https://datafa.st/docs/mcp-introduction) on theirs.

All three are included on the entry plan cards. The 10,000-event Starter and Growth cards both include “API, CLI & MCP.” The tooltip on that line says the API reads and writes programmatically, the CLI queries analytics and manages the account from the terminal, and MCP connects an assistant with the same permissions and safety checks.

## How to send events

DataFast counts more than pageviews. A goal is a specific action: a signup, a newsletter subscription, a checkout started. Goals also feed journeys, revenue predictions, and funnels, and custom goals count toward monthly usage. Track what you will actually read. The [pricing page](/pricing/datafast/) is where that allowance becomes a dollar figure.

There are three ways to record a goal.

In the browser, call `datafast()` with the goal name, for example a signup on the thank-you page. Names are lowercase. Numbers, underscores, hyphens, and colons are allowed. The maximum is 64 characters. An optional object can carry up to 10 custom parameters. Parameter names are lowercase with numbers, underscores, and hyphens, up to 64 characters. Values are strings up to 255 characters. The same doc shows a `data-fast-goal` attribute on a button, with extra `data-fast-goal-*` attributes for parameters. It also shows a small queue snippet for the `<head>` so an event fired before the main script loads is not dropped. Client-side tracking is less accurate when an ad blocker or a network failure eats the call. Server-side is the more accurate method.

From a server, the create-goal doc is `POST https://datafa.st/api/v1/goals`. The required body fields on that page are `datafast_visitor_id` and `name`. `visitorId` is documented as an alias. `metadata` is the optional custom-parameter object. `description` is optional. The name is stored lowercase, spaces become underscores, and the name `identify` is reserved. A `df_` key does not need `websiteId`. A `dft_` token needs `goals:write` and `websiteId` on the query string. The success body uses `status: "success"` and returns an `eventId`. Errors called out on the page include 400 for a bad name or metadata, 403 when tracking is suspended, and 404 when that visitor has no pageviews on the website. The visitor id comes from the `datafast_visitor_id` cookie set by the tracking script. If you call the endpoint for someone who never loaded a tracked page, the site will not have that visitor.

A few goal names are reserved once a payment provider is connected. The custom-goals doc lists `payment` and `free_trial`, plus subscription names such as `trial_started`, `subscription_started`, `subscription_renewed`, and `subscription_ended`. Do not send custom goals with those names, or they can be confused with provider events. Read the table on that page before you invent a goal called `payment`.

Identifying a known user is a different call. The getting-started page points identify at [its own endpoint](https://datafa.st/docs/api/website/identity/identify), with the `identify:write` permission for account tokens. The payload is on that page. Open it if the job is “attach this email to the visitor,” not “record a signup goal.”

## How to send revenue

Revenue is not a custom goal. Use the revenue-attribution setup for completed purchases, because a connected provider supplies the financial detail a goal name does not.

The [connect a payment provider](https://datafa.st/docs/connect-payment-provider) doc is the path for providers DataFast already integrates. In the dashboard you open the website, then Site settings, then the Revenue tab, and follow that provider’s steps. The providers named there are Stripe, Lemon Squeezy, Polar, and Shopify, and more than one can be connected. Shopify and WooCommerce have their own install guides, which also cover visitors and attribution. The [revenue attribution guide](https://datafa.st/docs/revenue-attribution-guide) is a chooser: Stripe, Lemon Squeezy, Polar, Paddle, Dodo Payments, and several hosted-checkout tools, plus a link for custom providers.

For a provider that is not in that list, or for a payment link you handle yourself, the docs send you to the Payments API. [Custom payment providers](https://datafa.st/docs/payments-api) says: when your server sees a successful payment, call DataFast. The flow they recommend is to read the `datafast_visitor_id` cookie, store it, and send it with the charge. The reference is [POST https://datafa.st/api/v1/payments](https://datafa.st/docs/api/website/payments/create).

The create-payment doc requires three body fields: `amount` (a number, zero or greater, in major units), `currency` (they use `USD` as the example), and `transaction_id` from your billing system. `datafast_visitor_id` is not marked required. Include it whenever you can, because that is what attributes the payment to a channel. Optional fields on that page include customer email and name (each accepted under two spellings), `customer_id`, `renewal`, `refunded`, `is_free_trial` (also inferred when the amount is 0), and an ISO `timestamp` that defaults to now. Posting the same `transaction_id` again is documented as idempotent: a duplicate message, not a second payment. A `df_` key needs no `websiteId`. A `dft_` token needs `payments:write` and `websiteId`.

One response detail is easy to get wrong if you only read the getting-started page. Most successful API calls use a `status: "success"` envelope. A successful payment create does not. It returns a plain object with `message` and, sometimes, `transaction_id`. Validation errors on that endpoint can be a plain `error` string rather than the usual envelope. Delete is a separate `DELETE /api/v1/payments`, by transaction, visitor, or a `startAt`/`endAt` range. A delete without a date range can match the whole history. Do not call it from a sample script.

The homepage FAQ also lists a Payment API next to the native integrations. That matches these pages. It does not add fields the create-payment doc omits.

## What it costs

API access has no separate public price. As of 25 November 2026 both 10,000-event cards included the API, the CLI, and MCP. Starter at that step was $9 a month. Growth was $19. The [DataFast pricing](/pricing/datafast/) page has the steps above 10,000 events, the yearly rule (ten times the monthly price), and the trial. Sending events still consumes the event allowance. Pageviews, payment events, and custom goals all count as events. A busy server can climb the ladder without a change in plan type.

Rate limits exist. The getting-started error table includes 429, and it shows a sample body with a limit of 60. That sample illustrates the error shape, including `X-RateLimit-*` headers. It is not a published ceiling of 60 for every token. Read the headers on your own response.

The API does not turn DataFast into PostHog. There is no session-replay endpoint and no feature-flag endpoint. If that is the integration you wanted, the comparison is [DataFast vs PostHog](/compare/datafast-vs-posthog/). If you are deciding whether to use DataFast at all, the [alternatives](/alternatives/datafast/) page is the shortlist, including when to stay.
