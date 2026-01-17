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
    // AÑADIDO: Extraemos 'isFeatured'
    const { title, excerpt, content, category, readTime, image, isFeatured } = body;

    // 2. Validación simple
    if (!title || !content || !category) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    // 3. Crear el post en la base de datos
    const newPost = await prisma.post.create({
      data: {
        title,
        excerpt,
        content,
        category, // Ahora guarda el JSON string (ej: '["Ansiedad","Trauma"]')
        readTime,
        image,
        // AÑADIDO: Guardamos el booleano. Si no viene, asume false.
        isFeatured: isFeatured || false, 
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.error("Error creando post:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}