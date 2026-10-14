import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Landing pages, business websites and online stores with fixed prices and clear timelines.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Services"
        title="Websites built to bring in customers"
        description="Fixed-scope packages with clear prices and timelines. Pick the one that fits, or tell me what you need and I'll tailor it."
      />
      <Services showHeading={false} />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
