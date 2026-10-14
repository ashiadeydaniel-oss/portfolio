import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Real projects, built end to end"
            description="From a full multi-vendor marketplace to sites for local businesses."
          />
          <Button href="/projects" variant="ghost" className="self-start sm:self-auto">
            All projects
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
