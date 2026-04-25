"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const characters = [
  { src: "/episodes/fintech.png", alt: "Fintech", label: "EP.01 / FINTECH", accent: "var(--color-fintech)" },
  { src: "/episodes/web3.png", alt: "Web 3.0", label: "EP.02 / WEB 3.0", accent: "var(--color-web3)" },
  { src: "/episodes/koikechan.png", alt: "Koike-chan", label: "KOIKE CHAN", accent: "#e63946" },
  { src: "/episodes/hokusai.png", alt: "Hokusai", label: "HOKUSAI", accent: "#2563eb" },
  { src: "/episodes/pop.png", alt: "Pop", label: "POP", accent: "var(--color-magenta)" },
  { src: "/episodes/santa.png", alt: "Santa", label: "SANTA", accent: "#dc2626" },
  { src: "/episodes/albatross.png", alt: "Albatross", label: "ALBATROSS", accent: "var(--color-ink)" },
];

const INTERVAL_MS = 4500;

export function CharacterShowcase() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % characters.length);
        setFading(false);
      }, 250);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  function gotoIndex(i: number) {
    if (i === index) return;
    setFading(true);
    window.setTimeout(() => {
      setIndex(i);
      setFading(false);
    }, 250);
  }

  const current = characters[index];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative aspect-[4/5] sm:aspect-[1/1]">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-out ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 640px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <span
          className="inline-block h-3 w-3 rounded-full transition-colors"
          style={{ background: current.accent }}
        />
        <p className="font-bebas tracking-[0.3em] text-sm sm:text-base text-ink">
          {current.label}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {characters.map((c, i) => (
          <button
            key={c.src}
            type="button"
            onClick={() => gotoIndex(i)}
            aria-label={`Show ${c.alt}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-ink" : "w-1.5 bg-mute hover:bg-ink/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
