// app/admin/posts/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Edit2, Trash2, Plus, Search, Calendar, Loader2 } from "lucide-react";

interface Post {
  id: number;
  title: string;
  category: string;
  createdAt: string;
}

export default function PostsListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // 1. Cargar posts al entrar
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Usamos la API pública o Server Actions. 
      // Para simplificar ahora, haré un fetch a un endpoint que crea lista
      // OJO: Si no creamos api/posts GET general, esto fallará.
      // Vamos a asumir que usas Server Actions o un fetch simple.
      // Por ahora, usaremos una API route simple para listar.
      const res = await fetch("/api/posts/list"); // Necesitaremos crear esto rápido abajo
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Error cargando posts", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Función de Borrado
  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de borrar este artículo? No se puede deshacer.")) return;
    
    setDeletingId(id);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        alert("Error al eliminar");
      }
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <div className="p-10 text-center text-stone-500">Cargando tus escritos...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
            <h1 className="text-2xl font-serif font-bold text-stone-800">Mis Artículos</h1>
            <p className="text-stone-500 text-sm">Administra tu biblioteca de contenido</p>
        </div>
        <Link 
            href="/admin/posts/new" 
            className="bg-stone-900 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-teal-600 transition-colors"
        >
            <Plus size={16} /> Nuevo
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        {posts.length === 0 ? (
            <div className="p-10 text-center">
                <p className="text-stone-400 mb-4">Aún no has escrito ningún artículo.</p>
                <Link href="/admin/posts/new" className="text-teal-600 font-bold hover:underline">¡Escribe el primero!</Link>
            </div>
        ) : (
            <table className="w-full text-left">
                <thead className="bg-stone-50 border-b border-stone-100">
                    <tr>
                        <th className="p-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Título</th>
                        <th className="p-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Categoría</th>
                        <th className="p-4 text-xs font-bold text-stone-500 uppercase tracking-wider">Fecha</th>
                        <th className="p-4 text-xs font-bold text-stone-500 uppercase tracking-wider text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                    {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-stone-50/50 transition-colors">
                            <td className="p-4 font-medium text-stone-800">{post.title}</td>
                            <td className="p-4">
                                <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100">
                                    {post.category}
                                </span>
                            </td>
                            <td className="p-4 text-stone-500 text-sm">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </td>
                            <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Link 
                                        href={`/admin/posts/${post.id}`} // Esto llevará a la página de edición
                                        className="p-2 text-stone-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                                    >
                                        <Edit2 size={16} />
                                    </Link>
                                    <button 
                                        onClick={() => handleDelete(post.id)}
                                        disabled={deletingId === post.id}
                                        className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
                                    >
                                        {deletingId === post.id ? <Loader2 size={16} className="animate-spin"/> : <Trash2 size={16} />}
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
      </div>
    </div>
  );
}