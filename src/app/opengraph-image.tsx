import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tracking Layer — Landing Pages Built for Traffic & Analytics";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(177, 75, 255, 0.45), transparent 45%), radial-gradient(circle at 85% 80%, rgba(37, 99, 235, 0.45), transparent 45%), radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.18), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "4px",
            color: "rgba(255,255,255,0.7)",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 16px #22c55e",
            }}
          />
          Available for orders
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "88px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
          }}
        >
          <span>Landing pages built for</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #b14bff 0%, #d946ef 50%, #2563eb 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            traffic & analytics
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "26px",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.7)",
            maxWidth: "900px",
            marginBottom: "40px",
          }}
        >
          Fast deployment with pre-configured analytics and tracking. Pay only after the work is done.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "28px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              fontSize: "32px",
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #b14bff 60%, #2563eb 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            $20 / landing page
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
          <span>Telegram &amp; WhatsApp</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
          <span>Hladkykh Ivan</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
