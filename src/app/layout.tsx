import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";
import CommandPalette from "@/components/CommandPalette";
import KeyboardShortcutHint from "@/components/KeyboardShortcutHint";
import KonamiCode from "@/components/KonamiCode";
import { getAllArticlesMeta } from "@/lib/articles";

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
  const articles = getAllArticlesMeta().map((a) => ({
    slug: a.slug,
    title: a.title,
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              })();
            `,
          }}
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: "/*" },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1ccd3a8b607140f5ab192b7af2d70dfe"}'
        />
      </head>
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
              {" · "}
              <KeyboardShortcutHint />
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Claudiu Clement
            </p>
          </footer>
          <ScrollToTop />
        </main>
        <CommandPalette articles={articles} />
        <KonamiCode />
      </body>
    </html>
  );
}
