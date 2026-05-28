import { CharacterShowcase } from "./CharacterShowcase";
import { Countdown } from "./Countdown";
import { LAUNCH_LABEL_EN } from "@/lib/launch";
import { SectionBar } from "./SectionBar";

const KEYWORDS = [
  "FINTECH",
  "WEB 3.0",
  "AI",
  "METAVERSE",
  "BLOCKCHAIN",
  "CYBERPUNK",
  "BIG DATA",
  "5G",
  "NEURAL NET",
  "IoT",
  "VR / AR",
  "QUANTUM",
  "DEEPFAKE",
  "CRYPTO",
  "CLOUD",
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-paper">
      <SectionBar
        index="00"
        title="NEWTIQUE — APPAREL ARCHIVE"
        hint={`NEWTIQUE.EXE V1.0 // SYSTEM 26.07.01`}
      />
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative scanlines noise crt-flicker pt-20 sm:pt-24 pb-16 sm:pb-24 px-5 sm:px-10">
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="pb-3 flex flex-wrap justify-center text-ink/70">
            {KEYWORDS.map((k) => (
              <span key={k} className="kw">
                {k}
              </span>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="font-bebas tracking-[0.5em] text-[10px] sm:text-xs text-ink/60">
              AN APPAREL ARCHIVE / BY OMATSURI
            </p>

            <h1
              className="glitch font-wordmark text-[16vw] sm:text-[14vw] lg:text-[160px] leading-[0.95] mt-6 sm:mt-8"
              data-text="Newtique"
            >
              Newtique
            </h1>

            <p className="mt-4 sm:mt-6 text-lg sm:text-2xl lg:text-3xl font-display tracking-wide text-ink">
              過去になっていく未来を着る。
            </p>

            <p className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] text-ink/50">
              — WEARING THE FUTURE THAT BECOMES THE PAST —
            </p>
          </div>
        </div>
      </div>

      {/* character marquee bridges into archive feeling */}
      <div className="relative border-y-2 border-ink/80 bg-paper/50">
        <CharacterShowcase />
      </div>

      <div className="relative px-5 sm:px-10 pt-10 pb-16 sm:pb-20 bg-paper">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-bebas text-[10px] sm:text-xs tracking-[0.4em] text-ink/60">
            LAUNCH COUNTDOWN
          </p>
          <div className="mt-4">
            <Countdown />
          </div>
          <p className="mt-4 text-center font-bebas text-sm tracking-[0.3em] text-ink">
            {LAUNCH_LABEL_EN}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wider transition w-full sm:w-auto border-2 border-ink"
              style={{ background: "#06C755", color: "#0a0a0a" }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              公式LINEで友だち追加
            </a>
            <a
              href="#archive"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:bg-ink hover:text-paper transition w-full sm:w-auto"
            >
              作品アーカイブを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
