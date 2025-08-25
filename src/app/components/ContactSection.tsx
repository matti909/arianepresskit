"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative">
      <div
        className="absolute top-0 left-0 w-40 h-px"
        style={{
          background: `linear-gradient(to right, transparent, oklch(0.51 0.19 28), transparent)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-40 h-px"
        style={{
          background: `linear-gradient(to left, transparent, oklch(0.51 0.19 28), transparent)`,
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-brand">Booking & Contacto</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            ¿Listo para colaborar o necesitas más información? Conectemos.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border backdrop-blur-sm"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              >
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail
                      className="w-5 h-5"
                      style={{ color: `oklch(0.51 0.19 28)` }}
                    />
                    <span className="text-zinc-300">
                      killsyncproducciones@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone
                      className="w-5 h-5"
                      style={{ color: `oklch(0.51 0.19 28)` }}
                    />
                    <span className="text-zinc-300">+54 3625 663769</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: `oklch(0.51 0.19 28)` }}
                    />
                    <span className="text-zinc-300">
                      Resistencia, Chaco, Argentina
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border backdrop-blur-sm"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              >
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Síguenos
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Instagram", "SoundCloud", "Facebook", "YouTube"].map(
                    (platform) => (
                      <Button
                        key={platform}
                        variant="outline"
                        className="justify-start bg-transparent hover:bg-black/50"
                        style={{
                          borderColor: `oklch(0.44 0.16 27)`,
                          color: `oklch(0.51 0.19 28)`,
                        }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {platform}
                      </Button>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border backdrop-blur-sm"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              >
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Press Kit
                </h3>
                <p className="text-zinc-400 mb-6">
                  Descarga fotos de alta resolución, biografía y requerimientos
                  técnicos para medios y booking.
                </p>
                <Button className="w-full bg-gradient-brand text-white hover:opacity-90 font-semibold shadow-lg">
                  Descargar Press Kit
                </Button>
              </div>

              <div
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border backdrop-blur-sm"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              >
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Booking
                </h3>
                <p className="text-zinc-400 mb-4">
                  Disponible para presentaciones en vivo, DJ sets y proyectos
                  colaborativos.
                </p>
                <p className="text-zinc-500 text-sm mb-6">
                  La productora debe proporcionar transporte, abastecimiento y
                  alojamiento si es necesario.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:bg-black/50"
                  style={{
                    borderColor: `oklch(0.44 0.16 27)`,
                    color: `oklch(0.51 0.19 28)`,
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Consulta de Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
