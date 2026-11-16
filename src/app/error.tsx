"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        Something went wrong
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-obsidian">
        An unexpected error occurred
      </h1>
      <p className="mt-3 text-sm text-ink-muted">
        Please try again. If the problem persists, return to the homepage.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center rounded-full bg-obsidian px-6 py-2.5 text-sm font-semibold text-ivory hover:bg-obsidian-hover transition"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-ivory px-6 py-2.5 text-sm font-semibold text-obsidian ring-1 ring-stone hover:bg-stone transition"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}