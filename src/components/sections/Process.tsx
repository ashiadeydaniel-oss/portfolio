import { process as steps } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A simple process from hello to launch"
        />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 border-t border-border pt-4">
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
