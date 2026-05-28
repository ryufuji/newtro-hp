"use client";

import { useInView } from "@/lib/useInView";

const TEXT = "過去になっていく未来を着る。";

export function HeroTagline() {
  const { ref, inView } = useInView<HTMLParagraphElement>({ threshold: 0.5 });
  const chars = Array.from(TEXT);

  return (
    <p
      ref={ref}
      className="mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-3xl font-display tracking-wide text-ink"
      aria-label={TEXT}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0) rotate(0deg)"
              : `translateY(${(i % 2 ? -1 : 1) * 14}px) rotate(${(i % 2 ? -1 : 1) * 8}deg)`,
            filter: inView ? "blur(0)" : "blur(3px)",
            transition: `opacity 0.4s ease-out, transform 0.5s cubic-bezier(0.2,0.8,0.2,1), filter 0.4s ease-out`,
            transitionDelay: `${i * 45}ms`,
          }}
        >
          {c}
        </span>
      ))}
    </p>
  );
}
