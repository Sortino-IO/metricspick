import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    kicker: z.string(),
    lede: z.string(),
    accent: z.string().optional(),
    updated: z.coerce.date(),
    author: z.string().default("MetricsPick editors"),
    section: z.enum(["alternatives", "pricing", "compare", "guides", "reviews"]),
    breadcrumb: z.string(),
    schemaType: z.enum(["Article", "Review"]).default("Article"),
    order: z.number().default(50),
    tldr: z.array(z.string()),
    tldrTitle: z.string().optional(),
    tldrNote: z.string().optional(),
    jobs: z
      .array(z.object({ title: z.string(), body: z.string(), who: z.string() }))
      .optional(),
    comparison: z.string().optional(),
    ladders: z.array(z.string()).optional(),
    tools: z
      .array(
        z.object({
          id: z.enum([
            "datafast",
            "plausible",
            "fathom",
            "posthog",
            "ga4",
            "mixpanel",
            "amplitude",
          ]),
          title: z.string().optional(),
          blurb: z.string(),
          cta: z.string(),
          href: z.string().optional(),
          placement: z.string().optional(),
          featured: z.boolean().optional(),
          secondaryHref: z.string().optional(),
          secondaryCta: z.string().optional(),
        }),
      )
      .optional(),
    honestyTitle: z.string().optional(),
    honesty: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(
      z.object({
        href: z.string(),
        type: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    sources: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    /** When true, the sources list is only this article's links. */
    sourcesExclusive: z.boolean().optional(),
    /** When true, the document title is the SEO title with no brand suffix. */
    exactTitle: z.boolean().optional(),
  }),
});

export const collections = { articles };
