import { skillCategories, skills } from "@/data/skills";
import { Section } from "@/components/frame";
import { BrandIcon, Monogram } from "@/components/brand-icon";

export function Skills() {
  return (
    <Section
      id="stack"
      title="Tech Stack"
      action={<span>{skills.length} tools · always evolving</span>}
    >
      <dl className="divide-y divide-dashed divide-line">
        {skillCategories.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (!items.length) return null;
          return (
            <div
              key={category}
              className="grid gap-2 py-3 first:pt-0 last:pb-0 sm:grid-cols-[150px_1fr] sm:gap-4"
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:pt-1.5">
                {category}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-xs leading-4 transition-colors hover:border-line-strong"
                  >
                    {skill.icon ? (
                      <BrandIcon icon={skill.icon} className="size-3.5" />
                    ) : (
                      <Monogram name={skill.name} className="size-3.5" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
