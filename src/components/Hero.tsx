import { CharacterShowcase } from "./CharacterShowcase";
import { Countdown } from "./Countdown";
import { LAUNCH_LABEL_EN } from "@/lib/launch";
import { SHOP_URL } from "@/lib/env";
import { SectionBar } from "./SectionBar";
import { KeywordCloud } from "./KeywordCloud";
import { HeroWordmark } from "./HeroWordmark";
import { HeroTagline } from "./HeroTagline";

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
          <KeywordCloud />

          <div className="text-center pt-4">
            <p className="font-bebas tracking-[0.5em] text-[10px] sm:text-xs text-ink/60">
              AN APPAREL ARCHIVE / BY OMATSURI
            </p>

            <HeroWordmark />

            <HeroTagline />

            <p className="mt-3 text-sm sm:text-base font-display text-ink/90">
              テクノロジーを、女の子にする。
            </p>
            <p className="mt-1 text-[10px] sm:text-xs tracking-[0.3em] text-ink/50">
              — A DICTIONARY OF PERSONIFIED ERAS —
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
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-paper border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              SHOP / 通販サイトへ
            </a>
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
