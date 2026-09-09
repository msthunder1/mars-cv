"use client"

import { SpeedStreaks } from "./SpeedStreaks";
import { SECTIONS } from "@/lib/sections";
import type { SectionKey } from "@/lib/cms";

interface FallTransitionProps {
    section: SectionKey;
    reverse?: boolean;
}

export function FallTransition({ section, reverse }: FallTransitionProps) {

    const sectionConfig = SECTIONS.find((s) => s.key === section);

    if (!sectionConfig) return null;

    return (
        <div className={`fall-container ${reverse ? "reverse" : ""}`}>
            <div 
                className={`fall-wire ${reverse ? "reverse" : ""}`}
                style={{ background: sectionConfig.color }} 
            />
            <SpeedStreaks color={sectionConfig.color} />
        </div>
    );
}