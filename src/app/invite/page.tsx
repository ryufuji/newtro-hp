import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "招待コードを入力 | Newtique",
  description: "Premium Memberの招待リンクをお持ちの方はこちら。",
  robots: { index: false, follow: false },
};

export default function InviteLandingPage() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 border-b-2 border-ink py-24 sm:py-32 bg-paper">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="font-bebas tracking-[0.4em] text-xs sm:text-sm text-mute">
            / INVITATION
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl">
            招待リンクを開いてください
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-ink-soft">
            Premium Memberの登録は、運営からお送りした
            <strong>個別の招待リンク</strong>からのみ可能です。
            お受け取りのメールに記載されたURLをクリックしてアクセスしてください。
          </p>
          <p className="mt-6 text-xs sm:text-sm leading-relaxed text-ink-soft">
            招待リンクが見当たらない、期限が切れたなどの場合は
            運営までお問い合わせください。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:fujimoto@omatsuri.fun?subject=Newtique%20%E6%8B%9B%E5%BE%85%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wider hover:opacity-90 transition w-full sm:w-auto"
            >
              運営に問い合わせる
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-ink px-7 py-3 text-sm font-medium tracking-wider hover:bg-ink hover:text-paper transition w-full sm:w-auto"
            >
              トップに戻る
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
