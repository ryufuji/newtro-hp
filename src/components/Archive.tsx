import { SectionBar } from "./SectionBar";
import { ArchiveCard, type Work } from "./ArchiveCard";

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
    edition: "T-SHIRT / ¥8,800 (税込)",
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
    edition: "T-SHIRT / ¥8,800 (税込)",
    status: "available",
  },
];

export function Archive() {
  return (
    <section id="archive" className="relative bg-paper">
      <SectionBar
        index="02"
        title="ARCHIVE — 作品アーカイブ"
        hint={`ARCHIVE.DB // ${works.length} WORKS`}
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            時代のキーワードを「女の子」として記録していくシリーズ。
            すべての作品にシリアルナンバー入りタグが付きます。
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {works.map((w) => (
              <ArchiveCard key={w.no + w.title} work={w} />
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
      </div>
    </section>
  );
}
