"use client";

import Image from "next/image";

const characters = [
  { src: "/episodes/fintech.png", alt: "Fintech" },
  { src: "/episodes/web3.png", alt: "Web 3.0" },
  { src: "/episodes/koikechan.png", alt: "Koike-chan" },
  { src: "/episodes/hokusai.png", alt: "Hokusai" },
  { src: "/episodes/pop.png", alt: "Pop" },
  { src: "/episodes/santa.png", alt: "Santa" },
  { src: "/episodes/albatross.png", alt: "Albatross" },
];

// 同じ配列を 2 回つなげて translateX(-50%) で 1 ループぶんを継ぎ目なく繰り返す。
const loop = [...characters, ...characters];

export function CharacterShowcase() {
  return (
    <div
      className="relative w-full overflow-hidden py-4 group"
      aria-label="Newtique character parade"
    >
      <div
        className="flex w-max items-center gap-10 sm:gap-16 lg:gap-20 will-change-transform"
        style={{
          animation: "scroll-marquee 90s linear infinite",
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState =
            "running";
        }}
      >
        {loop.map((c, i) => (
          <div
            key={`${c.src}-${i}`}
            className="relative flex-none h-72 sm:h-[26rem] lg:h-[32rem] aspect-square"
          >
            <Image
              src={c.src}
              alt={c.alt}
              fill
              priority={i < 4}
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 416px, 512px"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      {/* edge fade for elegance */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-paper to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-paper to-transparent"
      />
    </div>
  );
}
