import { TallyEmbed } from "./TallyEmbed";
import { TALLY_SIGNUP_FORM_ID, CONTACT_EMAIL } from "@/lib/env";

export function Signup() {
  const hasTally = TALLY_SIGNUP_FORM_ID.length > 0;

  return (
    <section
      id="signup"
      className="border-b-2 border-ink py-20 sm:py-28 bg-fintech text-ink"
    >
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-bebas tracking-[0.4em] text-xs sm:text-sm">
          / FOUNDING MEMBER
        </p>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl">
          発射通知を受け取る
        </h2>
        <p className="mt-5 text-sm sm:text-base leading-relaxed">
          メールアドレスを登録するとオープン通知に加えて、若い会員番号を獲得できます。
          先着順に <span className="font-bebas">#001</span> から付番。
        </p>

        <div className="mt-10 mx-auto max-w-xl bg-paper border-2 border-ink rounded-md p-5 sm:p-7 text-left shadow-[6px_6px_0_0_var(--color-ink)]">
          {hasTally ? (
            <TallyEmbed
              formId={TALLY_SIGNUP_FORM_ID}
              title="Newtique Founding Member 登録"
              minHeight={280}
            />
          ) : (
            <FallbackNotice
              note="メール登録フォームは準備中です。下記までご一報ください。"
              email={CONTACT_EMAIL}
              subject="Newtique Founding Member 登録希望"
            />
          )}
        </div>

        <p className="mt-6 text-[11px] tracking-wider text-ink/70">
          * 登録は無料、配信は重要なお知らせのみ。いつでも解除可能です。
        </p>
      </div>
    </section>
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
    <div className="text-sm sm:text-base leading-relaxed text-ink-soft">
      <p>{note}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition"
      >
        {email}
      </a>
    </div>
  );
}
