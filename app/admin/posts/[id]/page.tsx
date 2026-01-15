// app/admin/posts/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Save, ArrowLeft, Loader2, UploadCloud, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Importaciones dinámicas y estilos
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import "react-quill/dist/quill.snow.css";

// CORRECCIÓN AQUÍ: 'as any' elimina el error rojo de TypeScript
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }) as any;

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "", 
    category: "",
    readTime: "",
    image: "",
  });

  // Configuración del Editor
  const modules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'clean']
    ],
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${params.id}`);
        if (!res.ok) throw new Error("Error al cargar");
        const data = await res.json();
        
        setFormData({
            title: data.title || "",
            excerpt: data.excerpt || "",
            content: data.content || "",
            category: data.category || "",
            readTime: data.readTime || "",
            image: data.image || ""
        });
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo cargar el artículo',
            confirmButtonColor: '#0d9488'
        });
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

  const handleEditorChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
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
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al subir la imagen',
        confirmButtonColor: '#0d9488'
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        await Swal.fire({
            icon: 'success',
            title: '¡Actualizado!',
            text: 'El artículo se guardó correctamente.',
            confirmButtonColor: '#0d9488',
        });
        router.push("/admin/posts");
        router.refresh();
      } else {
        throw new Error("Error en la respuesta");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo guardar el artículo.',
        confirmButtonColor: '#0d9488'
      });
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div className="h-screen flex items-center justify-center text-stone-400">Cargando...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-20"> 
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
            <ArrowLeft size={20} />
        </Link>
        <div>
            <h1 className="text-2xl font-serif font-bold text-stone-800">Editar Artículo</h1>
            <p className="text-stone-500 text-sm">Mejora tu contenido con el nuevo editor</p>
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
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Resumen (Texto plano)</label>
                <textarea
                    name="excerpt"
                    rows={3}
                    className="w-full text-stone-600 placeholder:text-stone-300 border-none focus:ring-0 p-0 resize-none"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* EDITOR */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm min-h-[500px] flex flex-col">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 border-b border-stone-100 pb-2">Contenido Principal</label>
                <div className="flex-1 h-full">
                    <ReactQuill 
                        theme="snow" 
                        value={formData.content} 
                        onChange={handleEditorChange}
                        modules={modules}
                        className="h-[350px] mb-12" 
                    />
                </div>
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
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-none focus:border-teal-500"
                        value={formData.readTime}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

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