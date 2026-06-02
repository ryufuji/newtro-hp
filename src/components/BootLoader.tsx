"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "typing" | "connecting" | "loading" | "off" | "hidden";

const URL_TEXT = "https://newtique.jp/";
const TYPE_MS = 55; // per char
const PAUSE_AFTER_TYPE = 280;
const CONNECTING_MS = 500;
const LOADING_DURATION = 2000;
const SHUTDOWN_MS = 650;

const BOOT_LINES = [
  "INITIALIZING NEWTIQUE.EXE ...",
  "LOADING FONTS ......... OK",
  "MOUNTING ARCHIVE.DB ... OK",
  "SYNCING PAST <-> FUTURE OK",
  "RENDERING WORLD ....... OK",
];

export function BootLoader() {
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [progress, setProgress] = useState(0);
  const [pastYear, setPastYear] = useState(2026);
  const [futureYear, setFutureYear] = useState(2026);
  const [lines, setLines] = useState<string[]>([]);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (
      sessionStorage.getItem("nt_booted") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhase("hidden");
      return;
    }

    document.body.style.overflow = "hidden";

    // ── PHASE 1: typing the URL ───────────────────────────
    let i = 0;
    const typeId = window.setInterval(() => {
      i += 1;
      setTyped(URL_TEXT.slice(0, i));
      if (i >= URL_TEXT.length) {
        window.clearInterval(typeId);
        // pause briefly, then enter connecting state
        window.setTimeout(() => {
          setPhase("connecting");
          // ── PHASE 2: short connecting beat → maximize ───
          window.setTimeout(() => {
            setPhase("loading");
            startLoader();
          }, CONNECTING_MS);
        }, PAUSE_AFTER_TYPE);
      }
    }, TYPE_MS);

    // ── PHASE 3: past / future loader ─────────────────────
    function startLoader() {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / LOADING_DURATION);
        const e = t * t;
        setProgress(Math.round(t * 100));
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
          }, SHUTDOWN_MS);
        }
      };
      rafRef.current = requestAnimationFrame(tick);

      BOOT_LINES.forEach((line, idx) => {
        window.setTimeout(
          () => setLines((p) => [...p, line]),
          ((idx + 1) * LOADING_DURATION) / (BOOT_LINES.length + 1),
        );
      });
    }

    return () => {
      window.clearInterval(typeId);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  const isMini = phase === "typing" || phase === "connecting";
  const isMax = phase === "loading" || phase === "off";
  const converged = progress >= 100;

  return (
    <div
      className={`bootloader ${phase === "off" ? "boot-off" : ""}`}
      aria-hidden
    >
      <div
        className={`boot-frame ${isMini ? "boot-mini" : "boot-max"}`}
      >
        {/* window titlebar */}
        <div className="win-titlebar shrink-0">
          <div className="win-dots">
            <span style={{ background: "#ff5f56" }} />
            <span style={{ background: "#ffbd2e" }} />
            <span style={{ background: "#27c93f" }} />
          </div>
          <span>
            NEWTIQUE.EXE —{" "}
            {phase === "typing"
              ? "READY"
              : phase === "connecting"
                ? "CONNECTING…"
                : "BOOTING…"}
          </span>
          {isMax && (
            <span className="ml-auto opacity-70 tabular-nums">{progress}%</span>
          )}
        </div>

        {/* PHASE 1 + 2: address bar */}
        {isMini && (
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-6">
            <div className="flex items-center gap-2 sm:gap-3 h-9 sm:h-10 px-3 rounded-sm bg-paper border-2 border-ink">
              <span className="opacity-50 text-[11px]">🔒</span>
              <span className="font-bebas text-[12px] sm:text-sm tracking-[0.12em] text-ink truncate">
                {typed}
                {phase === "typing" && (
                  <span className="boot-caret" aria-hidden>
                    _
                  </span>
                )}
              </span>
              <span className="ml-auto font-bebas text-[10px] tracking-[0.2em] text-ink/40 hidden sm:inline">
                {phase === "connecting" ? "CONNECTING…" : "PRESS ⏎"}
              </span>
            </div>
            <p className="mt-3 text-center font-bebas tracking-[0.3em] text-[10px] sm:text-xs text-ink/50">
              — {phase === "connecting" ? "ESTABLISHING LINK" : "READY"} —
            </p>
          </div>
        )}

        {/* PHASE 3: past / future loader */}
        {isMax && (
          <div className="relative flex-1 scanlines noise crt-flicker overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5">
              <div className="w-full max-w-3xl flex items-center justify-between gap-4">
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

              <h1
                className="glitch font-wordmark text-6xl sm:text-8xl leading-none mt-8 sm:mt-10"
                data-text="Newtique"
              >
                Newtique
              </h1>
              <p className="mt-3 text-xs sm:text-sm font-display tracking-wide text-ink/70">
                過去になっていく未来を着る。
              </p>

              <div className="mt-9 w-full max-w-md">
                <div className="h-3 border-2 border-ink overflow-hidden">
                  <div
                    className="h-full bg-ink transition-[width] duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 w-full max-w-md min-h-[6.5rem] font-bebas tracking-[0.15em] text-[10px] sm:text-xs text-ink/70 text-left">
                {lines.map((l, i) => (
                  <p key={i}>&gt; {l}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
