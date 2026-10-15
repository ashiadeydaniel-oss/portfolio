"use client";

import type { ReactNode } from "react";
import { m, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Shared viewport config: animate once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: "0px 0px -80px 0px" } as const;

/** Child variant for use inside any staggered `m.*` container. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Container variant that staggers its children. */
export function staggerContainer(stagger = 0.09, delay = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Fades and lifts its children into place when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

/** Container that reveals `StaggerItem` children one after another. */
export function Stagger({ children, className, stagger = 0.09, delay = 0 }: StaggerProps) {
  return (
    <m.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div variants={fadeUp} className={cn(className)}>
      {children}
    </m.div>
  );
}
