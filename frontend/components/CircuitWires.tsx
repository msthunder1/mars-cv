"use client";

import { Wire } from "./Wire";
import { Endpoint } from "./Endpoint";
import { SECTIONS } from "@/lib/sections";

import type { SectionKey } from "@/lib/cms";

import { useState, useEffect } from "react";

interface CircuitWiresProps {
  onSelect: (section: SectionKey) => void;
}

const WIRE_ROUTES_DESKTOP = [
  { exitX: 185, rowY: 90, endX: 44, endpointY: 340, portraitBottomY: 8 },
  { exitX: 195, rowY: 170, endX: 148, endpointY: 340, portraitBottomY: 10 },
  { exitX: 205, rowY: 210, endX: 252, endpointY: 340, portraitBottomY: 10 },
  { exitX: 215, rowY: 130, endX: 356, endpointY: 340, portraitBottomY: 8 },
];

const WIRE_ROUTES_MOBILE = [
  { exitX: 185, rowY: 100, endX: 80, endpointY: 100, portraitBottomY: 8 },
  { exitX: 195, rowY: 180, endX: 80, endpointY: 180, portraitBottomY: 10 },
  { exitX: 205, rowY: 260, endX: 80, endpointY: 260, portraitBottomY: 10 },
  { exitX: 210, rowY: 340, endX: 80, endpointY: 340, portraitBottomY: 8 },
];

export function CircuitWires({ onSelect }: CircuitWiresProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const routes = isMobile ? WIRE_ROUTES_MOBILE : WIRE_ROUTES_DESKTOP;

  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto">
      {SECTIONS.map((section, index) => {
        const route = routes[index];
        return (
          <g
            key={section.key}
            className="section-group"
            color={section.color}
            onClick={() => onSelect(section.key)}
          >
            <Wire
              exitX={route.exitX}
              portraitBottomY={route.portraitBottomY}
              rowY={route.rowY}
              endX={route.endX}
              endpointY={route.endpointY}
              color={section.color}
            />
            <Endpoint
              x={route.endX}
              y={route.endpointY}
              color={section.color}
              label={section.label.toLowerCase()}
              isMobile={isMobile}
            />
          </g>
        );
      })}
    </svg>
  );
}
