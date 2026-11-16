import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container>
        <div className="relative mx-auto max-w-4xl py-20 text-center sm:py-28 lg:py-32">
          
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-strong">
            Discover more. Spend less.
          </p>
          
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-obsidian sm:text-6xl lg:text-7xl">
            The world of <br className="hidden sm:block" />better finds.
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Discover extraordinary products for everyday living. Explore technology,
            fashion, beauty, home essentials, accessories, and more.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-full bg-obsidian px-8 py-3.5 text-sm font-semibold text-ivory shadow-sm transition hover:bg-obsidian-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2 sm:w-auto"
            >
              Explore the catalog
            </Link>
            <Link
              href="#categories"
              className="inline-flex w-full items-center justify-center rounded-full bg-transparent px-8 py-3.5 text-sm font-semibold text-obsidian ring-1 ring-stone transition hover:bg-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2 sm:w-auto"
            >
              Browse categories
            </Link>
          </div>
          
        </div>

        {/* Demonstration notice - visually secondary */}
        <div className="mx-auto max-w-3xl border-t border-stone py-6 text-center text-xs leading-relaxed text-ink-muted">
          <span className="font-semibold text-obsidian">Note:</span> Products shown are demonstration
          entries, not real merchant listings. NEXVORO does not sell products, and purchasing is not
          available through NEXVORO. Real merchant links activate once authorized partners are configured.
        </div>
      </Container>
    </section>
  );
}