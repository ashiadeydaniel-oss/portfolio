"use client";

import type { HTMLAttributes, PointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Container with a soft accent glow that follows the pointer.
 * Positions are written straight to CSS variables, so pointer movement
 * never triggers a React re-render.
 */
export function Spotlight({
  className,
  children,
  onPointerMove,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    onPointerMove?.(event);
    if (event.pointerType !== "mouse") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={handleMove}
      className={cn("spotlight relative", className)}
      {...props}
    >
      {children}
      <div aria-hidden="true" className="spotlight-glow" />
    </div>
  );
}
