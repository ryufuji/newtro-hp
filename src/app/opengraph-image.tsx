import { ImageResponse } from "next/og";
import { LAUNCH_LABEL_EN } from "@/lib/launch";

export const runtime = "edge";
export const alt = "NewTro — Launching 2026.05.01";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const rocketData = await fetch(
    new URL("./_assets/og-rocket.png", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const rocketSrc = `data:image/png;base64,${Buffer.from(rocketData).toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={rocketSrc}
            width={210}
            height={310}
            alt=""
            style={{ objectFit: "contain" }}
          />

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
