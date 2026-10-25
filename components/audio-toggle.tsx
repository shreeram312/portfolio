"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "playing" | "missing";

type Props = {
  /** Path under /public, e.g. "/audio/theme.mp3". */
  src: string;
  title: string;
  variant?: "header" | "dock";
  className?: string;
};

/**
 * Looping background track with a tiny equaliser while playing.
 * Nothing autoplays — browsers block it anyway — the visitor opts in.
 * If the file is missing the button disables itself and says so.
 */
export function AudioToggle({ src, title, variant = "header", className }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = true;
    audio.preload = "none";
    audio.volume = 0.35;

    const onPlay = () => setStatus("playing");
    const onPause = () => setStatus((s) => (s === "missing" ? s : "idle"));
    const onError = () => setStatus("missing");
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
  }, [src]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || status === "missing") return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      await audio.play();
    } catch {
      setStatus("missing");
    }
  }, [status]);

  const label =
    status === "missing"
      ? "Theme track not found (add public/audio/theme.mp3)"
      : status === "playing"
        ? `Pause ${title}`
        : `Play ${title}`;

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={status === "missing"}
      aria-pressed={status === "playing"}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center justify-center text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
        variant === "header" && "size-8 rounded-md border border-line",
        variant === "dock" && "size-10 rounded-full",
        status === "playing" && "text-foreground",
        className
      )}
    >
      {status === "playing" ? (
        <span aria-hidden className="flex h-3.5 items-end gap-[2px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="eq-bar w-[3px] rounded-[1px] bg-current"
              style={{ animationDelay: `${i * 140}ms` }}
            />
          ))}
        </span>
      ) : status === "missing" ? (
        <VolumeX className="size-4" />
      ) : (
        <Music className="size-4" />
      )}
    </button>
  );
}
