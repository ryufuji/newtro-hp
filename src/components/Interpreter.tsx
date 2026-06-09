import { SectionBar } from "./SectionBar";

// 松尾陽介 = The Interpreter（解釈者）
// 写真は使わない。役割名・印・誤読サンプルで存在を提示する。
const SAMPLES: { src: string; mis: string; result: string }[] = [
  {
    src: "FinTech",
    mis: "テック → テクノ",
    result: "テクノカットの女の子",
  },
  {
    src: "Web 3.0",
    mis: "3.0 → 視力 3.0",
    result: "視力がめちゃくちゃ良い女の子",
  },
  {
    src: "???",
    mis: "次の誤読は",
    result: "進行中",
  },
];

export function Interpreter() {
  return (
    <section id="interpreter" className="relative bg-paper">
      <SectionBar
        index="03"
        title="THE INTERPRETER — 解釈者プロフィール"
        hint="PERSONNEL.DAT // ACTIVE INTERPRETER"
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="win-frame overflow-hidden bg-paper">
            <div className="win-titlebar">
              <span>PERSONNEL.DAT</span>
              <span className="ml-auto opacity-70">// CLASSIFICATION: PUBLIC</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-0">
              {/* Seal column */}
              <div className="relative border-b-2 md:border-b-0 md:border-r-2 border-ink/30 bg-ink/[0.03] flex flex-col items-center justify-center p-8 sm:p-10 gap-5">
                {/* Hanko-style seal */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-[3px] flex items-center justify-center"
                  style={{ borderColor: "var(--color-fintech)" }}
                >
                  <div className="flex flex-col items-center text-center"
                    style={{ color: "var(--color-fintech)" }}
                  >
                    <span className="font-display text-3xl sm:text-4xl leading-none">松尾</span>
                    <span className="mt-1 font-bebas text-[10px] tracking-[0.3em]">陽介</span>
                  </div>
                  <span className="absolute inset-0 rounded-full border-2 opacity-30"
                    style={{ borderColor: "var(--color-fintech)" }} />
                </div>

                {/* Signature line */}
                <div className="text-center">
                  <p className="font-bebas text-[9px] tracking-[0.3em] text-mute">
                    SIGNED
                  </p>
                  <p className="mt-1 font-display text-lg italic" style={{ letterSpacing: "0.05em" }}>
                    Yosuke&nbsp;Matsuo
                  </p>
                </div>
              </div>

              {/* Info column */}
              <div className="p-7 sm:p-10">
                <p className="font-bebas text-[10px] sm:text-xs tracking-[0.35em] text-mute">
                  ROLE / 役割
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                  THE INTERPRETER
                </h3>
                <p className="mt-1 font-bebas text-xs tracking-[0.25em] text-ink/70">
                  解釈者 / 松尾 陽介（Yosuke Matsuo）
                </p>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                  <p>
                    時代のキーワードを最初に受け取り、誤読する人。
                    Newtique の擬人化辞典は、すべて松尾の頭を一度通って生まれる。
                  </p>
                  <p>
                    意味を正確に翻訳することはしない。
                    一語の一部分だけが頭に残り、文脈ごと別のジャンルへジャンプする。
                    その歪んだ翻訳から、女の子の姿が立ち上がる。
                  </p>
                </div>

                {/* Sample misreads */}
                <div className="mt-8 border-t-2 border-ink/20 pt-6">
                  <p className="font-bebas text-[10px] sm:text-xs tracking-[0.35em] text-mute">
                    SAMPLE INTERPRETATIONS
                  </p>
                  <ul className="mt-3 divide-y divide-ink/15">
                    {SAMPLES.map((s) => (
                      <li
                        key={s.src + s.mis}
                        className="grid grid-cols-3 gap-2 sm:gap-4 py-2.5 text-xs sm:text-sm items-baseline"
                      >
                        <span className="font-bebas tracking-[0.2em] text-ink">
                          {s.src}
                        </span>
                        <span className="text-mute">{s.mis}</span>
                        <span className="text-ink-soft text-right sm:text-left">
                          {s.result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guest line */}
                <p className="mt-7 text-xs sm:text-sm text-ink-soft border-l-2 border-ink/30 pl-4 italic">
                  ゲスト解釈者（GUEST INTERPRETER）も順次発表予定。
                  外部の文脈を持つ別の頭が、辞典に新しい誤読を持ち込む。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
