"use client";

import { TallyEmbed } from "@/components/TallyEmbed";
import { TALLY_INVITE_FORM_ID, CONTACT_EMAIL } from "@/lib/env";

export function InviteForm({ token }: { token: string }) {
  const hasTally = TALLY_INVITE_FORM_ID.length > 0;

  if (!hasTally) {
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Newtique Premium Member 登録希望",
    )}&body=${encodeURIComponent(`Invite token: ${token}\n\nお名前:\nメールアドレス:`)}`;
    return (
      <div className="mt-10 border-2 border-ink rounded-md p-7 sm:p-8 bg-paper">
        <p className="font-bebas tracking-[0.3em] text-xs text-mute">
          / SIGNUP
        </p>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl">
          登録フォームは準備中です
        </h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
          以下のメールから運営にご連絡ください。お名前とメールアドレスを記載のうえ
          送信していただければ、こちらでPremium Memberの仮登録を行います。
        </p>
        <a
          href={href}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition"
        >
          {CONTACT_EMAIL} に連絡する
        </a>
      </div>
    );
  }

  return (
    <div className="mt-10 border-2 border-ink rounded-md p-5 sm:p-7 bg-paper">
      <TallyEmbed
        formId={TALLY_INVITE_FORM_ID}
        prefill={{ token }}
        title="Newtique Premium Member 登録"
        minHeight={520}
      />
    </div>
  );
}
