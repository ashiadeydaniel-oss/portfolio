import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectStatus } from "@/types";
import { Badge } from "@/components/ui/Badge";

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  concept: "Concept",
};

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-muted/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
        {cover ? (
          <Image
            src={cover}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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
            className="shrink-0 text-muted transition-colors group-hover:text-accent"
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
  );
}
