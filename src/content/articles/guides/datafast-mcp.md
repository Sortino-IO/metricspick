---
title: "DataFast MCP"
seoTitle: "DataFast MCP Guide"
description: "DataFast MCP connects an assistant to your analytics. See the server URL, OAuth and account tokens, what an agent can change, and what stays in the dashboard."
kicker: Guides
lede: "Use DataFast MCP if you already have an account and you want an assistant to ask about your analytics in plain language. It is not a way to connect payments, and it is not a public dataset. The server is https://datafa.st/api/mcp. Both entry plans include it."
accent: "DataFast MCP"
updated: 2026-11-26
section: guides
breadcrumb: DataFast MCP
order: 30
tldr:
  - "The server URL in the docs is https://datafa.st/api/mcp. You need a DataFast account with API access."
  - "The 10,000-event Starter and Growth cards both include API, CLI, and MCP."
  - "Connect with OAuth, or with an account token that starts with dft_. Keep that token out of source control."
  - "MCP cannot delete websites, and it cannot connect or disconnect payment providers."
tldrNote: "Checked against DataFast's MCP docs on 26 November 2026. Links to datafa.st are affiliate links. This guide does not include a live token."
jobs:
  - title: Ask an assistant about your sites
    body: You already have a DataFast account and you want answers in Cursor, Claude Code, Codex, or another MCP client.
    who: DataFast MCP
  - title: You do not have an account yet
    body: The server does not answer anonymous questions about the public web.
    who: Start the trial, then connect
  - title: A different DataFast
    body: The Arizona IT company and the Ecuador payments company are not this server.
    who: The review separates the names
  - title: Replay or flags in chat
    body: MCP exposes DataFast's analytics, not a product suite.
    who: PostHog, if that is the suite you need
tools:
  - id: datafast
    title: "DataFast, open API and MCP settings"
    blurb: "The token is created in the account, not on this page. The button is an affiliate link."
    cta: "Visit DataFast"
    placement: datafast-mcp-card
    featured: true
    secondaryHref: /reviews/datafast/
    secondaryCta: Read the review
  - id: posthog
    title: PostHog
    blurb: "A different product, with its own assistant story and a free event allowance."
    cta: DataFast vs PostHog
    href: /compare/datafast-vs-posthog/
honestyTitle: A token is a secret
honesty: |
  Both connection methods end in a credential. Anyone who has a valid token can do whatever that token was allowed to do, until you revoke it. Do not paste a dft_ value into a repository, a chat log, or this website. Use an environment variable and a placeholder in examples.
faqs:
  - q: What is DataFast MCP?
    a: "It is DataFast's remote MCP server at https://datafa.st/api/mcp. An MCP client uses it to query your account and, if you allow writes, to change goals, funnels, alerts, and other account objects. It belongs to the analytics product at datafa.st, not to the Arizona IT company or the Ecuador payments company."
  - q: How do I connect?
    a: "OAuth, when the client can open a browser sign-in, or an account token that starts with dft_, sent as a Bearer token. The docs name Codex, Claude Code, and Cursor as clients. Read [the MCP introduction](https://datafa.st/docs/mcp-introduction) for the exact client flags. Sending the events an assistant later reads is the [API guide](/guides/datafast-api/)."
  - q: What can it not do?
    a: "DataFast's docs say dashboard-only operations stay in the dashboard. MCP cannot delete websites or connect and disconnect payment providers. An assistant can query revenue after a person connects a provider."
  - q: What does it cost?
    a: "On the 10,000-event cards, Starter is $9 a month and Growth is $19. Both figures include API, CLI, and MCP. There is no separate MCP fee on those cards. The [pricing page](/pricing/datafast/) has the higher steps."
related:
  - href: /guides/datafast-api/
    type: Guides
    title: DataFast API
    description: Keys, goals, and payments, which MCP does not replace.
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: What the account is, before you connect an assistant.
  - href: /pricing/datafast/
    type: Pricing
    title: DataFast pricing
    description: The plans that include the MCP line.
  - href: /alternatives/datafast/
    type: Alternatives
    title: DataFast alternatives
    description: If you wanted a different product's assistant.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: The report an assistant would be querying.
sources:
  - label: DataFast MCP introduction
    href: https://datafa.st/docs/mcp-introduction
---

DataFast MCP is a remote server that lets an MCP client ask about your own analytics. It is included on the entry plan cards. It does not connect Stripe for you, and it does not answer questions about sites you do not own.

This guide was checked against the docs on 26 November 2026. DataFast means [datafa.st](https://datafa.st/). The [review](/reviews/datafast/) separates the other companies that use the name.

## What you can ask it to do

Connect Codex, Claude Code, Cursor, or another MCP client and ask about traffic, pages, revenue sources, or a funnel. The docs describe tools for analytics, visitors, goals, funnels, websites, team members, and tokens. Writes stay limited to the permissions you grant. Changing paid bot capacity stays in billing. The tool reference on DataFast's site is the inventory. This page is not a transcript of a live session.

## Two ways to connect

The server URL is `https://datafa.st/api/mcp`.

OAuth is the method when the client can open a browser sign-in. The docs use Codex and Claude Code as examples. You add the URL, sign in, choose websites, and review permissions. Read permissions start selected. Writes stay off unless you enable them. Your password and existing API keys are not shared with the client. The docs describe how long that connection stays valid. Read that section before you leave a client running unattended.

An account token is the method when the client wants a Bearer token. In account settings, under API / MCP, create a token, limit it to the websites you can, and start with read permissions. The value is shown once and begins with `dft_`. Put it in the environment the client reads. Do not commit it.

A website API key, prefix `df_`, can also be used in the ways the authentication page allows. Check that page before you assume a website key can do account-wide work. OAuth tokens are for the MCP endpoint they were issued for.

## What stays in the dashboard

Access is checked on the server: credential, permission, website, and plan limits. An OAuth grant for one website does not cover another.

DataFast's MCP docs say dashboard-only operations stay in the dashboard. MCP cannot delete websites or connect and disconnect payment providers. Revenue attribution still depends on a provider a person connects, or on the payments API. An assistant can query revenue after that. It should not be the thing that links the Stripe account.

Revoke a token by deleting or rolling it, and revoke an OAuth connection under connected apps. Data already sent to the client is not pulled back.

## Price and fit

On the 10,000-event cards, both Starter and Growth include API, CLI, and MCP. Starter is $9 a month. Growth is $19. Both figures are published prices for 10,000 monthly events. The [pricing page](/pricing/datafast/) has the steps above that. If a later plan card removes the tick, the card wins.

MCP does not make DataFast a product suite. The tools query visits, revenue, goals, and funnels. They do not add session replay or feature flags. If that is the assistant workflow you wanted, the comparison is [DataFast vs PostHog](/compare/datafast-vs-posthog/). Sending the events an assistant later reads is the [API guide](/guides/datafast-api/). The [alternatives](/alternatives/datafast/) page is the exit if you wanted a different product. The [attribution guide](/guides/marketing-attribution-tools/) is the report those questions are about.
