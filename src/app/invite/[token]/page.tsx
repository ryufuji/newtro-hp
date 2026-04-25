import Link from "next/link";
import { Footer } from "@/components/Footer";
import { isInviteTokenValid } from "@/lib/invite";
import { InviteForm } from "./InviteForm";

export const metadata = {
  title: "Premium Member 登録 | NewTro",
  description: "招待リンクからのPremium Member登録ページ",
  robots: { index: false, follow: false },
};

type Params = Promise<{ token: string }>;

export default async function InviteTokenPage({ params }: { params: Params }) {
  const { token } = await params;
  const valid = isInviteTokenValid(token);

  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 border-b-2 border-ink py-20 sm:py-28 bg-paper">
        <div className="mx-auto max-w-2xl px-5">
          <p className="font-bebas tracking-[0.4em] text-xs sm:text-sm text-mute">
            / INVITATION
          </p>

          {valid ? (
            <>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl">
                ようこそ、Premium Memberへ。
              </h1>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-soft">
                招待リンクを確認しました。以下の情報を登録すると
                Premium Memberとしてサインアップが完了し、5/1のローンチ後に
                Premium商品の購入が可能になります。
              </p>
              <div className="mt-3 inline-block border-2 border-ink rounded-md px-3 py-1 font-bebas text-xs tracking-[0.2em]">
                INVITE TOKEN: {token.slice(0, 4)}・・・{token.slice(-4)}
              </div>

              <InviteForm token={token} />
            </>
          ) : (
            <>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl">
                招待リンクが無効です
              </h1>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-soft">
                URLが間違っているか、有効期限が切れた可能性があります。
                お受け取りのメールを再度ご確認のうえ、リンクからアクセスしてください。
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:fujimoto@omatsuri.fun?subject=NewTro%20%E6%8B%9B%E5%BE%85%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
                  className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition"
                >
                  運営に問い合わせる
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:bg-ink hover:text-paper transition"
                >
                  トップに戻る
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
