import { LAUNCH_LABEL_JP } from "@/lib/launch";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/env";
import { Rocket } from "./Rocket";
import { SectionBar } from "./SectionBar";

const sns = [
  { label: "Instagram", href: INSTAGRAM_URL, handle: "@NEWTIQUE0701" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-paper">
      <SectionBar
        index="08"
        title="FOOTER · CONTACT"
        hint={`_FOOTER.SYS // LAUNCH ${LAUNCH_LABEL_JP}`}
      />
      <div className="relative scanlines noise px-5 sm:px-10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl relative z-10">
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
                  <a className="hover:underline" href="#interpreter">
                    The Interpreter
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#collaborations">
                    Guest Interpreters
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#values">
                    Values
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#drops">
                    Drop Schedule
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
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-paper/20 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[11px] tracking-wider text-paper/60">
            <p>© {new Date().getFullYear()} Newtique / OMATSURI</p>
            <p className="font-bebas tracking-[0.3em]">EST. 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
