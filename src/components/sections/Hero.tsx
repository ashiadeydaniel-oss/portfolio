import { site, whatsappLink } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const points = [
  "Mobile-first and fast",
  "Paystack and WhatsApp ordering",
  "Built in Accra, for Ghana and beyond",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,197,94,0.12),transparent)]"
      />
      <Container className="relative py-20 text-center sm:py-28">
        <Badge tone="accent">Available for new projects</Badge>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Websites that help your business win customers.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Start a project
          </Button>
          <Button href="#work" variant="secondary" size="lg">
            See my work
          </Button>
        </div>

        <p className="mt-5 text-sm text-muted">
          Prefer to chat?{" "}
          <a
            href={whatsappLink("Hi Daniel, I'd like to ask about a website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-accent"
          >
            Message me on WhatsApp
          </a>
        </p>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
