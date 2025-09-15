"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Play, Pause, ExternalLink, Volume2 } from "lucide-react";

export function MusicSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: playerRef, isVisible: playerVisible } = useScrollReveal();

  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    {
      title: "Hypnotic Techno Set",
      genre: "TECHNO",
      url: "https://soundcloud.com/ariana-amelia/short-hypnotic-techno-set-ariane",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      description: "Un viaje sonoro profundo que combina elementos hipnóticos con beats contundentes",
      duration: "45:30",
      color: "oklch(0.51 0.19 28)"
    },
    {
      title: "Trance Euro Disco",
      genre: "TRANCE",
      url: "https://soundcloud.com/ariana-amelia/trance-euro-disco-set-from-the-vault-10032024",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID_2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      description: "Una fusión nostálgica entre el trance moderno y las raíces del euro disco",
      duration: "52:15",
      color: "oklch(0.44 0.16 27)"
    }
  ];

  const youtubeVideos = [
    { id: "XX3C4PglCig", title: "Live Session #1" },
    { id: "VhoDNkFFuO4", title: "Live Session #2" },
    { id: "7K8jQDhjoO0", title: "Live Session #3" },
    { id: "-7XXJzPb2VQ", title: "Live Session #4" }
  ];

  const [selectedVideo, setSelectedVideo] = useState(youtubeVideos[0]);

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
              <span
                className="bg-gradient-to-r from-[oklch(0.51_0.19_28)] via-white to-[oklch(0.44_0.16_27)] bg-clip-text text-transparent"
              >
                SONIC
              </span>
              <span className="block text-4xl md:text-6xl mt-2 text-zinc-300 font-light">
                UNIVERSE
              </span>
            </h2>
            
            {/* Visualizador de ondas decorativo */}
            <div className="absolute -top-6 -right-8 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)] animate-pulse"
                  style={{
                    height: `${20 + Math.random() * 30}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Explora el universo sonoro de Ariane a través de sets únicos que definen 
            <span className="text-[oklch(0.51_0.19_28)]"> su identidad artística</span>
          </p>
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
                    ? 'border-[oklch(0.51_0.19_28)] bg-gradient-to-br from-[oklch(0.51_0.19_28)]/10 to-[oklch(0.44_0.16_27)]/5'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }`}
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-[oklch(0.51_0.19_28)] to-[oklch(0.44_0.16_27)]"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                      style={{ 
                        backgroundColor: `${track.color}/20`,
                        color: track.color,
                        border: `1px solid ${track.color}/30`
                      }}
                    >
                      {track.genre}
                    </span>
                    <div className="flex items-center space-x-2 text-zinc-400">
                      <Volume2 className="w-4 h-4" />
                      <span className="text-sm">{track.duration}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[oklch(0.51_0.19_28)] transition-colors">
                    {track.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {track.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      className="flex items-center space-x-2 text-[oklch(0.51_0.19_28)] hover:text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(!isPlaying);
                      }}
                    >
                      {isPlaying && selectedTrack === index ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                      <span className="font-medium">
                        {isPlaying && selectedTrack === index ? 'Pausar' : 'Reproducir'}
                      </span>
                    </button>
                    
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
          <div className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-zinc-800/50 relative overflow-hidden">
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.51_0.19_28)]/5 via-transparent to-[oklch(0.44_0.16_27)]/5"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Info del track actual */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Ahora Reproduciendo
                  </h3>
                  <p className="text-xl text-[oklch(0.51_0.19_28)] mb-4">
                    {tracks[selectedTrack].title}
                  </p>
                  <p className="text-zinc-400 max-w-lg">
                    {tracks[selectedTrack].description}
                  </p>
                </div>

                {/* YouTube iframe */}
                <div className="flex-1 w-full max-w-2xl">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&modestbranding=1&color=white`}
                      title={selectedVideo.title}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  
                  {/* Selector de videos */}
                  <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                    {youtubeVideos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedVideo.id === video.id
                            ? 'bg-[oklch(0.51_0.19_28)] text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
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