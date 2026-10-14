import type { Project } from "@/data/projects";
import { configuredUrl } from "@/data/site";

const linkFields = [
  ["liveUrl", "View Live Product"],
  ["demoUrl", "View Demos"],
  ["githubUrl", "View GitHub"],
  ["proofUrl", "View Proof"],
  ["testflightUrl", "TestFlight Beta"],
] as const;

export function projectActionLinks(project: Project) {
  return linkFields.flatMap(([key, label]) => {
    const href = configuredUrl(project[key] ?? "");
    return href ? [{ href, label }] : [];
  });
}

export function ProjectLinks({ project }: { project: Project }) {
  const links = projectActionLinks(project);
  if (links.length === 0) return null;

  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-4 text-sm text-ink hover:border-accent"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
