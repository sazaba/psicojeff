import { prisma } from "@/lib/prisma";
import { FileText, PenTool } from "lucide-react";
import Link from "next/link";

// Forzamos a que esta página sea dinámica para que el contador se actualice siempre
export const dynamic = 'force-dynamic';

async function getStats() {
  const postsCount = await prisma.post.count();
  return { postsCount };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Panel de Escritura</h1>
        <p className="text-stone-500">Gestiona tu conocimiento y conecta con tus pacientes.</p>
      </header>

      {/* Tarjetas de Estadísticas - SOLO BLOG */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1: Contador */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
            <FileText size={28} />
          </div>
          <div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Artículos Publicados</p>
            <p className="text-3xl font-serif font-bold text-stone-800">{stats.postsCount}</p>
          </div>
        </div>

        {/* Card 2: Estado del Sistema (Decorativo por ahora) */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Estado del Blog</p>
                <p className="text-lg font-bold text-stone-600">En línea y Operativo</p>
            </div>
        </div>

      </div>

      {/* Sección Principal de Acción: CREAR */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium text-teal-300 mb-6 border border-white/10">
                <PenTool size={14} />
                <span>Editor de Contenido</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                ¿Qué quieres compartir hoy?
            </h2>
            <p className="text-stone-300 mb-8 leading-relaxed text-lg max-w-lg">
                El formulario está listo para recibir tu nuevo artículo con la estructura de título, resumen e imagen que definimos.
            </p>
            
            <Link 
                href="/admin/posts/new" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 font-bold rounded-xl hover:bg-teal-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
                <span className="text-lg">Redactar Nuevo Artículo</span>
                <FileText size={20} />
            </Link>
        </div>

        {/* Decoración de fondo */}
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-teal-900/40 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
}