"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, LogOut, Menu, X, PlusCircle, Home } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Resumen", href: "/admin", icon: LayoutDashboard },
    { name: "Todos los Artículos", href: "/admin/posts", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex font-sans selection:bg-teal-500/30">
      
      {/* Sidebar Móvil Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar Principal */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-[280px] bg-stone-950 text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col border-r border-stone-800/60 shadow-2xl md:shadow-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Header Sidebar */}
        <div className="p-8 flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif font-bold tracking-wide text-white flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
              PsicoJeff
            </span>
            <span className="block text-[10px] text-white uppercase tracking-[0.2em] mt-2 font-semibold">
              Admin Workspace
            </span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 rounded-lg bg-stone-900 text-white hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Botón Principal (CTA) */}
        <div className="px-6 mb-8">
            <Link 
                href="/admin/posts/new"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full bg-teal-600 hover:bg-teal-500 text-white py-3.5 rounded-xl font-medium transition-all duration-300 shadow-[0_0_20px_rgba(13,148,136,0.15)] hover:shadow-[0_0_25px_rgba(13,148,136,0.3)] hover:-translate-y-0.5 group"
            >
                <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-500"/>
                <span>Escribir Artículo</span>
            </Link>
        </div>

        {/* Navegación */}
        <nav className="px-4 space-y-1.5 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-sm ${
                  isActive 
                    ? "bg-white/10 text-white shadow-sm border border-white/5" 
                    : "text-white hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={18} className={isActive ? "text-teal-400" : "text-stone-400"} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Botón Ver Sitio */}
        <div className="px-4 pb-4">
            <Link 
                href="/"
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-white hover:bg-stone-900 hover:text-white transition-all font-medium text-sm border border-transparent hover:border-stone-800"
            >
                <Home size={18} className="text-stone-400 group-hover:text-white transition-colors" />
                <span>Ir al Sitio Web</span>
            </Link>
        </div>

        {/* Perfil de Usuario */}
        <div className="p-6 bg-stone-900/50 border-t border-stone-800/60 mt-auto">
          <div className="flex items-center gap-3 mb-5">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold shadow-lg">
                {session?.user?.email?.charAt(0).toUpperCase() || "A"}
             </div>
             <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Administrador</p>
                <p className="text-xs text-white truncate">{session?.user?.email}</p>
             </div>
          </div>
          
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-red-500/10 text-white hover:text-red-400 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-wider border border-stone-800 hover:border-red-500/20 group"
          >
            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header Móvil */}
        <header className="bg-white/80 backdrop-blur-md border-b border-stone-200/50 p-4 flex items-center justify-between md:hidden z-30 sticky top-0">
            <span className="font-serif font-bold text-stone-800 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
              PsicoJeff
            </span>
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-stone-100 rounded-xl text-stone-600 hover:bg-stone-200 transition-colors">
                <Menu size={20} />
            </button>
        </header>

        {/* Área de Scroll */}
        <main className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth">
            <div className="max-w-6xl mx-auto pb-12">
                {children}
            </div>
        </main>

      </div>
    </div>
  );
}