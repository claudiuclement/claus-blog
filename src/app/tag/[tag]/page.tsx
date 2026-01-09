import { Metadata } from "next";
import { getAllTags, getArticlesByTag } from "@/lib/articles";
import Link from "next/link";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getAllTags();
  if (tags.length === 0) {
    return [{ tag: "_placeholder" }];
  }
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `${tag} articles`,
    description: `Essays tagged with ${tag}`,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const articles = getArticlesByTag(tag);

  return (
    <>
      <p className="meta">
        <Link href="/">← Essays</Link>
      </p>
      <h1>Tagged: {tag}</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/${article.slug}/`}>{article.title}</Link>
            <span className="date">{formatDate(article.date)}</span>
          </li>
        ))}
      </ul>
      {articles.length === 0 && <p className="meta">No articles found.</p>}
    </>
  );
}
