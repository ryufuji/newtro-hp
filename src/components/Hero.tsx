import { CharacterShowcase } from "./CharacterShowcase";
import { Countdown } from "./Countdown";
import { LAUNCH_LABEL_EN } from "@/lib/launch";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden border-b-2 border-ink"
    >
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />

      <div className="relative pt-28 sm:pt-32 pb-16 sm:pb-24">
        <p className="text-center font-bebas text-sm sm:text-base tracking-[0.4em] text-ink-soft px-5">
          APPAREL BY OMATSURI
        </p>

        {/* full-bleed character marquee */}
        <div className="mt-6 sm:mt-8">
          <CharacterShowcase />
        </div>

        <div className="mt-10 sm:mt-14 text-center px-5">
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            Newtique
          </h1>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.3em] text-mute">
            BRAND LAUNCH COUNTDOWN
          </p>
        </div>

        <div className="mt-10 sm:mt-12 px-5">
          <Countdown />
          <p className="mt-5 text-center font-bebas text-base sm:text-lg tracking-[0.3em]">
            {LAUNCH_LABEL_EN}
          </p>
        </div>

        <div className="mt-12 px-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#signup"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wider transition w-full sm:w-auto border-2 border-ink text-ink hover:text-paper hover:bg-ink"
            style={{ background: "#06C755", color: "#0a0a0a" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            公式LINEで友だち追加
          </a>
          <a
            href="#episodes"
            className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:bg-ink hover:text-paper transition w-full sm:w-auto"
          >
            エピソードを見る
          </a>
        </div>
      </div>
    </section>
  );
}
