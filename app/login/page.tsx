"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Credenciales inválidas. Verifica tus datos.");
      setLoading(false);
    } else {
      router.push("/admin"); // Redirigir al panel (que crearemos luego)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 md:p-10">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Bienvenido</h1>
            <p className="text-stone-500 text-sm">Acceso administrativo al panel de control</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-stone-700 font-medium"
                  placeholder="admin@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-stone-700 font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm text-center font-medium">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-stone-900 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}