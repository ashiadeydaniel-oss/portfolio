import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        interactive &&
          "transition-colors hover:border-muted/40 hover:bg-surface/70",
        className,
      )}
      {...props}
    />
  );
}
