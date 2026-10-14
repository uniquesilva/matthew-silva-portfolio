import Link from "next/link";
import { Container } from "@/components/container";
import { ProfileLinks } from "@/components/profile-links";
import { ProjectCard } from "@/components/project-card";
import { aboutParagraphs, buildSteps, credibility, focusAreas, skillGroups } from "@/data/profile";
import {
  EMAIL,
  HEADLINE,
  LINKEDIN_URL,
  LOCATION,
  RESUME_URL,
  ROLE_LINE,
  SITE_NAME,
  SUBHEADLINE,
} from "@/data/site";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <main id="content" tabIndex={-1}>
      <section className="hero-in border-b border-line">
        <Container className="py-16 sm:py-24 lg:py-28">
          <h1 className="max-w-4xl">
            <span className="block font-serif text-[clamp(2rem,4vw,3.25rem)] leading-none tracking-tight text-ink">
              {SITE_NAME}
            </span>
            <span className="mt-4 block max-w-xl text-sm leading-6 text-muted sm:text-[15px]">
              {ROLE_LINE}
            </span>
            <span className="mt-8 block max-w-[18ch] text-balance font-serif text-[clamp(2.7rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-ink">
              <Headline />
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {SUBHEADLINE}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#projects"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-paper hover:bg-accent-strong sm:w-auto"
            >
              View Projects
            </Link>
            <ProfileLinks />
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-y-1 border-y border-line py-2 sm:grid-cols-3 lg:grid-cols-4">
            {credibility.map((item) => (
              <li key={item} className="px-1 py-3 text-sm text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="projects" className="scroll-mt-24 py-20 md:py-28">
        <Container>
          <div className="settle flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-muted">01</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                Featured projects
              </h2>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Selected products taken from concept through a working build.
          </p>
          <div className="mt-10 space-y-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="settle lg:col-span-5">
              <p className="font-mono text-xs text-muted">02</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                How I build
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                I work across product and technical execution. Framing the problem, designing the
                flow, integrating the model or API, building the system, testing it, deploying it,
                and iterating are one job.
              </p>
            </div>
            <ol className="lg:col-span-7">
              {buildSteps.map((step, index) => (
                <li key={step.title}>
                  <div className="border-t border-line py-5">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl tracking-tight text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-2 pl-9 text-sm leading-relaxed text-ink-soft sm:text-base">
                      {step.text}
                    </p>
                  </div>
                  {index < buildSteps.length - 1 ? (
                    <p aria-hidden="true" className="pb-1 text-sm text-muted">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="skills" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <Container>
          <div className="settle">
            <p className="font-mono text-xs text-muted">03</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
              Skills
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Grouped by the work behind the projects on this site.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <li key={group.title}>
                <h3 className="font-serif text-2xl tracking-tight text-ink">{group.title}</h3>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="settle lg:col-span-7">
              <p className="font-mono text-xs text-muted">04</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
                About
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5 lg:pt-16">
              <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Based in
                </p>
                <p className="mt-2 text-lg text-ink">{LOCATION}</p>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Focus
                </p>
                <ul className="mt-3 space-y-2">
                  {focusAreas.map((area) => (
                    <li key={area} className="text-sm leading-6 text-ink-soft">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-28">
        <Container>
          <div className="settle grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-muted">05</p>
              <h2 className="mt-3 max-w-[10ch] font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.02] tracking-tight text-ink">
                Let’s build something useful.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                Hiring for AI product, technical product, solutions engineering, or product
                engineering?
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    Resume
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-base text-ink-soft">{LOCATION}</p>
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
                <h3 className="font-serif text-3xl tracking-tight text-ink">Resume</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Download the PDF resume.
                </p>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-paper hover:bg-accent"
                >
                  Download resume
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      </main>
  );
}

function Headline() {
  const phrase = "idea to production.";
  if (!HEADLINE.endsWith(phrase)) return HEADLINE;
  return (
    <>
      {HEADLINE.slice(0, -phrase.length)}
      <em className="italic text-accent">{phrase}</em>
    </>
  );
}
