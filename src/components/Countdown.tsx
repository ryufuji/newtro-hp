"use client";

import { useEffect, useState } from "react";
import { diffNow, LAUNCH_AT, type Remaining } from "@/lib/launch";

const initial: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  totalMs: 0,
  launched: false,
};

const pad = (n: number, len = 2) => n.toString().padStart(len, "0");

export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining>(initial);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRemaining(diffNow(LAUNCH_AT));
    const id = setInterval(() => {
      setRemaining(diffNow(LAUNCH_AT));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto opacity-0">
        {["DAYS", "HOURS", "MIN", "SEC"].map((l) => (
          <Cell key={l} label={l} value="00" />
        ))}
      </div>
    );
  }

  if (remaining.launched) {
    return (
      <div className="text-center">
        <p className="font-display text-4xl sm:text-6xl">LAUNCHED</p>
        <p className="mt-3 text-sm tracking-widest text-mute">
          NEWTRO IS NOW LIVE
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      <Cell label="DAYS" value={pad(remaining.days, 2)} />
      <Cell label="HOURS" value={pad(remaining.hours)} />
      <Cell label="MIN" value={pad(remaining.minutes)} />
      <Cell label="SEC" value={pad(remaining.seconds)} />
    </div>
  );
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-ink bg-paper rounded-md px-2 py-3 sm:px-4 sm:py-5 text-center shadow-[4px_4px_0_0_var(--color-ink)]">
      <div className="font-bebas text-4xl sm:text-6xl leading-none tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] text-mute">
        {label}
      </div>
    </div>
  );
}
