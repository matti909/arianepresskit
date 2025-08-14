"use client";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, MapPin, Play, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useScrollReveal({
    threshold: 0.1,
    direction: "fade",
    duration: 1500,
    easing: "spring",
  });

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-15" />
      <Image
        src="/ariana.webp?height=1080&width=1920"
        alt="Ariane performing"
        fill
        className="object-cover scale-105"
        priority
      />

      {/* Contenido */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 gradient-text tracking-tight">
          ARIANE
        </h1>
        <div className="h-0.5 w-32 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6"></div>

        <p className="text-2xl md:text-3xl mb-8 font-light text-gray-200">
          DJ • Producer • Underground Pioneer
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge className="minimal-badge">
            <MapPin className="w-3 h-3 mr-1.5" /> Córdoba, Córdoba
          </Badge>
          <Badge className="minimal-badge">
            <Music className="w-3 h-3 mr-1.5" /> Techno • Hard Techno •
            Psytrance
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="enhanced-button bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 text-lg"
          >
            <Play className="w-5 h-5 mr-2" /> Explore Press Kit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="minimal-button border-purple-400/50 text-purple-300 hover:bg-purple-50/10 px-8 py-4 text-lg bg-transparent"
          >
            <Download className="w-5 h-5 mr-2" /> Download Assets
          </Button>
        </div>
      </div>
    </section>
  );
}
