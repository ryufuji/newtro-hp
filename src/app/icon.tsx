import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="6" x2="100" y2="34" stroke="#fafafa" strokeWidth="8" />
          <circle cx="100" cy="6" r="6" fill="#fafafa" />
          <path d="M75 50 Q100 24 125 50 L125 88 L75 88 Z" stroke="#fafafa" strokeWidth="8" fill="none" />
          <path d="M70 88 L130 88 L130 200 L70 200 Z" stroke="#fafafa" strokeWidth="8" fill="none" />
          <circle cx="100" cy="120" r="22" stroke="#fafafa" strokeWidth="8" fill="none" />
          <path d="M70 170 L40 230 L70 220 Z" stroke="#fafafa" strokeWidth="8" fill="none" />
          <path d="M130 170 L160 230 L130 220 Z" stroke="#fafafa" strokeWidth="8" fill="none" />
          <path d="M85 200 L85 240 L100 270 L115 240 L115 200 Z" stroke="#fafafa" strokeWidth="8" fill="none" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
