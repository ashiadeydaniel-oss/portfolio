import { whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(34,197,94,0.12),transparent)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-muted">
              Tell me about your business. I&apos;ll reply with a clear scope, price
              and timeline.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Start a project
              </Button>
              <Button
                href={whatsappLink("Hi Daniel, I'd like to start a project.")}
                variant="secondary"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
