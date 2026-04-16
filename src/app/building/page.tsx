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

        <h2>e-Comas Tech</h2>
        <p>
          <strong>The technology arm of the e-Comas group.</strong>
        </p>
        <p>
          e-Comas is a global Amazon and marketplace agency founded in
          Luxembourg in 2013, helping brands grow on Amazon, Shopify,
          Walmart, CDiscount, Bol, Veepee and beyond. e-Comas Tech is
          the group&apos;s software arm — a toolkit for marketplace
          optimization and brand growth, spanning content comparison
          across marketplaces, analytics dashboards, and the operational
          tooling the agency relies on day to day.
        </p>
        <p>
          I&apos;m CEO of <strong>e-Comas Tech SARL</strong>, the entity
          that owns and ships this platform. Much of what we learn
          building it for our brands feeds directly into Clarisix.
        </p>
        <p>
          <strong>Link:</strong>{" "}
          <a href="https://e-comas.tech" target="_blank" rel="noopener noreferrer">
            e-comas.tech
          </a>{" "}
          ·{" "}
          <a href="https://e-comas.com" target="_blank" rel="noopener noreferrer">
            e-comas.com
          </a>
        </p>

        <h2>Is Not Rocket Science (Podcast)</h2>
        <p>
          <strong>Depth over hype, in 25–35 minute chunks.</strong>
        </p>
        <p>
          A podcast I&apos;m launching about the analytical frameworks,
          statistical principles, and data structures that actually
          explain why things work — or fail — in e-commerce. Each
          episode is 25 to 35 minutes: long enough to go deep, short
          enough to respect your time.
        </p>
        <p>
          The format is simple: bring the most brilliant minds in the
          space on, and have them explain the genuinely complex topics
          driving e-commerce in language anyone can follow. No fluff,
          no buzzword bingo.
        </p>
        <p>
          <strong>Audience:</strong> anyone who cares about depth over
          hype.
        </p>
        <p>
          <strong>Stage:</strong> Pre-launch.
        </p>

        <p className="meta" style={{ marginTop: "40px" }}>
          Last updated: April 2026
        </p>
      </div>
    </>
  );
}
