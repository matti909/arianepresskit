"use client";

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
      <div className="absolute top-12 right-12 w-32 h-px bg-gradient-to-r from-pink-600 to-transparent" />

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
            <span className="bg-gradient-to-r from-white via-pink-200 to-fuchsia-300 bg-clip-text text-transparent">
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
                className="group bg-gradient-to-r from-zinc-900/80 to-zinc-800/80 p-6 rounded-xl border border-pink-700/30 backdrop-blur-sm hover:border-pink-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-900/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Play button */}
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white hover:from-pink-600 hover:to-fuchsia-600 w-12 h-12 rounded-full p-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="w-5 h-5 ml-0.5" />
                    </Button>

                    {/* Performance info */}
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {performance.city}
                      </h3>
                      <p className="text-pink-300 text-sm">
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
              className="border-pink-600 text-pink-200 hover:bg-pink-800/50 hover:border-pink-500 px-8 py-3 backdrop-blur-sm bg-transparent"
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
