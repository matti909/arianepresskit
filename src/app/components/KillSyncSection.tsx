"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Music } from "lucide-react";
import Image from "next/image";

export default function KillSyncSection() {
  const killSyncRef = useScrollReveal({
    threshold: 0.2,
    delay: 300,
    direction: "right",
    duration: 1200,
    easing: "smooth",
  });

  return (
    <section ref={killSyncRef} className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="minimal-section">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-800 mb-8">
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Kill Sync
                </span>{" "}
                & Formación
              </h2>
              <div className="h-0.5 w-32 bg-gradient-to-r from-purple-500 to-purple-600 mb-8"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Ariane ha desarrollado un enfoque sólido y versátil,
                  perfeccionando su técnica tanto de forma autodidacta como a
                  través de su formación en{" "}
                  <strong className="text-purple-700 font-semibold">
                    Levels Academy
                  </strong>
                  .
                </p>
                <p>
                  Además, su compromiso con la escena underground la llevó a
                  fundar{" "}
                  <strong className="text-purple-600 font-semibold">
                    Kill Sync
                  </strong>
                  , una productora que impulsa eventos de <em>techno</em>,{" "}
                  <em>hard techno</em> y <em>psytrance</em>, consolidando su
                  papel como una figura activa en la expansión del movimiento
                  electrónico en su ciudad.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="minimal-badge-genre">Techno</Badge>
                <Badge className="minimal-badge-genre">Hard Techno</Badge>
                <Badge className="minimal-badge-genre">Psytrance</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden minimal-image-frame">
                <Image
                  src="/1a.jpg"
                  alt="Kill Sync events"
                  width={600}
                  height={600}
                  className="object-contain w-full h-full hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="floating-accent-minimal bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6">
                <Music className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
