import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(34,197,94,0.08),transparent)]"
      />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && <p className="font-mono text-sm text-accent">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
