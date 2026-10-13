import { ImageResponse } from "next/og";
import { HEADLINE, ROLE_LINE, SITE_DOMAIN_LABEL, SITE_NAME } from "@/data/site";

export const shareImageSize = { width: 1200, height: 630 };
export const shareImageContentType = "image/png";
export const shareImageAlt = `${SITE_NAME}, AI Product Developer. ${HEADLINE}`;

export function ShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f3f2ef",
          color: "#141413",
        }}
      >
        <div style={{ display: "flex", height: 14, width: "100%", background: "#143f36" }} />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5c5852",
            }}
          >
            {ROLE_LINE}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 84, lineHeight: 1, letterSpacing: "-0.04em" }}>
              {SITE_NAME}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 40,
                lineHeight: 1.25,
                color: "#143f36",
                maxWidth: 920,
              }}
            >
              {HEADLINE}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#5c5852" }}>{SITE_DOMAIN_LABEL}</div>
        </div>
      </div>
    ),
    { ...shareImageSize },
  );
}
