import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

// Phase 1: 招待トークンはHMAC-SHA256で署名するステートレス方式。
// 形式: <id>.<sig>
//   id  = base64url(16 random bytes)  ≒ 22文字
//   sig = base64url(hmac_sha256(id, secret)) を先頭16文字に短縮（128bit相当）
//
// 利点: DBなしで偽造防止できる
// 制約: 一度使ったトークンを「使用済み」にできない（→ Phase 2でKV/DBに置き換え）

const SIG_LEN = 16;

function getSecret(): string {
  const s = process.env.INVITE_SECRET?.trim();
  if (!s || s.length < 16) {
    throw new Error(
      "INVITE_SECRET is missing or too short. Set a 32+ char random string in env.",
    );
  }
  return s;
}

function b64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function sign(id: string, secret: string): string {
  const mac = createHmac("sha256", secret).update(id).digest();
  return b64url(mac).slice(0, SIG_LEN);
}

export function generateInviteToken(): string {
  const secret = getSecret();
  const id = b64url(randomBytes(16));
  return `${id}.${sign(id, secret)}`;
}

export function isInviteTokenValid(token: string): boolean {
  if (typeof token !== "string") return false;
  if (!/^[A-Za-z0-9_-]{1,64}\.[A-Za-z0-9_-]{1,64}$/.test(token)) return false;

  let secret: string;
  try {
    secret = getSecret();
  } catch {
    return false;
  }

  const [id, providedSig] = token.split(".");
  const expectedSig = sign(id, secret);

  if (providedSig.length !== expectedSig.length) return false;
  return timingSafeEqual(
    Buffer.from(providedSig),
    Buffer.from(expectedSig),
  );
}
