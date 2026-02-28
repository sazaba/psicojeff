import { MetadataRoute } from 'next'
import { prisma } from "@/lib/prisma" 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://psicologojeffersonbastidas.com';

  // 1. RUTAS ESTÁTICAS (Las principales de tu web)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Prioridad máxima para tu perfil y servicios
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Prioridad alta para el índice de tu bitácora
    },
  ];

  try {
    // 2. CONSULTAMOS TU MODELO 'Post' EN LA BASE DE DATOS
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        updatedAt: true, // Usamos tu campo de actualización real
      }
    });

    // 3. CONSTRUIMOS LAS RUTAS DINÁMICAS PARA CADA ARTÍCULO
    const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: post.updatedAt, 
      changeFrequency: 'monthly',
      priority: 0.7, // Prioridad estándar para artículos individuales
    }));

    // Retornamos la unión de las estáticas y las dinámicas
    return [...staticRoutes, ...dynamicRoutes];

  } catch (error) {
    console.error("Error generando el sitemap dinámico:", error);
    // Si la BD falla, garantizamos que al menos la página principal se indexe
    return staticRoutes;
  }
}