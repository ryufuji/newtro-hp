"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

export type Work = {
  no: string;
  year: string;
  title: string;
  keyword: string;
  image: string;
  caption: string;
  accent: string;
  edition?: string;
  status: "available" | "coming" | "concept";
};

const STATUS_LABEL = {
  available: "DROP / 2026.07.01",
  coming: "COMING SOON",
  concept: "CONCEPT / TBA",
} as const;

export function ArchiveCard({ work: w }: { work: Work }) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.3 });
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    if (!inView) return;
    setOpening(true);
    const id = setTimeout(() => setOpening(false), 700);
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <article ref={ref} className="group win-frame overflow-hidden">
      <div className="win-titlebar">
        <div className="win-dots">
          <span style={{ background: w.accent }} />
          <span style={{ background: w.accent, opacity: 0.6 }} />
          <span style={{ background: w.accent, opacity: 0.3 }} />
        </div>
        <span>
          {w.no} / {w.year}
        </span>
        <span className="ml-auto opacity-70">// {w.keyword}</span>
      </div>

      <div
        className="relative aspect-[4/5] overflow-hidden border-b-2 border-ink scanlines"
        style={{ background: w.accent }}
      >
        <Image
          src={w.image}
          alt={w.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            filter:
              w.status === "concept"
                ? "grayscale(1) blur(6px) opacity(0.55)"
                : undefined,
          }}
        />

        {/* FILE OPENING overlay */}
        {inView && opening && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink/90 text-paper">
            <div className="text-center">
              <p className="font-bebas tracking-[0.3em] text-sm sm:text-base">
                FILE OPENING…
              </p>
              <p className="mt-2 font-bebas tracking-[0.2em] text-[10px] text-paper/60">
                {w.image.replace("/episodes/", "").toUpperCase()}
              </p>
              <div className="mt-3 mx-auto h-1.5 w-32 border border-paper overflow-hidden">
                <div
                  className="h-full bg-paper"
                  style={{ animation: "load-bar 0.7s linear forwards" }}
                />
              </div>
            </div>
          </div>
        )}

        {w.status === "concept" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-5xl sm:text-7xl text-ink/80 tracking-widest">
              ???
            </p>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-wordmark text-3xl sm:text-4xl leading-none">
            {w.title}
          </h3>
          <p className="font-bebas text-xs tracking-[0.3em] text-mute whitespace-nowrap">
            {STATUS_LABEL[w.status]}
          </p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">{w.caption}</p>
        {w.edition && (
          <p className="mt-5 font-bebas text-xs tracking-[0.3em] text-ink border-t-2 border-ink/20 pt-4">
            EDITION · {w.edition}
          </p>
        )}
      </div>
    </article>
  );
}
