import Link from "next/link";

export function EmptyState({
  query,
  hasFilters,
}: {
  query?: string;
  hasFilters: boolean;
}) {
  return (
    <div className="rounded-2xl bg-white p-12 text-center ring-1 ring-stone">
      <h2 className="text-xl font-semibold text-obsidian">No products found</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
        {query
          ? `We could not find any products matching "${query}".`
          : hasFilters
            ? "No products match the selected filters."
            : "The catalog is empty right now."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/products"
          className="inline-flex items-center rounded-full bg-obsidian px-6 py-2.5 text-sm font-semibold text-ivory hover:bg-obsidian-hover transition"
        >
          View all products
        </Link>
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