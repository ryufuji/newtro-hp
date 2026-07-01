"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { INSTAGRAM_URL, SHOP_URL } from "@/lib/env";

const NAV = [
  { label: "Story", href: "#story" },
  { label: "Archive", href: "#archive" },
  { label: "Interpreter", href: "#interpreter" },
  { label: "Guests", href: "#collaborations" },
  { label: "Values", href: "#values" },
  { label: "Drops", href: "#drops" },
];

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b-2 border-ink shadow-sm"
          : "bg-paper/70 backdrop-blur-sm border-b border-ink/40"
      }`}
    >
      {/* fake browser chrome top strip */}
      <div className="border-b border-ink/30 bg-ink/5">
        <div className="mx-auto max-w-6xl px-3 sm:px-5 h-7 sm:h-8 flex items-center gap-3">
          <div className="win-dots">
            <span style={{ background: "#ff5f56" }} />
            <span style={{ background: "#ffbd2e" }} />
            <span style={{ background: "#27c93f" }} />
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[10px] font-bebas tracking-[0.2em] text-ink/50">
            <span>◀</span>
            <span>▶</span>
            <span className="ml-1">⟳</span>
          </div>
          <div className="flex-1 mx-2 sm:mx-3 h-4 sm:h-5 px-2 rounded-sm bg-paper border border-ink/30 flex items-center font-bebas text-[9px] sm:text-[10px] tracking-[0.15em] text-ink/70 truncate">
            <span className="opacity-50 mr-1">🔒</span>
            https://newtique.jp/
          </div>
          <span className="hidden sm:inline font-bebas text-[10px] tracking-[0.2em] text-ink/50">
            ⋯
          </span>
        </div>
      </div>

      {/* main nav */}
      <div className="mx-auto max-w-6xl px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between gap-3">
        <a
          href="#hero"
          className="flex items-center"
          aria-label="Newtique home"
        >
          <Image
            src="/logo-header.png"
            alt="Newtique"
            width={988}
            height={280}
            priority
            className="h-9 sm:h-11 w-auto"
            sizes="(max-width: 640px) 160px, 220px"
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-bebas tracking-[0.2em] text-ink hover:text-fintech transition"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-ink hover:bg-ink hover:text-paper transition"
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-4 sm:px-5 h-10 text-xs sm:text-sm font-bebas tracking-[0.2em] hover:opacity-90 transition"
          >
            SHOP
          </a>
          <a
            href="#signup"
            className="hidden sm:inline-flex items-center justify-center rounded-full border-2 border-ink px-4 sm:px-5 h-10 text-xs sm:text-sm font-bebas tracking-[0.2em] hover:bg-ink hover:text-paper transition"
          >
            JOIN
          </a>
        </div>
      </div>
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
