import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row lg:px-10">
        <p className="text-sm text-ink-soft">
          © {new Date().getFullYear()} Aawaiz Ijaz. All rights reserved.
        </p>

        <p className="font-serif text-sm italic text-ink-soft">
          Designed &amp; built with care — no templates harmed.
        </p>

        <div className="flex items-center gap-6">
          <span className="text-sm tabular-nums text-ink-soft">
            Lahore, PK — {time || "—"} PKT
          </span>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition-all duration-300 hover:border-terracotta hover:bg-terracotta hover:text-cream"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
