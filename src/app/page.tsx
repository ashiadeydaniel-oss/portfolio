import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedWork />
      <Services />
      <Process />
      <CTA />
    </main>
  );
}
