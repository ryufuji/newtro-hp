type Item = {
  name: string;
  price: string | null;
  status?: string | null;
  note?: string;
};

const items: Item[] = [
  {
    name: "T-SHIRT",
    price: "¥6,500",
    note: "白・黒は通常販売 / カラーは限定50着",
  },
  {
    name: "HOODIE",
    price: null,
    status: "COMING SOON",
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
        <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-paper/80">
          すべてのアイテムにシリアルナンバー入りタグが付きます。
        </p>

        <ul className="mt-12 divide-y-2 divide-paper/30 border-y-2 border-paper/30">
          {items.map((it) => (
            <li
              key={it.name}
              className="flex items-baseline justify-between gap-4 py-5 sm:py-6"
            >
              <div>
                <span className="font-bebas text-2xl sm:text-3xl tracking-[0.15em]">
                  {it.name}
                </span>
                {it.note && (
                  <p className="mt-1 text-xs sm:text-sm text-paper/70">
                    {it.note}
                  </p>
                )}
              </div>
              <span
                className={`font-bebas text-xl sm:text-2xl tracking-[0.05em] ${
                  it.status ? "text-paper/60" : ""
                }`}
              >
                {it.price ?? it.status ?? "—"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
