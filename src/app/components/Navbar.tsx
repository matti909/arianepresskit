"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Download, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Música", href: "#music" },
    { name: "Estilo", href: "#style" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl" : "bg-transparent"
      }`}
      style={{
        borderBottomColor: isScrolled
          ? `oklch(0.44 0.16 27 / 0.3)`
          : "transparent",
        borderBottomWidth: isScrolled ? "1px" : "0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logoari2.png" alt="logo" width={100} height={70} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 px-3 py-2 text-xl font-bold transition-colors duration-200 rounded-lg hover:text-white"
                  style={
                    {
                      "--hover-bg": `oklch(0.44 0.16 27 / 0.3)`,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "oklch(0.44 0.16 27 / 0.3)";
                    e.currentTarget.style.color = "oklch(0.51 0.19 28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-gradient-brand hover:opacity-90 text-white shadow-lg"
              style={{
                borderColor: `oklch(0.51 0.19 28 / 0.3)`,
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Press Kit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white"
              style={
                {
                  "--hover-bg": `oklch(0.44 0.16 27 / 0.3)`,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "oklch(0.44 0.16 27 / 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-xl rounded-lg mt-2 border"
              style={{ borderColor: `oklch(0.44 0.16 27 / 0.3)` }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "oklch(0.44 0.16 27 / 0.3)";
                    e.currentTarget.style.color = "oklch(0.51 0.19 28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full bg-gradient-brand hover:opacity-90 text-white"
                  style={{
                    borderColor: `oklch(0.51 0.19 28 / 0.3)`,
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Press Kit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
