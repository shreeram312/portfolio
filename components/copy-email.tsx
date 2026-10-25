"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy ${email}`}
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-md border border-line bg-surface px-3 font-mono text-xs text-muted-foreground transition-colors hover:border-line-strong hover:text-foreground",
        className
      )}
    >
      <span className="truncate">{email}</span>
      {copied ? (
        <Check className="size-3.5 text-success" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );
}
