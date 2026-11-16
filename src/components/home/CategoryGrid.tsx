import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CATEGORIES } from "@/lib/constants";

export function CategoryGrid() {
  return (
    <section id="categories" className="bg-ivory py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-obsidian sm:text-3xl">
              Shop by category
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Explore thoughtfully organized collections across technology, fashion, beauty, home, and everyday essentials.
            </p>
          </div>
          <Link href="/products" className="text-sm font-semibold text-gold-strong hover:text-obsidian transition">
            View all
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <Link
                href={`/products?category=${c.id}`}
                className="group flex flex-col justify-center rounded-2xl bg-white p-6 ring-1 ring-stone transition hover:-translate-y-1 hover:shadow-md hover:ring-gold-strong"
              >
                <span className="text-base font-semibold text-obsidian group-hover:text-gold-strong transition">
                  {c.label}
                </span>
                <span className="mt-1 text-sm text-ink-muted line-clamp-1">{c.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}