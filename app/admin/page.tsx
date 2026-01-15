// app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import { FileText, Calendar, TrendingUp } from "lucide-react";

async function getStats() {
  // Contamos cuántos artículos tienes publicados
  const postsCount = await prisma.post.count();
  return { postsCount };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Resumen General</h1>
      <p className="text-stone-500 mb-8">Bienvenido de nuevo, Jefferson.</p>

      {/* Tarjetas de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Artículos</p>
            <p className="text-2xl font-bold text-stone-800">{stats.postsCount}</p>
          </div>
        </div>

        {/* Placeholder para futuras estadísticas */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4 opacity-50">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-wider">Citas (Pronto)</p>
            <p className="text-2xl font-bold text-stone-800">--</p>
          </div>
        </div>

      </div>

      {/* Sección de Acción Rápida */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">¿Inspirado hoy?</h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
                Escribe un nuevo artículo para tu blog. Compartir conocimiento es la mejor forma de conectar con tus pacientes.
            </p>
            <a 
                href="/admin/posts/new" 
                className="inline-flex items-center px-6 py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
                Crear Nuevo Artículo
            </a>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-teal-600/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}