import type { SectionKey } from "@/lib/cms";

export interface SectionConfig {
  key: SectionKey;
  label: string;
  color: string;
  preview: string;
}

export const SECTIONS: SectionConfig[] = [
  {
    key: "experience",
    label: "experience",
    color: "var(--color-neon-experience)",
    preview: "16 years · 6 companies",
  },
  {
    key: "skills",
    label: "skills",
    color: "var(--color-neon-skills)",
    preview: "React · WordPress · C# .NET",
  },
  {
    key: "education",
    label: "education",
    color: "var(--color-neon-education)",
    preview: "IT Engineer · Velenje 2010",
  },
  {
    key: "interests",
    label: "interests",
    color: "var(--color-neon-interests)",
    preview: "reading · training · mythology",
  },
];
