import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Small mono tag used for tech stacks and labels. */
export function Chip({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] leading-4 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
