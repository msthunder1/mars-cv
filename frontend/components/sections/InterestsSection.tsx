import { SECTIONS } from "@/lib/sections";
import {
  BookOpen,
  Pencil,
  PenLine,
  Dumbbell,
  Sparkles,
  Telescope,
  TrendingUp,
  CircleDot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "Reading books": BookOpen,
  Drawing: Pencil,
  Writing: PenLine,
  Training: Dumbbell,
  Mythology: Sparkles,
  Astronomy: Telescope,
  Trading: TrendingUp,
};

const TILTS = [-4, 3, -2, 5, -3, 2, -5, 4];

interface InterestsSectionProps {
  interests: string[];
}

export function InterestsSection({ interests }: InterestsSectionProps) {
  const color = SECTIONS.find((s) => s.key === "interests")?.color ?? "#FF4DA3";

  return (
    <section id="interests" className="max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-paper">Interests</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {interests.map((interest, i) => {
          const Icon = ICON_MAP[interest] ?? CircleDot;
          return (
            <div
              key={interest}
              className="flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110 hover:rotate-0"
              style={{ transform: `rotate(${TILTS[i % TILTS.length]}deg)` }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-lg"
                style={{
                  borderColor: color,
                  background: `radial-gradient(circle, ${color}22 0%, ${color}05 100%)`,
                  boxShadow: `0 0 20px ${color}33, inset 0 0 20px ${color}11`,
                  color: color,
                }}
              >
                <Icon size={36} strokeWidth={1.5} />
              </div>
              <span className="font-mono text-xs" style={{ color }}>
                {interest}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
