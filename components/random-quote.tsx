"use client";

import { useCallback, useEffect, useState } from "react";
import { Shuffle } from "lucide-react";
import type { Quote } from "@/data/quotes";

/** Picks a random quote on mount (so every visit differs) with a shuffle button. */
export function RandomQuote({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const pick = useCallback(
    (avoid: number | null) => {
      if (quotes.length <= 1) return 0;
      let next = Math.floor(Math.random() * quotes.length);
      if (next === avoid) next = (next + 1) % quotes.length;
      return next;
    },
    [quotes.length]
  );

  useEffect(() => {
    setIndex(pick(null));
  }, [pick]);

  const quote = index === null ? null : quotes[index];

  return (
    <figure className="mx-auto flex min-h-24 max-w-2xl flex-col items-center justify-center text-center">
      {quote ? (
        <blockquote key={index} className="animate-in fade-in duration-500">
          <p className="font-serif text-xl italic text-muted-foreground sm:text-2xl">
            &ldquo;{quote.text}&rdquo;
          </p>
          <figcaption className="mt-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
            <span>{quote.source}</span>
            <button
              type="button"
              onClick={() => setIndex((i) => pick(i))}
              aria-label="Show another quote"
              title="Another one"
              className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground/70 transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <Shuffle className="size-3" />
            </button>
          </figcaption>
        </blockquote>
      ) : null}
    </figure>
  );
}
