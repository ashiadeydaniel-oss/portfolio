import { Check } from "lucide-react";
import { maintenance, services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="scroll-mt-20 py-20">
      <Container>
        {showHeading && (
          <SectionHeading
            align="center"
            eyebrow="Services"
            title="Clear packages, fair prices"
            description="Fixed scope and price, agreed before we start. No surprises."
          />
        )}

        <div className={cn("grid gap-6 lg:grid-cols-3", showHeading && "mt-12")}>
          {services.map((service) => (
            <div
              key={service.name}
              className={cn(
                "flex flex-col rounded-2xl border bg-surface p-6 sm:p-8",
                service.highlighted
                  ? "border-accent/50 shadow-[0_0_0_1px_rgba(34,197,94,0.15)]"
                  : "border-border",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {service.name}
                </h3>
                {service.priceNote && (
                  <Badge tone="accent">{service.priceNote}</Badge>
                )}
              </div>

              <p className="mt-4 text-3xl font-semibold tracking-tight">
                {service.price}
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                {service.timeline}
              </p>

              <p className="mt-5 text-sm text-muted">{service.description}</p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={`/contact?package=${encodeURIComponent(service.name)}`}
                variant={service.highlighted ? "primary" : "secondary"}
                className="mt-8"
              >
                Get started
              </Button>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
          <span className="font-medium text-foreground">
            {maintenance.title}, {maintenance.price}.
          </span>{" "}
          {maintenance.description}
        </p>
      </Container>
    </section>
  );
}
