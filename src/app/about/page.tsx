import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Claudiu Clement",
  description: "About Claudiu Clement",
};

export default function About() {
  return (
    <>
      <p className="meta">
        <Link href="/">← Essays</Link>
      </p>
      <h1>About</h1>
      <div className="bio-content">
        <p>I&apos;m Claudiu.</p>
        <p>
          By day, I build technology for e-commerce brands, mostly around Amazon.
        </p>
        <p>
          I currently work as a CTO in the agency world, while building a product
          that shortens the path from insight to action. In this space, data is
          messy and decisions are expensive. <strong>Clarity</strong> is a competitive advantage.
        </p>
        <p>
          My background is statistical/ML heavy. I&apos;m allergic to vague metrics
          and dashboards that look nice but don&apos;t tell you what to do. I like
          systems. Clean definitions. Fewer charts, better questions.
        </p>
        <p>
          Outside work, I train: cycling, running, lifting. I chase the slow
          progress that comes from consistency.
        </p>
        <p>
          It&apos;s the same reason I write: to think in public. To be rigorous.
          To change my mind when evidence demands it.
        </p>
        <p>
          This site is a place for that. Simple pages. No noise. Just ideas
          I&apos;m trying to make clearer.
        </p>
      </div>
    </>
  );
}
