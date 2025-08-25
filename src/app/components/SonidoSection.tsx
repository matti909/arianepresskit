"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

export function EstiloSonidoSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="estilo-sonido" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Estilo y{" "}
            <span
              style={{
                background: `linear-gradient(135deg, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sonido
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Ariane se distingue por su capacidad de fusionar melodías
              armónicas, vocales envolventes y bajos potentes, creando sets
              dinámicos que oscilan entre lo hipnótico y lo contundente.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Sus influencias abarcan desde{" "}
              <span style={{ color: "oklch(0.51 0.19 28)" }}>Adam Beyer</span> y
              <span style={{ color: "oklch(0.51 0.19 28)" }}> CLTX</span> hasta
              artistas como
              <span style={{ color: "oklch(0.51 0.19 28)" }}>
                {" "}
                Hernán Cattáneo
              </span>{" "}
              y
              <span style={{ color: "oklch(0.51 0.19 28)" }}>
                {" "}
                Marlon Hoffstadt
              </span>
              , reflejándose en un estilo progresivo que transita por géneros
              como progressive house, melodic techno, techno, trance y hard
              techno.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Cada presentación es un viaje sonoro inmersivo, diseñado para
              hacer de la pista una verdadera experiencia.
            </p>
          </div>

          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-400 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/estiloysonido.jpg"
                alt="Ariane performing"
                width={600}
                height={500}
                className="relative rounded-2xl w-full h-[400px] object-cover border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
