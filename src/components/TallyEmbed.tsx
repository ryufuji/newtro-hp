"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

type Props = {
  formId: string;
  prefill?: Record<string, string>;
  className?: string;
  title?: string;
  minHeight?: number;
};

export function TallyEmbed({
  formId,
  prefill,
  className = "",
  title = "NewTro form",
  minHeight = 320,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function loadEmbeds() {
      window.Tally?.loadEmbeds();
    }

    if (window.Tally) {
      loadEmbeds();
      return;
    }

    const existing = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]',
    ) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", loadEmbeds, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }, [formId]);

  const params = new URLSearchParams({
    alignLeft: "1",
    hideTitle: "1",
    transparentBackground: "1",
    dynamicHeight: "1",
    ...prefill,
  });

  return (
    <div ref={containerRef} className={className}>
      <iframe
        data-tally-src={`https://tally.so/embed/${formId}?${params.toString()}`}
        loading="lazy"
        width="100%"
        height={minHeight}
        title={title}
        style={{ border: 0, width: "100%", minHeight }}
      />
    </div>
  );
}
