import { NextResponse } from "next/server";
import { getServerSession } from "next-auth"; 
import { prisma } from "@/lib/prisma";

// Tipado para Next.js 15+
type Params = Promise<{ id: string }>;

// GET: Obtener un post por ID
export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
        return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({ where: { id: postId } });
    
    if (!post) return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
    return NextResponse.json(post);
  } catch (error) {
    console.error("[GET_POST_ERROR]", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}

// PUT: Actualizar el post (Incluye el SLUG)
export async function PUT(req: Request, { params }: { params: Params }) {
  try {
    const session = await getServerSession();
    
    if (!session) {
        console.warn("⚠️ ADVERTENCIA: No se detectó sesión en PUT /api/posts/[id].");
    }

    const { id } = await params;
    const postId = parseInt(id);
    const body = await req.json();

    if (isNaN(postId)) {
        return NextResponse.json({ error: "ID de post inválido" }, { status: 400 });
    }

    console.log(`📝 Actualizando Post ID: ${postId}`);

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title: body.title,
        slug: body.slug, // <-- Garantizado para el Update
        excerpt: body.excerpt,
        content: body.content,
        category: body.category, 
        image: body.image,
        readTime: body.readTime,
        isFeatured: body.isFeatured,
      },
    });

    console.log("✅ Post actualizado con éxito");
    return NextResponse.json(updatedPost);

  } catch (error: any) {
    console.error("❌ ERROR CRÍTICO AL ACTUALIZAR:", error);
    if (error.code === 'P2002') {
        return NextResponse.json({ error: "Esta URL (slug) ya está siendo usada por otro artículo." }, { status: 400 });
    }
    return NextResponse.json({ error: "Error al actualizar en base de datos." }, { status: 500 });
  }
}

// DELETE: Borrar post
export async function DELETE(req: Request, { params }: { params: Params }) {
  const session = await getServerSession();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const { id } = await params;
    const postId = parseInt(id);
    await prisma.post.delete({ where: { id: postId } });
    return NextResponse.json({ message: "Eliminado correctamente" });
  } catch (error) {
    console.error("[DELETE_ERROR]", error);
    return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
  }
}