"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  {
    title: "SYSTEM MESSAGE",
    body: "この最先端は、まもなく過去になります。",
    code: "0x2026",
  },
  {
    title: "MEMORY NOTICE",
    body: "流行は揮発性メモリです。保存できません。",
    code: "0xFADE",
  },
  {
    title: "ARCHIVE.SYS",
    body: "新しいモノを記録中… 古くなる前に。",
    code: "0x0001",
  },
];

export function SystemPopup() {
  const [msg, setMsg] = useState<(typeof MESSAGES)[number] | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let timer: number;
    const schedule = () => {
      // first appearance 60-120s in, then every 4-7 minutes
      const delay = 60000 + Math.random() * 60000;
      timer = window.setTimeout(() => {
        setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      }, delay);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, []);

  // auto-reschedule after dismiss
  useEffect(() => {
    if (msg) return;
    let timer: number;
    const id = window.setTimeout(() => {
      // 4-7 min between subsequent appearances
      const t = 240000 + Math.random() * 180000;
      timer = window.setTimeout(() => {
        setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      }, t);
    }, 1000);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(timer);
    };
  }, [msg]);

  if (!msg) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none">
      <div className="win-frame max-w-xs sm:max-w-sm w-[90%] pointer-events-auto crt-on">
        <div className="win-titlebar">
          <div className="win-dots">
            <span style={{ background: "#ff5f56" }} />
            <span style={{ background: "#ffbd2e" }} />
            <span style={{ background: "#27c93f" }} />
          </div>
          <span>{msg.title}</span>
          <span className="ml-auto opacity-70">{msg.code}</span>
        </div>
        <div className="scanlines noise px-5 py-6 bg-paper">
          <div className="flex items-start gap-3">
            <span className="font-display text-2xl leading-none">!</span>
            <p className="font-display text-base sm:text-lg leading-relaxed">
              {msg.body}
            </p>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={() => setMsg(null)}
              className="border-2 border-ink px-5 py-1.5 font-bebas tracking-[0.2em] text-xs hover:bg-ink hover:text-paper transition"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
