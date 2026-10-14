import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { maintenance, services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your project and I'll reply with a clear scope, price and timeline.",
};

type Props = {
  searchParams: Promise<{ package?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { package: requested } = await searchParams;
  const packages = [...services.map((s) => s.name), maintenance.title];
  const selected = typeof requested === "string" ? requested : "";
  const defaultPackage = packages.includes(selected) ? selected : "";

  const details = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Fastest way to reach me",
      href: whatsappLink("Hi Daniel, I'd like to ask about a website."),
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: MapPin, label: "Based in", value: site.location },
    { icon: Clock, label: "Response time", value: "Usually within a day" },
  ];

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell me what you need and I'll reply with a clear scope, price and timeline."
      />

      <Container className="grid gap-10 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm packages={packages} defaultPackage={defaultPackage} />
        </div>

        <aside className="space-y-4 lg:col-span-1">
          {details.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <Icon size={20} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </>
            );
            const className =
              "flex gap-4 rounded-2xl border border-border bg-surface p-5";

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${className} transition-colors hover:border-muted/40`}
              >
                {content}
              </a>
            ) : (
              <div key={label} className={className}>
                {content}
              </div>
            );
          })}
        </aside>
      </Container>
    </main>
  );
}
