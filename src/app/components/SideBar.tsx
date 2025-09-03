"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Instagram, AudioLines } from "lucide-react";
import { IconBrandTiktok, IconBrandYoutube } from "@tabler/icons-react";

export default function SocialSideBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-all duration-1000 hidden lg:block ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <div className="flex flex-col gap-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full p-3">
        {/* Instagram */}
        <a
          href="https://instagram.com/ariane.dj"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-black/40 border border-white/10 hover:border-[oklch(0.51_0.19_28)] transition-all duration-300 hover:bg-[oklch(0.51_0.19_28)]/10"
        >
          <Instagram className="w-5 h-5 text-white group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@ariane.dj?_t=ZM-8zOzS7kReBJ&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-black/40 border border-white/10 hover:border-[oklch(0.51_0.19_28)] transition-all duration-300 hover:bg-[oklch(0.51_0.19_28)]/10"
        >
          <IconBrandTiktok className="w-5 h-5 text-white group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@arianejmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-black/40 border border-white/10 hover:border-[oklch(0.51_0.19_28)] transition-all duration-300 hover:bg-[oklch(0.51_0.19_28)]/10"
        >
          <IconBrandYoutube className="w-5 h-5 text-white group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300" />
        </a>

        {/* SoundCloud */}
        <a
          href="https://soundcloud.com/ariana-amelia"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-black/40 border border-white/10 hover:border-[oklch(0.51_0.19_28)] transition-all duration-300 hover:bg-[oklch(0.51_0.19_28)]/10"
        >
          <AudioLines className="w-5 h-5 text-white group-hover:text-[oklch(0.51_0.19_28)] transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}
