import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-obsidian sm:text-3xl">
              Selected for the curious
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Curated demonstration entries across categories. Clearly labeled examples, not real offers.
            </p>
          </div>
          <Link
            href="/products?sort=featured"
            className="text-sm font-semibold text-gold-strong hover:text-obsidian transition"
          >
            See all
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="mt-8 text-sm text-ink-muted">No featured products yet.</p>
        ) : (
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <li key={p.id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}