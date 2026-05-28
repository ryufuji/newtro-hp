import Image from "next/image";
import { WinFrame } from "./WinFrame";

type Work = {
  no: string;
  year: string;
  title: string;
  keyword: string;
  image: string;
  caption: string;
  accent: string;
  edition?: string;
  status: "available" | "coming" | "concept";
};

const works: Work[] = [
  {
    no: "ARC.001",
    year: "2026",
    title: "Fintech GIRL",
    keyword: "FIN-TECH / TECHNO-CUT",
    image: "/episodes/fintech.png",
    caption:
      "金融×テクノロジーを意味する造語「フィンテック」。テックの部分しか松尾の頭に残らず、テック＝テクノだと解釈した結果、テクノカットの女の子が生まれた。着ているのは、Yellow Magic Orchestra のあの赤い衣装。",
    accent: "var(--color-fintech)",
    edition: "T-SHIRT / ¥6,500",
    status: "available",
  },
  {
    no: "ARC.002",
    year: "2026",
    title: "Web 3.0 GIRL",
    keyword: "DECENTRALIZED / PERFECT-EYESIGHT",
    image: "/episodes/web3.png",
    caption:
      "ブロックチェーン技術による自動データベース管理。第三者を介在させない通信が生むインターネットの可能性。「3.0」と聞いた松尾は“視力がめちゃくちゃ良い人”をデザインした。",
    accent: "var(--color-web3)",
    edition: "T-SHIRT / ¥6,500",
    status: "available",
  },
  {
    no: "ARC.???",
    year: "TBA",
    title: "Untitled / 04",
    keyword: "??? / ???",
    image: "/episodes/pop.png",
    caption: "未来のキーワードはまだ届いていない。",
    accent: "var(--color-magenta)",
    status: "concept",
  },
  {
    no: "ARC.???",
    year: "TBA",
    title: "Untitled / 05",
    keyword: "??? / ???",
    image: "/episodes/albatross.png",
    caption: "次の時代の言葉が、次の女の子になる。",
    accent: "var(--color-ink)",
    status: "concept",
  },
];

const STATUS_LABEL = {
  available: "DROP / 2026.07.01",
  coming: "COMING SOON",
  concept: "CONCEPT / TBA",
} as const;

export function Archive() {
  return (
    <section
      id="archive"
      className="border-b-2 border-ink py-20 sm:py-28 bg-paper relative isolate"
    >
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <WinFrame title="ARCHIVE.DB" hint={`// ${works.length} WORKS`}>
          <div className="px-5 sm:px-8 py-10 sm:py-14">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-4xl sm:text-6xl">
                作品アーカイブ
              </h2>
              <p className="font-bebas tracking-[0.3em] text-mute">/ ARCHIVE</p>
            </div>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
              時代のキーワードを「女の子」として記録していくシリーズ。
              すべての作品にシリアルナンバー入りタグが付きます。
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {works.map((w) => (
                <article
                  key={w.no + w.title}
                  className="group win-frame overflow-hidden"
                >
                  <div className="win-titlebar">
                    <div className="win-dots">
                      <span style={{ background: w.accent }} />
                      <span style={{ background: w.accent, opacity: 0.6 }} />
                      <span style={{ background: w.accent, opacity: 0.3 }} />
                    </div>
                    <span>
                      {w.no} / {w.year}
                    </span>
                    <span className="ml-auto opacity-70">// {w.keyword}</span>
                  </div>

                  <div
                    className="relative aspect-[4/5] overflow-hidden border-b-2 border-ink scanlines"
                    style={{ background: w.accent }}
                  >
                    <Image
                      src={w.image}
                      alt={w.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                        filter:
                          w.status === "concept"
                            ? "grayscale(1) blur(6px) opacity(0.55)"
                            : undefined,
                      }}
                    />
                    {w.status === "concept" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-display text-5xl sm:text-7xl text-ink/80 tracking-widest">
                          ???
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-wordmark text-3xl sm:text-4xl leading-none">
                        {w.title}
                      </h3>
                      <p className="font-bebas text-xs tracking-[0.3em] text-mute whitespace-nowrap">
                        {STATUS_LABEL[w.status]}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {w.caption}
                    </p>
                    {w.edition && (
                      <p className="mt-5 font-bebas text-xs tracking-[0.3em] text-ink border-t-2 border-ink/20 pt-4">
                        EDITION · {w.edition}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-xs tracking-[0.2em] text-mute">
              NEXT WORK TBA — STAY TUNED ON{" "}
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
