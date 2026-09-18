import { ArrowDown, Asterisk } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/03354679492";

const stats = [
  { value: "01+", label: "Years of experience" },
  { value: "25+", label: "Projects delivered" },
  { value: "12+", label: "Happy clients" },
  { value: "100%", label: "Satisfaction rate" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">

            <Reveal delay={100}>
              <h1 className="mt-7 text-[clamp(2.6rem,6vw,4.9rem)] font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                I design &amp; build digital products that feel{" "}
                <em className="font-serif font-medium italic tracking-[-0.01em] text-terracotta">
                  effortlessly
                </em>{" "}
                human.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-ink">Aawaiz Ijaz</span> — a
                UI/UX designer &amp; frontend developer. I partner with founders
                and teams to turn complex ideas into clear, beautiful, usable
                products — from the first wireframe to the final line of code.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-terracotta"
                >
                  View selected work
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-wa hover:bg-wa/5"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-wa-deep transition-transform duration-300 group-hover:scale-110" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <Reveal delay={250} y={36}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* ── VS Code Dark Window ── */}
                <div className="overflow-hidden rounded-2xl bg-[#1E1E1E] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.55),0_8px_24px_-8px_rgba(0,0,0,0.35)]">

                  {/* ── Title bar ── */}
                  <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#252526] px-4 py-3">
                    {/* macOS traffic lights */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#FF5F57] shadow-[0_0_0_0.5px_rgba(0,0,0,0.25)]" />
                      <span className="h-3 w-3 rounded-full bg-[#FEBC2E] shadow-[0_0_0_0.5px_rgba(0,0,0,0.25)]" />
                      <span className="h-3 w-3 rounded-full bg-[#28C840] shadow-[0_0_0_0.5px_rgba(0,0,0,0.25)]" />
                    </div>
                    {/* Centered filename tab */}
                    <div className="flex flex-1 justify-center">
                      <span className="rounded-t border-t-2 border-t-[#007ACC] bg-[#1E1E1E] px-4 py-1 text-[11px] font-medium text-[#CCCCCC]">
                        portfolio.tsx
                      </span>
                    </div>
                    {/* Right side — live dot */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#6A9955]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28C840] opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                      </span>
                    </div>
                  </div>

                  {/* ── Code body ── */}
                  <div className="flex select-none px-0 py-5 font-mono text-[13px] leading-[1.85] md:text-[13.5px]">

                    {/* Line numbers */}
                    <div className="w-10 shrink-0 border-r border-white/[0.06] pr-3 text-right text-[#3C3C3C] text-[11px] leading-[1.85] md:text-[12px]">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
                        <div key={n}>{n}</div>
                      ))}
                    </div>

                    {/* Actual code */}
                    <div className="pl-5 pr-5">
                      {/* 1: const Aawaiz = { */}
                      <div>
                        <span className="text-[#C586C0]">const </span>
                        <span className="text-[#DCDCAA]">Aawaiz</span>
                        <span className="text-[#D4D4D4]"> = {"{"}</span>
                      </div>
                      {/* 2: name */}
                      <div className="pl-5">
                        <span className="text-[#9CDCFE]">name</span>
                        <span className="text-[#D4D4D4]">: </span>
                        <span className="text-[#CE9178]">&apos;Aawaiz Ijaz&apos;</span>
                        <span className="text-[#D4D4D4]">,</span>
                      </div>
                      {/* 3: role */}
                      <div className="pl-5">
                        <span className="text-[#9CDCFE]">role</span>
                        <span className="text-[#D4D4D4]">: </span>
                        <span className="text-[#CE9178]">&apos;UI/UX + Frontend&apos;</span>
                        <span className="text-[#D4D4D4]">,</span>
                      </div>
                      {/* 4: stack: [ */}
                      <div className="pl-5">
                        <span className="text-[#9CDCFE]">stack</span>
                        <span className="text-[#D4D4D4]">: [</span>
                      </div>
                      {/* 5 */}
                      <div className="pl-10">
                        <span className="text-[#4EC9B0]">&apos;React&apos;</span>
                        <span className="text-[#D4D4D4]">, </span>
                        <span className="text-[#4EC9B0]">&apos;TypeScript&apos;</span>
                        <span className="text-[#D4D4D4]">,</span>
                      </div>
                      {/* 6 */}
                      <div className="pl-10">
                        <span className="text-[#4EC9B0]">&apos;Tailwind&apos;</span>
                        <span className="text-[#D4D4D4]">, </span>
                        <span className="text-[#4EC9B0]">&apos;Figma&apos;</span>
                        <span className="text-[#D4D4D4]">,</span>
                      </div>
                      {/* 7 */}
                      <div className="pl-5">
                        <span className="text-[#D4D4D4]">],</span>
                      </div>
                      {/* 8: available */}
                      <div className="pl-5">
                        <span className="text-[#9CDCFE]">available</span>
                        <span className="text-[#D4D4D4]">: </span>
                        <span className="text-[#569CD6]">true</span>
                        <span className="text-[#D4D4D4]">,</span>
                      </div>
                      {/* 9: }; */}
                      <div>
                        <span className="text-[#D4D4D4]">{"}"}</span>
                        <span className="text-[#D4D4D4]">;</span>
                      </div>
                      {/* 10: export default */}
                      <div>
                        <span className="text-[#C586C0]">export default </span>
                        <span className="text-[#DCDCAA]">Aawaiz</span>
                        <span className="text-[#D4D4D4]">;</span>
                      </div>
                      {/* 11: comment + cursor */}
                      <div className="flex items-center gap-0.5 italic text-[#6A9955]">
                        <span>// open to work</span>
                        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-[#AEAFAD] animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* ── Status bar ── */}
                  <div className="flex items-center border-t border-white/[0.06] bg-[#007ACC] px-4 py-1">
                    <span className="text-[10px] font-medium text-white/90">TypeScript React</span>
                  </div>
                </div>

                {/* Rotating badge */}
                <div className="absolute -left-6 -top-6 flex h-28 w-28 items-center justify-center rounded-full border border-line bg-cream/80 backdrop-blur-sm md:-left-10 md:h-32 md:w-32">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full animate-spin-slower"
                    style={{ overflow: "visible" }}
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="badge-circle"
                        d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text
                      className="fill-ink-soft font-medium uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.18em", fontFamily: "inherit" }}
                    >
                      <textPath
                        href="#badge-circle"
                        textLength="251"
                        lengthAdjust="spacingAndGlyphs"
                      >
                        {"\u2022 AVAILABLE FOR WORK \u2022 LET\u2019S CONNECT "}
                      </textPath>
                    </text>
                  </svg>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-cream md:h-14 md:w-14">
                    <Asterisk className="h-5 w-5" />
                  </span>
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={150}>
          <dl className="mt-20 grid grid-cols-2 border-t border-line md:mt-28 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col py-8 md:py-10 ${i > 0 ? "border-l border-line pl-6 md:pl-10" : ""
                  } ${i === 2 ? "max-md:border-l-0 max-md:pl-0" : ""} ${i > 1 ? "max-md:border-t max-md:border-line" : ""
                  }`}
              >
                <dt className="order-2 mt-2 text-sm text-ink-soft">{stat.label}</dt>
                <dd className="order-1 text-3xl font-bold tracking-tight text-ink tabular-nums md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
