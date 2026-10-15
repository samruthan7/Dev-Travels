import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b1020 0%, #1b2a5a 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, display: "flex" }}>
          {SITE_NAME}
        </div>
        <div
          style={{ fontSize: 36, marginTop: 24, opacity: 0.8, display: "flex" }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}