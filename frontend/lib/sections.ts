import type { SectionKey } from "@/lib/cms";

export interface SectionConfig {
  key: SectionKey;
  label: string;
  color: string;
}

export const SECTIONS: SectionConfig[] = [
  { key: "experience", label: "Experience", color: "var(--color-neon-experience)" },
  { key: "skills", label: "Skills", color: "var(--color-neon-skills)" },
  { key: "education", label: "Education", color: "var(--color-neon-education)" },
  { key: "interests", label: "Interests", color: "var(--color-neon-interests)" },
];
