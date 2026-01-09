import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";
import readingTime from "reading-time";
import { Article, ArticleMeta } from "./types";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getArticleMeta(slug: string): ArticleMeta {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    readingTime: Math.ceil(stats.minutes),
    tags: data.tags || [],
  };
}

export function getAllArticlesMeta(): ArticleMeta[] {
  const slugs = getAllArticleSlugs();
  const articles = slugs.map((slug) => getArticleMeta(slug));

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticle(slug: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const highlightedContent = await rehype()
    .use(rehypeHighlight)
    .process(processedContent.toString());
  const contentHtml = highlightedContent.toString();

  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    excerpt: data.excerpt,
    readingTime: Math.ceil(stats.minutes),
    tags: data.tags || [],
  };
}

export function getAdjacentArticles(slug: string): {
  prev: ArticleMeta | null;
  next: ArticleMeta | null;
} {
  const articles = getAllArticlesMeta();
  const currentIndex = articles.findIndex((a) => a.slug === slug);

  return {
    prev: currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null,
    next: currentIndex > 0 ? articles[currentIndex - 1] : null,
  };
}

export function getAllTags(): string[] {
  const articles = getAllArticlesMeta();
  const tagsSet = new Set<string>();
  articles.forEach((article) => {
    article.tags?.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  const articles = getAllArticlesMeta();
  return articles.filter((article) => article.tags?.includes(tag));
}
