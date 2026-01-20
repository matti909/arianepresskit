"use client";

import type React from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Waves, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface AboutSectionProps {
  data?: {
    title?: string;
    description?: BlocksContent;
    image?: { url: string };
  };
}

export function AboutSection({ data }: AboutSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
        style={{
          background: `linear-gradient(to right, transparent, oklch(0.51 0.19 28), transparent)`,
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
            <span className="text-gradient-brand">{data?.title}</span>
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: `linear-gradient(to right, oklch(0.44 0.16 27), oklch(0.51 0.19 28))`,
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {data?.description && (
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed [&_em]:text-gradient-brand [&_em]:not-italic [&_em]:font-semibold [&>p>strong]:italic [&>p>strong]:text-red-500">
                <BlocksRenderer content={data.description} />
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div
                className="text-center p-6 bg-zinc-900/50 rounded-lg border backdrop-blur-sm hover:border-opacity-50 transition-colors"
                style={
                  {
                    borderColor: `oklch(0.44 0.16 27 / 0.3)`,
                    "--hover-border": `oklch(0.44 0.16 27 / 0.5)`,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.3)";
                }}
              >
                <Zap
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: `oklch(0.51 0.19 28)` }}
                />
                <h3 className="text-zinc-200 font-semibold mb-2">Versátil</h3>
                <p className="text-sm text-zinc-400">
                  Progressive house, melodic techno, hard techno
                </p>
              </div>
              <div
                className="text-center p-6 bg-zinc-900/50 rounded-lg border backdrop-blur-sm hover:border-opacity-50 transition-colors"
                style={
                  {
                    borderColor: `oklch(0.44 0.16 27 / 0.3)`,
                    "--hover-border": `oklch(0.44 0.16 27 / 0.5)`,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.3)";
                }}
              >
                <Waves
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: `oklch(0.51 0.19 28)` }}
                />
                <h3 className="text-zinc-200 font-semibold mb-2">Inmersiva</h3>
                <p className="text-sm text-zinc-400">
                  Sets dinámicos entre lo hipnótico y contundente
                </p>
              </div>
              <div
                className="text-center p-6 bg-zinc-900/50 rounded-lg border backdrop-blur-sm hover:border-opacity-50 transition-colors"
                style={
                  {
                    borderColor: `oklch(0.44 0.16 27 / 0.3)`,
                    "--hover-border": `oklch(0.44 0.16 27 / 0.5)`,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.44 0.16 27 / 0.3)";
                }}
              >
                <Sparkles
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: `oklch(0.51 0.19 28)` }}
                />
                <h3 className="text-zinc-200 font-semibold mb-2">
                  Underground
                </h3>
                <p className="text-sm text-zinc-400">
                  Fundadora de Kill Sync Producciones
                </p>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-600 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, oklch(0.51 0.19 28 / 0.2), oklch(0.44 0.16 27 / 0.2))`,
                }}
              />
              <Image
                src={data?.image?.url || "/sobremi.jpg"}
                alt="Ariane DJ"
                width={500}
                height={600}
                className="relative w-full h-150 object-cover  rounded-2xl border shadow-2xl rotate-90"
                style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
