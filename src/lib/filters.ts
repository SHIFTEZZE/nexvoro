import type { CategoryId, MerchantId, Product, ProductFilters } from "@/types/product";
import { CATEGORY_ALIASES } from "@/lib/constants";
import { isValidCategory, isValidMerchant } from "@/lib/products";

const SORTS = ["featured", "name_asc", "newest"] as const;
export type SortKey = (typeof SORTS)[number];

export function isSortKey(value: string): value is SortKey {
  return (SORTS as readonly string[]).includes(value);
}

/**
 * Resolve a raw category param through the alias map.
 * Returns undefined if the value is neither a valid category nor a known alias.
 * Never throws; never drops silently for a known input.
 */
export function resolveCategoryAlias(raw: string): CategoryId | undefined {
  if (isValidCategory(raw)) return raw as CategoryId;
  const aliased = CATEGORY_ALIASES[raw];
  if (aliased && isValidCategory(aliased)) return aliased as CategoryId;
  return undefined;
}

type RawParams = Record<string, string | string[] | undefined>;

/**
 * Parse and strictly validate URL search parameters.
 * Category aliases (audio/wearables -> electronics) are resolved transparently.
 * Unknown categories/merchants are silently dropped (treated as "no filter").
 * Unknown sort values default to "featured".
 */
export function parseFilters(params: RawParams): ProductFilters {
  const q =
    typeof params.q === "string" && params.q.trim().length > 0
      ? params.q.trim()
      : undefined;

  const category =
    typeof params.category === "string"
      ? resolveCategoryAlias(params.category)
      : undefined;

  const merchant =
    typeof params.merchant === "string" && isValidMerchant(params.merchant)
      ? (params.merchant as MerchantId)
      : undefined;

  const sort =
    typeof params.sort === "string" && isSortKey(params.sort)
      ? params.sort
      : "featured";

  return { q, category, merchant, sort };
}

export function applyFilters(
  products: readonly Product[],
  filters: ProductFilters,
): Product[] {
  const q = filters.q?.toLowerCase();

  const filtered = products.filter((p) => {
    if (filters.category && p.categoryId !== filters.category) return false;
    if (filters.merchant && p.merchantId !== filters.merchant) return false;
    if (q) {
      const haystack =
        `${p.name} ${p.shortDescription} ${p.tags.join(" ")}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  const sort = filters.sort ?? "featured";
  const sorted = [...filtered];

  if (sort === "name_asc") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "newest") {
    sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } else {
    sorted.sort((a, b) => {
      const f = Number(b.featured) - Number(a.featured);
      if (f !== 0) return f;
      return b.createdAt.localeCompare(a.createdAt);
    });
  }

  return sorted;
}

export function buildProductsUrl(filters: ProductFilters): string {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.category) params.set("category", filters.category);
  if (filters.merchant) params.set("merchant", filters.merchant);
  if (filters.sort && filters.sort !== "featured") params.set("sort", filters.sort);
  const qs = params.toString();
  return qs ? `/products?${qs}` : "/products";
}
