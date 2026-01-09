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
        <p>
          I&apos;m Claudiu Clement.
        </p>
        <p>
          {/* Add your bio here */}
        </p>
      </div>
    </>
  );
}
