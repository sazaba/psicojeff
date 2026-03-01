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
    // Solicitamos id y slug para manejar los artículos antiguos y nuevos
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        slug: true, 
        updatedAt: true, 
      }
    });

    // 3. CONSTRUIMOS LAS RUTAS DINÁMICAS PARA CADA ARTÍCULO
    const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => {
      // Lógica de respaldo: Si existe el slug se usa, de lo contrario se usa el ID.
      const routeIdentifier = post.slug ? post.slug : post.id.toString();

      return {
        url: `${baseUrl}/blog/${routeIdentifier}`, 
        lastModified: post.updatedAt, 
        changeFrequency: 'monthly',
        priority: 0.7, // Prioridad estándar para artículos individuales
      };
    });

    // Retornamos la unión de las estáticas y las dinámicas
    return [...staticRoutes, ...dynamicRoutes];

  } catch (error) {
    console.error("Error generando el sitemap dinámico:", error);
    // Si la BD falla, garantizamos que al menos la página principal se indexe
    return staticRoutes;
  }
}