import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-strong focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-obsidian text-ivory hover:bg-obsidian-hover",
  secondary: "bg-ivory text-obsidian ring-1 ring-stone hover:bg-stone",
  ghost: "bg-transparent text-obsidian hover:bg-stone/50",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant; className?: string; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  href,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}