import type { ComponentType } from "react";
import {
  Atom,
  Braces,
  Code2,
  Component,
  FileCode2,
  Palette,
  PenTool,
  ArrowUpRight,
  Wind,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import FigmaIcon from "./FigmaIcon";

type Tool = {
  name: string;
  description: string;
  tag: string;
  icon: ComponentType<{ className?: string }>;
};

const tools: Tool[] = [
  {
    name: "Figma",
    description: "Interface design, prototyping & design systems",
    tag: "Design",
    icon: FigmaIcon,
  },
  {
    name: "HTML",
    description: "Semantic, accessible markup foundations",
    tag: "Markup",
    icon: Code2,
  },
  {
    name: "CSS",
    description: "Responsive layouts, motion & modern styling",
    tag: "Styling",
    icon: Palette,
  },
  {
    name: "JavaScript",
    description: "Dynamic, interactive web experiences",
    tag: "Language",
    icon: Braces,
  },
  {
    name: "TypeScript",
    description: "Type-safe, scalable application code",
    tag: "Language",
    icon: FileCode2,
  },
  {
    name: "React",
    description: "Component-driven interfaces & SPAs",
    tag: "Framework",
    icon: Atom,
  },
  {
    name: "Tailwind CSS",
    description: "Rapid, consistent design-system styling",
    tag: "Framework",
    icon: Wind,
  },
];

const capabilities = [
  {
    icon: PenTool,
    title: "Product & Interface Design",
    copy: "Research-backed UX flows, wireframes, and pixel-perfect UI — designed in Figma, validated with real users.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    copy: "Responsive, accessible, performant builds in React & TypeScript — where design and code speak the same language.",
  },
  {
    icon: Component,
    title: "Design Systems",
    copy: "Scalable component libraries, tokens, and documentation that keep growing teams aligned and shipping faster.",
  },
];

export default function Skills() {
  return (
    <section id="expertise" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="02" title="Expertise" />
              <h2 className="mt-6 text-4xl font-bold tracking-[-0.02em] text-ink md:text-5xl">
                The toolkit behind{" "}
                <em className="font-serif font-medium italic text-terracotta">
                  the craft
                </em>
                .
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-ink-soft md:ml-auto md:text-right">
                A deliberately small stack, deeply understood. Fewer tools,
                mastered — means faster decisions and cleaner output.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 100}>
              <div className="group h-full rounded-[1.75rem] border border-line bg-parchment p-8 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:bg-cream hover:shadow-[0_20px_50px_-30px_rgba(33,30,25,0.3)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
                  <cap.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-ink">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {cap.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools list */}
        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-line bg-cream">
            <div className="hidden grid-cols-[auto_auto_1fr_auto_auto] items-center gap-8 border-b border-line bg-parchment/60 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-soft/60 md:grid md:px-10">
              <span className="w-8">No.</span>
              <span className="w-12">Tool</span>
              <span>What I use it for</span>
              <span className="w-24 text-right">Category</span>
              <span className="w-6" />
            </div>
            <div className="divide-y divide-line">
              {tools.map((tool, i) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-parchment md:grid md:grid-cols-[auto_auto_1fr_auto_auto] md:gap-8 md:px-10 md:py-6"
                >
                  <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-ink-soft/50 transition-colors duration-300 group-hover:text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-parchment text-ink transition-all duration-300 group-hover:border-terracotta group-hover:bg-terracotta group-hover:text-cream">
                    <tool.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-ink md:text-lg">
                      {tool.name}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-ink-soft">
                      {tool.description}
                    </p>
                  </div>
                  <span className="hidden w-24 justify-self-end rounded-full border border-line bg-cream px-3 py-1.5 text-center text-[11px] font-bold uppercase tracking-wider text-ink-soft md:block">
                    {tool.tag}
                  </span>
                  <ArrowUpRight className="hidden h-5 w-5 -translate-x-1 text-terracotta opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block md:w-6" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
