"use client";

import { m, useScroll, useSpring } from "motion/react";

/** Thin accent bar pinned to the top of the viewport, tracking page scroll. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-accent shadow-[0_0_12px_rgba(34,197,94,0.8)]"
    />
  );
}
