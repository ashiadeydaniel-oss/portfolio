import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-semibold tracking-tight">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm text-muted">{site.tagline}</p>
        </div>

        <div className="flex gap-12 text-sm">
          <nav aria-label="Footer" className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <span className="text-muted">{site.location}</span>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="py-5 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
