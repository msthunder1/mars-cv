"use client";

import { CV } from "@/lib/cms";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { InterestsSection } from "./sections/InterestsSection";
import { Fireflies } from "./Fireflies";

import { SECTIONS } from "@/lib/sections";
import type { SectionKey } from "@/lib/cms";


interface DetailViewProps {
  cv: CV;
  section: SectionKey;
  onBack: () => void;
  isEntering?: boolean;
  isLeaving?: boolean;
}

export function DetailView({ cv, section, onBack, isEntering, isLeaving }: DetailViewProps) {

    const sectionConfig = SECTIONS.find((s) => s.key === section);

    if (!sectionConfig) return null;

    return (
        <main className={`p-8 min-h-screen ${isEntering ? "detail-entering" : ""} ${isLeaving ? "detail-leaving" : ""}`}>
            <div 
                className="absolute inset-x-0 top-0 h-full pointer-events-none"
                style={{
                    background: `linear-gradient(180deg, ${sectionConfig?.color} 0%, rgba(0, 0, 0, 0) 50%)`,
                    opacity: 0.35,
                }}
            />
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: "var(--fall-wire-width)",
                    height: "35vh",
                    background: `linear-gradient(to bottom, ${sectionConfig?.color}, transparent)`,
                    opacity: 0.6,
                }}
            />
            <Fireflies color={sectionConfig?.color || "#fff"} />
            <button onClick={onBack} className="mb-8 text-paper">← back</button>
            {section === "experience" && <ExperienceSection experience={cv.experience} />}
            {section === "skills" && <SkillsSection skills={cv.skills} />}
            {section === "education" && <EducationSection education={cv.education} />}
            {section === "interests" && <InterestsSection interests={cv.interests} />}
        </main>
    );
}