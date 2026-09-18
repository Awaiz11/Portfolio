interface SectionLabelProps {
  index: string;
  title: string;
  dark?: boolean;
}

/**
 * Consistent eyebrow label used across sections.
 */
export default function SectionLabel({ index, title, dark = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`text-xs font-bold tabular-nums tracking-[0.25em] ${
          dark ? "text-terracotta-light" : "text-terracotta"
        }`}
      >
        {index}
      </span>
      <span className={`h-px w-10 ${dark ? "bg-terracotta-light/50" : "bg-terracotta/40"}`} />
      <span
        className={`text-xs font-bold uppercase tracking-[0.25em] ${
          dark ? "text-cream/60" : "text-ink-soft"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
