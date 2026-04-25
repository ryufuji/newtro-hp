// 2026-05-01 12:00 JST = 2026-05-01T03:00:00Z
export const LAUNCH_AT = new Date("2026-05-01T03:00:00.000Z");

export const LAUNCH_LABEL_JP = "2026.05.01 12:00 JST";
export const LAUNCH_LABEL_EN = "MAY 01, 2026 / 12:00 JST";

export type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  launched: boolean;
};

export function diffNow(target: Date = LAUNCH_AT): Remaining {
  const totalMs = target.getTime() - Date.now();
  if (totalMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0,
      launched: true,
    };
  }
  const days = Math.floor(totalMs / 86_400_000);
  const hours = Math.floor((totalMs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((totalMs % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMs % 60_000) / 1000);
  return { days, hours, minutes, seconds, totalMs, launched: false };
}
