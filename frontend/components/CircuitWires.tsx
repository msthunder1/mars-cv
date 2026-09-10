"use client";

import { Wire } from "./Wire";
import { Endpoint } from "./Endpoint";
import { EndpointCard } from "./EndpointCard";
import { SECTIONS } from "@/lib/sections";

import type { SectionKey } from "@/lib/cms";

import { useState, useEffect } from "react";

interface CircuitWiresProps {
  onSelect: (section: SectionKey) => void;
}

const WIRE_ROUTES_DESKTOP = [
  { exitX: 185, rowY: 90, endX: 44, endpointY: 340, portraitBottomY: 8, endShiftX: 0 },
  { exitX: 195, rowY: 170, endX: 148, endpointY: 340, portraitBottomY: 10, endShiftX: 0 },
  { exitX: 205, rowY: 210, endX: 252, endpointY: 340, portraitBottomY: 10, endShiftX: 0 },
  { exitX: 215, rowY: 130, endX: 356, endpointY: 340, portraitBottomY: 8, endShiftX: 0 },
];

const WIRE_ROUTES_MOBILE = [
  { exitX: 185, rowY: 47, endX: 315, endpointY: 80, portraitBottomY: 10, endShiftX: 0 },
  { exitX: 195, rowY: 38, endX: 325, endpointY: 160, portraitBottomY: 10, endShiftX: 10 },
  { exitX: 205, rowY: 29, endX: 335, endpointY: 240, portraitBottomY: 10, endShiftX: 20 },
  { exitX: 215, rowY: 20, endX: 345, endpointY: 320, portraitBottomY: 10, endShiftX: 30 },
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
              endShiftX={route.endShiftX}
            />
            {isMobile ? (
              <EndpointCard
                x={route.endX - route.endShiftX}
                y={route.endpointY}
                color={section.color}
                label={section.label}
                preview={section.preview}
              />
            ) : (
              <Endpoint
                x={route.endX}
                y={route.endpointY}
                color={section.color}
                label={section.label.toLowerCase()}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
