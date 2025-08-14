"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Calendar, Music, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function BioSection() {
  const bioRef = useScrollReveal({
    threshold: 0.2,
    delay: 100,
    direction: "up",
    duration: 1200,
    easing: "smooth",
  });

  return (
    <section ref={bioRef} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="minimal-section">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-800 mb-8 gradient-text-subtle">
                Biografía
              </h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-purple-500 to-purple-600 mb-8"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  <strong className="text-purple-700 font-semibold">
                    Ariana Amelia Sánchez
                  </strong>
                  , conocida artísticamente como{" "}
                  <strong className="text-purple-600 font-semibold">
                    Ariane
                  </strong>
                  , es una DJ emergente con una propuesta sonora en constante
                  evolución.
                </p>
                <p>
                  Nacida en{" "}
                  <em className="text-purple-600 font-medium">
                    Resistencia, Chaco
                  </em>
                  , su vínculo con la música comenzó desde temprana edad,
                  asistiendo a eventos y festivales que marcaron su pasión por
                  la electrónica.
                </p>
                <p>
                  Su fascinación por el género se consolidó en 2010, durante el
                  auge del house y EDM, y en 2020 decidió dar el paso definitivo
                  a la cabina, explorando el arte del DJing más allá de la pista
                  de baile.
                </p>
              </div>

              <Button className="enhanced-button bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="w-4 h-4 mr-2" /> Ver Más
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden minimal-image-frame">
                <Image
                  src="/ariane4.jpg"
                  alt="Ariane portrait"
                  width={350}
                  height={450}
                  className="object-contain w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="floating-accent-minimal bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="floating-accent-minimal-alt bg-gradient-to-r from-purple-700 to-purple-600 rounded-2xl p-4">
                <Music className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
