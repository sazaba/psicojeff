import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/login", "/api/"],
    },
    sitemap: "https://psicologojeffersonbastidas.com/sitemap.xml",
    host: "https://psicologojeffersonbastidas.com",
  };
}
