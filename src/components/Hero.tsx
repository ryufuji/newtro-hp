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

      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <p className="text-center font-bebas text-sm sm:text-base tracking-[0.4em] text-ink-soft">
          NEW × RETRO / APPAREL FROM OMATSURI
        </p>

        <div className="mt-6 sm:mt-8">
          <CharacterShowcase />
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none">
            NewTro
          </h1>
          <p className="mt-3 text-xs sm:text-sm tracking-[0.3em] text-mute">
            BRAND LAUNCH COUNTDOWN
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <Countdown />
          <p className="mt-5 text-center font-bebas text-base sm:text-lg tracking-[0.3em]">
            {LAUNCH_LABEL_EN}
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition w-full sm:w-auto"
          >
            FOUNDING MEMBERに登録
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:bg-ink hover:text-paper transition w-full sm:w-auto"
          >
            ブランドを見る
          </a>
        </div>
      </div>
    </section>
  );
}
