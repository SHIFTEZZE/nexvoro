import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-stone transition hover:-translate-y-1 hover:shadow-md hover:ring-gold-strong">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] w-full bg-stone/30">
          <span className="absolute left-3 top-3">
            <Badge tone="neutral">Demo product</Badge>
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="line-clamp-2 text-base font-semibold text-obsidian group-hover:text-gold-strong transition"
          >
            {product.name}
          </Link>
          <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">
            {product.shortDescription}
          </p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="text-xs font-semibold text-gold-strong hover:text-obsidian transition"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}