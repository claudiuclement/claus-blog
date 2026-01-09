"use client";

import { useEffect } from "react";

export default function ConsoleMessage() {
  useEffect(() => {
    console.log(`
   ____ ____
  / ___/ ___|
 | |  | |
 | |__| |___
  \\____\\____|

 ╔═══════════════════════════════════╗
 ║  Hey, you're looking at the code  ║
 ║  I like that. — Claudiu           ║
 ╚═══════════════════════════════════╝
`);
  }, []);

  return null;
}
