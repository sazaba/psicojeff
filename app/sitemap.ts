import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { glossaryTerms } from "@/lib/seo/glossary";

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
    url: `${baseUrl}/riesgo-psicosocial-empresas`,
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${baseUrl}/sobre-jefferson-bastidas`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

const glossaryRoutes: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/glosario`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  ...glossaryTerms.map((term) => ({
    url: `${baseUrl}/glosario/${term.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  })),
];

const trustRoutes: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/privacidad`,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${baseUrl}/terminos`,
    changeFrequency: "yearly",
    priority: 0.3,
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
      ...glossaryRoutes,
      ...trustRoutes,
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
      ...glossaryRoutes,
      ...trustRoutes,
      {
        url: `${baseUrl}/blog`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
    ];
  }
}
