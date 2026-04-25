const items = [
  {
    n: "01",
    title: "二人の真逆の感覚",
    body:
      "OMATSURI創業者の松尾陽介と藤本隆太郎。古いものを愛する松尾と、新しいものを追う藤本。真逆の感覚を持つ二人だからこそ、時代の境目を切り取れる。",
  },
  {
    n: "02",
    title: "時代のキーワード × 解釈",
    body:
      "藤本が時代の最先端のキーワードを松尾に渡す。松尾はそれを彼独自の理解と誤読で噛み砕き、ひとつのデザインに落とし込む。",
  },
  {
    n: "03",
    title: "かわいい女の子で表現する",
    body:
      "テクノロジーの言葉は冷たく、難しい。それを「かわいい女の子」のキャラクターに翻訳することで、誰もが手に取れるアパレルへ。",
  },
];

export function Concept() {
  return (
    <section
      id="concept"
      className="border-b-2 border-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <h2 className="font-display text-4xl sm:text-6xl">コンセプト</h2>
          <p className="font-bebas tracking-[0.3em] text-mute">/ CONCEPT</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.n}
              className="border-2 border-ink rounded-md p-6 sm:p-7 bg-paper hover:shadow-[6px_6px_0_0_var(--color-ink)] transition-shadow"
            >
              <p className="font-bebas text-2xl text-ink-soft">{item.n}</p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
