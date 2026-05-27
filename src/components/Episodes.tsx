import Image from "next/image";

const episodes = [
  {
    no: "EPISODE 01",
    title: "Fintech",
    reading: "フィンテック",
    accent: "var(--color-fintech)",
    image: "/episodes/fintech.png",
    blurb:
      "金融×テクノロジーを組み合わせた造語。テックの部分しか松尾の頭に残らず、テック＝テクノだと解釈した結果、テクノカットの女の子が生まれた。着ているのはイエロー・マジック・オーケストラの赤い衣装。",
  },
  {
    no: "EPISODE 02",
    title: "Web 3.0",
    reading: "ウェブ3.0",
    accent: "var(--color-web3)",
    image: "/episodes/web3.png",
    blurb:
      "ブロックチェーン技術による自動データベース管理を通じた、第三者を介在させない通信が生むインターネットの可能性。「3.0」と聞いた松尾さんは“視力がめちゃくちゃ良い人”をデザインした。",
  },
];

export function Episodes() {
  return (
    <section
      id="episodes"
      className="border-b-2 border-ink py-20 sm:py-28 bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <h2 className="font-display text-4xl sm:text-6xl">エピソード</h2>
          <p className="font-bebas tracking-[0.3em] text-mute">/ EPISODES</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {episodes.map((ep) => (
            <article
              key={ep.title}
              className="border-2 border-ink rounded-md overflow-hidden bg-paper hover:shadow-[8px_8px_0_0_var(--color-ink)] transition-shadow"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden border-b-2 border-ink"
                style={{ background: ep.accent }}
              >
                <Image
                  src={ep.image}
                  alt={ep.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
                <p className="absolute top-3 left-3 font-bebas text-xs tracking-[0.3em] text-ink bg-paper border-2 border-ink px-2 py-1 rounded z-10">
                  {ep.no}
                </p>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl sm:text-4xl">{ep.title}</h3>
                  <p className="font-bebas text-xs tracking-[0.3em] text-mute">
                    {ep.reading}
                  </p>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                  {ep.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
