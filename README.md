# Newtique — Pre-Launch Site

NewなモノとRetroなモノが共存する時代を表現するアパレルブランド。
Phase 1（カウントダウンサイト）の実装。

- Launch: **2026-05-01 12:00 JST**
- Stack: Next.js 16 (App Router) / TypeScript / Tailwind CSS v4
- Hosting: Vercel
- Forms: Tally (iframe embed)

---

## ローカル開発

```bash
npm install
cp .env.local.example .env.local   # 値を埋める
npm run dev                        # http://localhost:3000
```

ビルド確認:

```bash
npm run build
```

---

## 環境変数

`.env.local` に以下を設定（または Vercelプロジェクトの Environment Variables に登録）。

| Key | 用途 | 公開 |
|---|---|---|
| `NEXT_PUBLIC_TALLY_SIGNUP_FORM_ID` | Founding Member登録フォームのTally Form ID | クライアント |
| `NEXT_PUBLIC_TALLY_INVITE_FORM_ID` | Premium Member招待フォームのTally Form ID | クライアント |
| `NEXT_PUBLIC_INSTAGRAM_URL` | InstagramプロフィールURL | クライアント |
| `NEXT_PUBLIC_SITE_URL` | サイトの公開URL（OGP用） | クライアント |
| `INVITE_SECRET` | 招待トークンHMAC署名鍵（32文字以上） | サーバ専用 |

### Tally Form ID の取得方法

1. [tally.so](https://tally.so) でアカウント作成
2. 「Founding Member 登録」用と「Premium Member 招待登録」用の2つのフォームを作成
3. 招待用フォームには **Hidden field** で `token` を追加（リファラから自動取得）
4. フォームのURL末尾セグメント（例: `https://tally.so/r/wzPgN1` → `wzPgN1`）を環境変数に貼り付け

### 招待トークンの発行

```bash
# 任意の数だけ招待リンクを発行
INVITE_SECRET=xxxx npm run gen:invite -- --count 30
```

詳しくは `scripts/gen-invite.ts` を参照。

---

## Vercelデプロイ手順

### 初回デプロイ

1. [vercel.com/new](https://vercel.com/new) でリポジトリを接続（Gitホスティング先にpush済みであること）
2. **Framework**: Next.js（自動検出）
3. **Environment Variables** に上記の値を登録
4. Deploy → プレビューURLが発行される

### CLIで直接デプロイする場合

```bash
npm i -g vercel
vercel login
vercel                  # プレビュー
vercel --prod           # 本番
```

### 独自ドメイン (newtro.jp) の接続

Vercelプロジェクトの Settings → Domains で `newtro.jp` を追加し、表示されるDNSレコードを設定。

---

## Phase 1 でカバーしている範囲

- `/` トップ（カウントダウン、ブランドメッセージ、コンセプト、エピソード、コレクション、Values、Membership、Signup、Footer）
- `/invite` 招待リンク受付の案内
- `/invite/[token]` 招待トークン検証 → Premium Member登録フォーム

## Phase 2 へ持ち越す項目

- Shopify連携（EC本体）
- Premium Memberタグ自動付与
- マイページ（会員番号・購入履歴・招待枠）
- 招待トークンの一回利用化（KV/DB必須）
- Resend移行（`fujimoto@omatsuri.fun` から自動送信）
