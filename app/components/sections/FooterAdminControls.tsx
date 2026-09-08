"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { LayoutDashboard, Lock, LogOut } from "lucide-react";

export default function FooterAdminControls() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-2 border-l border-stone-800 pl-4 ml-2">
        <Link
          href="/admin"
          className="text-stone-500 hover:text-teal-500 transition-colors p-2"
          title="Ir al Panel Administrativo"
          rel="nofollow"
        >
          <LayoutDashboard size={14} />
        </Link>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-stone-500 hover:text-red-500 transition-colors p-2"
          title="Cerrar Sesión"
        >
          <LogOut size={14} />
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="text-stone-800 hover:text-teal-600 transition-colors duration-300 p-2"
      aria-label="Admin Login"
      title="Acceso Privado"
      rel="nofollow"
    >
      <Lock size={14} />
    </Link>
  );
}
