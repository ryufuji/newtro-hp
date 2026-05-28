const TIMELINE = [
  "1995 / WINDOWS 95",
  "2004 / WEB 2.0",
  "2008 / SMARTPHONE",
  "2009 / BITCOIN",
  "2016 / FINTECH",
  "2021 / METAVERSE",
  "2022 / WEB 3.0",
  "2023 / GENERATIVE AI",
  "2026 / NEWTIQUE",
  "20?? / ???",
];

export function TimelineMarquee() {
  const loop = [...TIMELINE, ...TIMELINE];
  return (
    <div
      className="border-y-2 border-paper bg-ink text-paper py-3 overflow-hidden"
      aria-hidden
    >
      <div
        className="flex w-max items-center font-bebas text-lg sm:text-2xl tracking-[0.25em]"
        style={{ animation: "scroll-marquee 60s linear infinite" }}
      >
        {loop.map((item, i) => (
          <span key={i} className="mx-6 whitespace-nowrap">
            {item}
            <span className="mx-6 text-web3-deep">▶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
