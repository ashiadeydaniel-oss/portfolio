import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { statusLabel } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";

type ProjectCardProps = {
  project: Project;
  /** Position within its grid row; offsets the reveal delay for a cascade. */
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cover = project.images[0];

  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Spotlight className="h-full rounded-2xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(34,197,94,0.35)]">
        <Link
          href={`/projects/${project.slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
            {cover ? (
              <Image
                src={cover}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full w-full items-center justify-center bg-[radial-gradient(70%_70%_at_50%_30%,rgba(34,197,94,0.14),transparent)]"
              >
                <span className="text-6xl font-semibold tracking-tight text-foreground/20">
                  {project.title.charAt(0)}
                </span>
              </div>
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-2">
              <Badge tone="accent">{statusLabel[project.status]}</Badge>
              <Badge>{project.category}</Badge>
            </div>

            <h3 className="mt-4 flex items-center justify-between gap-2 text-lg font-semibold tracking-tight">
              {project.title}
              <ArrowUpRight
                size={18}
                className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </h3>
            <p className="mt-2 text-sm text-muted">{project.tagline}</p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </Link>
      </Spotlight>
    </Reveal>
  );
}
