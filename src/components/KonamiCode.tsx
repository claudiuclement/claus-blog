"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function KonamiCode() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === KONAMI_CODE[index]) {
        const nextIndex = index + 1;
        if (nextIndex === KONAMI_CODE.length) {
          setShow(true);
          setIndex(0);
          setTimeout(() => setShow(false), 3000);
        } else {
          setIndex(nextIndex);
        }
      } else {
        setIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  if (!show) return null;

  return (
    <div className="konami-popup">
      Achievement unlocked: Nerd credentials verified.
    </div>
  );
}
