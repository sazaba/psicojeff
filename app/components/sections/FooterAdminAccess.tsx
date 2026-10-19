"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Lock } from "lucide-react";

/**
 * A small client-only check: the rest of the public footer stays server-rendered.
 * The protected /admin route still validates the session on the server.
 */
export default function FooterAdminAccess() {
  const [signedIn, setSignedIn] = useState(false);

  const checkSession = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/session", {
        credentials: "same-origin",
        cache: "no-store",
      });

      if (!response.ok) {
        setSignedIn(false);
        return;
      }

      const session: unknown = await response.json();
      const isAuthenticated =
        typeof session === "object" &&
        session !== null &&
        "user" in session &&
        typeof session.user === "object" &&
        session.user !== null;

      setSignedIn(isAuthenticated);
    } catch {
      setSignedIn(false);
    }
  }, []);

  useEffect(() => {
    void checkSession();

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void checkSession();
    };
    const refreshOnFocus = () => void checkSession();

    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("focus", refreshOnFocus);
    return () => {
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("focus", refreshOnFocus);
    };
  }, [checkSession]);

  return (
    <Link
      href={signedIn ? "/admin" : "/login"}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-stone-800 text-stone-400 transition-colors hover:border-teal-700 hover:bg-stone-900 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500`}
      aria-label={signedIn ? "Ir al panel de administración" : "Acceso administrativo"}
      title={signedIn ? "Volver al panel" : "Acceso privado"}
      rel="nofollow"
    >
      {signedIn ? (
        <LayoutDashboard size={19} aria-hidden="true" />
      ) : (
        <Lock size={17} aria-hidden="true" />
      )}
    </Link>
  );
}
