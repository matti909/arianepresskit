"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Calendar, MapPin, Clock, Ticket, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface Fecha {
  id: number;
  title: string;
  description?: BlocksContent;
  date: string;
  hours: number;
  club: string;
  city: string;
  ticketsUrl?: string;
  banner?: { url: string };
}

interface PresentationsSectionProps {
  data?: {
    title?: string;
    description?: BlocksContent;
    fechas?: Fecha[];
  };
}

export function PresentationsSection({ data }: PresentationsSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();

  const presentaciones = data?.fechas || [];

  const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO + "T00:00:00");
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = fecha.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase();
    const mesCompleto = fecha.toLocaleDateString('es-ES', { month: 'long' });
    const año = fecha.getFullYear();

    return { dia, mes, mesCompleto, año };
  };

  return (
    <section id="presentaciones" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white/20 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full border border-white/10 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              <span
                className="bg-gradient-to-r from-[oklch(0.51_0.19_28)] via-white to-[oklch(0.44_0.16_27)] bg-clip-text text-transparent"
              >
                {data?.title || "UPCOMING SHOWS"}
              </span>
            </h2>
          </div>

          <div className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-6 [&_strong]:text-[oklch(0.51_0.19_28)]">
            {data?.description && <BlocksRenderer content={data.description} />}
          </div>
        </div>

        {/* Grid de eventos */}
        <div
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid gap-8 lg:gap-10">
            {presentaciones.map((evento, index) => {
              const { dia, mes, mesCompleto, año } = formatearFecha(evento.date);

              return (
                <div
                  key={evento.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>

                  {/* Card principal */}
                  <div className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-zinc-800/50 group-hover:border-[oklch(0.51_0.19_28)]/50 transition-all duration-500">
                    <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                      {/* Banner del evento */}
                      <div className="relative h-64 lg:h-full overflow-hidden">
                        <Image
                          src={evento.banner?.url || "/ariana.webp"}
                          alt={evento.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                        {/* Fecha en el banner */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                            <div className="text-4xl font-bold text-white leading-none">{dia}</div>
                            <div className="text-sm font-medium text-[oklch(0.51_0.19_28)] uppercase tracking-wider mt-1">
                              {mes} {año}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contenido del evento */}
                      <div className="p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          {/* Título */}
                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300 tracking-tight">
                            {evento.title}
                          </h3>

                          {/* Descripción */}
                          {evento.description && (
                            <div className="text-zinc-400 text-lg leading-relaxed mb-6 [&_strong]:text-[oklch(0.51_0.19_28)]">
                              <BlocksRenderer content={evento.description} />
                            </div>
                          )}

                          {/* Info del evento */}
                          <div className="space-y-3 mb-8">
                            {/* Fecha completa */}
                            <div className="flex items-center gap-3 text-zinc-300">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50">
                                <Calendar className="w-5 h-5 text-[oklch(0.51_0.19_28)]" />
                              </div>
                              <div>
                                <span className="font-medium capitalize">{mesCompleto} {dia}, {año}</span>
                                {evento.hours && (
                                  <span className="text-zinc-500 ml-2">• {evento.hours}:00 hs</span>
                                )}
                              </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-center gap-3 text-zinc-300">
                              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50">
                                <MapPin className="w-5 h-5 text-[oklch(0.51_0.19_28)]" />
                              </div>
                              <div>
                                <span className="font-medium">{evento.club}</span>
                                <span className="text-zinc-500 ml-2">• {evento.city}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA - Botón de tickets */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          {evento.ticketsUrl ? (
                            <a
                              href={evento.ticketsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] hover:from-[oklch(0.56_0.19_28)] hover:to-[oklch(0.49_0.16_27)] rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[oklch(0.51_0.19_28)]/50"
                            >
                              <Ticket className="w-6 h-6" />
                              <span>CONSEGUIR TICKETS</span>
                              <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </a>
                          ) : (
                            <div className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800/50 rounded-xl text-zinc-500 font-bold text-lg border border-zinc-700/50">
                              <Clock className="w-6 h-6" />
                              <span>PRÓXIMAMENTE</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mensaje si no hay eventos */}
          {presentaciones.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800/50 mb-6">
                <Calendar className="w-10 h-10 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-400 mb-3">
                No hay eventos programados
              </h3>
              <p className="text-zinc-500">
                Mantente atento a las redes sociales para conocer las próximas fechas
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
