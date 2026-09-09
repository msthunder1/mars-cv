import { CVExperience } from "@/lib/cms";
import { SECTIONS } from "@/lib/sections";

interface ExperienceSectionProps {
  experience: CVExperience[];
}

type BulletChild = { text: string };
type Bullet = { children?: BulletChild[] };

function bulletHelperText(bullet: Bullet): string {
  if (!bullet.children) return "";
  let text = "";
  for (const child of bullet.children) {
    text += child.text;
  }
  return text;
}

function formatDate(date?: string): string {
  if (!date) return "Present";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const color = SECTIONS.find(s => s.key === "experience")?.color ?? "#3DE0B2";

  const sorted = [...experience].sort((a, b) => {
    return (b.start ?? "").localeCompare(a.start ?? "");
  });

  return (
    <section id="experience" className="max-w-3xl mx-auto">
      <h2 className="font-serif text-4xl mb-12 text-paper">Experience</h2>

      <div className="space-y-8">
        {sorted.map((job) => (
          <article
            key={job.id}
            className="pl-6 border-l-2 pb-2"
            style={{ borderColor: color }}
          >
            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
              <h3 className="font-serif text-xl text-paper">
                {job.role} <span className="text-muted font-mono text-sm">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-dim">
                {formatDate(job.start)} — {formatDate(job.end)}
              </span>
            </div>

            {job.clients && job.clients.length > 0 && (
              <p className="font-mono text-xs text-dim mb-3">
                {job.clients.join(" · ")}
              </p>
            )}

            {job.summary && (
              <p className="text-muted italic mb-4 leading-relaxed">
                {job.summary}
              </p>
            )}

            {job.bullets && job.bullets.length > 0 && (
              <ul className="space-y-1 mb-4 list-disc list-outside pl-5 text-paper">
                {job.bullets.map((c, index) => (
                  <li key={index} className="leading-relaxed">
                    {bulletHelperText(c as Bullet)}
                  </li>
                ))}
              </ul>
            )}

            {job.stack && job.stack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5 rounded border"
                    style={{ borderColor: `${color}66`, color: color }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}