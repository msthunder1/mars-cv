"use client";

import { Wire } from "./Wire";
import { Endpoint } from "./Endpoint";
import { SECTIONS } from "@/lib/sections";

import type { SectionKey } from "@/lib/cms";

interface CircuitWiresProps {
  onSelect: (section: SectionKey) => void;
}

const WIRE_ROUTES = [
    {exitX: 185, rowY: 90, endX: 44, portraitBottomY: 8},
    {exitX: 195, rowY: 170, endX: 148, portraitBottomY: 10},
    {exitX: 205, rowY: 210, endX: 252, portraitBottomY: 10},
    {exitX: 215, rowY: 130, endX: 356, portraitBottomY: 8},
]

export function CircuitWires({ onSelect }: CircuitWiresProps) {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto">

        {SECTIONS.map((section, index) => (
            <g key={section.key} className="section-group" color={section.color} onClick={() => onSelect(section.key)}>
                <Wire exitX={WIRE_ROUTES[index].exitX} portraitBottomY={WIRE_ROUTES[index].portraitBottomY} rowY={WIRE_ROUTES[index].rowY} endX={WIRE_ROUTES[index].endX} endpointY={340} color={section.color} />
                <Endpoint x={WIRE_ROUTES[index].endX} y={340} color={section.color} label={section.label.toLowerCase()} />
            </g>
        ))}
    </svg>
  );
}