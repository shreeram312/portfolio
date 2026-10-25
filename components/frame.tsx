import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Blueprint frame primitives.
 *
 * The page is an 896px column with dashed vertical rails. Sections are
 * separated by full-bleed dashed rules and a thin hatched "band" — the
 * horizontal lines run edge-to-edge across the viewport while the content
 * stays inside the column. Small crosshairs mark where rules meet the rails.
 */

/** Shared column width — keep in sync with the header. */
export const COLUMN = "max-w-4xl";

/** Centered column with dashed rails on both sides. */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className={cn("relative mx-auto w-full", COLUMN)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 border-x border-dashed border-line"
      />
      {children}
    </div>
  );
}

/** Full-bleed dashed horizontal rule. Parent must be `relative`. */
export function Rule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 z-10 w-screen -translate-x-1/2 border-t border-dashed border-line",
        className
      )}
    />
  );
}

type Corner = "tl" | "tr" | "bl" | "br";

const cornerClass: Record<Corner, string> = {
  tl: "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
  tr: "right-0 top-0 translate-x-1/2 -translate-y-1/2",
  bl: "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
  br: "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
};

/** Small "+" crosshair placed on a corner of its `relative` parent. */
export function Cross({ corner, className }: { corner: Corner; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-20 hidden size-[9px] text-line-strong min-[920px]:block",
        cornerClass[corner],
        className
      )}
    >
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
    </span>
  );
}

/** Hatched spacer band with rules on both edges and crosshairs at the rail intersections. */
export function Band({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("stripes relative h-5 w-full", className)}>
      <Rule className="top-0" />
      <Rule className="bottom-0" />
      <Cross corner="tl" />
      <Cross corner="tr" />
      <Cross corner="bl" />
      <Cross corner="br" />
    </div>
  );
}

type SectionProps = {
  id?: string;
  title: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/** Section = band + titled header row + content. */
export function Section({
  id,
  title,
  action,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-14", className)}>
      <Band />
      <div className="relative flex items-end justify-between gap-4 px-4 py-3 sm:px-6">
        <h2 className="font-serif text-[1.65rem] leading-none tracking-tight sm:text-3xl">
          {title}
        </h2>
        {action ? (
          <div className="pb-0.5 font-mono text-xs text-muted-foreground">
            {action}
          </div>
        ) : null}
        <Rule className="bottom-0" />
      </div>
      <div className={cn("px-4 py-6 sm:px-6", contentClassName)}>{children}</div>
    </section>
  );
}
