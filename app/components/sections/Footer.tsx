import Link from "next/link";
import { Lock, MapPin } from "lucide-react";

const exploreLinks = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Psicoterapia online", href: "/psicoterapia-online" },
  { name: "Ansiedad en Manizales", href: "/ansiedad-manizales" },
  { name: "Estrés y burnout", href: "/estres-burnout-manizales" },
  { name: "Terapias ACT", href: "/terapias-contextuales-act" },
  { name: "Glosario", href: "/glosario" },
  { name: "Perfil profesional", href: "/sobre-jefferson-bastidas" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0c0a09] text-[#e7e5e4] pt-24 pb-12 overflow-hidden border-t border-stone-800 relative">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white mb-2">
                Jefferson <br /> Bastidas
              </h2>
              <p className="text-stone-500 text-lg md:text-xl font-light mt-4 max-w-sm leading-relaxed">
                Psicoterapia para adultos en Manizales y online, con un enfoque contextual orientado a significado, propósito y acción.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-8">
              Explorar
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-stone-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-teal-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-teal-500 uppercase tracking-widest mb-8">
              Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 text-teal-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Atención presencial</p>
                  <p className="text-stone-500 text-sm mt-1 leading-6">
                    Sede Centro: Cra. 22 #24-24
                    <br />
                    Centro Médico Santa Elena: Avenida Paralela #49-46
                    <br />
                    Manizales, Caldas, Colombia
                  </p>
                </div>
              </div>

              <Link
                href="/psicoterapia-online"
                className="inline-flex text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors"
              >
                También disponible en modalidad online →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-medium">
          <p>&copy; {currentYear} Jefferson Bastidas Mejía. Todos los derechos reservados.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacidad" className="hover:text-stone-400 transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-stone-400 transition-colors">
              Términos de uso
            </Link>
            <Link
              href="/login"
              className="text-stone-700 hover:text-teal-500 transition-colors p-2"
              aria-label="Acceso administrativo"
              title="Acceso privado"
              rel="nofollow"
            >
              <Lock size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 right-0 translate-x-1/3 text-[12rem] font-serif font-black text-stone-800/20 pointer-events-none select-none leading-none opacity-10 whitespace-nowrap">
        JB
      </div>
    </footer>
  );
}
