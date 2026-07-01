import { SHOP_URL } from "@/lib/env";
import { SectionBar } from "./SectionBar";

type Drop = {
  no: string;
  date: string;
  jst: string;
  title: string;
  items: string;
  channels: string;
  status: "scheduled" | "tba";
};

const drops: Drop[] = [
  {
    no: "DROP.001",
    date: "2026.07.01",
    jst: "12:00 JST",
    title: "OPENING — 擬人化辞典 第1巻",
    items: "ARC.001 Fintech GIRL / ARC.002 Web 3.0 GIRL",
    channels: "EC + POPUP",
    status: "scheduled",
  },
  {
    no: "DROP.002",
    date: "TBA",
    jst: "—",
    title: "ARC.003 — 進行中",
    items: "次のキーワードを解釈中",
    channels: "EC + POPUP",
    status: "tba",
  },
  {
    no: "GUEST.DROP.01",
    date: "TBA",
    jst: "—",
    title: "GUEST INTERPRETER × Newtique",
    items: "外部の解釈者が持ち込む文脈を擬人化",
    channels: "EC + POPUP",
    status: "tba",
  },
];

export function DropSchedule() {
  return (
    <section id="drops" className="relative bg-ink text-paper">
      <SectionBar
        index="06"
        title="DROP SCHEDULE — 販売スケジュール"
        hint={`DROPS.LOG // ${drops.length} ENTRIES`}
      />
      <div className="relative dot-grid-dark scanlines noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-paper/80">
            販売は完全にスケジュール制。
            <br />
            各 DROP は EC + POPUP の分割販売で 30 枚限定、二度と作らない。
          </p>

          <div className="mt-10 border-2 border-paper/30 rounded-md overflow-hidden bg-ink/40 backdrop-blur-[1px]">
            {/* table header */}
            <div className="hidden md:grid grid-cols-[140px_120px_1fr_140px_120px] gap-4 px-5 py-3 border-b border-paper/20 bg-paper/5 font-bebas text-[10px] tracking-[0.3em] text-paper/60">
              <span>DROP</span>
              <span>DATE</span>
              <span>CONTENTS</span>
              <span>CHANNELS</span>
              <span className="text-right">STATUS</span>
            </div>

            {drops.map((d) => (
              <div
                key={d.no}
                className="grid grid-cols-1 md:grid-cols-[140px_120px_1fr_140px_120px] gap-2 md:gap-4 px-5 py-5 border-b border-paper/15 last:border-b-0 items-baseline"
              >
                <div>
                  <p className="font-bebas tracking-[0.25em] text-sm text-paper">
                    {d.no}
                  </p>
                </div>
                <div>
                  <p className="font-bebas tracking-[0.15em] text-sm text-paper">
                    {d.date}
                  </p>
                  <p className="font-bebas text-[10px] tracking-[0.2em] text-paper/55">
                    {d.jst}
                  </p>
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg leading-tight">
                    {d.title}
                  </p>
                  <p className="mt-1 text-xs text-paper/70">{d.items}</p>
                </div>
                <div>
                  <p className="font-bebas tracking-[0.2em] text-xs text-paper/80">
                    {d.channels}
                  </p>
                </div>
                <div className="md:text-right">
                  <span
                    className={`inline-block font-bebas text-[10px] tracking-[0.3em] px-2 py-0.5 border ${
                      d.status === "scheduled"
                        ? "border-fintech text-fintech"
                        : "border-paper/40 text-paper/60"
                    }`}
                  >
                    {d.status === "scheduled" ? "SCHEDULED" : "TBA"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ECLink />
            <Note title="POPUP" body="15枚 / 会場限定（情報は順次告知）" />
            <Note title="LINE先行" body="24時間先行アクセス / 公式LINE登録者" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-paper text-ink px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              SHOP / 通販サイトへ
            </a>
          </div>

          <p className="mt-6 text-center text-xs tracking-[0.2em] text-paper/55">
            ※ 完売後は再生産しません。"NEVER REPRINTED" がブランドポリシーです。
          </p>
        </div>
      </div>
    </section>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-paper/25 rounded-sm p-4">
      <p className="font-bebas tracking-[0.3em] text-[10px] text-paper/55">
        {title}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-paper/90">{body}</p>
    </div>
  );
}

function ECLink() {
  return (
    <a
      href={SHOP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-paper/25 rounded-sm p-4 transition hover:border-paper/60 hover:bg-paper/5"
    >
      <p className="font-bebas tracking-[0.3em] text-[10px] text-paper/55 flex items-center gap-2">
        EC
        <span className="ml-auto opacity-70 group-hover:opacity-100">↗</span>
      </p>
      <p className="mt-1 text-sm leading-relaxed text-paper/90">
        15枚 / 通販サイトへ
      </p>
    </a>
  );
}
