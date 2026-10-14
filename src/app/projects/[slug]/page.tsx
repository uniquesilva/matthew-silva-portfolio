import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Container } from "@/components/container";
import { ProjectLinks } from "@/components/project-links";
import type { Project } from "@/data/projects";
import { getProject, getProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

function StudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-12">
      <h2 className="font-serif text-3xl tracking-tight text-ink md:col-span-4">{title}</h2>
      <div className="text-base leading-relaxed text-ink-soft md:col-span-8">{children}</div>
    </section>
  );
}

function ProjectStudy({ project }: { project: Project }) {
  return (
    <main id="content" tabIndex={-1} className="py-12 sm:py-16">
      <Container>
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
        >
          All projects
        </Link>
        <header className="mt-8 max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            {project.status}
          </p>
          {project.distribution ? (
            <p className="mt-3 text-sm text-ink">Distribution: {project.distribution}</p>
          ) : null}
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{project.summary}</p>
          <p className="mt-6 text-sm text-ink">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Role
            </span>
            <span className="mt-2 block">{project.role}</span>
          </p>
          <ProjectLinks project={project} />
          {project.liveNote ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              {project.liveNote}
            </p>
          ) : null}
        </header>

        <div className="mt-12">
          <StudySection title="Overview">
            <p>{project.overview}</p>
          </StudySection>
          <StudySection title="Problem">
            <p>{project.problem}</p>
          </StudySection>
          <StudySection title="My Role">
            <p>{project.roleDetail}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.responsibilities.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </StudySection>
          <StudySection title="What I Built">
            <ul className="list-disc space-y-2 pl-5">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StudySection>
          {project.publicDemos && project.publicDemos.length > 0 ? (
            <StudySection title="Public demos">
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.publicDemos.map((demo) => (
                  <li key={demo.href}>
                    <a
                      href={demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                      {demo.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </StudySection>
          ) : null}
          {project.screenshots && project.screenshots.length > 0 ? (
            <StudySection title="Product">
              <ul
                className={`grid gap-6 ${
                  project.screenshots.length > 1
                    ? project.screenshots.some((shot) => shot.height > shot.width)
                      ? "lg:grid-cols-2"
                      : "sm:grid-cols-2"
                    : ""
                }`}
              >
                {project.screenshots.map((shot) => (
                  <li key={shot.src} className="min-w-0">
                    <figure className={shot.height > shot.width ? "mx-auto w-full max-w-sm" : undefined}>
                      <div className="overflow-hidden rounded-2xl border border-line bg-paper">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={shot.width}
                          height={shot.height}
                          sizes={
                            shot.height > shot.width
                              ? "(min-width: 640px) 384px, 100vw"
                              : "(min-width: 768px) 720px, 100vw"
                          }
                          className="h-auto w-full object-contain"
                        />
                      </div>
                      {shot.caption ? (
                        <figcaption className="mt-2 text-sm text-ink-soft">{shot.caption}</figcaption>
                      ) : null}
                    </figure>
                  </li>
                ))}
              </ul>
            </StudySection>
          ) : null}
          <StudySection title="Architecture">
            <p className="text-ink">{project.architectureSummary}</p>
          </StudySection>
          <StudySection title="Technical approach">
            <ArchitectureFlow steps={project.architecture} />
          </StudySection>
          <StudySection title="Key challenges">
            <ol className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <li key={challenge.title}>
                  <h3 className="font-serif text-2xl tracking-tight text-ink">
                    <span className="mr-3 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {challenge.title}
                  </h3>
                  <p className="mt-2">{challenge.problem}</p>
                </li>
              ))}
            </ol>
          </StudySection>
          <StudySection title="How I solved them">
            <ol className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <li key={challenge.title}>
                  <h3 className="font-serif text-2xl tracking-tight text-ink">
                    <span className="mr-3 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {challenge.title}
                  </h3>
                  <p className="mt-2">{challenge.response}</p>
                </li>
              ))}
            </ol>
          </StudySection>
          <StudySection title="What I learned">
            <ul className="list-disc space-y-2 pl-5">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StudySection>
          <StudySection title="Technology">
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.technologies.map((technology) => (
                <li key={technology} className="text-ink">
                  {technology}
                </li>
              ))}
            </ul>
          </StudySection>
          <StudySection title="Current status">
            <p>{project.statusDetail}</p>
          </StudySection>
        </div>
      </Container>
    </main>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectStudy project={project} />;
}

function ProjectFallback() {
  return (
    <main id="content" tabIndex={-1} className="py-16">
      <Container>
        <p className="text-sm text-muted">Loading case study</p>
      </Container>
    </main>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
