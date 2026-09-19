import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "Serene",
    subtitle: "Meditation & Sleep App",
    year: "2025",
    image: "/images/project-serene.jpg",
    alt: "Serene meditation app interface on two floating phones",
    description:
      "A calm-first mobile experience helping 40k+ users unwind — guided breathing, sleep stories, and gentle habit tracking wrapped in a muted sage palette.",
    tags: ["Mobile App", "UI/UX", "Design System"],
    link: "https://serena-nine-sooty.vercel.app/",
  },
  {
    title: "Salon Code",
    subtitle: "Web Application",
    year: "2024",
    image: "/images/project-salon.jpg",
    alt: "Salon Code placeholder image",
    description:
      "A placeholder description for the Salon Code project. Features a modern UI and robust booking system.",
    tags: ["Web App", "React", "TypeScript"],
    link: "https://salon-code-xg6g.vercel.app/",
  },
  {
    title: "Ledgerly",
    subtitle: "Fintech Dashboard",
    year: "2024",
    image: "/images/project-ledger.jpg",
    alt: "Ledgerly finance dashboard interface in a browser window",
    description:
      "A personal finance dashboard that turns messy numbers into quiet, glanceable insight — designed and built end-to-end with TypeScript.",
    tags: ["SaaS", "Dashboard", "TypeScript"],
    link: "https://leg-flax.vercel.app/",
  },
  {
    title: "Bloom & Bark",
    subtitle: "Brand & Booking Site",
    year: "2023",
    image: "/images/project-bloom.jpg",
    alt: "Bloom and Bark florist website with editorial typography",
    description:
      "An editorial website for a neighbourhood florist — soft serif typography meets seamless booking, lifting reservations by 60%.",
    tags: ["Branding", "Web Design", "React"],
    link: "https://bloom-bark.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid items-end gap-6 md:gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel index="03" title="Selected Work" />
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-ink md:mt-6 md:text-5xl">
                Work that pairs purpose with{" "}
                <em className="font-serif font-medium italic text-terracotta">
                  polish
                </em>
                .
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-ink-soft md:ml-auto md:text-right">
                A curated selection from 2024 → 2026. Each project started with
                a conversation and ended with a product people love using.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 md:gap-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <article className="group">
                <a
                  href={project.link || "#contact"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="relative block overflow-hidden rounded-[1.5rem] border border-line bg-parchment md:rounded-[2rem]"
                  aria-label={`${project.title} — ${project.subtitle}`}
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-cream text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  <span className="absolute left-5 top-5 rounded-full bg-cream/85 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur-sm">
                    {project.year}
                  </span>
                </a>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-terracotta">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="mt-1.5 text-sm font-semibold tabular-nums text-ink-soft/50">
                    /0{i + 1}
                  </span>
                </div>

                <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
