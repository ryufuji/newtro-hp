import { SectionBar } from "./SectionBar";
import { ArchiveCard, type Work } from "./ArchiveCard";

const works: Work[] = [
  {
    no: "ARC.001",
    year: "2026",
    title: "Fintech GIRL",
    keyword: "FIN-TECH / TECHNO-CUT",
    image: "/episodes/fintech.png",
    original: "FinTech",
    misread: "テック ＝ テクノ",
    result: "テクノカットの女の子（YMOの赤い衣装）",
    caption:
      "金融×テクノロジーを意味する造語「フィンテック」。テックの部分しか頭に残らず、テック＝テクノだと解釈した結果、テクノカットの女の子が生まれた。着ているのは、Yellow Magic Orchestra のあの赤い衣装。",
    accent: "var(--color-fintech)",
    edition: "EDITION OF 30 / T-SHIRT ¥6,600 (税込)",
    interpreter: "松尾陽介",
    status: "available",
  },
  {
    no: "ARC.002",
    year: "2026",
    title: "Web 3.0 GIRL",
    keyword: "DECENTRALIZED / PERFECT-EYESIGHT",
    image: "/episodes/web3.png",
    original: "Web 3.0",
    misread: "3.0 ＝ 視力 3.0",
    result: "視力がめちゃくちゃ良い女の子",
    caption:
      "ブロックチェーン技術による自動データベース管理。第三者を介在させない通信が生むインターネットの可能性。「3.0」と聞いて、視力がめちゃくちゃ良い人をデザインした。",
    accent: "var(--color-web3)",
    edition: "EDITION OF 30 / T-SHIRT ¥6,600 (税込)",
    interpreter: "松尾陽介",
    status: "available",
  },
];

export function Archive() {
  return (
    <section id="archive" className="relative bg-paper">
      <SectionBar
        index="02"
        title="ARCHIVE — 擬人化辞典"
        hint={`ARCHIVE.DB // ${works.length} ENTRIES`}
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            時代のキーワードを「女の子」に翻訳する辞典。
            一語につき一人、30枚限定、二度と作らない。
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {works.map((w) => (
              <ArchiveCard key={w.no + w.title} work={w} />
            ))}
          </div>

          <p className="mt-10 text-center text-xs tracking-[0.2em] text-mute">
            NEXT ENTRY TBA — STAY TUNED ON{" "}
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
