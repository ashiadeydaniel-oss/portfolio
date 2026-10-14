import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Common questions"
        />

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-border rounded-2xl border border-border bg-surface">
          {faqs.map((item) => (
            <details key={item.question} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
