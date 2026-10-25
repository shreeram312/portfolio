import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Apple touch icon (iOS rounds the corners itself, so this one is square). */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          color: "#ededed",
          fontFamily: "Instrument Serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 144,
            lineHeight: 1,
            marginTop: -10,
            marginLeft: 6,
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
