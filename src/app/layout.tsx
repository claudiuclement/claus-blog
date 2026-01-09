import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const SITE_URL = "https://claudiuclement.com";

export const metadata: Metadata = {
  title: {
    default: "Claudiu Clement's Thoughts",
    template: "%s | Claudiu Clement",
  },
  description: "Essays on technology, e-commerce, and more.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Claudiu Clement's Thoughts",
    description: "Essays on technology, e-commerce, and more.",
    url: SITE_URL,
    siteName: "Claudiu Clement's Thoughts",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Claudiu Clement's Thoughts",
    description: "Essays on technology, e-commerce, and more.",
    creator: "@clementclaudiu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <footer className="about">
            <p>
              <a href="https://www.linkedin.com/in/claudiu-clement/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {" · "}
              <a href="https://x.com/clementclaudiu" target="_blank" rel="noopener noreferrer">X</a>
              {" · "}
              <ThemeToggle />
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Claudiu Clement
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
