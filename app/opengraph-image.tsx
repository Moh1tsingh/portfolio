import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohitsingh Thakur portfolio homepage";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0b",
          color: "#e4e4e7",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas",
          padding: 54,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #1b1b21",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0))",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 84,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 42px",
              borderBottom: "1px solid #1b1b21",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <div>MT</div>
            <div
              style={{
                display: "flex",
                gap: 30,
                color: "#71717a",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              <span style={{ color: "#e4e4e7" }}>Home</span>
              <span>Projects</span>
              <span>Blog</span>
              <span>Experience</span>
            </div>
          </div>

          <div
            style={{
              height: 150,
              display: "flex",
              position: "relative",
              borderBottom: "1px solid #1b1b21",
              background:
                "radial-gradient(circle at 34% 34%, #8a6540 0 10%, transparent 30%), radial-gradient(circle at 66% 18%, #4e5d3d 0 8%, transparent 26%), linear-gradient(110deg, #17110f 0%, #8b6742 34%, #3d2c24 62%, #0a0a0b 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, #0a0a0b 0%, transparent 18%, transparent 82%, #0a0a0b 100%), linear-gradient(180deg, rgba(10,10,11,0.12), rgba(10,10,11,0.42))",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 42,
                bottom: 22,
                color: "#596461",
                fontSize: 18,
              }}
            >
              views
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 64px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 70,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              Mohitsingh Thakur
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 760,
                color: "#8a8a94",
                fontSize: 30,
                lineHeight: 1.35,
              }}
            >
              I build product backends, cloud infra, and the tools around them.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 36,
                color: "#596461",
                fontSize: 24,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#22c55e",
                }}
              />
              <span>currently shipping prod</span>
              <span>•</span>
              <span>1+ year in production software</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
