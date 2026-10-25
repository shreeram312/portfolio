"use client";

import type { ComponentProps, MouseEvent } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & {
  /** Section id to scroll to, e.g. "projects". Use "top" for the page top. */
  to: string;
};

/**
 * In-page link that scrolls to a section without writing `#id` into the URL.
 * Keeps a real `href` so it still works without JavaScript and is crawlable.
 */
export function ScrollLink({ to, onClick, children, ...rest }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    // Let modifier clicks (new tab, etc.) behave normally.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

    if (to === "top") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior });
      return;
    }

    const target = document.getElementById(to);
    if (!target) return; // fall back to the normal hash navigation
    event.preventDefault();
    target.scrollIntoView({ behavior, block: "start" });
  }

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
