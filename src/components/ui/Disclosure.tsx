export function Disclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs text-ink-muted">
        NEXVORO earns a commission from qualifying purchases. Prices and availability are set by merchants.
      </p>
    );
  }
  return (
    <div className="rounded-2xl bg-stone/30 p-6 ring-1 ring-stone/50">
      <h2 className="text-sm font-semibold text-obsidian">Affiliate disclosure</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        NEXVORO is a product-discovery platform. We earn a commission from qualifying purchases
        made through links to authorized merchant partners. Prices, availability, and shipping
        are set by the merchants. Products shown on NEXVORO may include demonstration entries
        labeled as examples and are not real merchant listings.
      </p>
    </div>
  );
}