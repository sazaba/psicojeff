// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// 1. OBTENER UN SOLO ARTÍCULO (Para llenar el formulario de edición)
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const post = await prisma.post.findUnique({ where: { id } });
  
  if (!post) return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
  return NextResponse.json(post);
}

// 2. ACTUALIZAR ARTÍCULO (PUT)
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const id = parseInt(params.id);
  const body = await req.json();

  try {
    const updatedPost = await prisma.post.update({
      where: { id },
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

// 3. ELIMINAR ARTÍCULO (DELETE)
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const id = parseInt(params.id);

  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}