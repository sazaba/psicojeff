"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Image as ImageIcon, ArrowLeft, Loader2, UploadCloud, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false); // Nuevo estado para la subida
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    image: "", // Aquí guardaremos la URL que nos devuelva Cloudinary
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Lógica para subir a Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || ""); // Tu preset
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      
      const file = await res.json();
      
      if (file.secure_url) {
        // ¡Éxito! Guardamos la URL segura en el formulario
        setFormData((prev) => ({ ...prev, image: file.secure_url }));
      }
    } catch (error) {
      console.error("Error subiendo imagen:", error);
      alert("Error al subir la imagen a Cloudinary");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin"); 
        router.refresh();
      } else {
        alert("Error al guardar el post");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin" className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
            <ArrowLeft size={20} />
        </Link>
        <div>
            <h1 className="text-2xl font-serif font-bold text-stone-800">Crear Nuevo Artículo</h1>
            <p className="text-stone-500 text-sm">Comparte tu conocimiento con el mundo</p>
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
                    placeholder="Título del artículo..."
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
                    placeholder="Breve introducción..."
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
                    placeholder="Escribe tu artículo aquí..."
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
                disabled={loading || uploadingImage || !formData.image}
                className="w-full bg-stone-900 hover:bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                Publicar
            </button>

            {/* Selector de Categoría y Tiempo */}
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
                        <option value="">Seleccionar...</option>
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
                        placeholder="Ej: 5 min"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:border-teal-500"
                        value={formData.readTime}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            {/* SUBIDA DE IMAGEN (NUEVO) */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">Imagen Destacada</label>
                
                {/* Área de Visualización */}
                <div className="relative w-full aspect-video bg-stone-50 rounded-lg overflow-hidden border border-stone-200 border-dashed flex flex-col items-center justify-center group mb-4">
                    
                    {uploadingImage ? (
                        <div className="flex flex-col items-center text-teal-600 animate-pulse">
                            <Loader2 className="animate-spin mb-2" />
                            <span className="text-xs font-bold">Subiendo a la nube...</span>
                        </div>
                    ) : formData.image ? (
                        <>
                            <Image 
                                src={formData.image} 
                                alt="Preview" 
                                fill
                                className="object-cover"
                            />
                            {/* Botón para quitar imagen */}
                            <button 
                                type="button"
                                onClick={() => setFormData({ ...formData, image: "" })}
                                className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-red-500 shadow-sm hover:bg-white transition-all"
                            >
                                <X size={16} />
                            </button>
                        </>
                    ) : (
                        <>
                            <UploadCloud className="text-stone-300 mb-2 group-hover:text-teal-500 transition-colors" size={32} />
                            <span className="text-xs text-stone-400 group-hover:text-stone-600">Clic para subir imagen</span>
                            {/* Input invisible que cubre el área */}
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </>
                    )}
                </div>
                
                <p className="text-[10px] text-stone-400 text-center">
                    Formatos: JPG, PNG, WEBP. Máx 5MB.
                </p>
            </div>
        </div>

      </form>
    </div>
  );
}