"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { CATEGORIES, MERCHANTS, SORT_OPTIONS } from "@/lib/constants";

type Current = {
  q?: string;
  category?: string;
  merchant?: string;
  sort?: string;
};

function buildUrl(next: Current): string {
  const params = new URLSearchParams();
  if (next.q) params.set("q", next.q);
  if (next.category) params.set("category", next.category);
  if (next.merchant) params.set("merchant", next.merchant);
  if (next.sort && next.sort !== "featured") params.set("sort", next.sort);
  const qs = params.toString();
  return qs ? `/products?${qs}` : "/products";
}

export function ProductFilters({ current }: { current: Current }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [category, setCategory] = useState(current.category ?? "");
  const [merchant, setMerchant] = useState(current.merchant ?? "");
  const [sort, setSort] = useState(current.sort ?? "featured");

  function update(next: Partial<Current>) {
    const merged: Current = {
      q: current.q,
      category,
      merchant,
      sort,
      ...next,
    };
    startTransition(() => {
      router.push(buildUrl(merged));
    });
  }

  const hasAnyFilter = Boolean(category || merchant || current.q);

  return (
    <div className="space-y-4 rounded-2xl bg-white p-5 ring-1 ring-stone">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label
            htmlFor="filter-category"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-muted"
          >
            Category
          </label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              update({ category: e.target.value || undefined });
            }}
            className="mt-1.5 w-full rounded-xl bg-ivory px-3 py-2.5 text-sm text-obsidian ring-1 ring-stone focus:outline-none focus:ring-2 focus:ring-gold-strong"
          >
            <option value="">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-merchant"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-muted"
          >
            Merchant
          </label>
          <select
            id="filter-merchant"
            value={merchant}
            onChange={(e) => {
              setMerchant(e.target.value);
              update({ merchant: e.target.value || undefined });
            }}
            className="mt-1.5 w-full rounded-xl bg-ivory px-3 py-2.5 text-sm text-obsidian ring-1 ring-stone focus:outline-none focus:ring-2 focus:ring-gold-strong"
          >
            <option value="">All merchants</option>
            {MERCHANTS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-sort"
            className="block text-xs font-semibold uppercase tracking-wider text-ink-muted"
          >
            Sort by
          </label>
          <select
            id="filter-sort"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              update({ sort: e.target.value });
            }}
            className="mt-1.5 w-full rounded-xl bg-ivory px-3 py-2.5 text-sm text-obsidian ring-1 ring-stone focus:outline-none focus:ring-2 focus:ring-gold-strong"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {hasAnyFilter ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-stone pt-4 text-xs">
          <span className="text-ink-muted">Active:</span>
          {current.q ? (
            <span className="rounded-full bg-stone px-2.5 py-1 text-obsidian">
              Search: &quot;{current.q}&quot;
            </span>
          ) : null}
          {category ? (
            <span className="rounded-full bg-stone px-2.5 py-1 text-obsidian">
              {CATEGORIES.find((c) => c.id === category)?.label ?? category}
            </span>
          ) : null}
          {merchant ? (
            <span className="rounded-full bg-stone px-2.5 py-1 text-obsidian">
              {MERCHANTS.find((m) => m.id === merchant)?.name ?? merchant}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => {
              setCategory("");
              setMerchant("");
              setSort("featured");
              startTransition(() => {
                router.push("/products");
              });
            }}
            className="ml-auto rounded-full bg-ivory px-3 py-1 font-medium text-obsidian ring-1 ring-stone hover:bg-stone transition"
          >
            Clear all
          </button>
        </div>
      ) : null}

      {isPending ? (
        <p className="text-xs text-ink-muted animate-pulse" aria-live="polite">
          Updating results...
        </p>
      ) : null}
    </div>
  );
}