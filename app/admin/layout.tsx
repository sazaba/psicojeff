// app/admin/layout.tsx
"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, LogOut, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Resumen", href: "/admin", icon: LayoutDashboard },
    { name: "Mis Artículos", href: "/admin/posts", icon: FileText },
    // Aquí agregaremos más opciones en el futuro (ej: Pacientes, Citas)
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex">
      
      {/* Sidebar Móvil Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-30 w-64 bg-stone-900 text-white transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className="p-6 flex items-center justify-between">
          <span className="text-xl font-serif font-bold tracking-wider">PsicoJeff</span>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-teal-600 text-white shadow-lg" 
                    : "text-stone-400 hover:bg-stone-800 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-stone-800">
          <div className="flex items-center gap-3 px-4 mb-4 text-stone-400">
             <User size={16} />
             <span className="text-sm truncate">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition-all text-sm font-bold"
          >
            <LogOut size={16} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-stone-200 p-4 flex items-center justify-between md:hidden">
            <span className="font-bold text-stone-800">Panel de Control</span>
            <button onClick={() => setIsSidebarOpen(true)} className="text-stone-600">
                <Menu size={24} />
            </button>
        </header>
        <div className="p-6 md:p-10 flex-1 overflow-y-auto">
            {children}
        </div>
      </main>
    </div>
  );
}