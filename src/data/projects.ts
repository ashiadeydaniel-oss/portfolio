import type { Project, ProjectStatus } from "@/types";

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  concept: "Concept",
};

// To add a project: add one object below. Its case study page is generated
// automatically from the slug. Put screenshots in /public/images/<folder>/
// and list their paths in `images`.

export const projects: Project[] = [
  {
    slug: "cosign",
    title: "CoSign",
    tagline:
      "A Ghana-first multi-vendor marketplace with escrow-protected payments.",
    category: "E-commerce",
    status: "in-development",
    stack: [
      "React Native",
      "Django REST Framework",
      "React (Admin)",
      "Paystack",
      "Celery",
      "Redis",
      "Django Channels",
      "Cloudinary",
    ],
    problem:
      "Online shopping in Ghana runs largely on trust. Buyers pay first and hope the seller delivers, while sellers juggle separate tools for payments, orders and shipping.",
    solution:
      "I designed and built the whole platform solo: a mobile app for buyers and sellers, a Django backend, and an admin dashboard. Payments are held in escrow until delivery, so buyers are protected and sellers get paid reliably.",
    highlights: [
      "Escrow-based payments with dispute handling, powered by Paystack",
      "Wallet system with an immutable, hash-linked ledger and withdrawals",
      "Tiered seller subscriptions and a 4-step seller onboarding flow",
      "Ghana-specific shipping: regions, transport companies and buyer pickup",
      "Real-time chat between buyers and sellers",
      "Returns, cancellations and automatic ship-deadline enforcement",
      "Flash sales, coupons and admin-curated collections",
      "Built-in product photo editor for sellers, with AI background removal",
      "Admin dashboard to manage sellers and orders",
    ],
    result:
      "Backend and mobile app built and demoed end to end, across 39 Django apps. Currently preparing for launch in Ghana.",
    images: [],
    imageFormat: "portrait",
    featured: true,
  },
  {
    slug: "thrift-and-co",
    title: "Thrift & Co",
    tagline: "Concept: an online store for an Instagram and WhatsApp seller.",
    category: "E-commerce",
    status: "concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Many Ghanaian sellers take orders through DMs. Orders get lost, customers repeat the same questions, and there is no clean way to browse or pay.",
    solution:
      "A fast mobile-first store with a product grid, product pages and a one-tap WhatsApp order button, so customers can check out the way they already prefer.",
    highlights: [
      "Mobile-first product grid with fast image loading",
      "One-tap WhatsApp ordering with the product pre-filled",
      "Mobile Money friendly checkout flow",
    ],
    result:
      "A concept build showing the kind of store I deliver in the Online Store package.",
    images: [],
    featured: true,
  },
  {
    slug: "savour-kitchen",
    title: "Savour Kitchen",
    tagline: "Concept: a website for a local restaurant.",
    category: "Business",
    status: "concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Local restaurants often rely on social media alone, so people can't easily find the menu, prices, location or how to book.",
    solution:
      "A clean, fast site with the menu, opening hours, a map and a WhatsApp booking button, found easily on Google.",
    highlights: [
      "Menu with prices, built to be easy to update",
      "Map, opening hours and WhatsApp booking",
      "Local SEO basics so the business shows up in search",
    ],
    result:
      "A concept build showing the kind of site I deliver in the Business Website package.",
    images: [],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
