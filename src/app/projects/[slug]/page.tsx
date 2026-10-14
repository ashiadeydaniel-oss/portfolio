import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects, statusLabel } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/sections/CTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-mono text-sm text-accent">{title}</h2>
      <div className="mt-3 text-pretty text-lg leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const portrait = project.imageFormat === "portrait";
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(34,197,94,0.08),transparent)]"
        />
        <Container className="relative py-12 sm:py-16">
          <Button href="/projects" variant="ghost" size="sm" className="-ml-3">
            <ArrowLeft size={16} />
            All projects
          </Button>

          <div className="mt-6 flex items-center gap-2">
            <Badge tone="accent">{statusLabel[project.status]}</Badge>
            <Badge>{project.category}</Badge>
          </div>

          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted">
            {project.tagline}
          </p>

          {project.liveUrl && (
            <Button href={project.liveUrl} size="lg" className="mt-8">
              Visit live site
              <ArrowUpRight size={18} />
            </Button>
          )}
        </Container>
      </section>

      {/* Screens */}
      {project.images.length > 0 && (
        <section className="border-b border-border py-14">
          <Container>
            <div
              className={cn(
                "grid gap-4",
                portrait
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  : "sm:grid-cols-2",
              )}
            >
              {project.images.map((src, index) => (
                <div
                  key={src}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-border bg-surface",
                    portrait ? "aspect-[9/19]" : "aspect-[16/10]",
                  )}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screen ${index + 1}`}
                    fill
                    sizes={
                      portrait
                        ? "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        : "(min-width: 640px) 50vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Details */}
      <Container className="grid gap-12 py-16 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-12 lg:col-span-2">
          {project.status === "concept" && (
            <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-muted">
              This is a concept build, created to show the kind of work I
              deliver. It is not a live client project.
            </p>
          )}

          <Block title="The problem">
            <p>{project.problem}</p>
          </Block>

          <Block title="What I built">
            <p>{project.solution}</p>
          </Block>

          <section>
            <h2 className="font-mono text-sm text-accent">Key features</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/90">
                  <Check
                    size={18}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <Block title="The result">
            <p>{project.result}</p>
          </Block>
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-muted">Category</dt>
                <dd className="mt-1 font-medium">{project.category}</dd>
              </div>
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="mt-1 font-medium">
                  {statusLabel[project.status]}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Tech stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </Container>

      {/* More projects */}
      {others.length > 0 && (
        <section className="border-t border-border py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">
              More projects
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </main>
  );
}
