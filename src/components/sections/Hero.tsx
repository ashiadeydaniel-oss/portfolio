import { Fragment } from "react";
import { site, whatsappLink } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroGlow } from "@/components/sections/HeroGlow";
import { StackMarquee } from "@/components/sections/StackMarquee";

const points = [
  "Mobile-first and fast",
  "Online stores with secure checkout",
  "Built in Accra, for Ghana and beyond",
];

const plainWords = ["Websites", "that", "help", "your", "business"];
const accentWords = ["win", "customers."];

/** Entrance delay (seconds) for the nth headline word. */
const wordDelay = (index: number) => `${0.2 + index * 0.07}s`;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-orb hero-orb-a pointer-events-none absolute" />
      <div aria-hidden="true" className="hero-orb hero-orb-b pointer-events-none absolute" />
      <HeroGlow />

      <Container className="relative py-20 text-center sm:py-28">
        <div className="rise" style={{ "--d": "0s" } as React.CSSProperties}>
          <Badge tone="accent" className="gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for new projects
          </Badge>
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          {plainWords.map((word, i) => (
            <Fragment key={word}>
              <span className="word-mask">
                <span className="word" style={{ animationDelay: wordDelay(i) }}>
                  {word}
                </span>
              </span>{" "}
            </Fragment>
          ))}
          {accentWords.map((word, i) => (
            <Fragment key={word}>
              <span className="word-mask">
                <span
                  className="word text-gradient"
                  style={{ animationDelay: wordDelay(plainWords.length + i) }}
                >
                  {word}
                </span>
              </span>
              {i < accentWords.length - 1 && " "}
            </Fragment>
          ))}
        </h1>

        <p
          className="rise mx-auto mt-6 max-w-xl text-pretty text-lg text-muted"
          style={{ "--d": "0.75s" } as React.CSSProperties}
        >
          {site.tagline}
        </p>

        <div
          className="rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ "--d": "0.9s" } as React.CSSProperties}
        >
          <Magnetic>
            <Button href="/contact" size="lg">
              Start a project
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href="#work" variant="secondary" size="lg">
              See my work
            </Button>
          </Magnetic>
        </div>

        <p
          className="rise mt-5 text-sm text-muted"
          style={{ "--d": "1.05s" } as React.CSSProperties}
        >
          Prefer to chat?{" "}
          <a
            href={whatsappLink("Hi Daniel, I'd like to ask about a website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            Message me on WhatsApp
          </a>
        </p>

        <ul
          className="rise mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted"
          style={{ "--d": "1.2s" } as React.CSSProperties}
        >
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <div className="rise mt-16" style={{ "--d": "1.4s" } as React.CSSProperties}>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">
            Tech I build with
          </p>
          <StackMarquee />
        </div>
      </Container>
    </section>
  );
}
