---
title: "DataFast API"
seoTitle: "DataFast API Guide"
description: "DataFast API guide for goals and revenue. See website keys versus account tokens, the payments endpoint, and what the CLI and MCP include on the entry plans."
kicker: Guides
lede: "Use the DataFast API when a backend should record a goal or a payment after your server confirms it. Skip it if connecting Stripe, Lemon Squeezy, Polar, or Shopify in the dashboard already answers the question. Website keys start with df_. Account tokens start with dft_. Both entry plans include the API."
accent: "DataFast API"
updated: 2026-11-26
section: guides
breadcrumb: DataFast API
order: 35
tldr:
  - "Start at the API getting-started page on datafa.st/docs/api."
  - "A df_ key is for one website. A dft_ token is for the account, the CLI, and agents."
  - "Custom goals use POST /api/v1/goals. Custom payments use POST /api/v1/payments."
  - "API, CLI, and MCP are on both the $9 Starter card and the $19 Growth card at 10,000 events."
tldrNote: "Checked against the DataFast docs on 26 November 2026. Links to datafa.st are affiliate links. Do not paste a real token into a page or a chat."
jobs:
  - title: Send a goal or a payment from your server
    body: Your backend confirms the action, then DataFast should record it.
    who: Website API with a df_ key
  - title: Let an agent read the account
    body: You already have DataFast and you want a terminal or an MCP client.
    who: CLI, or the MCP guide
  - title: The dashboard is enough
    body: A documented payment provider may be all you need to connect.
    who: Skip the API until a custom flow needs it
  - title: A different DataFast
    body: The Arizona IT company and the Ecuador payments company do not publish this API.
    who: The review separates the names
tools:
  - id: datafast
    title: "DataFast, open the docs"
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
honestyTitle: A token is a secret
honesty: |
  A real website key or account token can read or change whatever it was allowed to change, until you revoke it. Do not commit one, and do not send one to this site. The docs use placeholders. If a field below and the current doc disagree, the doc wins.
faqs:
  - q: Where are the DataFast docs?
    a: "The documentation home is [datafa.st/docs](https://datafa.st/docs). The API introduction is [Get started with the DataFast API](https://datafa.st/docs/api). Goals are documented at the [goals reference](https://datafa.st/docs/api/website/goals). Payments are documented at the [create payment reference](https://datafa.st/docs/api/website/payments/create). The assistant setup is the [MCP guide](/guides/datafast-mcp/)."
  - q: Which key do I use?
    a: "Use a df_ website key for one site: analytics, goals, payments, and identify. Use a dft_ account token when you manage websites, funnels, alerts, or an agent. On website routes, a dft_ token has to pass a website id. A df_ key does not."
  - q: Does the API cost extra?
    a: "There is no separate public API fee. As of 26 November 2026, both 10,000-event cards include API, CLI, and MCP. Starter is $9 a month and Growth is $19. Both figures are published prices for 10,000 monthly events. Events you send still count toward the allowance. See [DataFast pricing](/pricing/datafast/)."
  - q: Are these affiliate links?
    a: "Links to datafa.st on this page use via=sortino. The [disclosure](/affiliate-disclosure/) explains the commission. The [review](/reviews/datafast/) is the product, and the [alternatives](/alternatives/datafast/) page is the shortlist if you wanted a different API."
related:
  - href: /guides/datafast-mcp/
    type: Guides
    title: DataFast MCP
    description: The assistant connection, after the account exists.
  - href: /pricing/datafast/
    type: Pricing
    title: DataFast pricing
    description: The plans that include API, CLI, and MCP.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: What the product is for, before you integrate it.
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: A different API, attached to a suite.
sources:
  - label: DataFast API introduction
    href: https://datafa.st/docs/api
  - label: Create a goal
    href: https://datafa.st/docs/api/website/goals
  - label: Create a payment
    href: https://datafa.st/docs/api/website/payments/create
---

The DataFast API is how a backend sends goal events and revenue into [datafa.st](https://datafa.st/), and how an authorized client reads analytics back out. The docs, the CLI, and MCP are three ways into the same account. This guide is the map. The field list on each official page is the contract.

Paths below were checked on 26 November 2026. DataFast here is the analytics product. The [review](/reviews/datafast/) separates the other companies that share the name.

## Where the docs are

Open [Get started with the DataFast API](https://datafa.st/docs/api) first. Authentication, goals, and payments each have their own page. There is a playground for trying endpoints while you are signed in. Use those pages for parameter names. This guide does not copy every optional field.

## Website keys and account tokens

The getting-started doc draws two API surfaces.

The website API uses a key prefixed `df_`. It is for one website: read analytics, list visitors, send goals, send payments, and identify users. You create it in the website's API settings. With that key, the website is inferred.

The account API uses a token prefixed `dft_`. It is for managing websites, creating keys, funnels, alerts, team invites, and agents. On public website routes, that token has to pass `websiteId`. It can be limited to specific websites and permissions. Viewers are read-only. The account API page is the full permission list.

The CLI wraps the same workflows for a terminal. The docs describe `datafast login` as the way to create a `dft_` token and store it for the CLI. Prefer an environment variable over a token committed to a repository.

MCP is the third door. The server URL is `https://datafa.st/api/mcp`. It can query analytics and change objects you authorize. It cannot delete websites, and it cannot connect or disconnect payment providers. The setup is the [MCP guide](/guides/datafast-mcp/) and DataFast's [MCP introduction](https://datafa.st/docs/mcp-introduction).

All three are included on the entry plan cards. At 10,000 events, Starter is $9 a month and Growth is $19 a month. Both figures include API, CLI, and MCP.

## How to send events

A goal is a named action, such as a signup. Custom goals count toward the monthly event allowance. The [pricing page](/pricing/datafast/) is where that allowance becomes a dollar figure.

Record a goal from the browser with the tracking script, or from the server with `POST https://datafa.st/api/v1/goals`. The goals reference lists the body fields, including how a `df_` key and a `dft_` token differ. Read that page before you send a name. Some names are reserved once a payment provider is connected, so a custom goal called payment can collide with a provider event. The custom-goals doc has that table.

Identifying a known user is a separate endpoint, linked from the getting-started page. Use it when you need to attach a person to the visitor, not when you only need a signup goal.

## How to send revenue

A connected provider is the path for completed purchases when DataFast already integrates it. In the dashboard, open the website, then revenue settings, and follow that provider's steps. The docs name Stripe, Lemon Squeezy, Polar, and Shopify, and they also cover other hosted checkouts.

For a provider that is not integrated, call the payments API when your server sees a successful payment. The reference is [POST https://datafa.st/api/v1/payments](https://datafa.st/docs/api/website/payments/create). The create-payment doc marks `amount` and `currency` as required. Amount is in major units, and 0 can represent a free trial. A repeated `transaction_id` is handled as the same payment, not a second charge. Include the visitor id when you have it, because that is what ties the payment to a channel. A `df_` key does not need `websiteId`. A `dft_` token does, plus the payments write permission.

A successful payment create returns a plain object, not the success envelope used by many other calls. Read the response section on that page before you treat a missing status field as a failure. Delete is a separate call. Do not run a sample delete against a live account.

## What it costs

There is no separate public API price. Sending events still consumes the monthly allowance. Pageviews, payment events, and custom goals all count. A busy server can move you up the ladder without a change in plan type. The [pricing guide](/pricing/datafast/) has the steps and the trial.

The API does not turn DataFast into PostHog. There is no session-replay endpoint and no feature-flag endpoint here. If that is the integration you wanted, the comparison is [DataFast vs PostHog](/compare/datafast-vs-posthog/). If you are deciding whether to use DataFast at all, start with the [alternatives](/alternatives/datafast/).
