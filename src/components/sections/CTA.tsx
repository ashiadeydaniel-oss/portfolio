import { whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
            <div aria-hidden="true" className="cta-orb pointer-events-none absolute" />
            <div className="relative">
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty text-muted">
                Tell me about your business. I&apos;ll reply with a clear scope, price and timeline.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Button href="/contact" size="lg">
                    Start a project
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    href={whatsappLink("Hi Daniel, I'd like to start a project.")}
                    variant="secondary"
                    size="lg"
                  >
                    Chat on WhatsApp
                  </Button>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
