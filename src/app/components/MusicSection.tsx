"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function MusicSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: tracksRef, isVisible: tracksVisible } = useScrollReveal({
    triggerOnce: true,
  });

  const performances = [
    {
      city: "Buenos Aires",
      venue: "Club Underground",
      date: "2024",
      description: "Set de melodic techno en la capital",
      artists: "Bruno Brugnoli, Pluj",
    },
    {
      city: "Córdoba",
      venue: "Techno Warehouse",
      date: "2024",
      description: "Hard techno night con artistas locales",
      artists: "Franco Musachi, Another",
    },
    {
      city: "Corrientes",
      venue: "Kill Sync Event",
      date: "2023",
      description: "Evento propio de la productora",
      artists: "WearsPrada, Franzizca",
    },
    {
      city: "Posadas",
      venue: "Electronic Festival",
      date: "2023",
      description: "Festival de música electrónica",
      artists: "Anita B Queen, Hybrid",
    },
  ];

  return (
    <section id="music" className="py-24 px-6 lg:px-8 relative">
      <div
        className="absolute top-12 right-12 w-32 h-px"
        style={{
          background: `linear-gradient(to right, oklch(0.44 0.16 27), transparent)`,
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
            <span className="text-gradient-brand">
              Presentaciones Destacadas
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Tour por Argentina compartiendo cabina con grandes referentes del
            techno
          </p>
        </div>

        <div
          ref={tracksRef}
          className={`transition-all duration-1000 delay-300 ${
            tracksVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid gap-6">
            {performances.map((performance, index) => (
              <div
                key={performance.city}
                className="group bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 p-6 rounded-xl border backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
                style={
                  {
                    borderColor: `oklch(0.44 0.16 27 / 0.3)`,
                    "--hover-border": `oklch(0.44 0.16 27 / 0.5)`,
                    "--hover-shadow": `oklch(0.44 0.16 27 / 0.2)`,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.5)";
                  e.currentTarget.style.boxShadow = `0 25px 50px -12px oklch(0.44 0.16 27 / 0.2)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.3)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Play button */}
                    <Button
                      size="sm"
                      className="bg-gradient-brand text-white hover:opacity-90 w-12 h-12 rounded-full p-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-5 h-5 ml-0.5" />
                    </Button>

                    {/* Performance info */}
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {performance.city}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: `oklch(0.51 0.19 28)` }}
                      >
                        {performance.venue}
                      </p>
                      <p className="text-zinc-500 text-xs mt-1">
                        {performance.description}
                      </p>
                      <p className="text-zinc-400 text-xs mt-1">
                        Con: {performance.artists}
                      </p>
                    </div>
                  </div>

                  {/* Performance details */}
                  <div className="text-right space-y-1">
                    <div className="flex items-center text-zinc-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {performance.date}
                    </div>
                    <div className="flex items-center text-zinc-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      Argentina
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 backdrop-blur-sm bg-transparent hover:bg-black/50"
              style={{
                borderColor: `oklch(0.44 0.16 27)`,
                color: `oklch(0.51 0.19 28)`,
              }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Ver Todas las Presentaciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
