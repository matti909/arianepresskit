"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Waves, Sparkles } from "lucide-react";

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-pink-200 to-fuchsia-300 bg-clip-text text-transparent">
              Sobre la Artista
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-fuchsia-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-lg text-zinc-300 leading-relaxed">
              Ariana Amelia Sánchez, conocida artísticamente como Ariane, es una
              DJ emergente con una propuesta sonora en constante evolución.
              Nacida en Resistencia, Chaco, su vínculo con la música comenzó
              desde temprana edad, asistiendo a eventos y festivales que
              marcaron su pasión por la electrónica.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Su fascinación por el género se consolidó en 2010, durante el auge
              del house y EDM, y en 2020 decidió dar el paso definitivo a la
              cabina. Ariane ha desarrollado un enfoque sólido y versátil,
              perfeccionando su técnica tanto de forma autodidacta como a través
              de su formación en Levels Academy.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Además, su compromiso con la escena underground la llevó a fundar{" "}
              <span className="text-gradient-pink font-semibold">
                Kill Sync
              </span>
              , una productora que impulsa eventos de techno, hard techno y
              psytrance, consolidando su papel como una figura activa en la
              expansión del movimiento electrónico en su ciudad.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-pink-800/30 backdrop-blur-sm hover:border-pink-600/50 transition-colors">
                <Zap className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-zinc-200 font-semibold mb-2">Versátil</h3>
                <p className="text-sm text-zinc-400">
                  Progressive house, melodic techno, hard techno
                </p>
              </div>
              <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-pink-800/30 backdrop-blur-sm hover:border-pink-600/50 transition-colors">
                <Waves className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-zinc-200 font-semibold mb-2">Inmersiva</h3>
                <p className="text-sm text-zinc-400">
                  Sets dinámicos entre lo hipnótico y contundente
                </p>
              </div>
              <div className="text-center p-6 bg-zinc-900/50 rounded-lg border border-pink-800/30 backdrop-blur-sm hover:border-pink-600/50 transition-colors">
                <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-zinc-200 font-semibold mb-2">
                  Underground
                </h3>
                <p className="text-sm text-zinc-400">
                  Fundadora de Kill Sync Producciones
                </p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-600 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 rounded-2xl blur-xl" />
              <img
                src="/ariane4.jpg?height=600&width=500"
                alt="Ariane DJ"
                className="relative w-full h-[600px] object-cover rounded-2xl border border-pink-700/30 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
