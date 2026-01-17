import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'; // Importante para que no cachee la lista vieja

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      // CAMBIO CRÍTICO: Ordenamiento compuesto
      // 1. Primero los destacados (true va antes que false en desc)
      // 2. Luego por fecha de creación (los más nuevos primero)
      orderBy: [
        { isFeatured: 'desc' }, 
        { createdAt: 'desc' }
      ]
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error obteniendo posts:", error);
    return NextResponse.json({ error: "Error al obtener posts" }, { status: 500 });
  }
}