"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, Volume2 } from "lucide-react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

// Formatea duración de número (ej: 45.3) a string "mm:ss" (ej: "45:30")
function formatDuration(duration: number | string): string {
  if (typeof duration === "string") return duration;
  const minutes = Math.floor(duration);
  const seconds = Math.round((duration - minutes) * 100);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Valores pre-generados para las barras del visualizador (evita problemas de hidratación)
const VISUALIZER_BARS = [
  { height: 26.5, delay: 0, duration: 0.8 },
  { height: 35.2, delay: 0.1, duration: 0.7 },
  { height: 42.8, delay: 0.2, duration: 0.9 },
  { height: 30.4, delay: 0.3, duration: 0.6 },
  { height: 38.1, delay: 0.4, duration: 0.75 },
];

interface Track {
  title: string;
  genre: string;
  duration: number;
  description: string;
  url: string;
  embedUrl: string;
}

interface YouTubeVideo {
  id: number;
  title: string;
  ids: string;
}

interface MusicSectionProps {
  data?: {
    title?: string;
    subTitle?: BlocksContent;
    soundcloud?: Track[];
    youtube?: YouTubeVideo[];
  };
}

export function MusicSection({ data }: MusicSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: playerRef, isVisible: playerVisible } = useScrollReveal();

  const [selectedTrack, setSelectedTrack] = useState(0);

  const tracks = data?.soundcloud || [];
  const youtubeVideos = data?.youtube || [];

  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  // Set first video as selected when data loads
  if (!selectedVideo && youtubeVideos.length > 0) {
    setSelectedVideo(youtubeVideos[0]);
  }

  return (
    <section id="music" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Fondo con efecto de ondas sonoras */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full border border-white/20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full border border-white/10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full border border-white/15 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
              <span className="bg-linear-to-r from-[oklch(0.51_0.19_28)] via-white to-[oklch(0.44_0.16_27)] bg-clip-text text-transparent">
                {data?.title}
              </span>
            </h2>

            {/* Visualizador de ondas decorativo */}
            <div className="absolute -top-6 -right-8 flex space-x-1">
              {VISUALIZER_BARS.map((bar, i) => (
                <div
                  key={i}
                  className="w-1 bg-linear-to-t from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] animate-pulse"
                  style={{
                    height: `${bar.height}px`,
                    animationDelay: `${bar.delay}s`,
                    animationDuration: `${bar.duration}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed [&_strong]:text-[oklch(0.51_0.19_28)]">
            {data?.subTitle && <BlocksRenderer content={data.subTitle} />}
          </div>
        </div>

        {/* Selector de tracks */}
        <div
          ref={contentRef}
          className={`mb-16 transition-all duration-1000 delay-300 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {tracks.map((track, index) => (
              <div
                key={index}
                onClick={() => setSelectedTrack(index)}
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer hover:scale-105 ${
                  selectedTrack === index
                    ? "border-[oklch(0.51_0.19_28)] bg-linear-to-br from-[oklch(0.51_0.19_28)]/10 to-[oklch(0.44_0.16_27)]/5"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                }`}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)]"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[oklch(0.51_0.19_28)]/20 text-[oklch(0.51_0.19_28)] border border-[oklch(0.51_0.19_28)]/30">
                      {track.genre}
                    </span>
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm">
                        {formatDuration(track.duration)}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[oklch(0.51_0.19_28)] transition-colors">
                    {track.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {track.description}
                  </p>

                  <a
                    href={track.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-zinc-500 hover:text-[oklch(0.51_0.19_28)] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">SoundCloud</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Player Principal */}
        <div
          ref={playerRef}
          className={`transition-all duration-1000 delay-600 ${
            playerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-linear-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-zinc-800/50 relative overflow-hidden">
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.51_0.19_28)]/5 via-transparent to-[oklch(0.44_0.16_27)]/5"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Info del track actual */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Ahora Reproduciendo
                  </h3>
                  <p className="text-xl text-[oklch(0.51_0.19_28)] mb-4">
                    {tracks[selectedTrack]?.title}
                  </p>
                  <p className="text-zinc-400 max-w-lg">
                    {tracks[selectedTrack]?.description}
                  </p>
                </div>

                {/* YouTube iframe */}
                <div className="flex-1 w-full max-w-2xl">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                    {selectedVideo && (
                      <iframe
                        src={`https://www.youtube.com/embed/${selectedVideo.ids}?rel=0&modestbranding=1&color=white`}
                        title={selectedVideo.title}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    )}
                  </div>

                  {/* Selector de videos */}
                  <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                    {youtubeVideos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedVideo?.id === video.id
                            ? "bg-[oklch(0.51_0.19_28)] text-white"
                            : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                        }`}
                      >
                        {video.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
