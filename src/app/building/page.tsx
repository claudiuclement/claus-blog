import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building - Claudiu Clement",
  description: "What I'm currently building in public",
};

export default function Building() {
  return (
    <>
      <p className="meta">
        <Link href="/">← Essays</Link>
      </p>
      <h1>Building</h1>
      <div className="bio-content">
        <p>What I&apos;m currently working on.</p>

        <h2>Clarisix</h2>
        <p>
          <strong>The executive view of your Amazon business.</strong>
        </p>
        <p>
          Amazon businesses run on disconnected tools — advertising,
          inventory, reviews, profitability — each speaking its own
          language. The result is noise, not clarity. Founders and CFOs
          end up stitching spreadsheets together and trusting metrics
          that aren&apos;t accounting-ready.
        </p>
        <p>
          Clarisix is the analytics platform I&apos;m building to fix
          that. It unifies six core areas — Sales, Advertising,
          Profitability, Inventory, Content, and Customer Experience —
          into one place, with CFO-grade margin analysis and honest
          metrics decision-makers can actually defend.
        </p>
        <p>
          The guiding principle is simple: <em>clarity is a product</em>.
          Executives shouldn&apos;t need analysts, consultants, or
          weekly rituals to understand how their business is performing.
          Design should serve insight, not impress with complexity.
        </p>
        <p>
          <strong>Stage:</strong> In development. Early adopters joining
          the waitlist get a 30% lifetime discount.
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a href="https://clarisix.com" target="_blank" rel="noopener noreferrer">
            clarisix.com
          </a>{" "}
          ·{" "}
          <a href="https://clarisix.com/vision" target="_blank" rel="noopener noreferrer">
            vision
          </a>
        </p>

        <p className="meta" style={{ marginTop: "40px" }}>
          Last updated: April 2026
        </p>
      </div>
    </>
  );
}
