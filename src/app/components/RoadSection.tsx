"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function RoadSection() {
  const trajectoryRef = useScrollReveal({
    threshold: 0.2,
    delay: 200,
    direction: "left",
    duration: 1200,
    easing: "smooth",
  });

  return (
    <section ref={trajectoryRef} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="minimal-section">
          <h2 className="text-5xl font-bold text-gray-800 mb-16 text-center gradient-text-subtle">
            Trayectoria
          </h2>

          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden minimal-image-frame">
                <Image
                  src="/pic5.jpg"
                  alt="Ariane performing live"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                En tan solo tres años de trayectoria, ha logrado posicionarse
                como una de las artistas más relevantes de la escena underground
                local, llevando su música a ciudades como:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Buenos Aires",
                  "Corrientes",
                  "Formosa",
                  "Sáenz Peña",
                  "Misiones",
                ].map((city) => (
                  <Badge
                    key={city}
                    className="minimal-badge-location justify-center py-2 text-sm"
                  >
                    <MapPin className="w-3 h-3 mr-1.5" /> {city}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-gradient-to-r from-transparent via-purple-300/50 to-transparent mb-20" />

          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Artistas Colaboradores
            </h3>
            <p className="text-gray-700 mb-12 text-center text-lg max-w-3xl mx-auto">
              Su energía en cabina y su técnica depurada le han permitido
              compartir escenario con referentes como:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Bruno Brugnoli",
                "Pluj",
                "Franco Musachi",
                "Another",
                "WearsPrada",
                "Franzizca",
                "Anita B Queen",
              ].map((artist) => (
                <div key={artist} className="minimal-artist-card">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <p className="text-gray-800 font-medium text-center">
                    {artist}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
