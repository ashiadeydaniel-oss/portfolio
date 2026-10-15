import { projects } from "@/data/projects";

const stack = Array.from(new Set(projects.flatMap((project) => project.stack)));

/** Infinite, CSS-only ticker of the technologies used across shipped projects. */
export function StackMarquee() {
  return (
    <div
      role="group"
      aria-label="Technologies used across projects"
      className="marquee-mask relative overflow-hidden"
    >
      <div className="marquee-track flex w-max">
        {[...stack, ...stack].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            aria-hidden={index >= stack.length}
            className="mr-3 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
