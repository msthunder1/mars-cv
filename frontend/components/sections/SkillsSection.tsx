import { CVSkillGroup } from "@/lib/cms";
import { SECTIONS } from "@/lib/sections";

interface SkillsSectionProps {
  skills: CVSkillGroup[];
}

const LEVEL_LABELS: Record<number, string> = {
  1: "Basic",
  2: "Solid",
  3: "Expert",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const color = SECTIONS.find(s => s.key === "skills")?.color ?? "#4DA3FF";

  return (
    <section id="skills" className="max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-paper">Skills</h2>

      <div className="space-y-10">
        {skills.map((group) => (
          <div key={group.id}>
            <div className="flex items-baseline justify-between mb-4 pb-2 border-b" style={{ borderColor: `${color}33` }}>
              <h3 className="font-serif text-xl text-paper">{group.label}</h3>
              {group.years && (
                <span className="font-mono text-xs text-dim">
                  {group.years} {group.years === 1 ? "year" : "years"}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {group.items.map((skill, index) => (
                <div key={`${group.id}-${index}`} className="flex items-center gap-3">
                  <span className="font-mono text-sm text-paper flex-1">
                    {skill.name}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="w-2 h-2 rounded-full transition-colors"
                        style={{
                          background: n <= skill.level ? color : `${color}22`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-dim w-14 text-right">
                    {LEVEL_LABELS[skill.level]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}