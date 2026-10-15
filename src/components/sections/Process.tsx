"use client";

import { m } from "motion/react";
import { process as steps } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading eyebrow="How it works" title="A simple process from hello to launch" />

        <m.ol
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-4 hidden h-px bg-border lg:block"
          >
            <m.div
              variants={{
                hidden: { scaleX: 0 },
                show: {
                  scaleX: 1,
                  transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
                },
              }}
              className="h-full origin-left bg-gradient-to-r from-accent via-accent/60 to-transparent"
            />
          </div>

          {steps.map((step, index) => (
            <m.li key={step.title} variants={fadeUp} className="relative">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-sm text-accent shadow-[0_0_20px_-4px_rgba(34,197,94,0.5)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-5">
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </m.li>
          ))}
        </m.ol>
      </Container>
    </section>
  );
}
