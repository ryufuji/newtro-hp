"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/lib/useInView";

type Props = {
  index: string;
  title: string;
  hint?: string;
};

export function SectionBar({ index, title, hint }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.6 });
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    setTyped("");
    const id = setInterval(() => {
      i += 1;
      setTyped(title.slice(0, i));
      if (i >= title.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView, title]);

  return (
    <div ref={ref} className={`section-bar ${inView ? "crt-on" : ""}`}>
      <span className="opacity-70">[{index}]</span>
      <span className={inView && typed.length < title.length ? "caret" : ""}>
        {inView ? typed : title}
      </span>
      {hint && <span className="ml-auto opacity-70 truncate">{hint}</span>}
    </div>
  );
}
