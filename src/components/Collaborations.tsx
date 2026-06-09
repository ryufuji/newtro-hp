import { SectionBar } from "./SectionBar";

type Guest = {
  no: string;
  name: string;
  context: string;
  drop: string;
};

// "ゲスト解釈者" としてのコラボレーション。
// 各 Guest は外部の文脈を持ち込み、Newtique の擬人化辞典に参加する。
const guests: Guest[] = [
  {
    no: "GUEST.01",
    name: "FR2",
    context: "STREET / RABBIT MEME",
    drop: "TBA",
  },
  {
    no: "GUEST.02",
    name: "PIKAPIKA",
    context: "COMEDIAN / 入江慎也",
    drop: "TBA",
  },
  {
    no: "GUEST.03",
    name: "SAUNA",
    context: "WELLNESS / 整う文化",
    drop: "TBA",
  },
  {
    no: "GUEST.04",
    name: "MADE IN WORLD",
    context: "MULTI-NATIONAL CRAFT",
    drop: "TBA",
  },
];

export function Collaborations() {
  return (
    <section id="collaborations" className="relative bg-paper">
      <SectionBar
        index="03"
        title="GUEST INTERPRETERS — コラボレーション"
        hint={`GUESTS.DIR // ${guests.length} ENTRIES`}
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            外から文脈を借りる。
            <br />
            ゲスト解釈者が持ち込むキーワードを、Newtique の辞典フォーマットで擬人化していくシリーズ。
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {guests.map((g) => (
              <article
                key={g.no}
                className="win-frame overflow-hidden"
              >
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
                    <p className="font-bebas text-[10px] sm:text-xs tracking-[0.3em] text-mute">
                      COMING SOON
                    </p>
                    <p className="mt-3 font-display text-2xl sm:text-3xl leading-tight">
                      {g.name}
                    </p>
                    <p className="mt-3 font-bebas text-[9px] sm:text-[10px] tracking-[0.25em] text-ink-soft">
                      {g.context}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="font-bebas text-[10px] tracking-[0.25em] text-mute">
                    GUEST INTERPRETER
                  </p>
                  <p className="mt-1 font-wordmark text-xl leading-none">
                    {g.name}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-xs tracking-[0.2em] text-mute">
            EACH GUEST DROPS A LIMITED EDITION — SCHEDULES TBA ON{" "}
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
