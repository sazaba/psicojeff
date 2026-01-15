// app/admin/posts/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Save, Image as ImageIcon, ArrowLeft, Loader2, UploadCloud, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams(); // Obtenemos el ID de la URL
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true); // Estado de carga inicial
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    image: "",
  });

  // 1. CARGAR DATOS AL ENTRAR
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${params.id}`);
        if (!res.ok) throw new Error("Error al cargar");
        const data = await res.json();
        
        // Rellenamos el formulario
        setFormData({
            title: data.title,
            excerpt: data.excerpt,
            content: data.content,
            category: data.category,
            readTime: data.readTime,
            image: data.image
        });
      } catch (error) {
        alert("No se pudo cargar el artículo");
        router.push("/admin/posts");
      } finally {
        setFetching(false);
      }
    };

    if (params.id) fetchPost();
  }, [params.id, router]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: data }
      );
      const file = await res.json();
      if (file.secure_url) {
        setFormData((prev) => ({ ...prev, image: file.secure_url }));
      }
    } catch (error) {
      alert("Error al subir imagen");
    } finally {
      setUploadingImage(false);
    }
  };

  // 2. GUARDAR CAMBIOS (PUT)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // OJO: Método PUT para actualizar
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/posts"); // Volver a la lista
        router.refresh();
      } else {
        alert("Error al actualizar");
      }
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="h-screen flex items-center justify-center text-stone-400">Cargando datos...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
            <ArrowLeft size={20} />
        </Link>
        <div>
            <h1 className="text-2xl font-serif font-bold text-stone-800">Editar Artículo</h1>
            <p className="text-stone-500 text-sm">Actualiza tu contenido</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Título</label>
                <input
                    type="text"
                    name="title"
                    className="w-full text-xl font-serif font-bold text-stone-800 placeholder:text-stone-300 border-none focus:ring-0 p-0"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Resumen</label>
                <textarea
                    name="excerpt"
                    rows={3}
                    className="w-full text-stone-600 placeholder:text-stone-300 border-none focus:ring-0 p-0 resize-none"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm min-h-[400px]">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 border-b border-stone-100 pb-2">Contenido</label>
                <textarea
                    name="content"
                    rows={15}
                    className="w-full text-stone-700 placeholder:text-stone-300 border-none focus:ring-0 p-0 resize-y font-sans"
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="space-y-6">
            <button
                type="submit"
                disabled={loading || uploadingImage}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
                {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                Guardar Cambios
            </button>

            {/* Categoría y Tiempo */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Categoría</label>
                    <select
                        name="category"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:border-teal-500"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="Trauma">Trauma</option>
                        <option value="Ansiedad">Ansiedad</option>
                        <option value="Relaciones">Relaciones</option>
                        <option value="Metodología">Metodología</option>
                        <option value="Neurociencia">Neurociencia</option>
                        <option value="Psicosomática">Psicosomática</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Tiempo de Lectura</label>
                    <input
                        type="text"
                        name="readTime"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:border-teal-500"
                        value={formData.readTime}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* IMAGEN */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">Imagen Destacada</label>
                
                <div className="relative w-full aspect-video bg-stone-50 rounded-lg overflow-hidden border border-stone-200 border-dashed flex flex-col items-center justify-center group mb-4">
                    {uploadingImage ? (
                        <Loader2 className="animate-spin text-teal-600" />
                    ) : formData.image ? (
                        <>
                            <Image src={formData.image} alt="Preview" fill className="object-cover" />
                            <button 
                                type="button"
                                onClick={() => setFormData({ ...formData, image: "" })}
                                className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-red-500 shadow-sm hover:bg-white"
                            >
                                <X size={16} />
                            </button>
                        </>
                    ) : (
                        <>
                            <UploadCloud className="text-stone-300 mb-2" size={32} />
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </>
                    )}
                </div>
            </div>
        </div>
      </form>
    </div>
  );
}