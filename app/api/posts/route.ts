import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"; // O "next-auth/next" según tu versión
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  // 1. Seguridad: Verificar que el usuario sea admin
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    
    // EXTRAEMOS 'slug' junto con el resto de campos
    const { title, slug, excerpt, content, category, readTime, image, isFeatured } = body;

    // 2. Validación: Añadimos 'slug' como campo obligatorio para SEO
    if (!title || !slug || !content || !category) {
      return NextResponse.json({ error: "Faltan campos obligatorios (incluyendo la URL/Slug)" }, { status: 400 });
    }

    // 3. Crear el post en la base de datos
    const newPost = await prisma.post.create({
      data: {
        title,
        slug,        // <--- NUEVO: Guardamos el slug semántico
        excerpt,
        content,
        category,    // Guarda el JSON string (ej: '["Ansiedad","Trauma"]')
        readTime,
        image,
        isFeatured: isFeatured || false, 
      },
    });

    return NextResponse.json(newPost);
  } catch (error: any) {
    console.error("Error creando post:", error);

    // MANEJO DE ERROR: Si el slug ya existe (violación de campo @unique)
    if (error.code === 'P2002') {
        return NextResponse.json(
            { error: "Ya existe un artículo con esta misma URL (slug). Elige un título diferente." }, 
            { status: 400 }
        );
    }

    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}