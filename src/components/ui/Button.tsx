import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg font-medium " +
  "transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:scale-[0.97] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent/90 hover:shadow-[0_10px_34px_-8px_rgba(34,197,94,0.65)] " +
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent " +
    "before:transition-transform before:duration-700 hover:before:translate-x-full motion-reduce:before:hidden",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent/40 hover:bg-surface/60",
  ghost: "text-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      const isWeb = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          target={isWeb ? "_blank" : undefined}
          rel={isWeb ? "noopener noreferrer" : undefined}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
