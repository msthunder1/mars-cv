"use client";

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
        style={{
          background: `linear-gradient(to right, ${sectionConfig.color}, color-mix(in srgb, ${sectionConfig.color} 80%, var(--color-ink)), ${sectionConfig.color})`,
          color: sectionConfig.color,
        }}
      />
      <SpeedStreaks color={sectionConfig.color} />
    </div>
  );
}
