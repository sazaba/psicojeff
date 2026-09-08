"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  BrainCircuit,
  HeartHandshake,
  Maximize2,
  X,
} from "lucide-react";

export interface CredentialItem {
  icon: "evidence" | "holistic" | "contextual";
  title: string;
  institution: string;
  text: string;
  tone: string;
  pdfUrl: string;
}

const iconMap = {
  evidence: BrainCircuit,
  holistic: HeartHandshake,
  contextual: BookOpen,
};

export default function ProfessionalCredentialsClient({
  credentials,
}: {
  credentials: CredentialItem[];
}) {
  const [selected, setSelected] = useState<CredentialItem | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-6">
        {credentials.map((credential) => {
          const Icon = iconMap[credential.icon];

          return (
            <button
              key={credential.title}
              type="button"
              onClick={() => setSelected(credential)}
              className={`w-full text-left p-6 md:p-8 rounded-2xl ${credential.tone} relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-current/10`}
              aria-label={`Ver credencial: ${credential.title} de ${credential.institution}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-current opacity-20 group-hover:w-3 transition-all duration-300 pointer-events-none" />

              <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center md:items-start text-center md:text-left pl-0 md:pl-3 relative z-10 pointer-events-none">
                <div className="mt-1 opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                  <Icon size={32} />
                </div>

                <div className="w-full relative pr-6">
                  <div className="flex flex-col items-center md:items-start gap-1.5">
                    <h3 className="font-bold text-stone-800 text-base md:text-lg">
                      {credential.title}
                    </h3>
                    <span className="inline-block text-[10px] md:text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-white font-semibold text-stone-500 w-fit shadow-sm">
                      {credential.institution}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm md:text-base mt-3 md:mt-2 leading-relaxed">
                    {credential.text}
                  </p>
                  <Maximize2
                    className="absolute top-0 right-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-current"
                    size={18}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="credential-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelected(null)}
            aria-label="Cerrar credencial"
          />

          <div
            className="relative w-full max-w-4xl h-[85vh] bg-stone-50 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-stone-200 z-20">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  {selected.institution}
                </span>
                <h2 id="credential-modal-title" className="font-serif text-lg text-stone-800">
                  {selected.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 w-full bg-stone-200 relative overflow-hidden">
              <iframe
                src={`${selected.pdfUrl}#toolbar=0&navpanes=0`}
                className="absolute inset-0 w-full h-full border-none"
                title={`Diploma de ${selected.institution}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
