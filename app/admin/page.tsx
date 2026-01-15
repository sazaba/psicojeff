// app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import { FileText, Calendar, PenTool } from "lucide-react";
import Link from "next/link";

// ESTA LÍNEA ES LA SOLUCIÓN AL CONTADOR EN 0:
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

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1: Contador Real */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
            <FileText size={28} />
          </div>
          <div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Artículos Publicados</p>
            <p className="text-3xl font-serif font-bold text-stone-800">{stats.postsCount}</p>
          </div>
        </div>

        {/* Card 2: Estado */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Sistema</p>
                <p className="text-lg font-bold text-stone-600">Base de Datos Conectada</p>
            </div>
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-bold rounded-xl hover:bg-teal-500 hover:text-white transition-all shadow-lg"
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