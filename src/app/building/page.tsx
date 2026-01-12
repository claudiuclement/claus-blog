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

        <h2>Current Project</h2>
        <p>
          <strong>Name:</strong> TBD
        </p>
        <p>
          <strong>What:</strong> TBD
        </p>
        <p>
          <strong>Stage:</strong> TBD
        </p>
        <p>
          <strong>Links:</strong> TBD
        </p>

        <h2>Status</h2>
        <p>TBD</p>

        <p className="meta" style={{ marginTop: "40px" }}>
          Last updated: January 2026
        </p>
      </div>
    </>
  );
}
