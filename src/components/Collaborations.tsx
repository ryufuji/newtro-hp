import { WinFrame } from "./WinFrame";

const SLOTS = 4;

export function Collaborations() {
  return (
    <section
      id="collaborations"
      className="border-b-2 border-ink py-20 sm:py-28 bg-paper relative isolate"
    >
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <WinFrame
          title="COLLABS.DIR — INDEX"
          hint="// 04 ENTRIES — TBA"
        >
          <div className="px-5 sm:px-8 py-10 sm:py-14">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-4xl sm:text-6xl">
                コラボレーション
              </h2>
              <p className="font-bebas tracking-[0.3em] text-mute">
                / COLLABORATIONS
              </p>
            </div>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
              ローンチ後、複数のブランド・アーティストとのコラボレーションを順次発表予定。詳細は近日公開。
            </p>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: SLOTS }).map((_, i) => (
                <article
                  key={i}
                  className="relative aspect-square border-2 border-ink rounded-md overflow-hidden bg-paper hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-shadow"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 14px)",
                    }}
                  />
                  <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4">
                    <p className="font-bebas text-5xl sm:text-6xl tracking-tight text-ink/30">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-bebas tracking-[0.3em] text-xs sm:text-sm text-ink">
                      COMING SOON
                    </p>
                    <p className="mt-2 text-[10px] sm:text-xs text-mute">
                      / TBA
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-xs tracking-[0.2em] text-mute">
              STAY TUNED ON{" "}
              <a
                href="https://www.instagram.com/newtro8/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-ink"
              >
                INSTAGRAM
              </a>
            </p>
          </div>
        </WinFrame>
      </div>
    </section>
  );
}
