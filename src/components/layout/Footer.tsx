import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BRAND, CATEGORIES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-stone bg-ivory">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-obsidian text-ivory text-sm font-bold">
                N
              </span>
              <span className="text-lg font-bold tracking-tight text-obsidian">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-muted">{BRAND.slogan}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Browse
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-ink-muted hover:text-gold-strong">
                  All products
                </Link>
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/products?category=${c.id}`}
                    className="text-sm text-ink-muted hover:text-gold-strong"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              About
            </h3>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-ink-muted">Product discovery</li>
              <li className="text-sm text-ink-muted">Authorized partners only</li>
              <li className="text-sm text-ink-muted">No in-platform checkout</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-sm text-ink-muted">
              {BRAND.name} earns a commission from qualifying purchases made through links to
              authorized merchant partners. Prices and availability are set by merchants.
            </p>
          </div>
        </div>
        <div className="border-t border-stone py-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}