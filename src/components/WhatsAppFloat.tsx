import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/03354679492";

/**
 * Fixed floating WhatsApp chat button — always one tap away.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aawaiz on WhatsApp"
      className="group fixed bottom-6 right-6 z-[70] flex items-center gap-3"
    >
      {/* Label — appears on hover (desktop) */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream opacity-0 shadow-[0_8px_24px_-8px_rgba(33,30,25,0.4)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat with me
      </span>

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_12px_28px_-10px_rgba(37,211,102,0.65)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
        {/* Gentle pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-wa animate-pulse-ring"
        />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
