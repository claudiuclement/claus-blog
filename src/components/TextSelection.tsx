"use client";

import { useEffect, useState } from "react";

interface TextSelectionProps {
  articleUrl: string;
}

export default function TextSelection({ articleUrl }: TextSelectionProps) {
  const [selection, setSelection] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selected = window.getSelection();
      const text = selected?.toString().trim();

      if (text && text.length > 5 && text.length < 280) {
        const range = selected?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        if (rect) {
          setSelection({
            text,
            x: rect.left + rect.width / 2,
            y: rect.top + window.scrollY - 45,
          });
        }
      } else {
        setSelection(null);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".text-selection-popup")) {
        setTimeout(() => {
          if (!window.getSelection()?.toString().trim()) {
            setSelection(null);
          }
        }, 10);
      }
    };

    document.addEventListener("mouseup", handleSelection);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!selection) return null;

  const encodedText = encodeURIComponent(`"${selection.text}"`);
  const encodedUrl = encodeURIComponent(articleUrl);

  return (
    <div
      className="text-selection-popup"
      style={{
        left: selection.x,
        top: selection.y,
      }}
    >
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on X"
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Share on LinkedIn"
      >
        in
      </a>
    </div>
  );
}
