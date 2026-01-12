"use client";

import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function HeroButtons() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 delay-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          className="bg-gradient-brand text-white hover:opacity-90 font-semibold px-8 py-3 shadow-2xl"
          onClick={() => {
            const musicSection = document.getElementById('music');
            if (musicSection) {
              musicSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
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
  );
}
