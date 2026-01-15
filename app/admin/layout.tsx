"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, LogOut, User, Menu, X, PlusCircle } from "lucide-react";
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
    <div className="min-h-screen bg-[#f5f5f4] flex"> {/* Fondo un poco más oscuro que white */}
      
      {/* Sidebar Móvil Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 bg-stone-900 text-white transition-transform duration-300 ease-in-out flex flex-col shadow-2xl border-r border-stone-800
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        {/* Header Sidebar */}
        <div className="p-8 flex items-center justify-between">
          <div>
            <span className="text-2xl font-serif font-bold tracking-wider text-white">PsicoJeff</span>
            <span className="block text-xs text-stone-500 uppercase tracking-widest mt-1">Admin Panel</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-stone-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Botón de Acción Rápida en Sidebar */}
        <div className="px-6 mb-6">
            <Link 
                href="/admin/posts/new"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-teal-900/50 group"
            >
                <PlusCircle size={18} className="group-hover:rotate-90 transition-transform"/>
                <span>Crear Post</span>
            </Link>
        </div>

        {/* Navegación */}
        <nav className="px-4 space-y-1 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium ${
                  isActive 
                    ? "bg-white/10 text-white shadow-inner border border-white/5" 
                    : "text-stone-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-teal-400" : ""} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Sidebar (Usuario) */}
        <div className="p-6 bg-stone-950 border-t border-stone-800">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-teal-500 font-bold border border-stone-700">
                {session?.user?.email?.charAt(0).toUpperCase() || "A"}
             </div>
             <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Administrador</p>
                <p className="text-xs text-stone-500 truncate">{session?.user?.email}</p>
             </div>
          </div>
          
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-red-900/30 text-stone-400 hover:text-red-400 px-4 py-2.5 rounded-lg transition-all text-xs font-bold uppercase tracking-wider border border-transparent hover:border-red-900/50"
          >
            <LogOut size={14} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header Móvil */}
        <header className="bg-white border-b border-stone-200 p-4 flex items-center justify-between md:hidden z-10">
            <span className="font-serif font-bold text-stone-800">Panel PsicoJeff</span>
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-stone-100 rounded-lg text-stone-600">
                <Menu size={24} />
            </button>
        </header>

        {/* Área de Scroll */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </div>
      </main>
    </div>
  );
}