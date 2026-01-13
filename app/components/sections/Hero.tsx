import Link from 'next/link';
import Image from 'next/image';
import Headerpsicojeff from '@/app/assets/Headerpsicojeff.webp'; 

export default function Hero() {
  return (
    // CAMBIO 1: Aumenté 'pt-12' a 'pt-32' para móviles. 
    // Esto asegura que el contenido baje lo suficiente y no choque con el Navbar.
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-20 overflow-visible">
      
      {/* LUZ DE FONDO AMBIENTAL (Atrás, muy suave) */}
      <div className="absolute top-1/2 right-0 md:right-20 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* COLUMNA 1: SOLUCIÓN "GHOST FADE" (MOCKUP STYLE) */}
            <div className="relative order-last md:order-first flex justify-center md:justify-end">
                
                <div className="relative w-full max-w-[500px]"> 
                    
                    {/* 1. GLOW TRASERO (Sutil) */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-teal-200/30 rounded-full blur-[60px] -z-10"></div>

                    {/* 2. IMAGEN CON MÁSCARA DE DESVANECIMIENTO */}
                    <Image
                        src={Headerpsicojeff}
                        alt="Psicólogo Jefferson Bastidas"
                        className="w-full h-auto object-contain drop-shadow-2xl z-10 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]" 
                        priority
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                </div>
            </div>

            {/* COLUMNA 2: TEXTO */}
            <div className="text-center md:text-left z-10 relative">
                
                {/* BADGE / ETIQUETA */}
                {/* CAMBIO 2: Agregué 'mt-4 md:mt-0' para darle un respiro extra en móvil respecto al tope */}
                <div className="inline-block mb-8 mt-4 md:mt-0 px-5 py-2 rounded-full border border-teal-100 bg-white/50 backdrop-blur-sm">
                    <span className="text-xs md:text-sm font-bold text-teal-700 tracking-widest uppercase font-sans">
                        Psicólogo en Manizales y Online
                    </span>
                </div>
                
                {/* TÍTULO H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-stone-800 mb-8 leading-[1.1] font-serif">
                    Impactar vidas a través del <br />
                    bienestar mental con <br className="hidden md:block" />
                    <span className="relative inline-block text-teal-700/90 italic mt-2 md:mt-0">
                        significado y propósito
                        <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-teal-200 -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                        </svg>
                    </span>
                </h1>

                {/* PÁRRAFO */}
                <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-sans font-medium flex flex-wrap justify-center md:justify-start items-center gap-1.5">
                    Un espacio terapéutico de alta precisión para generar
                    
                    <span className="relative group/highlight inline-flex items-center justify-center px-3 py-0.5 ml-1">
                        <span className="absolute inset-0 bg-teal-100/50 rounded-lg -skew-x-6 transform group-hover/highlight:skew-x-0 transition-transform duration-300 ease-out origin-center"></span>
                        <span className="relative font-serif italic font-semibold text-teal-800 text-xl md:text-2xl tracking-wide">
                        Calma Vitalizada
                        </span>
                        <svg className="absolute -top-2 -right-3 w-5 h-5 text-teal-400 opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                        </svg>
                    </span>
                    <span>.</span>
                </p>

                {/* BOTONES */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                    <Link 
                        href="#contacto" 
                        className="px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-teal-600/20 w-full sm:w-auto text-center"
                    >
                        Solicitar Información
                    </Link>
                    
                    <Link 
                        href="#proceso" 
                        className="px-8 py-4 rounded-full border border-stone-300 hover:border-teal-400 bg-transparent text-stone-600 hover:text-teal-700 font-medium transition-all w-full sm:w-auto text-center"
                    >
                        Conocer mi enfoque
                    </Link>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}