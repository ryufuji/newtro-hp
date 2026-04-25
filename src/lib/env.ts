// クライアントとサーバ両方から参照する環境変数の窓口。
// `NEXT_PUBLIC_` 接頭辞付きはバンドルに含まれて公開される点に注意。

export const TALLY_SIGNUP_FORM_ID =
  process.env.NEXT_PUBLIC_TALLY_SIGNUP_FORM_ID?.trim() || "";

export const TALLY_INVITE_FORM_ID =
  process.env.NEXT_PUBLIC_TALLY_INVITE_FORM_ID?.trim() || "";

export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
  "https://instagram.com/";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://newtro.jp";

export const CONTACT_EMAIL = "fujimoto@omatsuri.fun";
