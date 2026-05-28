"use client";

import { useEffect, useState } from "react";
import { LAUNCH_LABEL_EN } from "@/lib/launch";

const SECTIONS: { id: string; label: string }[] = [
  { id: "hero", label: "NEWTIQUE.EXE" },
  { id: "story", label: "README.TXT" },
  { id: "archive", label: "ARCHIVE.DB" },
  { id: "collaborations", label: "COLLABS.DIR" },
  { id: "values", label: "VALUES.CFG" },
  { id: "signup", label: "JOIN_LINE.SH" },
];

export function StatusBar() {
  const [clock, setClock] = useState<string>("--:--:-- JST");
  const [reading, setReading] = useState<string>("NEWTIQUE.EXE");

  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setClock(`${fmt.format(new Date())} JST`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = SECTIONS[0];
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= mid) current = s;
        }
      }
      setReading(current.label);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="statusbar" aria-hidden>
      <div className="statusbar-inner">
        <span className="statusbar-cell">
          <span className="statusbar-dot" />
          ONLINE
        </span>
        <span className="statusbar-cell tabular-nums">
          READING: {reading}
        </span>
        <span className="statusbar-cell hidden sm:inline-flex">EST. 2026</span>
        <span className="statusbar-cell ml-auto hidden md:inline-flex">
          LAUNCH / {LAUNCH_LABEL_EN}
        </span>
        <span className="statusbar-cell tabular-nums">{clock}</span>
      </div>
    </div>
  );
}
