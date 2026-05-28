"use client";

import { useEffect, useRef, useState } from "react";

const BOOT_LINES = [
  "INITIALIZING NEWTIQUE.EXE ...",
  "LOADING FONTS ......... OK",
  "MOUNTING ARCHIVE.DB ... OK",
  "SYNCING PAST <-> FUTURE OK",
  "RENDERING WORLD ....... OK",
];

const DURATION = 2800;

export function BootLoader() {
  const [phase, setPhase] = useState<"boot" | "off" | "hidden">("boot");
  const [progress, setProgress] = useState(0);
  const [pastYear, setPastYear] = useState(2026);
  const [futureYear, setFutureYear] = useState(2026);
  const [lines, setLines] = useState<string[]>([]);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (sessionStorage.getItem("nt_booted") || reduce) {
      setPhase("hidden");
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      const e = t * t; // ease-in
      setProgress(Math.round(t * 100));

      // jitter decreases as we approach the end, then snaps to 2026
      const jitter = (1 - t) * 6;
      setPastYear(
        Math.round(2026 - e * 56 + (Math.random() * 2 - 1) * jitter),
      );
      setFutureYear(
        Math.round(2026 + e * 73 + (Math.random() * 2 - 1) * jitter),
      );

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPastYear(2026);
        setFutureYear(2026);
        sessionStorage.setItem("nt_booted", "1");
        setPhase("off");
        window.setTimeout(() => {
          document.body.style.overflow = "";
          setPhase("hidden");
        }, 650);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    BOOT_LINES.forEach((line, i) => {
      window.setTimeout(
        () => setLines((p) => [...p, line]),
        ((i + 1) * DURATION) / (BOOT_LINES.length + 1),
      );
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  const converged = progress >= 100;

  return (
    <div
      className={`bootloader ${phase === "off" ? "boot-off" : ""}`}
      aria-hidden
    >
      <div className="bootloader-inner scanlines noise crt-flicker">
        {/* titlebar */}
        <div className="win-titlebar w-full max-w-3xl">
          <div className="win-dots">
            <span style={{ background: "#ff5f56" }} />
            <span style={{ background: "#ffbd2e" }} />
            <span style={{ background: "#27c93f" }} />
          </div>
          <span>NEWTIQUE.EXE — BOOTING…</span>
          <span className="ml-auto opacity-70 tabular-nums">{progress}%</span>
        </div>

        <div className="w-full max-w-3xl px-5 py-10 sm:py-14 flex flex-col items-center">
          {/* past / future simultaneous readout */}
          <div className="w-full flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="font-bebas tracking-[0.3em] text-[10px] sm:text-xs text-ink/50">
                ◄ PAST
              </p>
              <p className="font-bebas text-4xl sm:text-6xl tabular-nums leading-none">
                {pastYear}
              </p>
            </div>

            <div className="text-center px-2">
              <p className="font-bebas tracking-[0.3em] text-[9px] sm:text-[10px] text-ink/40">
                {converged ? "— NOW —" : "SYNCING"}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bebas tracking-[0.3em] text-[10px] sm:text-xs text-ink/50">
                FUTURE ►
              </p>
              <p className="font-bebas text-4xl sm:text-6xl tabular-nums leading-none">
                {futureYear}
              </p>
            </div>
          </div>

          {/* center wordmark */}
          <h1
            className="glitch font-wordmark text-6xl sm:text-8xl leading-none mt-8 sm:mt-10"
            data-text="Newtique"
          >
            Newtique
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-display tracking-wide text-ink/70">
            過去になっていく未来を着る。
          </p>

          {/* progress bar */}
          <div className="mt-9 w-full max-w-md">
            <div className="h-3 border-2 border-ink overflow-hidden">
              <div
                className="h-full bg-ink transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* boot log */}
          <div className="mt-6 w-full max-w-md min-h-[6.5rem] font-bebas tracking-[0.15em] text-[10px] sm:text-xs text-ink/70 text-left">
            {lines.map((l, i) => (
              <p key={i}>&gt; {l}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
