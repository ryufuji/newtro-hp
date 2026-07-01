import { SectionBar } from "./SectionBar";

type Guest = {
  no: string;
  hint: string;
  context: string;
  drop: string;
};

// ゲスト解釈者（コラボパートナー）は交渉中／正式発表前。
// Newtique のトーンに合わせて、伏字＋ヒントで提示する。
const guests: Guest[] = [
  {
    no: "GUEST.01",
    hint: "R•2",
    context: "STREET / RABBIT?",
    drop: "TBA",
  },
  {
    no: "GUEST.02",
    hint: "I•••E S.",
    context: "COMEDIAN / 元・芸人",
    drop: "TBA",
  },
  {
    no: "GUEST.03",
    hint: "S••NA",
    context: "WELLNESS / 整う文化",
    drop: "TBA",
  },
  {
    no: "GUEST.04",
    hint: "M••• •• •••••",
    context: "GLOBAL CRAFT",
    drop: "TBA",
  },
];

export function Collaborations() {
  return (
    <section id="collaborations" className="relative bg-paper">
      <SectionBar
        index="04"
        title="GUEST INTERPRETERS — コラボレーション"
        hint={`GUESTS.DIR // ${guests.length} ENTRIES — REDACTED`}
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            外から文脈を借りる「ゲスト解釈者」を 4 組準備中。
            <br />
            交渉と調整の段階のため、当面は伏字で。順次、正式発表していきます。
          </p>
          <p className="mt-3 max-w-2xl text-[11px] tracking-[0.15em] text-mute">
            ▸ HINT IS HALF THE FUN. — 推測の余地は、誤読の余地。
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {guests.map((g) => (
              <article key={g.no} className="win-frame overflow-hidden">
                <div className="win-titlebar">
                  <span>{g.no}</span>
                  <span className="ml-auto opacity-70">// {g.drop}</span>
                </div>

                <div className="relative aspect-square overflow-hidden bg-paper scanlines">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, var(--color-ink) 0, var(--color-ink) 1px, transparent 1px, transparent 14px)",
                    }}
                  />
                  <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-3">
                    <p className="font-bebas text-[9px] sm:text-[10px] tracking-[0.3em] text-mute">
                      REDACTED
                    </p>
                    <p className="mt-3 font-display text-3xl sm:text-4xl leading-none tabular-nums">
                      {g.hint}
                    </p>
                    <p className="mt-4 font-bebas text-[9px] sm:text-[10px] tracking-[0.25em] text-ink-soft">
                      {g.context}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bebas text-[10px] tracking-[0.25em] text-mute">
                    GUEST INTERPRETER
                  </p>
                  <p className="mt-1 font-wordmark text-xl leading-none">
                    {g.hint}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs tracking-[0.2em] text-mute">
            正式発表は{" "}
            <a
              href="https://www.instagram.com/NEWTIQUE0701/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              INSTAGRAM
            </a>{" "}
            にて順次
          </p>
        </div>
      </div>
    </section>
  );
}
