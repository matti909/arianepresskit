"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Music2, MonitorSpeaker, Volume2, Disc3 } from "lucide-react";
import Image from "next/image";

interface RiderTecnicoSectionProps {
  data?: {
    title?: string;
    subTitle?: string;
    imagebg?: { url: string };
    cdj?: { url: string };
  };
}

export function RiderTecnicoSection({ data }: RiderTecnicoSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: equipmentRef, isVisible: equipmentVisible } = useScrollReveal();

  const requerimientos = [
    {
      categoria: "Mixer",
      especificaciones: "Pioneer / Allen & Heath",
      icon: Volume2,
    },
    {
      categoria: "CDJs",
      especificaciones: "CDJ 2000 o superiores",
      icon: Disc3,
    },
    {
      categoria: "Monitores",
      especificaciones: "Dos monitores de retorno, uno de cada lado",
      icon: MonitorSpeaker,
    },
  ];

  return (
    <section
      id="rider-tecnico"
      className="relative min-h-screen flex items-center justify-center py-24 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data?.imagebg?.url || "/rider.jpg"}
          alt="Technical Rider Background"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/75"></div>
        {/* Gradient overlay adicional */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80"></div>
      </div>

      {/* Efectos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-white/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full border border-white/10 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Título de sección */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-[oklch(0.51_0.19_28)] via-white to-[oklch(0.44_0.16_27)] bg-clip-text text-transparent">
                {data?.title || "TECHNICAL RIDER"}
              </span>
            </h2>

            {/* Icono decorativo */}
            <div className="absolute -top-8 -right-12 hidden md:block">
              <Music2
                className="w-12 h-12 opacity-30"
                style={{ color: "oklch(0.51 0.19 28)" }}
              />
            </div>
          </div>

          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-6">
            {data?.subTitle || "Especificaciones técnicas y requerimientos de equipamiento para presentaciones profesionales"}
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen del equipo */}
          <div
            ref={equipmentRef}
            className={`transition-all duration-1000 delay-300 ${
              equipmentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-linear-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>

              {/* Imagen */}
              <div className="relative">
                <Image
                  src={data?.cdj?.url || "/pioneer-cdj-nexus-removebg-preview.png"}
                  alt="Pioneer CDJ Setup"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Badge de equipo profesional */}
            </div>
          </div>

          {/* Especificaciones técnicas */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-600 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Requerimientos de{" "}
                  <span className="text-gradient-brand">Equipamiento</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Para garantizar una presentación de calidad profesional, se
                  requiere el siguiente equipamiento técnico:
                </p>
              </div>

              {/* Lista de requerimientos */}
              <div className="space-y-4">
                {requerimientos.map((req, index) => {
                  const Icon = req.icon;
                  return (
                    <div
                      key={index}
                      className="group relative"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Glow sutil en hover */}
                      <div className="absolute -inset-1 bg-linear-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      {/* Card de requerimiento */}
                      <div className="relative bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 border border-zinc-800/50 group-hover:border-[oklch(0.51_0.19_28)]/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          {/* Icono */}
                          <div className="shrink-0">
                            <div
                              className="w-14 h-14 rounded-xl flex items-center justify-center"
                              style={{
                                background: `linear-gradient(135deg, oklch(0.51 0.19 28 / 0.2), oklch(0.44 0.16 27 / 0.2))`,
                                border: `1px solid oklch(0.51 0.19 28 / 0.3)`,
                              }}
                            >
                              <Icon
                                className="w-7 h-7"
                                style={{ color: "oklch(0.51 0.19 28)" }}
                              />
                            </div>
                          </div>

                          {/* Contenido */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[oklch(0.51_0.19_28)] transition-colors">
                              {req.categoria}
                            </h4>
                            <p className="text-zinc-400 leading-relaxed">
                              {req.especificaciones}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Nota adicional */}
              <div className="mt-10 p-6 bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800/30">
                <div className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{
                      backgroundColor: "oklch(0.51 0.19 28)",
                      boxShadow: "0 0 10px oklch(0.51 0.19 28 / 0.5)",
                    }}
                  ></div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <span className="text-white font-semibold">Nota:</span> Para
                    consultas sobre requerimientos adicionales o
                    especificaciones particulares de cada evento, por favor
                    contactar con anticipación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
