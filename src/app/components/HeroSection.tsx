"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Download, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ArianeTitle from "./TitleSvg";

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ariana.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {/* Logo */}
        <div
          ref={titleRef}
          className={`transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <ArianeTitle />
          </div>
          <div
            className="mt-4 h-1 w-32 mx-auto"
            style={{
              background: `linear-gradient(to right, transparent, oklch(0.51 0.19 28), transparent)`,
            }}
          />
        </div>

        {/* Botones */}
        <div
          ref={buttonsRef}
          className={`transition-all duration-1000 delay-600 ${
            buttonsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-brand text-white hover:opacity-90 font-semibold px-8 py-3 shadow-2xl"
              onClick={() => setShowModal(true)} // 👈 abre modal
              style={{
                borderColor: `oklch(0.51 0.19 28 / 0.2)`,
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              Escuchar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white hover:bg-black/50 px-8 py-3 backdrop-blur-sm bg-transparent"
              style={{
                borderColor: `oklch(0.44 0.16 27)`,
                color: `oklch(0.51 0.19 28)`,
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              Press Kit
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{
              borderColor: `oklch(0.51 0.19 28 / 0.7)`,
            }}
          >
            <div 
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{
                backgroundColor: `oklch(0.51 0.19 28)`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal con iframe */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-3xl mx-4 rounded-xl overflow-hidden">
            {/* Botón cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 z-10 bg-black/70 rounded-full p-2 hover:bg-black/90"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Iframe responsive */}
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/VhoDNkFFuO4"
                title="YouTube video"
                className="absolute inset-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
