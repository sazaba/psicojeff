import Image from 'next/image';

export default function ProfessionalProfile() {
  return (
    <section className="py-24 px-4 relative">
        {/* Fondo decorativo */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna Imagen */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-30 transform rotate-3 scale-105"></div>
          {/* REEMPLAZAR SRC CON TU FOTO REAL */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-3/4 bg-slate-800">
             {/* <Image src="/jefferson-bastidas.jpg" alt="Jefferson Bastidas" fill className="object-cover" /> */}
             <div className="flex items-center justify-center h-full text-slate-500">Foto Profesional Aquí</div>
          </div>
        </div>

        {/* Columna Texto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Jefferson Bastidas Mejía</h2>
            <p className="text-cyan-400 text-lg font-medium">Psicólogo Clínico | Col. #143530</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <p className="text-slate-300 leading-relaxed mb-4">
              Con más de 20 años de experiencia, he desarrollado el <strong>Protocolo Integrativo de Alta Precisión (PIAP)</strong>. No creo en las terapias eternas ni en los diagnósticos que etiquetan sin sanar. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              Mi enfoque combina la evidencia científica (DBT, ACT) con una visión integral del ser humano. Trabajo bajo un modelo "boutique": <strong>pocos pacientes al día para garantizar máxima profundidad y energía en cada sesión.</strong>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Espacio dirigido a:</h3>
            <ul className="space-y-3">
              {['Adultos que buscan claridad y estructura emocional.', 'Personas cansadas de terapias pasivas.', 'Quienes valoran un enfoque directo, objetivo y sin juicios.'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}