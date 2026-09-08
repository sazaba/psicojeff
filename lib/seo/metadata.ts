import type { Metadata } from "next";
import imageJeff from "@/app/assets/Jeffseo.webp";

export const SITE_URL = "https://psicologojeffersonbastidas.com";
export const AUTHOR_NAME = "Jefferson Bastidas Mejía";

interface SeoMetadataInput {
  title: string;
  description: string;
  path: string;
}

export function buildSeoMetadata({
  title,
  description,
  path,
}: SeoMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    authors: [{ name: AUTHOR_NAME }],
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Jefferson Bastidas Psicólogo",
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: imageJeff.src,
          width: 800,
          height: 800,
          alt: "Psicólogo Jefferson Bastidas Mejía",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageJeff.src],
    },
  };
}
