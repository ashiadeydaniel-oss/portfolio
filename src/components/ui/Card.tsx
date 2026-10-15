import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive, ...props }: CardProps) {
  const classes = cn(
    "rounded-2xl border border-border bg-surface p-6",
    interactive &&
      "transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-muted/40",
    className,
  );

  return interactive ? (
    <Spotlight className={classes} {...props} />
  ) : (
    <div className={classes} {...props} />
  );
}
