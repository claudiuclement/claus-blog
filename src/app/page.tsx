import { getAllArticlesMeta } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";
import Link from "next/link";

export default function Home() {
  const articles = getAllArticlesMeta();

  return (
    <>
      <header className="bio">
        <h1>Claudiu Clement&apos;s Thoughts</h1>
        <p>
          I write about technology, e-Commerce, and whatever else interests me.
        </p>
        <nav className="header-nav">
          <Link href="/about/">About</Link>
          <Link href="/building/">Building</Link>
        </nav>
      </header>
      <h2>Essays</h2>
      <ArticleList articles={articles} />
    </>
  );
}
