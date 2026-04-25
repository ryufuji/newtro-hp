/**
 * 招待トークン生成スクリプト
 *
 * 使い方:
 *   INVITE_SECRET=xxx npm run gen:invite -- --count 30
 *   INVITE_SECRET=xxx npm run gen:invite -- --count 5 --base-url https://newtro.jp
 *
 * 出力:
 *   .invites/YYYY-MM-DD-HHmmss.csv に「token,url,issued_at」を追記。
 *   標準出力にも全リンクをコピーペースト用に表示。
 */

import { mkdir, writeFile, appendFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { generateInviteToken } from "../src/lib/invite.ts";

type Args = {
  count: number;
  baseUrl: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { count: 1, baseUrl: "https://newtro.jp" };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--count" || a === "-c") {
      args.count = Math.max(1, Math.min(500, Number(argv[++i] ?? "1")));
    } else if (a === "--base-url" || a === "-u") {
      args.baseUrl = (argv[++i] ?? args.baseUrl).replace(/\/+$/, "");
    } else if (a === "--help" || a === "-h") {
      console.log(
        "Usage: npm run gen:invite -- --count <n> [--base-url <url>]",
      );
      process.exit(0);
    }
  }
  return args;
}

async function main() {
  const { count, baseUrl } = parseArgs(process.argv.slice(2));

  if (!process.env.INVITE_SECRET) {
    console.error(
      "ERROR: INVITE_SECRET is not set. Generate with `openssl rand -hex 32`.",
    );
    process.exit(1);
  }

  const dir = path.join(process.cwd(), ".invites");
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  const stamp = new Date()
    .toISOString()
    .replace(/[:.]/g, "")
    .replace("T", "-")
    .slice(0, 15);
  const file = path.join(dir, `${stamp}.csv`);
  await writeFile(file, "token,url,issued_at\n", "utf8");

  console.log(`\n# Generated ${count} invitation${count > 1 ? "s" : ""}:\n`);
  for (let i = 0; i < count; i++) {
    const token = generateInviteToken();
    const url = `${baseUrl}/invite/${token}`;
    const row = `${token},${url},${new Date().toISOString()}\n`;
    await appendFile(file, row, "utf8");
    console.log(`${(i + 1).toString().padStart(3, "0")}.  ${url}`);
  }

  console.log(`\nSaved to: ${path.relative(process.cwd(), file)}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
