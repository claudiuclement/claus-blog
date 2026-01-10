"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface Article {
  slug: string;
  title: string;
}

interface CommandPaletteProps {
  articles: Article[];
}

export default function CommandPalette({ articles }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const commands = [
    { id: "home", label: "Go to Home", action: () => router.push("/") },
    { id: "about", label: "Go to About", action: () => router.push("/about/") },
    { id: "theme-light", label: "Theme: Light", action: () => setTheme("light") },
    { id: "theme-dark", label: "Theme: Dark", action: () => setTheme("dark") },
    { id: "theme-oatmeal", label: "Theme: Oatmeal", action: () => setTheme("oatmeal") },
  ];

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCommands = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const allResults = [
    ...filteredCommands.map((c) => ({ type: "command" as const, ...c })),
    ...filteredArticles.map((a) => ({
      type: "article" as const,
      id: a.slug,
      label: a.title,
      action: () => router.push(`/${a.slug}/`),
    })),
  ];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelectedIndex(0);
      }

      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, allResults.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && allResults[selectedIndex]) {
        e.preventDefault();
        allResults[selectedIndex].action();
        setOpen(false);
      }
    },
    [open, allResults, selectedIndex, router]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const selected = resultsRef.current?.querySelector(".selected");
    if (selected) {
      selected.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!open) return null;

  return (
    <div className="command-palette-overlay" onClick={() => setOpen(false)}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Search articles or type a command..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="command-palette-input"
        />
        <div className="command-palette-results" ref={resultsRef}>
          {allResults.length === 0 && (
            <div className="command-palette-empty">No results found</div>
          )}
          {filteredCommands.length > 0 && (
            <div className="command-palette-group">
              <div className="command-palette-group-label">Commands</div>
              {filteredCommands.map((cmd, i) => (
                <div
                  key={cmd.id}
                  className={`command-palette-item ${
                    selectedIndex === i ? "selected" : ""
                  }`}
                  onClick={() => {
                    cmd.action();
                    setOpen(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  {cmd.label}
                </div>
              ))}
            </div>
          )}
          {filteredArticles.length > 0 && (
            <div className="command-palette-group">
              <div className="command-palette-group-label">Articles</div>
              {filteredArticles.map((article, i) => {
                const index = filteredCommands.length + i;
                return (
                  <div
                    key={article.slug}
                    className={`command-palette-item ${
                      selectedIndex === index ? "selected" : ""
                    }`}
                    onClick={() => {
                      router.push(`/${article.slug}/`);
                      setOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    {article.title}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="command-palette-footer">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>esc Close</span>
        </div>
      </div>
    </div>
  );
}
