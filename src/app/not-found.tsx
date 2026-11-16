import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold-strong">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-obsidian sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-muted">
          The page you are looking for does not exist or has moved. Try
          browsing our product catalog instead.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-obsidian px-6 py-2.5 text-sm font-semibold text-ivory hover:bg-obsidian-hover transition"
          >
            Browse products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-ivory px-6 py-2.5 text-sm font-semibold text-obsidian ring-1 ring-stone hover:bg-stone transition"
          >
            Back home
          </Link>
        </div>
      </div>
    </Container>
  );
}