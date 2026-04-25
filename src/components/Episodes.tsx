const episodes = [
  {
    no: "EPISODE 01",
    title: "Fintech",
    reading: "フィンテック",
    accent: "var(--color-fintech)",
    accentText: "text-fintech",
    accentBg: "bg-fintech",
    blurb:
      "金融×テクノロジーを組み合わせた造語。テックの部分しか松尾の頭に残らず、テック=テクノだと解釈した結果、テクノカットの女の子が生まれた。着ているのはYMOのあの赤い衣装。",
    pattern: "fintech",
  },
  {
    no: "EPISODE 02",
    title: "Web3.0",
    reading: "ウェブ3.0",
    accent: "var(--color-web3)",
    accentText: "text-web3-deep",
    accentBg: "bg-web3",
    blurb:
      "ブロックチェーン技術による自動データベース管理を通じた、第三者を介在させない通信が生むインターネットの可能性。「3.0」と聞いた松尾さんは“視力がめちゃくちゃ良い人”をデザインした。",
    pattern: "web3",
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
        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
          時代のキーワードがひとつずつ「かわいい女の子」に翻訳されていく。
          ローンチ時点で2エピソード公開、以降も継続的に追加予定。
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {episodes.map((ep) => (
            <article
              key={ep.title}
              className="group border-2 border-ink rounded-md overflow-hidden bg-paper"
            >
              <div
                className="relative h-64 sm:h-80 overflow-hidden"
                style={{ background: ep.accent }}
              >
                <PatternBackdrop variant={ep.pattern} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-display text-5xl sm:text-7xl text-paper drop-shadow-[3px_3px_0_var(--color-ink)]">
                    {ep.title}
                  </p>
                </div>
                <p className="absolute top-3 left-3 font-bebas text-xs tracking-[0.3em] text-ink bg-paper border-2 border-ink px-2 py-1 rounded">
                  {ep.no}
                </p>
                <span className="absolute top-3 right-3 inline-flex items-center text-[10px] font-bebas tracking-[0.3em] text-paper bg-ink px-2 py-1 rounded">
                  COMING SOON
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="font-bebas text-xs tracking-[0.3em] text-mute">
                  {ep.reading}
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
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

function PatternBackdrop({ variant }: { variant: string }) {
  if (variant === "web3") {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern
            id="dots-stars"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="3" fill="#0a0a0a" />
            <polygon
              points="30,4 33,12 41,12 35,17 37,25 30,21 23,25 25,17 19,12 27,12"
              fill="#0a0a0a"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#dots-stars)" />
      </svg>
    );
  }
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-25"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern
          id="lines"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            stroke="#0a0a0a"
            strokeWidth="2"
          />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#lines)" />
    </svg>
  );
}
