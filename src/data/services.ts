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
