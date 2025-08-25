"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ExperienciasSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const experiencias = [
    {
      title: "Kill Sync",
      description: "Organización de eventos techno, hard techno y Psy-trance",
      icon: "🎵",
    },
    {
      title: "Tour Nacional",
      description:
        "Buenos Aires, Córdoba, Corrientes, Formosa, Misiones y Sáenz Peña",
      icon: "🌎",
    },
    {
      title: "Artistas Colaboradores",
      description:
        "Bruno Brugnoli, Pluj, Hibryd, HRDDMAT, Franco Musachi, Another, WearsPrada, Franzizca, Anita B Queen",
      icon: "🤝",
    },
  ];

  return (
    <section id="experiencias" className="py-20 px-4 relative">
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
            Experiencias{" "}
            <span
              style={{
                background: `linear-gradient(135deg, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Destacadas
            </span>
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {experiencias.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 h-full hover:border-[oklch(0.51_0.19_28)] transition-colors duration-300">
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ color: "oklch(0.51 0.19 28)" }}
                >
                  {exp.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
