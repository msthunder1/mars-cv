"use client";

import { useEffect, useState } from "react";

interface Streak {
  left: number;
  top: number;
  height: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface SpeedStreaksProps {
  color: string;
}

export function SpeedStreaks({ color }: SpeedStreaksProps) {
  const [streaks] = useState<Streak[]>(() =>
    Array.from({ length: 60 }, () => ({
      left: Math.random() * 100,
      top: -20 + Math.random() * -50,
      height: 40 + Math.random() * 120,
      opacity: 0.3 + Math.random() * 0.5,
      duration: 0.4 + Math.random() * 0.6,
      delay: Math.random() * 0.5,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {streaks.map((s, i) => (
        <div
          key={i}
          className="absolute w-px"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            height: `${s.height}px`,
            opacity: s.opacity,
            background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
            animation: `streak-fall ${s.duration}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
