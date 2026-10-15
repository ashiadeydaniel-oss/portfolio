import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-orb hero-orb-a pointer-events-none absolute" />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <p
            className="rise flex items-center gap-3 font-mono text-sm text-accent"
            style={delay(0)}
          >
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            {eyebrow}
          </p>
        )}
        <h1
          className="rise mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          style={delay(0.1)}
        >
          {title}
        </h1>
        {description && (
          <p
            className="rise mt-4 max-w-2xl text-pretty text-lg text-muted"
            style={delay(0.25)}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
