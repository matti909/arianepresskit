"use client";

import React, { useEffect, useRef } from "react";

export default function ArianeTitle() {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    // Simple fade in animation
    title.style.opacity = "0";
    title.style.transform = "translateY(20px)";
    title.style.transition = "all 1.5s ease-out";
    
    setTimeout(() => {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
    }, 500);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto flex justify-center" style={{ marginTop: '-20px' }}>
      <div
        ref={titleRef}
        className="text-center relative"
        style={{
          fontFamily: '"Audiowide", "Teko", "Play", sans-serif',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 400,
          letterSpacing: '0.3em',
          color: '#ffffff',
          textTransform: 'uppercase'
        }}
      >
        <div className="relative inline-block">
          <span className="neon-text">ARIANE</span>
          
          {/* Twinkling lights effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="twinkle-1"></div>
            <div className="twinkle-2"></div>
            <div className="twinkle-3"></div>
            <div className="twinkle-4"></div>
            <div className="twinkle-5"></div>
          </div>
        </div>
      </div>
      
      {/* Load Google Fonts and styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide:wght@400&family=Teko:wght@300;400;500;600;700&family=Play:wght@400;700&display=swap');
      `}</style>
      
      <style jsx>{`
        .neon-text {
          color: #ffffff;
          text-shadow: 
            0 0 5px #fff,
            0 0 10px #20ffaf,
            0 0 20px #1de9b6,
            0 0 40px #00bcd4,
            0 0 80px #4dd0e1;
          filter: drop-shadow(0 0 20px rgba(29, 233, 182, 0.9));
          animation: neon-flicker 2.5s infinite alternate;
        }
        
        @keyframes neon-flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
            text-shadow: 
              0 0 5px #fff,
              0 0 10px #20ffaf,
              0 0 20px #1de9b6,
              0 0 40px #00bcd4,
              0 0 80px #4dd0e1;
            filter: drop-shadow(0 0 20px rgba(29, 233, 182, 0.9));
          }
          20%, 24%, 55% {
            text-shadow: 
              0 0 3px #fff,
              0 0 8px #20ffaf,
              0 0 15px #1de9b6,
              0 0 25px #00bcd4,
              0 0 35px #4dd0e1;
            filter: drop-shadow(0 0 12px rgba(29, 233, 182, 0.6));
          }
        }
        
        .twinkle-1, .twinkle-2, .twinkle-3, .twinkle-4, .twinkle-5 {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #1de9b6;
          border-radius: 50%;
          box-shadow: 
            0 0 8px #20ffaf,
            0 0 16px #1de9b6,
            0 0 24px #00bcd4;
          animation: twinkle 1.8s infinite ease-in-out;
        }
        
        .twinkle-1 { 
          top: 15%; left: 10%; 
          animation-delay: 0s; 
          background: #20ffaf;
        }
        .twinkle-2 { 
          top: 85%; left: 85%; 
          animation-delay: 0.4s;
          background: #1de9b6;
        }
        .twinkle-3 { 
          top: 25%; left: 75%; 
          animation-delay: 0.8s;
          background: #00bcd4;
        }
        .twinkle-4 { 
          top: 75%; left: 25%; 
          animation-delay: 1.2s;
          background: #4dd0e1;
        }
        .twinkle-5 { 
          top: 5%; left: 95%; 
          animation-delay: 1.6s;
          background: #20ffaf;
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0.5) rotate(0deg); 
          }
          25% {
            opacity: 0.6;
            transform: scale(1.2) rotate(90deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(2) rotate(180deg);
          }
          75% {
            opacity: 0.8;
            transform: scale(1.5) rotate(270deg);
          }
        }
      `}</style>
    </div>
  );
}