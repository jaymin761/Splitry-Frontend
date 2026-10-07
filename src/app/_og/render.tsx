import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** Shared 1200×630 share card in the brand palette, styled like the app's balance card. */
export async function renderOgImage({ title, subtitle }: { title: string; subtitle: string }) {
  const icon = await readFile(join(process.cwd(), "src/app/_og/icon-256.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FDFBF7",
          padding: 48,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 40,
            padding: "64px 72px",
            color: "#FFFFFF",
            backgroundImage: "linear-gradient(135deg, #03A671 0%, #028F61 60%, #027751 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 620,
              height: 620,
              top: -260,
              right: -160,
              borderRadius: 9999,
              background: "rgba(255,255,255,0.07)",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${icon}`} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Splitry</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
            <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.85)" }}>{subtitle}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
