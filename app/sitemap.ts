import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const baseUrl = "https://psicologojeffersonbastidas.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const posts = await prisma.post.findMany({
      where: {
        slug: { not: null },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const latestPostUpdate = posts[0]?.updatedAt;

    const staticRoutes: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        ...(latestPostUpdate ? { lastModified: latestPostUpdate } : {}),
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];

    const dynamicRoutes: MetadataRoute.Sitemap = posts
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug as string}`,
        lastModified: post.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Error generando el sitemap dinámico:", error);

    return [
      {
        url: baseUrl,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${baseUrl}/blog`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];
  }
}
