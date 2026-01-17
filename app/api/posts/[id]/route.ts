// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"; // O "next-auth/next" según tu configuración
import { prisma } from "@/lib/prisma";

// Definimos el tipo correcto para Next.js 15/16 (Params es una Promesa)
type Params = Promise<{ id: string }>;

// 1. GET (Obtener un post por ID para rellenar el formulario)
export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { id } = await params; // <--- AWAIT es obligatorio en versiones nuevas
    const postId = parseInt(id);

    const post = await prisma.post.findUnique({ where: { id: postId } });
    
    if (!post) return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

// 2. PUT (Actualizar el post)
export async function PUT(req: Request, { params }: { params: Params }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const { id } = await params;
    const postId = parseInt(id);
    const body = await req.json();

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category, // Recibe el string JSON de las etiquetas
        image: body.image,
        readTime: body.readTime,
        isFeatured: body.isFeatured, // <--- IMPORTANTE: Actualiza el estado de destacado
      },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error actualizando:", error);
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}

// 3. DELETE (Borrar el post)
export async function DELETE(req: Request, { params }: { params: Params }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const { id } = await params;
    const postId = parseInt(id);

    await prisma.post.delete({ where: { id: postId } });
    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    console.error("Error eliminando:", error);
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}