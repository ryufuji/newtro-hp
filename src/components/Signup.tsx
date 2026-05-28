import { LINE_FRIEND_URL, CONTACT_EMAIL } from "@/lib/env";
import { SectionBar } from "./SectionBar";

const LINE_GREEN = "#06C755";

export function Signup() {
  const hasLine = LINE_FRIEND_URL.length > 0;

  return (
    <section id="signup" className="relative">
      <SectionBar
        index="06"
        title="FOUNDING MEMBER — 発射通知を受け取る"
        hint="JOIN_LINE.SH // OFFICIAL CHANNEL"
      />
      <div
        className="relative scanlines noise px-5 sm:px-10 py-16 sm:py-24 text-ink"
        style={{ background: LINE_GREEN }}
      >
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <h2 className="font-display text-4xl sm:text-6xl">
            発射通知を受け取る
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-ink/90">
            公式LINEを友だち追加すると、ローンチ通知＋若い会員番号が届きます。
            先着順に <span className="font-bebas">#001</span> から付番。
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            {hasLine ? (
              <a
                href={LINE_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-bebas text-lg sm:text-xl tracking-[0.3em] border-2 border-ink shadow-[6px_6px_0_0_var(--color-ink)] hover:shadow-[3px_3px_0_0_var(--color-ink)] hover:translate-x-[3px] hover:translate-y-[3px] transition"
                style={{ background: "#fafafa", color: "#0a0a0a" }}
              >
                <LineIcon />
                友だち追加
              </a>
            ) : (
              <FallbackNotice
                note="公式LINEは準備中です。リリース次第こちらに掲載します。一足先に通知を受けたい場合は下記まで一報ください。"
                email={CONTACT_EMAIL}
                subject="Newtique Founding Member 登録希望"
              />
            )}

            <p className="text-[11px] tracking-wider text-ink/70">
              * 友だち追加は無料、配信は重要なお知らせのみ。いつでも解除可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="#06C755"
      aria-hidden
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function FallbackNotice({
  note,
  email,
  subject,
}: {
  note: string;
  email: string;
  subject: string;
}) {
  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return (
    <div className="mx-auto max-w-xl bg-paper border-2 border-ink rounded-md p-5 sm:p-6 text-left shadow-[6px_6px_0_0_var(--color-ink)]">
      <p className="text-sm leading-relaxed text-ink-soft">{note}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition"
      >
        {email}
      </a>
    </div>
  );
}
