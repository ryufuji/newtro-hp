"use client";

import { useState } from "react";
import { SectionBar } from "./SectionBar";

export function Story() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="story" className="relative bg-ink text-paper">
      <SectionBar
        index="01"
        title="STORY · CONCEPT"
        hint="README.TXT // LAST MODIFIED 26.07.01"
      />
      <div className="relative dot-grid-dark scanlines noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl">
            <span className="glitch" data-text="ストーリー">
              ストーリー
            </span>
          </h2>

          <div className="mt-10 space-y-8 text-base sm:text-lg leading-[1.9]">
            <p className="font-display text-2xl sm:text-3xl text-paper">
              テクノロジーを、女の子にする。
            </p>
            <p>
              Newtique は、時代のキーワードを
              <span className="text-fintech">女の子に擬人化</span>
              していくアパレルブランド。
              <br />
              用語が消える前に、姿を残します。
            </p>
            <p className="text-paper/80">
              一語につき、一人。
              <br />
              フィンテック。Web 3.0。AI。やがて消える、いまの言葉たち。
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
                  <strong className="text-paper">Newtique（ニューティーク）</strong>は、
                  <br />
                  “New（新しい）” と “Antique（古い）” を掛け合わせた造語。
                </p>
                <p>
                  ここでの <em className="text-web3-deep not-italic">Antique</em> は、
                  <br />
                  日本のサブカルチャーが古来から続けてきた
                  <em className="text-fintech not-italic">「擬人化」</em>の伝統を指します。
                </p>
                <p>
                  OS-tan、艦これ、ウマ娘、けものフレンズ、ヘタリア。
                  <br />
                  日本はあらゆるものを女の子にしてきた。
                </p>
                <p>
                  Newtique は、その文化をいまの
                  <em className="text-fintech not-italic">テクノロジー用語</em>
                  に向ける実験です。
                </p>
                <p className="font-display text-lg sm:text-xl text-paper">
                  時代の擬人化辞典。
                  <br />
                  用語を女の子に変換する、もう一つの言語。
                </p>
                <p>
                  解釈の歪みは、誤りではなく
                  <em className="text-web3-deep not-italic">もうひとつの正解</em>。
                  <br />
                  フィンテック → テクノカット。Web 3.0 → 視力 2.0。
                  <br />
                  キーワードがひとり、誰かの頭の中を経由してデザインに変わる。
                </p>
                <p>
                  その<em className="text-fintech not-italic">「誰かの頭」</em>を
                  Newtique では <strong className="text-paper">The Interpreter（解釈者）</strong> と呼びます。
                  <br />
                  現在の Interpreter は <strong className="text-paper">松尾陽介</strong>。
                  <br />
                  ゲスト解釈者によるコラボレーション・ドロップも順次発表予定。
                </p>
                <p>
                  すべての作品は
                  <em className="text-web3-deep not-italic">
                    「一語につき一人」「シリアルナンバー入り」「二度と作らない」
                  </em>
                  。
                  <br />
                  擬人化辞典は、そろえる楽しみのために作られます。
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
      </div>
    </section>
  );
}
