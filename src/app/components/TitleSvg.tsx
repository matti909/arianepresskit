"use client";

import React from "react";
import Image from "next/image";

export default function ArianeTitle() {
  return (
    <div className="w-full max-w-lg mx-auto flex justify-center" style={{ marginTop: '5px' }}>
      <Image 
        src="/logoari2.png"
        alt="Ariane"
        width={360}
        height={90}
        className="w-full h-auto max-w-full"
        priority
        style={{
          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
          opacity: 0,
          animation: 'fadeIn 1.5s ease-out 0.3s forwards'
        }}
      />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}