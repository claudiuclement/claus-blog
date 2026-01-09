import { Metadata } from "next";
import { getArticle, getAllArticleSlugs, getAdjacentArticles } from "@/lib/articles";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";

const SITE_URL = "https://claudiuclement.com";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  const url = `${SITE_URL}/${slug}/`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt || "",
      url,
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.excerpt || "",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const { prev, next } = getAdjacentArticles(slug);

  return (
    <>
      <ReadingProgress />
      <p className="meta">
        <Link href="/">← Essays</Link>
      </p>
      <h1>{article.title}</h1>
      <p className="meta">
        {new Date(article.date).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
        {" · "}
        {article.readingTime} min read
        {article.tags && article.tags.length > 0 && (
          <>
            {" · "}
            {article.tags.map((tag, i) => (
              <span key={tag}>
                <Link href={`/tag/${tag}/`}>{tag}</Link>
                {i < article.tags!.length - 1 && ", "}
              </span>
            ))}
          </>
        )}
      </p>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <ShareButtons
        title={article.title}
        url={`${SITE_URL}/${slug}/`}
      />
      <nav className="article-nav">
        {prev ? (
          <Link href={`/${prev.slug}/`} className="nav-prev">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/${next.slug}/`} className="nav-next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}
