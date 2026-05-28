import { WinFrame } from "./WinFrame";

const values = [
  {
    n: "01",
    title: "なによりも着心地",
    body: "毎日袖を通したくなる肌触りを、すべての出発点に。",
  },
  {
    n: "02",
    title: "新旧を兼ね備えたパターン",
    body: "古さの記憶と、新しさの違和感。両方を一着に折り込む。",
  },
  {
    n: "03",
    title: "100人より、10人に深く",
    body: "広く受け入れられるよりも、深く刺さるブランドへ。",
  },
  {
    n: "04",
    title: "松尾陽介のデザイン",
    body: "彼の理解と誤読こそが、Newtiqueの核になる。",
  },
];

export function Values() {
  return (
    <section
      id="values"
      className="border-b-2 border-ink py-20 sm:py-28 bg-paper relative isolate"
    >
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <WinFrame title="VALUES.CFG" hint="// 4 ITEMS">
          <div className="px-5 sm:px-8 py-10 sm:py-14">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-4xl sm:text-6xl">
                大事にしたいこと
              </h2>
              <p className="font-bebas tracking-[0.3em] text-mute">/ VALUES</p>
            </div>

            <div className="mt-10 grid gap-px bg-ink border-2 border-ink rounded-md overflow-hidden sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.n} className="bg-paper p-7 sm:p-8">
                  <p className="font-bebas text-2xl text-ink-soft">{v.n}</p>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </WinFrame>
      </div>
    </section>
  );
}
