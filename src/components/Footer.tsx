import { LAUNCH_LABEL_JP } from "@/lib/launch";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/env";
import { Rocket } from "./Rocket";
import { WinFrame } from "./WinFrame";

const sns = [
  { label: "Instagram", href: INSTAGRAM_URL, handle: "@newtro8" },
];

export function Footer() {
  return (
    <footer className="bg-paper text-ink relative isolate py-16 sm:py-20">
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <WinFrame
          title="_FOOTER.SYS"
          hint={`// LAUNCH ${LAUNCH_LABEL_JP}`}
          variant="dark"
        >
          <div className="px-6 sm:px-10 py-12 sm:py-14">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-10" hover={false} />
                  <p className="font-wordmark text-3xl text-paper">Newtique</p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-paper/70">
                  Produced by OMATSURI.
                </p>
                <p className="mt-3 font-bebas tracking-[0.3em] text-xs text-paper/60">
                  LAUNCH / {LAUNCH_LABEL_JP}
                </p>
              </div>

              <div>
                <p className="font-bebas tracking-[0.3em] text-xs text-paper/60">
                  / NAVIGATE
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <a className="hover:underline" href="#story">
                      Story
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#archive">
                      Archive
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#collaborations">
                      Collaborations
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#membership">
                      Membership
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#signup">
                      Join via LINE
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

            <div className="mt-12 border-t border-paper/20 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wider text-paper/60">
              <p>© {new Date().getFullYear()} Newtique / OMATSURI</p>
              <p className="font-bebas tracking-[0.3em]">EST. 2026</p>
            </div>
          </div>
        </WinFrame>
      </div>
    </footer>
  );
}
