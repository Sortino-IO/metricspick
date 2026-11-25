import { getCollection } from "astro:content";

export async function pathsFor(section: "alternatives" | "pricing" | "compare" | "guides" | "reviews") {
  const articles = await getCollection("articles", ({ data }) => data.section === section);
  return articles.map((article) => ({
    params: { slug: article.id.split("/").pop() ?? article.id },
    props: { id: article.id },
  }));
}
