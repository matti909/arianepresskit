"use client";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="animate-bounce">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{
            borderColor: `oklch(0.51 0.19 28 / 0.7)`,
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{
              backgroundColor: `oklch(0.51 0.19 28)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
