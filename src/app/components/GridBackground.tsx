export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Blurred grid edges - Top Left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-zinc-600/40 via-zinc-700/20 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Blurred grid edges - Top Right */}
      <div className="absolute -top-40 -right-40 w-96 h-96 opacity-30">
        <div className="w-full h-full bg-gradient-to-bl from-zinc-600/40 via-zinc-700/20 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Blurred grid edges - Bottom Left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 opacity-30">
        <div className="w-full h-full bg-gradient-to-tr from-zinc-600/40 via-zinc-700/20 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Blurred grid edges - Bottom Right */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 opacity-30">
        <div className="w-full h-full bg-gradient-to-tl from-zinc-600/40 via-zinc-700/20 to-transparent rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Central metallic glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10">
        <div className="w-full h-full bg-gradient-radial from-zinc-400/20 via-zinc-600/10 to-transparent blur-3xl" />
      </div>
    </div>
  );
}
