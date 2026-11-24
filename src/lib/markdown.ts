import { Marked } from "marked";
import { datafastUrl, isDatafastHref } from "../config/site";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const marked = new Marked({
  gfm: true,
  renderer: {
    link({ href, text }) {
      const safeText = escapeHtml(text);
      const raw = href ?? "";
      if (isDatafastHref(raw)) {
        const url = datafastUrl(raw);
        return `<a href="${escapeHtml(url)}" rel="sponsored nofollow noopener" target="_blank" data-placement="article-inline">${safeText}</a>`;
      }
      if (/^https?:\/\//.test(raw)) {
        return `<a href="${escapeHtml(raw)}" rel="noopener" target="_blank">${safeText}</a>`;
      }
      return `<a href="${escapeHtml(raw)}">${safeText}</a>`;
    },
  },
});

export function renderMarkdown(source: string): string {
  const html = marked.parse(source.trim(), { async: false });
  if (typeof html !== "string") {
    throw new Error("Expected synchronous markdown");
  }
  return html;
}

export function plainText(source: string): string {
  return source
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
