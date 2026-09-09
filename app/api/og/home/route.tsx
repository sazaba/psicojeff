import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const logoUrl = new URL("/Logo.webp", request.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffcf8",
        }}
      >
        <img
          src={logoUrl}
          alt=""
          width="420"
          height="420"
          style={{
            width: "420px",
            height: "420px",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}
