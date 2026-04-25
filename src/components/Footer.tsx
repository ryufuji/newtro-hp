import { LAUNCH_LABEL_JP } from "@/lib/launch";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/env";
import { Rocket } from "./Rocket";

const sns = [
  { label: "Instagram", href: INSTAGRAM_URL, handle: "@newtro8" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Rocket className="w-10" hover={false} />
              <p className="font-display text-3xl">NewTro</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-paper/80">
              Newなモノと Retroなモノが共存する時代を表現するブランド。
              <br />
              Produced by OMATSURI.
            </p>
            <p className="mt-6 font-bebas tracking-[0.3em] text-xs text-paper/60">
              LAUNCH / {LAUNCH_LABEL_JP}
            </p>
          </div>

          <div>
            <p className="font-bebas tracking-[0.3em] text-xs text-paper/60">
              / NAVIGATE
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="hover:underline" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#concept">
                  Concept
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#episodes">
                  Episodes
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#collection">
                  Collection
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#membership">
                  Membership
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#signup">
                  Founding Member登録
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bebas tracking-[0.3em] text-xs text-paper/60">
              / CONTACT
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {sns.map((s) => (
                <li key={s.label}>
                  <a
                    className="hover:underline"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label} {s.handle}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="hover:underline break-all"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/invite">
                  招待リンクをお持ちの方
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-paper/20 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wider text-paper/60">
          <p>© {new Date().getFullYear()} NewTro / OMATSURI</p>
          <p className="font-bebas tracking-[0.3em]">NEW × RETRO</p>
        </div>
      </div>
    </footer>
  );
}
