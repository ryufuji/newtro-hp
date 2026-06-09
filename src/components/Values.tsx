import { SectionBar } from "./SectionBar";

const values = [
  {
    n: "01",
    title: "一語につき、一人",
    body: "ひとつのキーワードに、ひとりの女の子を当てる。辞典のように、一語一項。",
  },
  {
    n: "02",
    title: "誤読を恐れない",
    body: "解釈の歪みは、誤りではなくもうひとつの正解。意味を一度外すことで、新しいデザインが生まれる。",
  },
  {
    n: "03",
    title: "100人より、深く刺さる10人",
    body: "全員に届く言葉を選ばない。文脈を共有できる10人に、強く打ち抜くデザインへ。",
  },
  {
    n: "04",
    title: "二度と作らない",
    body: "30枚刷ったら終わり。再生産しない。「あの時持っていた」が事実として残る設計。",
  },
];

const PREMISE =
  "前提：着心地。— 触れた瞬間に分かる品質は、当然の条件として担保します。価値の話はそこから先で。";

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
          {/* baseline / premise strip — 着心地はここ */}
          <div className="mb-8 border-2 border-ink/30 border-dashed rounded-md px-5 py-3 flex items-center gap-3">
            <span className="font-bebas tracking-[0.25em] text-[10px] sm:text-xs text-ink/60 whitespace-nowrap">
              ⊿ PREMISE
            </span>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              {PREMISE}
            </p>
          </div>

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
