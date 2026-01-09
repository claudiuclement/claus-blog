"use client";

import { useEffect, useState } from "react";

export default function KeyboardShortcutHint() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  return (
    <span className="meta" style={{ fontSize: "11px" }}>
      {isMac ? "⌘K" : "Ctrl+K"}
    </span>
  );
}
