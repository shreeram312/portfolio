"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  words: readonly string[];
  className?: string;
  typingMs?: number;
  deletingMs?: number;
  holdMs?: number;
};

/** Cycles through `words` with a typewriter effect. Respects prefers-reduced-motion. */
export function Typewriter({
  words,
  className,
  typingMs = 70,
  deletingMs = 35,
  holdMs = 1800,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? "");
      return;
    }
    const word = words[index % words.length] ?? "";
    let delay = deleting ? deletingMs : typingMs;
    if (!deleting && text === word) delay = holdMs;
    else if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        if (words.length > 1) setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduced, typingMs, deletingMs, holdMs]);

  return (
    <span className={cn("inline-flex items-baseline", className)} aria-label={words[0]}>
      <span aria-hidden>{text}</span>
      <span aria-hidden className={cn("caret", reduced && "hidden")} />
    </span>
  );
}
