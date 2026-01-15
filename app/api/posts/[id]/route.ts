// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// Definimos el tipo correcto para Next.js 16 (Params es una Promesa)
type Params = Promise<{ id: string }>;

// 1. GET (Obtener uno)
export async function GET(req: Request, { params }: { params: Params }) {
  const { id } = await params; // <--- AWAIT OBLIGATORIO AQUÍ
  const postId = parseInt(id);

  const post = await prisma.post.findUnique({ where: { id: postId } });
  
  if (!post) return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
  return NextResponse.json(post);
}

// 2. PUT (Actualizar)
export async function PUT(req: Request, { params }: { params: Params }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params; // <--- AWAIT OBLIGATORIO AQUÍ
  const postId = parseInt(id);
  const body = await req.json();

  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        image: body.image,
        readTime: body.readTime,
      },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
  }
}

// 3. DELETE (Borrar)
export async function DELETE(req: Request, { params }: { params: Params }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await params; // <--- AWAIT OBLIGATORIO AQUÍ
  const postId = parseInt(id);

  try {
    await prisma.post.delete({ where: { id: postId } });
    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}