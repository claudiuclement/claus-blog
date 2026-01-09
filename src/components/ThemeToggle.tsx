"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light");
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  return (
    <button onClick={toggle} className="theme-toggle" aria-label="Toggle dark mode">
      {dark ? "\u2600" : "\u263D"}
    </button>
  );
}
