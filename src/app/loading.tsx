export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mx-auto flex min-h-[40vh] max-w-6xl items-center justify-center px-4"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-stone border-t-gold-strong" />
        <p className="text-sm text-ink-muted">Loading...</p>
      </div>
    </div>
  );
}