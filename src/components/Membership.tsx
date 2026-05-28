import { SectionBar } from "./SectionBar";

const tiers = [
  {
    name: "MEMBER",
    sub: "公式LINEで登録、誰でも",
    bullets: [
      "一般ライン全色を購入可能（限定カラー含む）",
      "新エピソード・ドロップを先行通知",
      "登録順に若い会員番号を付与（タグ番号と連動）",
    ],
    cta: { label: "公式LINEで登録", href: "#signup" },
    open: true,
  },
  {
    name: "PREMIUM MEMBER",
    sub: "招待制",
    bullets: [
      "Premiumブランド（限定30着）を購入可能",
      "ドロップを最速で先行購入",
      "限定エピソード・コンテンツへのアクセス",
    ],
    cta: { label: "招待リンクをお持ちの方", href: "/invite" },
    open: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative bg-paper">
      <SectionBar
        index="05"
        title="MEMBERSHIP — 会員制度"
        hint="MEMBERSHIP.DAT // 2 TIERS"
      />
      <div className="relative dot-grid noise px-5 sm:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl relative z-10">
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-ink-soft">
            2階層の会員制。誰でも「Member」になれます。
            「Premium Member」は<strong>招待制</strong>。
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tiers.map((t) => (
              <article
                key={t.name}
                className={`relative border-2 rounded-md p-7 sm:p-8 ${
                  t.open
                    ? "border-ink bg-paper"
                    : "border-ink bg-ink text-paper"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="font-display text-2xl sm:text-3xl">
                    {t.name}
                  </h3>
                  <p className="font-bebas tracking-[0.2em] text-xs">{t.sub}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className={`mt-[7px] inline-block h-1.5 w-1.5 flex-none rounded-full ${
                          t.open ? "bg-ink" : "bg-paper"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.cta.href}
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wider transition ${
                    t.open
                      ? "bg-ink text-paper hover:opacity-90"
                      : "border border-paper hover:bg-paper hover:text-ink"
                  }`}
                >
                  {t.cta.label} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
