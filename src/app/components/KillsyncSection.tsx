"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface KillSyncSectionProps {
  data?: {
    heading?: string;
    subHeading?: string;
    description?: BlocksContent;
    image?: { url: string };
  };
}

export function KillSyncSection({ data }: KillSyncSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="kill-sync" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient-brand">
              {data?.heading || "Kill Sync"}
            </span>
          </h2>
          <p className="text-xl text-zinc-400">
            {data?.subHeading || "Productora Underground"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-200 ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <Image
                src={data?.image?.url!}
                alt="Kill Sync Event"
                width={400}
                height={600}
                className="relative rounded-2xl w-full h-100 object-cover border border-zinc-800"
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-400 ${
              contentVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {data?.description && (
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed [&_em]:text-gradient-brand [&_em]:not-italic [&_em]:font-semibold [&>p>strong]:italic [&>p>strong]:text-red-500">
                <BlocksRenderer content={data.description} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
