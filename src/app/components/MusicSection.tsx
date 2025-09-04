"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function MusicSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const presentaciones = [
    {
      fecha: "23",
      mes: "AGO",
      evento: "Ariane b2b Somnambulisme",
      lugar: "Córdoba",
      estado: "Confirmado",
    },
    {
      fecha: "18",
      mes: "SEP",
      evento: "Complementary Opposites",
      lugar: "CABA",
      estado: "Confirmado",
    },
  ];

  return (
    <section id="presentaciones" className="py-20 px-4 relative">
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
              Próximas Presentaciones
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Próximos eventos y presentaciones donde podrás experimentar los sets
            únicos de Ariane
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1000 delay-200 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid gap-6 md:gap-8">
            {presentaciones.map((pres, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-[oklch(0.51_0.19_28)]/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                    {/* Calendar-style date */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-xl p-4 text-center min-w-[80px]">
                        <div className="text-2xl md:text-3xl font-bold text-white">
                          {pres.fecha}
                        </div>
                        <div className="text-sm font-medium text-white/90">
                          {pres.mes}
                        </div>
                      </div>
                    </div>

                    {/* Event details */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300">
                            {pres.evento}
                          </h3>
                          <div className="flex items-center gap-4 text-zinc-400">
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-medium">{pres.lugar}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status badge */}
                        <div className="flex-shrink-0">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                              pres.estado === "Confirmado"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : "bg-[oklch(0.51_0.19_28)]/20 text-[oklch(0.51_0.19_28)] border border-[oklch(0.51_0.19_28)]/30"
                            }`}
                          >
                            {pres.estado}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
