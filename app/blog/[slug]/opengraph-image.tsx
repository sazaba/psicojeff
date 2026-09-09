import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";

const siteUrl = "https://psicologojeffersonbastidas.com";

export const alt = "Imagen del artículo de Jefferson Bastidas Psicólogo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";
export const revalidate = 3600;

type Params = Promise<{ slug: string }>;

function absoluteImageUrl(value?: string | null) {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
}

function socialImageUrl(value?: string | null) {
  const image = absoluteImageUrl(value);
  if (!image) return null;

  if (image.includes("res.cloudinary.com") && image.includes("/upload/")) {
    return image.replace(
      "/upload/",
      "/upload/f_jpg,q_auto,w_1200,h_630,c_fill,g_auto/",
    );
  }

  return image;
}

export default async function OpenGraphImage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
    select: { title: true, image: true },
  });

  const image = socialImageUrl(post?.image);

  return new ImageResponse(
    image ? (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1c1917",
        }}
      >
        <img
          src={image}
          alt=""
          width={size.width}
          height={size.height}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fffcf8",
          color: "#1c1917",
          fontSize: 52,
          fontWeight: 700,
          padding: "64px",
          textAlign: "center",
        }}
      >
        {post?.title || "Jefferson Bastidas Psicólogo"}
      </div>
    ),
    size,
  );
}
