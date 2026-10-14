import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Websites, online stores and web apps I've built, from a full multi-vendor marketplace to sites for local businesses.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Projects"
        title="Work I've built"
        description="A full marketplace platform and concept sites that show the kind of work I deliver for businesses."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>

      <CTA />
    </main>
  );
}
