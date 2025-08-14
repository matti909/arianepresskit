"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  duration?: number;
  easing?: "smooth" | "spring" | "gentle" | "bounce";
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const {
    threshold = 0.1,
    delay = 0,
    direction = "up",
    duration = 1000,
    easing = "smooth",
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" },
    );

    // Enhanced easing curves
    const easingCurves = {
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      gentle: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    };

    // Set initial state based on direction
    element.style.opacity = "0";
    element.style.transition = `all ${duration}ms ${easingCurves[easing]}`;

    switch (direction) {
      case "up":
        element.style.transform = "translateY(40px)";
        break;
      case "down":
        element.style.transform = "translateY(-40px)";
        break;
      case "left":
        element.style.transform = "translateX(-40px)";
        break;
      case "right":
        element.style.transform = "translateX(40px)";
        break;
      case "scale":
        element.style.transform = "scale(0.9) rotate(-2deg)";
        break;
      case "fade":
        element.style.transform = "none";
        break;
    }

    // Enhanced animate-in class styles
    const style = document.createElement("style");
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) translateX(0) scale(1) rotate(0deg) !important;
      }
    `;
    document.head.appendChild(style);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [threshold, delay, direction, duration, easing]);

  return elementRef;
}
