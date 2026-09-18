import { ArrowUpRight, Asterisk, Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  GithubIcon,
} from "./BrandIcons";

const WHATSAPP_URL = "https://wa.me/03354679492";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: GithubIcon },
];

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "awaiztabassam3@gmail.com",
    href: "mailto:awaiztabassam3@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan — working worldwide",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 pb-16 md:pb-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-16 text-cream md:px-14 md:py-24">
            {/* Quiet decorative asterisk */}
            <Asterisk
              aria-hidden="true"
              strokeWidth={1}
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-cream/[0.05] md:h-96 md:w-96"
            />

            <div className="relative">
              <SectionLabel index="04" title="Contact" dark />

              <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.02em] md:text-6xl">
                Have an idea? Let&apos;s make it{" "}
                <em className="font-serif font-medium italic text-terracotta-light">
                  quietly
                </em>{" "}
                brilliant.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                Whether it&apos;s a full product, a redesign, or just a
                hunch you&apos;d like to explore — my inbox is always open,
                and my WhatsApp is even faster.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-wa px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-wa-deep hover:shadow-[0_12px_32px_-12px_rgba(37,211,102,0.55)]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:awaiztabassam3@gmail.com"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <Mail className="h-4.5 w-4.5" />
                  Send an email
                </a>
              </div>

              {/* Channels */}
              <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-ink px-6 py-5 transition-colors duration-300 hover:bg-[#2a2620]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wa/15 text-wa">
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-cream/50">
                      WhatsApp
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-cream">
                      +92 335 4679492
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-cream/40 transition-all duration-300 group-hover:text-wa" />
                </a>

                {channels.map((channel) =>
                  channel.href ? (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="group flex items-center gap-4 bg-ink px-6 py-5 transition-colors duration-300 hover:bg-[#2a2620]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream/80">
                        <channel.icon className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-cream/50">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-cream">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-cream/40 transition-colors duration-300 group-hover:text-terracotta-light" />
                    </a>
                  ) : (
                    <div
                      key={channel.label}
                      className="flex items-center gap-4 bg-ink px-6 py-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/10 text-cream/80">
                        <channel.icon className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-cream/50">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-cream">
                          {channel.value}
                        </span>
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Socials */}
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-cream/40">
                  Elsewhere
                </span>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta-light hover:bg-terracotta hover:text-cream"
                  >
                    <social.icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
