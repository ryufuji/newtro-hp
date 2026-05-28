import { SectionBar } from "./SectionBar";

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
    title: "小規模生産",
    body: "作品ごとに少量だけ。大量に作って大量に消費するのではなく、時代と共に静かに消えていく儚さを残す。",
  },
];

export function Values() {
  return (
    <section id="values" className="relative bg-paper">
      <SectionBar
        index="04"
        title="VALUES — 大事にしたいこと"
        hint="VALUES.CFG // 4 ITEMS"
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid gap-px bg-ink border-2 border-ink rounded-md overflow-hidden sm:grid-cols-2">
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
      </div>
    </section>
  );
}
