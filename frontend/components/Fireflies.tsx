"use client";

import { useState } from "react";

interface Firefly {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  dx: number;
  dy: number;
  glow: boolean;
}

interface FirefliesProps {
  color: string;
  count?: number;
}

export function Fireflies({ color, count = 120 }: FirefliesProps) {
  const [fireflies] = useState<Firefly[]>(() =>
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.5,
      duration: 3 + Math.random() * 5,
      delay: 0,
      dx: -50 + Math.random() * 200,
      dy: -50 + Math.random() * 200,
      glow: Math.random() < 0.2,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fireflies.map((f, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={
            {
              left: `${f.left}%`,
              top: `${f.top}%`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              background: color,
              opacity: f.opacity,
              boxShadow: f.glow
                ? `0 0 20px ${color}, 0 0 40px ${color}, 0 0 80px ${color}`
                : `0 0 8px ${color}`,
              animation: `firefly-drift ${f.duration}s ease-in-out ${f.delay}s infinite alternate`,
              "--dx": `${f.dx}px`,
              "--dy": `${f.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
