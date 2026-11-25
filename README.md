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

`GTM_ID` is `GTM-PJ8GQK6B`. The standard Tag Manager head snippet and the noscript iframe render on every page. GA4 is loaded through that container, not through a direct gtag.js file. Consent Mode v2 defaults to denied in the EEA, the UK, and Switzerland, and granted elsewhere. `GSC_VERIFICATION` is the Search Console token rendered as a meta tag. Leave either value empty to omit its markup.

`script-src` includes `'unsafe-inline'` because the Consent Mode stub, the Tag Manager bootstrap, the cookie banner, the affiliate click listener, and the address reveal are inline and have to stay in the document. A static response cannot set a per-request nonce, and a hash would change when the HTML is minified. `style-src` is `'self'` only. The editorial address is assembled in the browser from separate parts and is not written as a mailto link in the HTML.

## Content

Articles live in `src/content/articles/{alternatives,pricing,compare,guides,reviews}/`. Add a Markdown file, set `section`, and the hub, breadcrumbs, and sitemap pick it up. Shared prices are in `src/data/catalog.ts`.

## Deploy

`vercel.json` turns on trailing slashes and caches hashed assets. Do not treat a preview as production. Production deploys are handled separately.
