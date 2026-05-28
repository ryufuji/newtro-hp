"use client";

import { useState } from "react";
import { WinFrame } from "./WinFrame";

export function Story() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="story"
      className="relative isolate border-b-2 border-ink py-20 sm:py-28 bg-paper overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <WinFrame
          title="README.TXT — STORY · CONCEPT"
          hint="// LAST MODIFIED 26.07.01"
          variant="dark"
        >
          <div className="px-6 sm:px-10 py-10 sm:py-14">
            <div className="flex items-baseline justify-between gap-6 flex-wrap">
              <h2 className="font-display text-3xl sm:text-5xl text-paper">
                <span className="glitch" data-text="ストーリー">
                  ストーリー
                </span>
              </h2>
              <p className="font-bebas tracking-[0.3em] text-paper/60">
                / STORY · CONCEPT
              </p>
            </div>

            <div className="mt-10 space-y-6 text-base sm:text-lg leading-[1.9] text-paper">
              <p>
                NewTiqueは、
                <br />
                テクノロジーとレトロポップを掛け合わせたアパレルブランドです。
              </p>
              <p className="text-fintech">
                “最先端”が一瞬で過去になる時代の切なさを、
                <br />
                どこか懐かしい女の子たちと共に表現しています。
              </p>
            </div>

            <div
              className={`grid transition-all duration-500 ease-out ${
                expanded
                  ? "grid-rows-[1fr] mt-12 opacity-100"
                  : "grid-rows-[0fr] mt-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t-2 border-paper/30 pt-10 space-y-7 text-sm sm:text-base leading-[2] text-paper/85">
                  <p>
                    <strong className="text-paper">NewTique（ニューティーク）</strong>は、
                    <br />
                    “New” と “Antique” を掛け合わせた造語から生まれた、レトロポップを基調とするアパレルブランドです。
                  </p>
                  <p>
                    ブランドの中心にあるのは、
                    <br />
                    「テクノロジー」と「女の子」という二つのモチーフ。
                  </p>
                  <p>
                    AI、インターネット、デジタルカルチャー、未来的なキーワード。
                    <br />
                    本来“最先端”として扱われるそれらは、驚くほどの速さで古くなっていきます。
                  </p>
                  <p>
                    NewTiqueは、その
                    <em className="text-fintech not-italic">
                      “最先端がすぐ過去になる瞬間”
                    </em>
                    に宿る、
                    <br />
                    どこか切なく、でも愛おしい感覚をデザインとして表現しています。
                  </p>
                  <p>
                    描かれるのは、未来を感じさせるテクノロジーと、
                    <br />
                    どこか懐かしさを纏った女の子たち。
                  </p>
                  <p className="font-display text-lg sm:text-xl text-paper">
                    新しいはずなのに懐かしい。
                    <br />
                    古いはずなのに新しく見える。
                  </p>
                  <p>
                    流行と陳腐化を繰り返す現代において、
                    <br />
                    「消費されて終わるもの」ではなく、
                    <br />
                    時代そのものを纏うための服を目指しています。
                  </p>
                  <p>
                    NewTiqueは、
                    <br />
                    <em className="text-web3-deep not-italic">
                      “廃れていくこと”さえも美しさとして捉え
                    </em>
                    、
                    <br />
                    移り変わるカルチャーの儚さを、レトロポップという形で残していくブランドです。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2 rounded-full border-2 border-paper px-6 py-3 font-bebas tracking-[0.3em] text-xs sm:text-sm hover:bg-paper hover:text-ink transition"
              >
                {expanded ? "閉じる ▲" : "もっと読む ▼"}
              </button>
            </div>
          </div>
        </WinFrame>
      </div>
    </section>
  );
}
