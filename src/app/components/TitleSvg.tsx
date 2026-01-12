"use client";

import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ArianeTitleProps {
  logoUrl?: string;
}

export default function ArianeTitle({ logoUrl = "/logoari2.png" }: ArianeTitleProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="w-full max-w-lg mx-auto flex justify-center" style={{ marginTop: '5px' }}>
        <Image
          src={logoUrl}
          alt="Ariane"
          width={1800}
          height={321}
          className="w-full h-auto max-w-full"
          priority
          style={{
            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
          }}
        />
      </div>
      <div
        className="mt-4 h-1 w-32 mx-auto"
        style={{
          background: `linear-gradient(to right, transparent, oklch(0.51 0.19 28), transparent)`,
        }}
      />
    </div>
  );
}