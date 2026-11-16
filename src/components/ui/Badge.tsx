import type { ReactNode } from "react";

type Tone = "brand" | "neutral" | "accent";

const tones: Record<Tone, string> = {
  brand: "bg-obsidian text-ivory ring-1 ring-obsidian/10",
  neutral: "bg-stone text-obsidian ring-1 ring-stone/50",
  accent: "bg-gold-strong text-white ring-1 ring-gold-strong/20",
};

export function Badge({ children, tone = "brand" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}