import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** "fade" = soft rise with blur, "clip" = curtain wipe from bottom (for images) */
  variant?: "fade" | "clip";
}

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function useInView<T extends Element>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

/** Scroll reveal that animates only once. */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  variant = "fade",
}: RevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>();

  const style =
    variant === "clip"
      ? {
          clipPath: visible ? "inset(0% 0% 0% 0% round 2rem)" : "inset(100% 0% 0% 0% round 2rem)",
          transform: visible ? "scale(1)" : "scale(1.04)",
          transition: `clip-path 1.2s ${EASE} ${delay}ms, transform 1.4s ${EASE} ${delay}ms`,
          willChange: "clip-path, transform",
        }
      : {
          opacity: visible ? 1 : 0,
          filter: visible ? "blur(0px)" : "blur(8px)",
          transform: visible ? "translateY(0)" : `translateY(${y}px)`,
          transition: `opacity 1s ${EASE} ${delay}ms, transform 1s ${EASE} ${delay}ms, filter 1s ${EASE} ${delay}ms`,
          willChange: "opacity, transform, filter",
        };

  // Observe an unclipped wrapper: a fully clipped element never counts as "in view".
  if (variant === "clip") {
    return (
      <div ref={ref} className={className}>
        <div style={style}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
