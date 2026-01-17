// app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import { FileText, PenTool } from "lucide-react";
import Link from "next/link";
import ReviewWidget from "./components/ReviewWidget"; // Importamos el componente nuevo

export const dynamic = 'force-dynamic';

async function getStats() {
  // 1. Obtenemos posts
  const postsCount = await prisma.post.count();
  
  // 2. Obtenemos configuración (si no existe, devolvemos null, pero la API ya se encarga de crearla si falla, aqui solo leemos)
  const config = await prisma.siteConfig.findFirst();

  return { 
    postsCount,
    // Si no existe configuración todavía, asumimos 88 por defecto visualmente
    reviewCount: config?.reviewCount ?? 88 
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Panel de Escritura</h1>
        <p className="text-stone-500">Gestiona tu conocimiento y conecta con tus pacientes.</p>
      </header>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Card 1: Contador Artículos */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
            <FileText size={28} />
          </div>
          <div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Artículos</p>
            <p className="text-3xl font-serif font-bold text-stone-800">{stats.postsCount}</p>
          </div>
        </div>

        {/* Card 2: Widget de Reseñas (NUEVO) */}
        {/* Le pasamos el valor inicial traído desde el servidor */}
        <ReviewWidget initialCount={stats.reviewCount} />

        {/* Card 3: Estado del Sistema */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5 relative overflow-hidden">
            <div className="relative z-10 w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </div>
            <div className="relative z-10">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Sistema</p>
                <p className="text-lg font-bold text-stone-600">Base de Datos Activa</p>
            </div>
             <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-green-50/50 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Sección de Acción Rápida */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-lg">
            <h2 className="text-3xl font-serif font-bold mb-4">¿Inspirado hoy?</h2>
            <p className="text-stone-300 mb-8 leading-relaxed">
                Continúa construyendo tu legado digital. Tus artículos ayudan a tus pacientes incluso antes de la consulta.
            </p>
            <Link 
                href="/admin/posts/new" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-bold rounded-xl hover:bg-teal-500 hover:text-white transition-all shadow-lg hover:translate-y-[-2px]"
            >
                <PenTool size={18} />
                Crear Nuevo Artículo
            </Link>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-teal-600/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}