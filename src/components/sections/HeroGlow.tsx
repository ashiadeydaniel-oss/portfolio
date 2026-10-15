"use client";

import { useEffect, useRef } from "react";
import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

/** Accent light that eases toward the pointer across the hero section. */
export function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.2);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const left = useTransform(sx, (v) => v * 100);
  const top = useTransform(sy, (v) => v * 100);
  const background = useMotionTemplate`radial-gradient(520px circle at ${left}% ${top}%, rgba(34,197,94,0.16), transparent 60%)`;

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section || reduced) return;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = section.getBoundingClientRect();
      mx.set((event.clientX - rect.left) / rect.width);
      my.set((event.clientY - rect.top) / rect.height);
    };

    section.addEventListener("pointermove", onMove);
    return () => section.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  return (
    <m.div
      ref={ref}
      aria-hidden="true"
      style={{ background }}
      className="pointer-events-none absolute inset-0"
    />
  );
}
