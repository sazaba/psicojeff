// app/admin/page.tsx
import { prisma } from "@/lib/prisma";
import { FileText, TrendingUp, Activity } from "lucide-react";
import ReviewWidget from "./components/ReviewWidget"; 
import PostsChart from "./components/PostsChart"; // <-- El componente nuevo que creamos

export const dynamic = 'force-dynamic';

async function getStats() {
  const postsCount = await prisma.post.count();
  const config = await prisma.siteConfig.findFirst();

  // --- LÓGICA PARA EL GRÁFICO (Últimos 6 meses) ---
  const posts = await prisma.post.findMany({
    select: { createdAt: true }
  });

  const chartData: { name: string; posts: number; month: number; year: number }[] = [];
  const now = new Date();
  
  // Generar la estructura de los últimos 6 meses vacía
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = d.toLocaleString('es-ES', { month: 'short' });
    chartData.push({
      name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
      posts: 0,
      month: d.getMonth(),
      year: d.getFullYear()
    });
  }

  // Rellenar con los datos reales de la BD
  posts.forEach(post => {
    const date = new Date(post.createdAt);
    const entry = chartData.find(d => d.month === date.getMonth() && d.year === date.getFullYear());
    if (entry) {
        entry.posts += 1;
    }
  });

  return { 
    postsCount,
    reviewCount: config?.reviewCount ?? 88,
    chartData 
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* Cabecera */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-3 tracking-tight">
            Panel de Control
        </h1>
        <p className="text-stone-500 text-lg">
            Gestiona tu conocimiento y analiza el crecimiento de tu contenido.
        </p>
      </header>

      {/* GRID DE MÉTRICAS (Tarjetas rediseñadas) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Artículos Totales */}
        <div className="bg-white p-7 rounded-3xl border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-6 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <FileText size={28} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-stone-400 text-[11px] font-bold uppercase tracking-widest mb-1">Total Artículos</p>
            <p className="text-4xl font-serif font-bold text-stone-800">{stats.postsCount}</p>
          </div>
          <div className="absolute right-0 top-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        </div>

        {/* Card 2: Widget de Reseñas */}
        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden border border-stone-200/60 hover:border-stone-300/60 transition-colors">
            <ReviewWidget initialCount={stats.reviewCount} />
        </div>

        {/* Card 3: Estado del Sistema */}
        <div className="bg-white p-7 rounded-3xl border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-6 relative overflow-hidden">
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400">
                <Activity size={28} strokeWidth={1.5} />
                <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]"></div>
            </div>
            <div className="relative z-10">
                <p className="text-stone-400 text-[11px] font-bold uppercase tracking-widest mb-1">Base de Datos</p>
                <p className="text-xl font-bold text-stone-700">En Línea</p>
            </div>
        </div>

      </div>

      {/* SECCIÓN DEL GRÁFICO (Nueva) */}
      <div className="bg-white rounded-3xl p-8 border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex items-center justify-between mb-2">
            <div>
                <h2 className="text-xl font-serif font-bold text-stone-800">Crecimiento de Publicaciones</h2>
                <p className="text-sm text-stone-500 mt-1">Histórico de artículos escritos en los últimos 6 meses.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-bold">
                <TrendingUp size={14} />
                <span>Activo</span>
            </div>
        </div>
        
        {/* Renderizamos el Gráfico Cliente */}
        <PostsChart data={stats.chartData} />
      </div>

    </div>
  );
}