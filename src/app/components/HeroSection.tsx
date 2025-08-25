"use client";

import { Button } from "@/components/ui/button";
import { Play, Download, Music, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";

export function HeroSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ariana.webp')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="absolute top-20 left-10 w-2 h-32 opacity-60 blur-sm"
        style={{
          background: `linear-gradient(to bottom, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-2 h-24 opacity-60 blur-sm"
        style={{
          background: `linear-gradient(to top, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
        }}
      />
      <div
        className="absolute top-1/3 right-20 w-1 h-40 opacity-40 blur-sm rotate-45"
        style={{
          background: `linear-gradient(to bottom, oklch(0.51 0.19 28), oklch(0.44 0.16 27))`,
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Main Title */}
        <div
          ref={titleRef}
          className={`transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center">
            <Image src="/logoari1.png" alt="logo2" width={300} height={290} />
          </div>
          <div
            className="mt-4 h-1 w-32 mx-auto"
            style={{
              background: `linear-gradient(to right, transparent, oklch(0.51 0.19 28), transparent)`,
            }}
          />
        </div>

        {/* Action Buttons */}
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

          {/* Music platforms */}
          <div className="mt-8 flex items-center justify-center gap-6 text-zinc-400">
            <div className="flex items-center gap-2 text-sm">
              <Music className="w-4 h-4" />
              <span>Kill Sync Producciones</span>
            </div>
            <div className="w-1 h-1 bg-zinc-600 rounded-full" />
            <div className="flex items-center gap-2 text-sm">
              <Headphones className="w-4 h-4" />
              <span>3 años de trayectoria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: `oklch(0.44 0.16 27)` }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: `oklch(0.51 0.19 28)` }}
          />
        </div>
      </div>
    </section>
  );
}
