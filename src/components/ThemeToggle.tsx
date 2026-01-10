"use client";

import { useEffect, useState } from "react";

const themes = ["light", "dark", "oatmeal"] as const;
type Theme = (typeof themes)[number];

const themeIcons: Record<Theme, string> = {
  light: "\u263D", // crescent moon - click to go to dark
  dark: "\u2B22", // hexagon - click to go to oatmeal
  oatmeal: "\u2600", // sun - click to go to light
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && themes.includes(saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const cycle = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button onClick={cycle} className="theme-toggle" aria-label="Toggle theme">
      {themeIcons[theme]}
    </button>
  );
}
