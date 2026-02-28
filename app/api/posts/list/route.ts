import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'; // Garantiza datos frescos en cada carga

export async function GET() {
  try {
    // findMany() traerá el campo 'slug' automáticamente tras tu migración
    const posts = await prisma.post.findMany({
      orderBy: [
        { isFeatured: 'desc' }, // Prioriza artículos destacados (PIAP, etc.)
        { createdAt: 'desc' }   // Luego los más recientes
      ]
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts:", error);
    return NextResponse.json({ error: "Error al obtener posts" }, { status: 500 });
  }
}