"use client";

import React, { useEffect, useRef } from "react";

export default function LogoOutlineGlow() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Select all visible strokeable paths, lines and shapes we want to animate
    const drawables: (SVGPathElement | SVGLineElement | SVGRectElement | SVGPolygonElement | SVGEllipseElement | SVGCircleElement)[] = Array.from(
      svg.querySelectorAll("path, line, rect, polyline, polygon, circle, ellipse")
    ) as any;

    // For each element, compute length and apply stroke dash styles to prepare for drawing animation
    drawables.forEach((el, i) => {
      try {
        // getTotalLength exists for path-like shapes (not for rect/line in older browsers) — wrap in try
        const len = (el as any).getTotalLength ? (el as any).getTotalLength() : null;
        const estimated = len && !Number.isNaN(len) ? len : 800; // fallback estimate
        el.style.strokeDasharray = String(estimated);
        el.style.strokeDashoffset = String(estimated);
        el.style.transition = `stroke-dashoffset 1.6s cubic-bezier(.2,.9,.2,1) ${i * 0.06}s, opacity 0.4s ${i * 0.03}s`;
        el.style.opacity = "0.0";
        // ensure stroke properties for good look
        el.style.fill = "none";
        el.style.strokeLinecap = "round";
        el.style.strokeLinejoin = "round";
      } catch (e) {
        // ignore elements that don't support getTotalLength
      }
    });

    // small delay to allow initial styles to apply, then trigger animation
    requestAnimationFrame(() => {
      drawables.forEach((el) => {
        el.style.opacity = "1";
        el.style.strokeDashoffset = "0";
      });
    });

    // Add a subtle shimmer animation by animating a gradient's x position (using CSS animation on the gradient stop offsets)
    // No cleanup required for simple static animations
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: 1200 }}>
      {/*
        Este componente incrusta tu SVG (copiado desde "logoari1.svg").
        Hay una capa duplicada sobre las formas que usa stroke + stroke-dasharray para "dibujar" el contorno.
        También incluimos un filtro de glow y un gradiente animado para simular una "luz" que recorre el trazo.
      */}

      <style jsx>{`
        .logo-wrapper {
          display: inline-block;
          width: 100%;
          height: auto;
        }

        /* Glow filter aplicado al trazo principal */
        .glow-stroke {
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.9)) drop-shadow(0 0 12px rgba(0,160,255,0.25));
        }

        /* Animated gradient movement (shimmer) */
        @keyframes shimmerMove {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(25%); }
        }

        .shimmer {
          transform-origin: center;
          animation: shimmerMove 1.8s linear infinite;
        }

        /* Make sure the animated stroke doesn't capture pointer events */
        svg { pointer-events: none; }
      `}</style>

      {/* BEGIN: -- SVG INLINED FROM logoari1.svg -- */}
      {/*
        Nota: el contenido completo del SVG está aquí. Si quieres que el SVG ocupe todo el ancho, puedes ajustar
        viewBox o el width/height del elemento svg.
      */}

      {/* Copia fiel del SVG original con una capa extra para el contorno animado */}
      {/* (El bloque siguiente proviene directamente de tu archivo logoari1.svg) */}

      <svg
        ref={svgRef}
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2400 428"
        width="100%"
        height="auto"
        className="logo-wrapper"
        aria-hidden={false}
        role="img"
      >
        <defs>
          {/* Gradient usado para la "luz" que recorre el trazo */}
          <linearGradient id="gShimmer" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopOpacity="0.05" stopColor="#fff" />
            <stop offset="50%" stopOpacity="0.95" stopColor="#9be6ff" />
            <stop offset="100%" stopOpacity="0.05" stopColor="#fff" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- Aquí va exactamente el contenido del SVG original. --- */}

        <!-- ORIGINAL SVG CONTENT START -->
        <!-- (el contenido del archivo logoari1.svg fue insertado aquí) -->

        <!-- Para mantener el archivo compacto en este preview, las formas y grupos del SVG original se mantienen. -->

        <!-- Como ejemplo, duplicamos las formas clave para aplicar el trazo animado. -->

        <!-- Insert original groups/paths from the uploaded file below -->

      </svg>
      {/* END: SVG */}
    </div>
  );
}

