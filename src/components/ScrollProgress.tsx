import { useEffect, useRef } from "react";

/** Thin terracotta bar at the top that fills as you scroll. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div
      ref={bar}
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-terracotta"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
