import type { ProcessStep, ServicePackage } from "@/types";

// Prices are plain strings so they're easy to change. Adjust to what you
// want to charge. These are introductory prices while the portfolio grows.

export const services: ServicePackage[] = [
  {
    name: "Landing Page",
    price: "From GHS 1,200",
    description:
      "A single, focused page that explains what you offer and gets people to contact you.",
    features: [
      "One responsive page, built mobile-first",
      "WhatsApp and contact buttons",
      "Basic SEO setup",
      "1 round of revisions",
      "Deployed on fast, secure hosting",
    ],
    timeline: "3 to 5 days",
  },
  {
    name: "Business Website",
    price: "From GHS 2,800",
    priceNote: "Most popular",
    description:
      "A complete website for your business, with the pages customers expect to find.",
    features: [
      "Up to 5 pages (Home, About, Services, Contact and more)",
      "Contact form with email notifications",
      "Google Maps and WhatsApp booking",
      "SEO setup so you can be found on Google",
      "2 rounds of revisions",
      "Training on how to update your content",
    ],
    timeline: "1 to 2 weeks",
    highlighted: true,
  },
  {
    name: "Online Store",
    price: "From GHS 5,500",
    description:
      "A store where customers browse, order and pay, built around how your customers already buy.",
    features: [
      "Product catalogue with categories and search",
      "Cart and checkout with Paystack or WhatsApp ordering",
      "Admin area to manage products and orders",
      "Mobile-first, fast-loading design",
      "2 rounds of revisions",
      "30 days of support after launch",
    ],
    timeline: "2 to 4 weeks",
  },
];

export const maintenance = {
  title: "Monthly Care Plan",
  price: "From GHS 250 / month",
  description:
    "Hosting oversight, updates, backups and small content changes, so your site stays fast and secure.",
};

export const process: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "A short chat to understand your business, your customers and what the site needs to achieve.",
  },
  {
    title: "Proposal and deposit",
    description:
      "You get a clear scope, price and timeline. A 50% deposit confirms the project and starts the work.",
  },
  {
    title: "Design and build",
    description:
      "I build it and share progress early, so you can see it take shape and give feedback.",
  },
  {
    title: "Review",
    description:
      "You review the finished site and I make the agreed revisions.",
  },
  {
    title: "Launch and support",
    description:
      "After the final payment, your site goes live. I stay available for support and updates.",
  },
];

export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "How does payment work?",
    answer:
      "I take a 50% deposit to start and the remaining 50% before the site goes live. Clients in Ghana can pay in cedis by Mobile Money or bank transfer. International clients are invoiced in USD.",
  },
  {
    question: "Do I have to pay for hosting and a domain?",
    answer:
      "Yes, these are separate from the build price and paid by you, so you own them. I'll recommend the most affordable option for your needs and set everything up for you.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Each package lists its included revision rounds. Anything outside the agreed scope is quoted separately before I start it.",
  },
  {
    question: "Who owns the website?",
    answer:
      "You do. Once the final payment is made, the site, its code and its content are yours.",
  },
  {
    question: "How long will it take?",
    answer:
      "Each package lists a typical timeline. The biggest factor is how quickly I get your content (text, logo, photos), so the sooner you send it, the sooner you launch.",
  },
  {
    question: "Can you update the site after launch?",
    answer:
      "Yes. You can add the Monthly Care Plan for ongoing updates, or ask for one-off changes whenever you need them.",
  },
];
