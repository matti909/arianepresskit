"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

export function Formulario() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    ciudad: "",
    mensaje: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <div
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border backdrop-blur-sm"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              >
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Envíanos un Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombreCompleto"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Nombre Completo
                    </label>
                    <Input
                      id="nombreCompleto"
                      name="nombreCompleto"
                      type="text"
                      value={formData.nombreCompleto}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-zinc-200 focus:border-[oklch(0.51_0.19_28)] focus:ring-[oklch(0.51_0.19_28)]"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ciudad"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Ciudad
                    </label>
                    <Input
                      id="ciudad"
                      name="ciudad"
                      type="text"
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      required
                      className="bg-zinc-800/50 border-zinc-700 text-zinc-200 focus:border-[oklch(0.51_0.19_28)] focus:ring-[oklch(0.51_0.19_28)]"
                      placeholder="Tu ciudad"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-zinc-300 mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-zinc-800/50 border-zinc-700 text-zinc-200 focus:border-[oklch(0.51_0.19_28)] focus:ring-[oklch(0.51_0.19_28)] resize-none"
                      placeholder="Cuéntanos sobre tu evento, colaboración o consulta..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-brand text-white hover:opacity-90 font-semibold shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Information */}
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

                <SocialLinks />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
