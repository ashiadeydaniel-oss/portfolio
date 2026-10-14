import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} | ${site.title}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(34,197,94,0.28), transparent 60%)",
          color: "#f5f5f4",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#22c55e" }}>
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              color: "#a1a1aa",
              marginTop: 8,
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#a1a1aa",
              marginTop: 32,
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
