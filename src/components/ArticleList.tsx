"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Search from "./Search";
import { ArticleMeta } from "@/lib/types";

interface ArticleListProps {
  articles: ArticleMeta[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return articles;
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(q) ||
        article.excerpt?.toLowerCase().includes(q)
    );
  }, [articles, query]);

  return (
    <>
      <Search value={query} onChange={setQuery} />
      <ul className="article-list">
        {filtered.map((article) => (
          <li key={article.slug}>
            <Link href={`/${article.slug}/`}>{article.title}</Link>
            <span className="date">{formatDate(article.date)}</span>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <p className="meta">No articles found.</p>}
    </>
  );
}
