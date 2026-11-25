# metricspick

Independent comparisons of web and product analytics tools for founders. Static [Astro](https://astro.build) site for [metricspick.com](https://metricspick.com).

DataFast is recommended for revenue attribution (which channel or page brought a payment). It is not a full replacement for PostHog, Mixpanel, or Amplitude.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Config

`src/config/site.ts` holds the DataFast affiliate URL (`https://datafa.st/?via=sortino`). Every DataFast link, including docs, keeps `via=sortino`.

`GTM_ID` and `GSC_VERIFICATION` are empty. The Tag Manager snippet and the Search Console meta tag render only when those values are set.

## Content

Articles live in `src/content/articles/{alternatives,pricing,compare,guides,reviews}/`. Add a Markdown file, set `section`, and the hub, breadcrumbs, and sitemap pick it up. Shared prices are in `src/data/catalog.ts`.

## Deploy

`vercel.json` turns on trailing slashes and caches hashed assets. Do not treat a preview as production. Production deploys are handled separately.
