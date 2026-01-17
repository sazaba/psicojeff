// app/admin/posts/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Loader2, UploadCloud, X, Check, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Importaciones Premium
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import "react-quill-new/dist/quill.snow.css"; 

// Editor dinámico
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false }) as any;

// LISTA DE ETIQUETAS PREDEFINIDAS
const AVAILABLE_TAGS = [
  "Psicología",
  "Psicoterapia",
  "Ansiedad",
  "Depresión",
  "Estrés",
  "Estres laboral",
  "Trauma",
  "SST",
  "Riesgo psicosocial en el trabajo",
  "Manizales"
];

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  
  // ESTADO COMPLETO
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: [] as string[], 
    readTime: "",
    image: "",
    isFeatured: false 
  });

  // CONFIGURACIÓN DEL EDITOR (MODIFICADA)
  const modules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], 
      ['link', 'clean']
    ],
    // AGREGADO: Evita viñetas dobles al pegar desde Word/Gemini
    clipboard: {
      matchVisual: false,
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  // Manejador para activar/desactivar etiquetas
  const toggleTag = (tag: string) => {
    setFormData(prev => {
      const currentTags = prev.tags;
      if (currentTags.includes(tag)) {
        return { ...prev, tags: currentTags.filter(t => t !== tag) };
      } else {
        return { ...prev, tags: [...currentTags, tag] };
      }
    });
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
        title: 'Error de Imagen',
        text: 'No se pudo subir la imagen a la nube',
        confirmButtonColor: '#0d9488'
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de contenido
    if (!formData.content || formData.content === "<p><br></p>") {
        Swal.fire({
            icon: 'warning',
            title: 'Falta contenido',
            text: 'Por favor escribe el contenido del artículo.',
            confirmButtonColor: '#0d9488'
        });
        return;
    }

    // Validación de etiquetas
    if (formData.tags.length === 0) {
      Swal.fire({
          icon: 'warning',
          title: 'Sin etiquetas',
          text: 'Selecciona al menos una etiqueta para el artículo.',
          confirmButtonColor: '#0d9488'
      });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        category: JSON.stringify(formData.tags) 
      };

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        await Swal.fire({
            icon: 'success',
            title: '¡Publicado!',
            text: 'Tu nuevo artículo ya está en línea.',
            confirmButtonColor: '#0d9488',
            confirmButtonText: 'Ir al listado'
        });
        router.push("/admin/posts"); 
        router.refresh();
      } else {
        throw new Error("Error al guardar");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al crear el artículo.',
        confirmButtonColor: '#0d9488'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/posts" className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500">
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
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Resumen (Texto plano)</label>
                <textarea
                    name="excerpt"
                    rows={3}
                    placeholder="Breve introducción para la tarjeta..."
                    className="w-full text-stone-600 placeholder:text-stone-300 border-none focus:ring-0 p-0 resize-none"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* EDITOR WYSIWYG */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm min-h-[600px] flex flex-col resize-y overflow-hidden">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 border-b border-stone-100 pb-2">Contenido Principal</label>
                <div className="flex-1 h-full flex flex-col">
                    <ReactQuill 
                        theme="snow" 
                        value={formData.content} 
                        onChange={handleEditorChange}
                        modules={modules}
                        placeholder="Escribe aquí tu artículo completo..."
                        className="h-full flex-1 mb-12" 
                    />
                </div>
            </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="space-y-6">

            {/* OPCIÓN DESTACADO (Feature Toggle) */}
            <div 
                onClick={() => setFormData(prev => ({ ...prev, isFeatured: !prev.isFeatured }))}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between group ${
                formData.isFeatured 
                    ? "bg-amber-50 border-amber-200 shadow-sm" 
                    : "bg-white border-stone-200 hover:border-stone-300"
            }`}>
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${formData.isFeatured ? "bg-amber-100 text-amber-600" : "bg-stone-100 text-stone-400"}`}>
                        <Star size={18} fill={formData.isFeatured ? "currentColor" : "none"} />
                    </div>
                    <div>
                        <p className={`text-sm font-bold ${formData.isFeatured ? "text-amber-800" : "text-stone-600"}`}>
                            Destacar Artículo
                        </p>
                        <p className="text-[10px] text-stone-400">
                            Aparecerá primero en el inicio
                        </p>
                    </div>
                </div>
                {/* Switch visual */}
                <div className={`w-10 h-5 rounded-full relative transition-colors ${formData.isFeatured ? "bg-amber-500" : "bg-stone-300"}`}>
                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow-sm transition-all duration-300 ${formData.isFeatured ? "left-6" : "left-1"}`} />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading || uploadingImage }
                className="w-full bg-stone-900 hover:bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                Publicar
            </button>

            {/* SELECCIÓN DE ETIQUETAS MULTIPLES */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                        Etiquetas ({formData.tags.length})
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {AVAILABLE_TAGS.map((tag) => {
                            const isSelected = formData.tags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    className={`text-xs px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
                                        isSelected 
                                            ? "bg-teal-600 text-white border-teal-600 shadow-md" 
                                            : "bg-stone-50 text-stone-600 border-stone-200 hover:border-teal-400"
                                    }`}
                                >
                                    {isSelected && <Check size={12} />}
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                    {formData.tags.length === 0 && (
                        <p className="text-[10px] text-red-400 mt-2">Selecciona al menos una etiqueta.</p>
                    )}
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

            {/* SUBIDA DE IMAGEN */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">Imagen Destacada</label>
                
                <div className="relative w-full aspect-video bg-stone-50 rounded-lg overflow-hidden border border-stone-200 border-dashed flex flex-col items-center justify-center group mb-4">
                    
                    {uploadingImage ? (
                        <div className="flex flex-col items-center text-teal-600 animate-pulse">
                            <Loader2 className="animate-spin mb-2" />
                            <span className="text-xs font-bold">Subiendo...</span>
                        </div>
                    ) : formData.image ? (
                        <>
                            <Image 
                                src={formData.image} 
                                alt="Preview" 
                                fill
                                className="object-cover"
                            />
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
                    Formatos: JPG, PNG, WEBP.
                </p>
            </div>
        </div>
      </form>
      
      {/* Estilos locales */}
      <style jsx global>{`
        .ql-editor .ql-align-justify {
            text-align: justify;
            text-justify: inter-word;
        }
        .ql-editor li.ql-align-justify {
            text-align: justify;
        }
      `}</style>
    </div>
  );
}