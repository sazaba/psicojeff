"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronRight,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Resumen", href: "/admin", icon: LayoutDashboard },
  { name: "Todos los artículos", href: "/admin/posts", icon: FileText },
];

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8f9fb] font-sans text-slate-800 selection:bg-teal-100">
      <button
        type="button"
        aria-label="Cerrar menú lateral"
        tabIndex={isSidebarOpen ? 0 : -1}
        onClick={() => setIsSidebarOpen(false)}
        className={
          "fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[3px] transition-opacity duration-300 md:hidden " +
          (isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0")
        }
      />

      <aside
        id="admin-sidebar"
        aria-label="Navegación administrativa"
        className={
          "fixed inset-y-0 left-0 z-50 flex h-dvh w-[288px] shrink-0 flex-col overflow-y-auto border-r border-slate-200/90 bg-[#fbfcfd] text-slate-800 shadow-[12px_0_45px_-32px_rgba(15,23,42,0.3)] transition-transform duration-300 ease-out motion-reduce:transition-none md:sticky md:top-0 md:h-screen md:translate-x-0 md:shadow-none " +
          (isSidebarOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="relative border-b border-slate-200/70 px-6 pb-7 pt-8">
          <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-teal-100/60 blur-3xl" aria-hidden="true" />
          <div className="relative flex items-center justify-between gap-3">
            <Link
              href="/admin"
              onClick={() => setIsSidebarOpen(false)}
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-4"
              aria-label="Ir al resumen de PsicoJeff"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 text-sm font-bold tracking-wide !text-white shadow-[0_9px_18px_-10px_rgba(13,148,136,0.65)]">
                PJ
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-serif text-[1.45rem] font-semibold leading-tight tracking-tight !text-slate-900">
                  PsicoJeff
                </span>
                <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.17em] !text-slate-500">
                  Panel administrativo
                </span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 md:hidden"
              aria-label="Cerrar menú"
            >
              <X size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="px-5 pb-7 pt-7">
          <Link
            href="/admin/posts/new"
            onClick={() => setIsSidebarOpen(false)}
            className="group flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold !text-white shadow-[0_12px_24px_-16px_rgba(15,23,42,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_28px_-18px_rgba(15,23,42,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
          >
            <span className="flex items-center gap-3 !text-white">
              <Plus size={18} strokeWidth={2.3} aria-hidden="true" />
              Escribir artículo
            </span>
            <ArrowUpRight size={16} className="!text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Secciones del panel" className="flex-1 px-4">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Espacio de trabajo
          </p>
          <div className="space-y-1.5">
            {navigation.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsSidebarOpen(false)}
                  className={
                    "group flex min-h-12 items-center justify-between rounded-2xl border px-3.5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 " +
                    (isActive
                      ? "border-teal-200/80 bg-teal-50 !text-teal-950 shadow-[0_6px_18px_-16px_rgba(13,148,136,0.9)]"
                      : "border-transparent !text-slate-600 hover:bg-slate-100 hover:!text-slate-900")
                  }
                >
                  <span className="flex items-center gap-3 !text-inherit">
                    <Icon size={19} strokeWidth={1.8} className={isActive ? "text-teal-700" : "text-slate-500 group-hover:text-slate-700"} aria-hidden="true" />
                    {item.name}
                  </span>
                  <ChevronRight size={16} className={isActive ? "text-teal-600" : "text-slate-400 opacity-0 group-hover:opacity-100"} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="px-4 pb-4 pt-5">
          <Link
            href="/"
            onClick={() => setIsSidebarOpen(false)}
            className="group flex min-h-12 items-center gap-3 rounded-2xl border border-transparent px-3.5 py-3 text-sm font-semibold !text-slate-600 transition-colors hover:border-slate-200 hover:bg-white hover:!text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            <Home size={19} strokeWidth={1.8} className="text-slate-500" aria-hidden="true" />
            Ir al sitio web
            <ArrowUpRight size={15} className="ml-auto text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
          </Link>
        </div>

        <div className="border-t border-slate-200/80 bg-[#f7f9fa] p-4">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-[0_7px_22px_-19px_rgba(15,23,42,0.35)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800 ring-1 ring-teal-200">
                {session?.user?.email?.charAt(0).toUpperCase() || "A"}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-slate-900">Administrador</p>
                <p className="truncate text-xs leading-5 text-slate-500" title={session?.user?.email || ""}>
                  {session?.user?.email || "Sesión del panel"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <LogOut size={16} aria-hidden="true" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-30 flex min-h-[72px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl md:hidden">
          <span className="flex items-center gap-2.5 text-sm font-bold text-slate-900">
            <span className="h-2 w-2 rounded-full bg-teal-600" aria-hidden="true" />
            PsicoJeff <span className="font-normal !text-slate-500">/ Panel</span>
          </span>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-label="Abrir menú lateral"
            aria-controls="admin-sidebar"
            aria-expanded={isSidebarOpen}
          >
            <Menu size={21} aria-hidden="true" />
          </button>
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-7 scroll-smooth sm:px-6 md:px-10 md:py-12">
          <div className="mx-auto max-w-6xl pb-12">{children}</div>
        </main>
      </div>
    </div>
  );
}
