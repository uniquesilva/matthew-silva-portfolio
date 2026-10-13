import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="rounded-3xl border border-line bg-card p-6 transition-colors hover:border-ink/20 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</p>
            <p className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {project.status}
            </p>
          </div>
          <h3 className="mt-5 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-sm hover:text-accent"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {project.summary}
          </p>
          <ul className="mt-6 space-y-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col border-t border-line pt-6 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Role</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{project.role}</p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Technology
          </p>
          <ul className="mt-2 space-y-1">
            {project.cardTechnologies.map((technology) => (
              <li key={technology} className="text-sm text-ink-soft">
                {technology}
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            View case study
          </Link>
        </div>
      </div>
    </article>
  );
}
