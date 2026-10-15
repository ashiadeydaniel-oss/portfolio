"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <m.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <m.p
          variants={fadeUp}
          className={cn(
            "flex items-center gap-3 font-mono text-sm text-accent",
            align === "center" && "justify-center",
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </m.p>
      )}
      <m.h2
        variants={fadeUp}
        className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
      </m.h2>
      {description && (
        <m.p variants={fadeUp} className="mt-4 text-pretty text-muted">
          {description}
        </m.p>
      )}
    </m.div>
  );
}
