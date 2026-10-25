import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Favicon: a dark rounded square with the serif "S." wordmark.
 * Generated once at build time; served at /icon.
 */
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "app/fonts/InstrumentSerif-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0e0e",
          borderRadius: 112,
          color: "#ededed",
          fontFamily: "Instrument Serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 410,
            lineHeight: 1,
            marginTop: -28,
            marginLeft: 18,
          }}
        >
          <span>S</span>
          <span style={{ color: "#f97316" }}>.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Instrument Serif", data: font, weight: 400, style: "normal" }],
    }
  );
}
