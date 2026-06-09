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
  original: string;
  misread: string;
  result: string;
  caption: string;
  accent: string;
  edition?: string;
  interpreter?: string;
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

        {/* 3-step translation */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 sm:gap-3 items-stretch text-[11px] sm:text-xs">
          <Step label="ORIGINAL" value={w.original} />
          <Arrow />
          <Step label="松尾の誤読" value={w.misread} accent />
          <Arrow />
          <Step label="生まれた女の子" value={w.result} />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-ink-soft">{w.caption}</p>

        <div className="mt-5 border-t-2 border-ink/20 pt-4 flex items-baseline justify-between gap-3 flex-wrap">
          <p className="font-bebas text-[11px] tracking-[0.3em] text-ink">
            {w.edition}
          </p>
          {w.interpreter && (
            <p className="font-bebas text-[10px] tracking-[0.25em] text-mute">
              INTERPRETED BY {w.interpreter}
            </p>
          )}
        </div>
        <p className="mt-2 font-bebas text-[10px] tracking-[0.25em] text-mute">
          NEVER REPRINTED / EC 15 + POPUP 15 = 30
        </p>
      </div>
    </article>
  );
}

function Step({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`border-2 border-ink rounded-sm p-2 sm:p-3 flex flex-col justify-center ${
        accent ? "bg-ink text-paper" : ""
      }`}
    >
      <p
        className={`font-bebas text-[9px] sm:text-[10px] tracking-[0.2em] ${
          accent ? "text-paper/70" : "text-mute"
        }`}
      >
        {label}
      </p>
      <p className="mt-1 leading-tight">{value}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden sm:flex items-center justify-center font-bebas text-lg text-ink/50">
      →
    </div>
  );
}
