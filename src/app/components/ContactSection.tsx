"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative">
      {/* Metallic accents */}
      <div className="absolute top-0 left-0 w-40 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
      <div className="absolute bottom-0 right-0 w-40 h-px bg-gradient-to-l from-transparent via-zinc-400 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to collaborate or need more information?
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-zinc-400" />
                    <span className="text-zinc-300">
                      booking@ariane-music.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-zinc-400" />
                    <span className="text-zinc-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                    <span className="text-zinc-300">Los Angeles, CA</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Follow the Journey
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-500 justify-start bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Spotify
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-500 justify-start bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    SoundCloud
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-500 justify-start bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-600 text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-500 justify-start bg-transparent"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>

            {/* Press Kit */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Press Kit
                </h3>
                <p className="text-zinc-400 mb-6">
                  Download high-resolution photos, biography, and technical
                  requirements for media and booking purposes.
                </p>
                <Button className="w-full bg-gradient-to-r from-zinc-200 to-zinc-100 text-black hover:from-zinc-100 hover:to-zinc-200 font-semibold shadow-lg">
                  Download Press Kit
                </Button>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 rounded-2xl border border-zinc-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-zinc-200 mb-6">
                  Booking
                </h3>
                <p className="text-zinc-400 mb-6">
                  Available for live performances, DJ sets, and collaborative
                  projects worldwide.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-zinc-600 text-zinc-200 hover:bg-zinc-800/50 hover:border-zinc-500 bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Booking Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
