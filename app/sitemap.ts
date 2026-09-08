import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const baseUrl = "https://psicologojeffersonbastidas.com";

const pillarRoutes: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/psicoterapia-online`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/ansiedad-manizales`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${baseUrl}/estres-burnout-manizales`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/insomnio-manizales`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/terapias-contextuales-act`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/sobre-jefferson-bastidas`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

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
      ...pillarRoutes,
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
      ...pillarRoutes,
      {
        url: `${baseUrl}/blog`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];
  }
}
