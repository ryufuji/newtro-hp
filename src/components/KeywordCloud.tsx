"use client";

import { useEffect, useState } from "react";

const KEYWORDS = [
  "FINTECH",
  "WEB 3.0",
  "AI",
  "METAVERSE",
  "BLOCKCHAIN",
  "CYBERPUNK",
  "BIG DATA",
  "5G",
  "NEURAL NET",
  "IoT",
  "VR / AR",
  "QUANTUM",
  "DEEPFAKE",
  "CRYPTO",
  "CLOUD",
];

// keywords that may "expire" (flicker out → replaced by ???)
export function KeywordCloud() {
  const [expired, setExpired] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      const i = Math.floor(Math.random() * KEYWORDS.length);
      setExpired((prev) => {
        const next = { ...prev, [i]: !prev[i] };
        return next;
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pb-3 flex flex-wrap justify-center text-ink/70">
      {KEYWORDS.map((k, i) => (
        <span
          key={k}
          className="kw transition-all duration-300"
          style={{
            opacity: expired[i] ? 0.25 : 1,
            filter: expired[i] ? "blur(0.6px)" : undefined,
          }}
        >
          {expired[i] ? "???" : k}
        </span>
      ))}
    </div>
  );
}
