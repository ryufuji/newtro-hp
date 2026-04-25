const tiers = [
  {
    label: "LIGHT",
    sub: "オープン",
    badge: null as string | null,
    items: [
      { name: "T-SHIRT", price: "¥5,000" },
      { name: "HOODIE", price: "¥10,000" },
    ],
    note: "白・黒は通常販売。カラーは限定50着のみ。",
    locked: false,
  },
  {
    label: "PREMIUM",
    sub: "招待制",
    badge: "BY INVITATION ONLY",
    items: [
      { name: "T-SHIRT", price: "¥15,000" },
      { name: "HOODIE", price: "¥25,000" },
    ],
    note: "Premium Memberのみ購入可能。限定30着、売切終了。",
    locked: true,
  },
];

export function Collection() {
  return (
    <section
      id="collection"
      className="border-b-2 border-ink py-20 sm:py-28 bg-ink text-paper"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-baseline justify-between gap-6 flex-wrap">
          <h2 className="font-display text-4xl sm:text-6xl">コレクション</h2>
          <p className="font-bebas tracking-[0.3em] text-mute">/ COLLECTION</p>
        </div>
        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-mute">
          初期ラインナップはT-SHIRTとHOODIEの2型。すべてのアイテムにシリアルナンバー入りタグが付きます。
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.label}
              className={`relative border-2 rounded-md p-7 sm:p-8 ${
                tier.locked
                  ? "border-paper/30 bg-paper/5"
                  : "border-paper bg-paper text-ink"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-display text-3xl sm:text-4xl">
                  {tier.label}
                </h3>
                <p className="font-bebas tracking-[0.2em] text-xs">
                  {tier.sub}
                </p>
              </div>

              {tier.badge && (
                <p className="mt-3 inline-block border border-paper px-2 py-1 font-bebas text-[11px] tracking-[0.3em]">
                  {tier.badge}
                </p>
              )}

              <ul className="mt-6 space-y-3">
                {tier.items.map((it) => (
                  <li
                    key={it.name}
                    className={`flex justify-between border-b border-dashed pb-2 ${
                      tier.locked ? "border-paper/20" : "border-ink/30"
                    }`}
                  >
                    <span className="font-bebas tracking-[0.2em] text-sm">
                      {it.name}
                    </span>
                    <span className="font-bebas tracking-[0.05em]">
                      {it.price}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 text-xs sm:text-sm leading-relaxed ${
                  tier.locked ? "text-paper/70" : "text-ink-soft"
                }`}
              >
                {tier.note}
              </p>

              {tier.locked && (
                <p className="mt-6 text-[11px] tracking-[0.2em] text-paper/60">
                  * 招待リンクをお持ちの方は <a href="/invite" className="underline">こちら</a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
