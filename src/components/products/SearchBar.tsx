/**
 * Server-safe search form.
 * Submits GET /products?q=...  -- works without JavaScript.
 * Hidden inputs preserve active category/merchant/sort when searching.
 */
export function SearchBar({
  defaultQuery,
  category,
  merchant,
  sort,
}: {
  defaultQuery?: string;
  category?: string;
  merchant?: string;
  sort?: string;
}) {
  return (
    <form
      action="/products"
      method="GET"
      role="search"
      className="flex w-full items-center gap-2 rounded-2xl bg-white p-1.5 ring-1 ring-stone focus-within:ring-2 focus-within:ring-gold-strong transition-shadow"
    >
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <input
        id="product-search"
        name="q"
        type="search"
        defaultValue={defaultQuery ?? ""}
        placeholder="Search products, categories, or tags..."
        className="w-full rounded-xl bg-transparent px-3 py-2.5 text-sm text-obsidian placeholder:text-ink-muted focus:outline-none"
      />
      {category ? <input type="hidden" name="category" value={category} /> : null}
      {merchant ? <input type="hidden" name="merchant" value={merchant} /> : null}
      {sort ? <input type="hidden" name="sort" value={sort} /> : null}
      <button
        type="submit"
        className="rounded-xl bg-obsidian px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-obsidian-hover transition"
      >
        Search
      </button>
    </form>
  );
}