import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

// GET: Obtener solo el contador de reseñas
export async function GET() {
  try {
    // Busca la configuración
    let config = await prisma.siteConfig.findFirst();

    // Si es la primera vez que se corre y no existe, crea el registro inicial
    if (!config) {
      config = await prisma.siteConfig.create({
        data: {
          reviewCount: 88, // Valor inicial por defecto
        },
      });
    }

    return NextResponse.json({ count: config.reviewCount });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener el contador" }, { status: 500 });
  }
}

// PUT: Actualizar el contador
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { newCount } = body; // Esperamos recibir "newCount" desde el admin

    // Validar que sea un número
    if (isNaN(newCount)) {
        return NextResponse.json({ error: "El valor debe ser un número" }, { status: 400 });
    }

    // Buscar el registro existente
    const config = await prisma.siteConfig.findFirst();

    if (!config) {
      // Si no existe, creamos
      await prisma.siteConfig.create({
        data: { reviewCount: Number(newCount) },
      });
    } else {
      // Si existe, actualizamos
      await prisma.siteConfig.update({
        where: { id: config.id },
        data: { reviewCount: Number(newCount) },
      });
    }

    return NextResponse.json({ success: true, count: newCount });
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar el contador" }, { status: 500 });
  }
}