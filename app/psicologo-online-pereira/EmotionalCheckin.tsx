"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, HeartPulse, RotateCcw, ShieldCheck } from "lucide-react";

const questions = [
  { domain: "Ansiedad", text: "Me ha costado detener las preocupaciones o desconectar la mente." },
  { domain: "Estado de ánimo", text: "He sentido desánimo o menos interés en cosas que normalmente valoro." },
  { domain: "Estrés", text: "He sentido que las responsabilidades del día a día me sobrepasan." },
  { domain: "Burnout", text: "Termino mis jornadas emocionalmente agotado o sin energía para mí." },
  { domain: "Ansiedad", text: "Me ha costado descansar por anticipar situaciones que podrían salir mal." },
  { domain: "Estado de ánimo", text: "He sentido una desconexión persistente de mis actividades o relaciones." },
  { domain: "Estrés", text: "He estado más irritable o tenso frente a situaciones cotidianas." },
  { domain: "Burnout", text: "Mi relación con el trabajo o las responsabilidades se ha vuelto distante o desgastante." },
] as const;

const answers = ["Nunca", "Algunos días", "Con frecuencia", "Casi todos los días"] as const;
const areas = ["Ansiedad", "Estado de ánimo", "Estrés", "Burnout"] as const;

export default function EmotionalCheckin() {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const complete = step === questions.length;
  const current = questions[Math.min(step, questions.length - 1)];
  const count = responses.filter((v) => v !== null).length;
  const outcome = useMemo(() => {
    if (!complete || count !== questions.length) return null;
    const ranked = areas.map((area) => ({
      area,
      score: questions.reduce((total, q, i) => total + (q.domain === area ? responses[i] ?? 0 : 0), 0),
    })).sort((a, b) => b.score - a.score);
    return ranked[0].score === 0 ? [] : ranked.filter((item) => item.score > 0 && item.score >= ranked[0].score - 1).slice(0, 2).map((item) => item.area);
  }, [responses, complete, count]);

  const reset = () => { setStep(0); setResponses(Array(questions.length).fill(null)); };

  return (
    <section id="chequeo" className="scroll-mt-28 px-5 py-20 md:px-8 md:py-28" aria-labelledby="checkin-heading">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-white/90 bg-white/85 p-6 shadow-[0_30px_100px_-55px_rgba(15,23,42,0.34)] sm:p-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14 lg:p-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Un momento para ti</p>
          <h2 id="checkin-heading" className="font-serif text-3xl font-semibold leading-tight text-stone-900 md:text-5xl">
            ¿Cómo te has sentido últimamente?
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-600">
            Ocho preguntas breves para reflexionar sobre ansiedad, estado de ánimo, estrés y agotamiento.
            Responde pensando en las últimas dos semanas.
          </p>
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-teal-50 p-4 text-sm leading-6 text-teal-950">
            <ShieldCheck className="mt-1 shrink-0 text-teal-700" size={20} aria-hidden="true" />
            <p><strong>Privado y orientativo.</strong> No es una prueba clínica validada, no diagnostica ni mide gravedad. Tus respuestas permanecen en esta página y no se envían ni se guardan.</p>
          </div>
        </div>
        <div className="rounded-[2rem] border border-teal-100 bg-gradient-to-br from-[#f0faf7] to-white p-5 sm:p-8">
          <div className="mb-8 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-900"><HeartPulse size={18} aria-hidden="true" /> Chequeo emocional</span>
            <span className="text-sm font-medium tabular-nums text-stone-500">{complete ? "Completado" : String(step + 1) + " / " + String(questions.length)}</span>
          </div>
          <div className="mb-9 h-2 overflow-hidden rounded-full bg-teal-100" role="progressbar" aria-label="Progreso del chequeo" aria-valuemin={0} aria-valuemax={questions.length} aria-valuenow={complete ? questions.length : count}>
            <div className="h-full rounded-full bg-teal-600 transition-[width] duration-300" style={{ width: String((complete ? questions.length : count) * 100 / questions.length) + "%" }} />
          </div>
          {complete ? (
            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-700">Tu reflexión</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-stone-900">Gracias por escucharte</h3>
              {outcome && outcome.length > 0 ? (
                <p className="mt-5 leading-7 text-stone-600">
                  En tus respuestas aparecen con mayor frecuencia experiencias relacionadas con <strong>{outcome.join(" y ").toLowerCase()}</strong>. Esto no determina un diagnóstico: es una invitación a observar cómo te estás sintiendo y qué apoyo te gustaría recibir.
                </p>
              ) : (
                <p className="mt-5 leading-7 text-stone-600">Marcaste «Nunca» en todas las preguntas. Eso no invalida otras inquietudes que quieras conversar con un profesional.</p>
              )}
              <p className="mt-4 text-sm leading-6 text-stone-500">Si lo que estás viviendo interfiere con tu bienestar, considera consultar. Si estás en crisis o peligro inmediato, busca servicios de emergencia de tu zona.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.link/2x3i8s" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-teal-800">Consultar disponibilidad <ArrowRight className="ml-2" size={17} aria-hidden="true" /></a>
                <button type="button" onClick={reset} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-teal-200 px-5 py-3 text-sm font-bold text-teal-900 transition hover:bg-white"><RotateCcw size={16} aria-hidden="true" /> Volver a empezar</button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-700">{current.domain}</p>
              <h3 className="mt-4 min-h-24 font-serif text-2xl font-semibold leading-snug text-stone-900 sm:text-3xl">{current.text}</h3>
              <fieldset className="mt-7 grid gap-3 sm:grid-cols-2">
                <legend className="sr-only">Frecuencia durante las últimas dos semanas</legend>
                {answers.map((option, i) => (
                  <label key={option} className={"flex min-h-14 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition " + (responses[step] === i ? "border-teal-600 bg-teal-50 text-teal-950 ring-1 ring-teal-600" : "border-stone-200 bg-white text-stone-700 hover:border-teal-300")}>
                    <input type="radio" name={"question-" + step} value={i} checked={responses[step] === i} onChange={() => setResponses((previous) => previous.map((value, idx) => idx === step ? i : value))} className="accent-teal-700" />
                    {option}
                  </label>
                ))}
              </fieldset>
              <div className="mt-8 flex items-center justify-between gap-4">
                <button type="button" onClick={() => setStep(Math.max(step - 1, 0))} disabled={step === 0} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-stone-600 hover:text-teal-700 disabled:opacity-30"><ArrowLeft size={17} aria-hidden="true" /> Anterior</button>
                <button type="button" onClick={() => setStep(step + 1)} disabled={responses[step] === null} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-40">{step === questions.length - 1 ? "Ver reflexión" : "Siguiente"} <ArrowRight size={17} aria-hidden="true" /></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
