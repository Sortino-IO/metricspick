---
title: "DataFast MCP"
seoTitle: "DataFast MCP: connect an assistant to your analytics"
description: "DataFast MCP is the remote server at datafa.st/api/mcp. How OAuth and account tokens work, what an agent can read, and what stays in the dashboard. Checked 25 November 2026."
kicker: Guides
lede: "DataFast MCP is a remote server on datafa.st that lets an MCP client ask about your analytics in plain language. It is included on the entry plan cards. It is not a way to connect payments, and it is not a public dataset."
accent: "DataFast MCP"
updated: 2026-11-25
section: guides
breadcrumb: DataFast MCP
order: 30
tldr:
  - "The server URL in the docs is https://datafa.st/api/mcp. You need a DataFast account with API access."
  - "The 10,000-event Starter and Growth cards both tick API, CLI, and MCP. The changelog dated 18 July 2026 says the server is available to everyone."
  - "Connect with OAuth, or with an account token that starts with dft_. The docs tell you to keep that token out of source control."
  - "Website deletion and connecting payment providers stay in the dashboard. MCP cannot do those."
tldrNote: "Setup steps are a reading of DataFast’s MCP docs and changelog on 25 November 2026. Links to datafa.st are affiliate links. This guide does not include a live token."
jobs:
  - title: Ask an assistant about your own sites
    body: You already have a DataFast account and you want traffic or revenue answers in Cursor, Claude Code, Codex, or another MCP client.
    who: DataFast MCP
  - title: You do not have an account yet
    body: The server does not answer anonymous questions about the public web.
    who: Start the trial, then connect
  - title: You meant a different DataFast
    body: The Arizona IT company and the Ecuador payments company are not this server.
    who: The review separates the names
  - title: You need replay or flags via chat
    body: MCP exposes DataFast’s analytics tools, not a product suite.
    who: PostHog or another suite, if that is the job
tools:
  - id: datafast
    title: "DataFast — open API / MCP settings"
    blurb: "The token is created in the account, not on this page. The button is an affiliate link."
    cta: "Visit DataFast — affiliate"
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
  Both connection methods end in a Bearer credential. Anyone who has a valid token can use whatever that token was allowed to do, until it expires or you revoke it. Do not paste a dft_ value into a repository, a chat log, or this website. The examples below use the environment-variable pattern from DataFast’s docs and a placeholder, not a working key.
faqs:
  - q: What is DataFast MCP?
    a: "It is DataFast’s remote MCP server, documented at datafa.st, URL https://datafa.st/api/mcp. An MCP client uses it to query your DataFast account and, if you allow writes, to change goals, funnels, alerts, and other account objects. It is part of the analytics product at datafa.st, not a service from the Arizona IT company or the Ecuador payments company that share the DataFast name."
  - q: Does DataFast MCP cost extra?
    a: "The homepage plan cards at 10,000 events tick “API, CLI & MCP” on both Starter ($9 a month) and Growth ($19). The changelog of 18 July 2026 says the server is available to everyone. The intro doc says you need an account with API access. We did not find a separate MCP line item on those cards. Plan limits still apply to the data the tools return."
  - q: OAuth or an API token?
    a: "The docs recommend OAuth for clients that offer it, including Codex and Claude Code. You approve websites and permissions in the browser, and the client stores the connection. Use an account token, prefix dft_, when the client asks for a Bearer token. Cursor’s documented pattern is an mcp.json entry that reads the token from the environment. OAuth tokens expire; the docs say one hour, with refresh, and fresh consent after at most 90 days. Dashboard account tokens last until you roll or delete them."
  - q: What can the agent not do?
    a: "The MCP intro says dashboard-only operations stay in the dashboard. MCP cannot delete websites or connect and disconnect payment providers. Write tools require confirmation. A token scoped to one website cannot read another. Revoking a connection blocks later requests. It does not delete data the client already received."
related:
  - href: /reviews/datafast/
    type: Reviews
    title: DataFast review
    description: The product the MCP server is attached to.
  - href: /pricing/datafast/
    type: Pricing
    title: DataFast pricing
    description: Starter and Growth, including the API, CLI, and MCP tick.
  - href: /guides/marketing-attribution-tools/
    type: Guides
    title: Marketing attribution tools
    description: The report an assistant would be querying.
  - href: /compare/datafast-vs-posthog/
    type: Compare
    title: DataFast vs PostHog
    description: When the assistant you want is attached to a product suite instead.
sources:
  - label: DataFast MCP introduction
    href: https://datafa.st/docs/mcp-introduction
  - label: DataFast MCP tool reference
    href: https://datafa.st/docs/mcp-tools
  - label: DataFast MCP changelog, 18 July 2026
    href: https://datafa.st/changelog/datafast-mcp-server
  - label: DataFast homepage plan cards
    href: https://datafa.st/
---

DataFast MCP is how the analytics product at [datafa.st](https://datafa.st/) exposes your account to an MCP client. The docs call the server URL `https://datafa.st/api/mcp`. The client can ask about traffic, revenue, and goals, and it can change account objects you authorize. It cannot see websites you did not grant, and it is not a general web-analytics search engine. No DataFast account means no data.

The name collides with other companies. This server belongs to the analytics app Marc Lou’s homepage describes, operated as JustShipIt Pte. Ltd. trading as DataFast. It is not a remote-management tool from DataFast Networks in Arizona, and it is not an API from Datafast S.A. in Ecuador. The [review](/reviews/datafast/) is that separation. This page is the connection.

We read the MCP introduction, the tool reference, the 18 July 2026 changelog, and the homepage plan cards on 25 November 2026. We did not connect a production token from this site. Links to datafa.st are affiliate links. They do not change the price, and they are not a substitute for the docs if a step has moved.

## What you can ask it to do

The changelog says you can connect Codex, Claude Code, Cursor, or another MCP client and ask, in plain language, about a traffic spike, visitors who reached a page, revenue sources, or a funnel. It lists querying analytics, visitors, sources, pages, revenue, and funnels; creating and updating goals, funnels, and alerts; managing websites, team members, tokens, and website API keys; and checking integrations. The tool reference is the inventory. Tool names are prefixed `datafast_` and mirror the account API and CLI. Analytics tools cover overview, timeseries, realtime, pages, referrers, campaigns, goals, and funnels, among others. Bot-traffic tools are a separate group. Changing paid bot capacity stays in the billing dashboard. The docs say MCP can report that state and does not charge the card.

Treat the changelog’s examples as the vendor’s description of the surface, not as a result we reproduced.

## Two ways to connect

The introduction says both methods use Streamable HTTP, and that you should pick one.

OAuth is the method they recommend when the client can open a browser sign-in. Codex and Claude Code are the examples. You add the server URL, sign in to datafa.st, choose websites, and review permissions. Read permissions start selected. Writes stay off unless you enable them. DataFast issues a connection token. The docs say your password, dashboard session, and existing API keys are not shared with the client. The same page says an OAuth access token expires after one hour, refreshes for up to 30 days from issuance, and needs fresh consent after at most 90 days. Manage the connection under Settings, then API / MCP, then Connected apps.

An account token is the method when the client wants a Bearer token. In Account settings, under API / MCP, you create a token, limit it to specific websites if you can, and start with the read permissions you need. The value is shown once and begins with `dft_`. The docs’ Cursor example points `mcp.json` at `https://datafa.st/api/mcp` and sends `Authorization: Bearer ${env:DATAFAST_TOKEN}`. Put the real token in the environment the client reads. Do not commit it. Codex’s documented flag is `--bearer-token-env-var` pointed at that variable. Claude Code’s documented header is the same Bearer pattern. Clients that only speak local stdio need a bridge. DataFast names mcp-remote as an example of one.

A website API key, prefix `df_`, can also call the general MCP endpoint, scoped to that website. The docs say to check the authentication page for which operations it supports. Account tokens also work on the supported REST endpoints. OAuth tokens, the docs say, work only at the MCP endpoint they were issued for. They cannot be pasted into the public REST API or used to sign in to the dashboard.

## What the server will refuse

Access is checked on the server: credential, permission, website, membership, and plan limits. A website id in a request is not proof that the token may read it. An OAuth grant for website A does not cover website B. A website created later, outside that grant, is not added automatically. A website created through an approved OAuth tool is added to that connection.

Writes are not silent. The intro says OAuth write tools require confirmation and a retry key, and that API-token tools require confirmation for sensitive operations such as deleting data or issuing credentials. The tool reference marks irreversible or credential-issuing tools with a confirm flag. Those checks sit on top of whatever confirmation the client shows. They do not make an untrusted client safe.

Two operations stay in the dashboard even if you wanted them in chat. The intro says MCP cannot delete websites and cannot connect or disconnect payment providers. Revenue attribution still depends on a provider connected by a person in the product. An assistant can query revenue after that. It should not be the thing that links the Stripe account.

Revoke a token by deleting or rolling it, and revoke an OAuth connection in Connected apps. The docs say a request already running may finish, and data already sent to the client is not pulled back.

## Price and fit

On the 10,000-event homepage cards, both Starter and Growth include the “API, CLI & MCP” line. Starter at that step is $9 a month. Growth is $19. The [pricing page](/pricing/datafast/) has the volume steps above that. The July 2026 changelog says the server is available to everyone. “Everyone” still means a DataFast account. The intro’s first requirement is API access on that account. If a future plan card removes the tick, the card wins over this paragraph.

MCP does not make DataFast a product-analytics suite. The tools query DataFast’s model: visits, revenue, goals, funnels, bots. They do not add session replay or feature flags. If that is the assistant workflow you wanted, the comparison is [DataFast vs PostHog](/compare/datafast-vs-posthog/), not a second MCP URL.
