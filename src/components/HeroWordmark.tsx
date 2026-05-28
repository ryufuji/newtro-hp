"use client";

import { useInView } from "@/lib/useInView";

export function HeroWordmark() {
  const { ref, inView } = useInView<HTMLHeadingElement>({
    threshold: 0.4,
    once: true,
  });

  return (
    <h1
      ref={ref}
      className={`glitch font-wordmark text-[16vw] sm:text-[14vw] lg:text-[160px] leading-[0.95] mt-6 sm:mt-8 ${
        inView ? "glitch-burst" : ""
      }`}
      data-text="Newtique"
    >
      Newtique
    </h1>
  );
}
