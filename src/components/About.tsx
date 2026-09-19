import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const details = [
  { label: "Currently", value: "Freelance & contract work" },
  { label: "Focus", value: "Product design, React & TypeScript" },
  { label: "Based in", value: "Pakistan — working worldwide" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl font-medium leading-[1.4] tracking-[-0.01em] text-ink sm:text-2xl md:text-[2.1rem] md:leading-[1.35]">
                I&apos;m a designer-developer hybrid who believes the best
                products are born where{" "}
                <em className="font-serif font-medium italic text-terracotta">
                  empathy
                </em>{" "}
                meets engineering. Over the past year, I&apos;ve helped
                startups and studios turn fuzzy ideas into polished,
                production-ready interfaces — and I obsess over the details in
                between.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
                My work sits at the intersection of aesthetics and
                accessibility: interfaces that look calm, load fast, and feel
                obvious to use. Whether it&apos;s a brand identity, a mobile
                app, or a full web platform, I bring the same principle —
                <span className="text-ink"> say more with less</span>.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-12 border-t border-line">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="grid grid-cols-3 gap-4 border-b border-line py-5"
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-ink-soft/70">
                      {d.label}
                    </dt>
                    <dd className="col-span-2 text-sm font-semibold text-ink md:text-base">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-12 font-serif text-5xl italic text-terracotta">
                Aawaiz
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft/70">
                Nice to meet you
              </p>
            </Reveal>
          </div>

          {/* Portrait — shown above copy on mobile, sticky on desktop */}
          <div className="lg:col-span-5 lg:order-first">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionLabel index="01" title="About" />
              </Reveal>
              <Reveal delay={120}>
                <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-neutral-200/50 bg-gradient-to-b from-[#e5d0b3] to-[#c6a682] aspect-[4/5] shadow-inner md:rounded-[2rem]">
                  <img
                    src="/images/profile-cutout.png"
                    alt="Aawaiz Ijaz"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 max-w-md text-xs font-medium tracking-wide text-ink-soft">
                  Aawaiz Ijaz — designer, developer, and perpetual student of
                  restraint.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
