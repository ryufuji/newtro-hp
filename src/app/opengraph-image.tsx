import { ImageResponse } from "next/og";
import { LAUNCH_LABEL_EN } from "@/lib/launch";

export const runtime = "edge";
export const alt = "NewTro — Launching 2026.05.01";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          color: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(10,10,10,0.18) 2px, transparent 2px)",
            backgroundSize: "26px 26px",
            opacity: 0.5,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            zIndex: 1,
          }}
        >
          <svg
            width="180"
            height="240"
            viewBox="0 0 200 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="100" y1="6" x2="100" y2="34" stroke="#0a0a0a" strokeWidth="3" />
            <circle cx="100" cy="6" r="4" fill="#0a0a0a" />
            <path d="M75 50 Q100 24 125 50 L125 88 L75 88 Z" stroke="#0a0a0a" strokeWidth="3" fill="none" />
            <path d="M70 88 L130 88 L130 200 L70 200 Z" stroke="#0a0a0a" strokeWidth="3" fill="none" />
            <circle cx="100" cy="120" r="22" stroke="#0a0a0a" strokeWidth="3" fill="none" />
            <line x1="86" y1="106" x2="114" y2="134" stroke="#0a0a0a" strokeWidth="3" />
            <path d="M70 170 L40 230 L70 220 Z" stroke="#0a0a0a" strokeWidth="3" fill="none" />
            <path d="M130 170 L160 230 L130 220 Z" stroke="#0a0a0a" strokeWidth="3" fill="none" />
            <path d="M85 200 L85 240 L100 270 L115 240 L115 200 Z" stroke="#0a0a0a" strokeWidth="3" fill="none" />
          </svg>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 36,
                letterSpacing: 8,
                color: "#2a2a2a",
              }}
            >
              NEW × RETRO
            </div>
            <div
              style={{
                fontSize: 200,
                fontWeight: 900,
                lineHeight: 1,
                marginTop: 8,
                letterSpacing: -4,
              }}
            >
              NewTro
            </div>
          </div>
        </div>

        <div
          style={{
            zIndex: 1,
            marginTop: 56,
            padding: "16px 32px",
            border: "3px solid #0a0a0a",
            borderRadius: 999,
            background: "#ff3d8a",
            color: "#0a0a0a",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: 6,
            display: "flex",
          }}
        >
          LAUNCH / {LAUNCH_LABEL_EN}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 40,
            fontSize: 22,
            letterSpacing: 4,
            color: "#8a8a8a",
            display: "flex",
          }}
        >
          PRODUCED BY OMATSURI
        </div>
      </div>
    ),
    { ...size },
  );
}
