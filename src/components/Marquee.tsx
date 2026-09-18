import { Asterisk } from "lucide-react";

const items = [
  "UI/UX Design",
  "Frontend Development",
  "Design Systems",
  "Interaction Design",
  "Prototyping",
  "Responsive Web Apps",
];

/**
 * Slow, quiet marquee of disciplines. Purely decorative.
 */
export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="mt-12 overflow-hidden border-y border-line bg-parchment py-5 md:mt-16"
    >
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
              {item}
            </span>
            <Asterisk className="mx-8 h-4 w-4 shrink-0 text-terracotta" />
          </div>
        ))}
      </div>
    </section>
  );
}
