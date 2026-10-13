import type { FlowStep } from "@/data/projects";

export function ArchitectureFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <li key={step.title}>
          <div className="rounded-2xl border border-line bg-paper px-5 py-4">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl tracking-tight text-ink">{step.title}</h3>
            </div>
            <p className="mt-2 pl-9 text-sm leading-relaxed text-ink-soft sm:text-base">
              {step.detail}
            </p>
          </div>
          {index < steps.length - 1 ? (
            <p aria-hidden="true" className="py-1.5 text-center text-sm text-muted">
              ↓
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
