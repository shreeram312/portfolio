"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLYPHS = "!<>-_\\/[]{}=+*^?#░▒▓";

type Props = {
  lines: readonly string[];
  /** Milliseconds a resolved line stays on screen before the next one decodes. */
  holdMs?: number;
  className?: string;
};

/**
 * Cycles through `lines`, "decoding" each one from random glyphs.
 * Server renders the first line; the client scrambles in on mount.
 * With prefers-reduced-motion the first line is shown statically.
 */
export function ScrambleText({ lines, holdMs = 4200, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(lines[0] ?? "");
  const [reduced, setReduced] = useState(false);
  const shownRef = useRef("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || lines.length === 0) {
      setText(lines[0] ?? "");
      return;
    }

    const to = lines[index % lines.length];
    const from = shownRef.current;
    const length = Math.max(from.length, to.length);
    const queue = Array.from({ length }, (_, i) => {
      const start = Math.floor(Math.random() * 18);
      return {
        from: from[i] ?? "",
        to: to[i] ?? "",
        start,
        end: start + 8 + Math.floor(Math.random() * 18),
      };
    });

    let frame = 0;
    let raf = 0;
    let hold: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      let out = "";
      let done = 0;
      for (const q of queue) {
        if (frame >= q.end) {
          out += q.to;
          done++;
        } else if (frame >= q.start) {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        } else {
          out += q.from;
        }
      }
      setText(out);
      frame++;
      if (done < queue.length) {
        raf = requestAnimationFrame(tick);
      } else {
        shownRef.current = to;
        if (lines.length > 1) {
          hold = setTimeout(() => setIndex((i) => (i + 1) % lines.length), holdMs);
        }
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (hold) clearTimeout(hold);
    };
  }, [index, lines, reduced, holdMs]);

  return (
    <span className={cn("whitespace-pre", className)} aria-label={lines[index % lines.length]}>
      <span aria-hidden>{text}</span>
    </span>
  );
}
