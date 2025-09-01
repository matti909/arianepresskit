"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Complementary() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="complementary-opposites" className="py-20 px-4 relative">
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
            <span
              style={{
                background: `linear-gradient(135deg, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Complementary Opposites
            </span>
          </h2>
          <p className="text-xl text-zinc-400">Duo Electrónico</p>
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
              Duo conformado por{" "}
              <span style={{ color: "oklch(0.51 0.19 28)" }}>Ariane</span> y
              <span style={{ color: "oklch(0.51 0.19 28)" }}>
                {" "}
                Alvaro Figuerola
              </span>{" "}
              en el que unen sus habilidades de djing y su curaduría musical.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Orientado en sonidos{" "}
              <span style={{ color: "oklch(0.51 0.19 28)" }}>rápidos</span> e
              <span style={{ color: "oklch(0.51 0.19 28)" }}> intensos</span>,
              creando una experiencia sonora única que combina las fortalezas
              individuales de ambos artistas.
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
              <img
                src="/complementary-opposites-duo-performing-together-wi.png"
                alt="Complementary Opposites Duo"
                className="relative rounded-2xl w-full h-[400px] object-cover border border-zinc-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
