import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BRAND, CATEGORIES } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-ivory/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="NEXVORO home">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-obsidian text-ivory text-base font-extrabold shadow-sm">
              N
            </span>
            <span className="text-base font-extrabold tracking-[0.02em] text-obsidian sm:text-lg">
              {BRAND.name}
            </span>
          </Link>

          {/* Center nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-obsidian hover:text-gold-strong"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-ink-muted hover:text-gold-strong"
            >
              Products
            </Link>
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink-muted hover:text-gold-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2 rounded-md px-1 py-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div
                role="menu"
                className="invisible absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-2xl bg-ivory p-2 opacity-0 shadow-lg ring-1 ring-stone transition group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100"
              >
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.id}
                    href={`/products?category=${c.id}`}
                    role="menuitem"
                    className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-stone hover:text-gold-strong"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right: search + CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="/products"
              aria-label="Search products"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-obsidian ring-1 ring-stone hover:bg-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link
              href="/products"
              className="hidden rounded-full bg-obsidian px-4 py-2 text-sm font-semibold text-ivory shadow-sm transition hover:bg-obsidian-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2 sm:inline-flex"
            >
              Browse catalog
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}