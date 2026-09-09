import { CVEducation } from "@/lib/cms";
import { SECTIONS } from "@/lib/sections";

interface EducationSectionProps {
  education: CVEducation[];
}

function formatYear(date?: string): string {
  if (!date) return "Present";
  return new Date(date).getFullYear().toString();
}

export function EducationSection({ education }: EducationSectionProps) {
  const color = SECTIONS.find(s => s.key === "education")?.color ?? "#FFAA3D";

  const sorted = [...education].sort((a, b) => {
    return (b.start ?? "").localeCompare(a.start ?? "");
  });

  return (
    <section id="education" className="max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-paper">Education</h2>

      <div className="space-y-6">
        {sorted.map((edu) => (
          <article
            key={edu.id}
            className="grid grid-cols-[auto_1fr] gap-6 items-baseline pb-6 border-b"
            style={{ borderColor: `${color}22` }}
          >
            <div
              className="font-mono text-sm px-3 py-1 rounded"
              style={{ background: `${color}22`, color: color }}
            >
              {formatYear(edu.start)} — {formatYear(edu.end)}
            </div>

            <div>
              <h3 className="font-serif text-lg text-paper mb-1">{edu.degree}</h3>
              <p className="font-mono text-sm text-muted">{edu.institution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}