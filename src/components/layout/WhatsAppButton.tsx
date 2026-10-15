import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi Daniel, I'd like to ask about a website.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="pop-in group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40 [animation-duration:2.5s] motion-reduce:hidden"
      />
      <MessageCircle
        size={26}
        className="transition-transform duration-300 group-hover:-rotate-12"
      />
    </a>
  );
}
