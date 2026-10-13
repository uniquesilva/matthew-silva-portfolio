import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Container } from "@/components/container";
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
        </header>

        <div className="mt-12">
          <StudySection title="Overview">
            <p>{project.overview}</p>
          </StudySection>
          <StudySection title="Problem">
            <p>{project.problem}</p>
          </StudySection>
          <StudySection title="My role">
            <p>{project.roleDetail}</p>
          </StudySection>
          <StudySection title="What I built">
            <ul className="list-disc space-y-2 pl-5">
              {project.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
