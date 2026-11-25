import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";

function rewriteLinks() {
  return (tree) => {
    const visit = (node) => {
      if (node?.type === "element" && node.tagName === "a" && node.properties?.href) {
        const href = String(node.properties.href);
        try {
          if (href.includes("datafa.st")) {
            const url = new URL(href, "https://datafa.st");
            if (url.hostname === "datafa.st") {
              url.searchParams.set("via", "sortino");
              node.properties.href = url.toString();
              node.properties.rel = "sponsored nofollow noopener";
              node.properties.target = "_blank";
              node.properties.dataPlacement = node.properties.dataPlacement || "article-inline";
            }
          } else if (/^https?:\/\//.test(href)) {
            node.properties.target = "_blank";
            node.properties.rel = "noopener";
          }
        } catch {
          /* leave the original href if it cannot be parsed */
        }
      }
      for (const child of node?.children ?? []) visit(child);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: "https://metricspick.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  markdown: {
    processor: unified({ rehypePlugins: [rewriteLinks] }),
  },
});
