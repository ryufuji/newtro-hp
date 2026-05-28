"use client";

import { useEffect, useState } from "react";
import { LAUNCH_LABEL_EN } from "@/lib/launch";

export function StatusBar() {
  const [clock, setClock] = useState<string>("--:--:-- JST");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const tz = "Asia/Tokyo";
      const fmt = new Intl.DateTimeFormat("en-GB", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setClock(`${fmt.format(now)} JST`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="statusbar" aria-hidden>
      <div className="statusbar-inner">
        <span className="statusbar-cell">
          <span className="statusbar-dot" />
          ONLINE
        </span>
        <span className="statusbar-cell hidden sm:inline-flex">
          NEWTIQUE · OMATSURI
        </span>
        <span className="statusbar-cell">EST. 2026</span>
        <span className="statusbar-cell ml-auto hidden md:inline-flex">
          LAUNCH / {LAUNCH_LABEL_EN}
        </span>
        <span className="statusbar-cell tabular-nums">{clock}</span>
      </div>
    </div>
  );
}
