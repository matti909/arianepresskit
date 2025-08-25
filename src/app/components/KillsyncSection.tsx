"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

export function KillSyncSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="kill-sync" className="py-20 px-4 relative">
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
              Kill Sync
            </span>
          </h2>
          <p className="text-xl text-zinc-400">Productora Underground</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src="/killsync.jpg"
                alt="Kill Sync Event"
                width={400}
                height={600}
                className="relative rounded-2xl w-full h-[400px] object-cover border border-zinc-800"
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-400 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Nace en <span style={{ color: "oklch(0.51 0.19 28)" }}>2022</span>{" "}
              con la visión de generar un espacio seguro para que artistas
              puedan expresar su arte tanto sonoras como gráficas.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Siempre con un sonido enfocado en géneros como{" "}
              <span style={{ color: "oklch(0.51 0.19 28)" }}>Techno</span>,
              <span style={{ color: "oklch(0.51 0.19 28)" }}> Trance</span>,
              tanto sus subgéneros minimalistas como más duros, lograron
              consagrarse en la escena underground local.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Dando visibilización a artistas de la región, como a nacionales de
              la escena underground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
