import { LAUNCH_LABEL_EN } from "@/lib/launch";

const items = [
  "NEWTIQUE",
  "A DICTIONARY OF PERSONIFIED ERAS",
  "ARC.001 / FINTECH GIRL",
  "ARC.002 / WEB 3.0 GIRL",
  "EDITION OF 30 / NEVER REPRINTED",
  "INTERPRETED BY YOSUKE MATSUO",
  LAUNCH_LABEL_EN,
  "EST. 2026",
  "BY OMATSURI",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="border-y-2 border-ink bg-paper py-4 overflow-hidden">
      <div
        className="flex w-max font-bebas text-2xl sm:text-3xl tracking-[0.3em] text-ink"
        style={{
          animation: "scroll-marquee 32s linear infinite",
        }}
      >
        {loop.map((item, i) => (
          <span key={i} className="mx-8 whitespace-nowrap">
            {item} <span className="mx-6 text-fintech">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
