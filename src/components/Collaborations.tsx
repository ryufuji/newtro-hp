import { SectionBar } from "./SectionBar";

const SLOTS = 4;

export function Collaborations() {
  return (
    <section id="collaborations" className="relative bg-paper">
      <SectionBar
        index="03"
        title="COLLABORATIONS"
        hint="COLLABS.DIR // 04 ENTRIES — TBA"
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
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
              href="https://www.instagram.com/NEWTIQUE0701/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              INSTAGRAM
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
