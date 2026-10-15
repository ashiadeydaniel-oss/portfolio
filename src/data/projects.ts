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
    images: [
      "/images/cosign/cosign-escrow-flow.jpg",
      "/images/cosign/cosign-architecture.jpg",
      "/images/cosign/cosign-features.jpg",
      "/images/cosign/cosign-seller-journey.jpg",
    ],
    imageFormat: "landscape",
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
    images: [
      "/images/projects/thrift-and-co-home.jpg",
      "/images/projects/thrift-and-co-shop.jpg",
      "/images/projects/thrift-and-co-product.jpg",
      "/images/projects/thrift-and-co-cart.jpg",
    ],
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
    images: [
      "/images/projects/savour-kitchen-home.jpg",
      "/images/projects/savour-kitchen-menu.jpg",
      "/images/projects/savour-kitchen-booking.jpg",
      "/images/projects/savour-kitchen-visit.jpg",
    ],
    featured: true,
  },
  {
    slug: "luxeglow-beauty-salon",
    title: "LuxeGlow Beauty Salon",
    tagline: "Concept: a website for a beauty salon and spa.",
    category: "Business",
    status: "concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Many salons rely on Instagram and word of mouth, so new clients can't easily see the services, the prices or how to book an appointment.",
    solution:
      "A polished, mobile-first site with services and starting prices, a gallery of real results, and simple booking with a WhatsApp option for quick questions.",
    highlights: [
      "Services grouped by category, with starting prices",
      "Photo gallery that shows real client results",
      "Booking form plus one-tap WhatsApp chat",
    ],
    result:
      "A concept build showing the kind of site I deliver in the Business Website package.",
    images: [
      "/images/projects/luxeglow-home.jpg",
      "/images/projects/luxeglow-services.jpg",
      "/images/projects/luxeglow-gallery.jpg",
      "/images/projects/luxeglow-mobile.jpg",
    ],
    featured: true,
  },
  {
    slug: "freshspace-cleaning",
    title: "FreshSpace Cleaning",
    tagline: "Concept: a website for a cleaning company.",
    category: "Business",
    status: "concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Cleaning companies win work on trust and fast quotes, but without a proper website customers can't see what is offered or how to ask for a price.",
    solution:
      "A clean, trustworthy site with clear service pages for homes and businesses, and a free quote request form that takes under a minute to fill in.",
    highlights: [
      "Service pages for residential, commercial, deep and specialised cleaning",
      "Free quote form with service, date and property type",
      "Trust signals: vetted staff, flexible scheduling and a satisfaction guarantee",
    ],
    result:
      "A concept build showing the kind of site I deliver in the Business Website package.",
    images: [
      "/images/projects/freshspace-home.jpg",
      "/images/projects/freshspace-services.jpg",
      "/images/projects/freshspace-quote.jpg",
      "/images/projects/freshspace-mobile.jpg",
    ],
    featured: true,
  },
  {
    slug: "the-ember-restaurant",
    title: "The Ember Restaurant",
    tagline: "Concept: a website for a restaurant and cafe.",
    category: "Business",
    status: "concept",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem:
      "Restaurants lose bookings when guests can't find the menu or reserve a table without making a phone call.",
    solution:
      "A moody, image-led site with a categorised menu and prices, an online table reservation form, and a gallery that shows off the atmosphere.",
    highlights: [
      "Menu with categories, prices and food photography",
      "Table reservation form with party size and special requests",
      "Gallery and a mobile layout built for guests on the go",
    ],
    result:
      "A concept build showing the kind of site I deliver in the Business Website package.",
    images: [
      "/images/projects/the-ember-home.jpg",
      "/images/projects/the-ember-menu.jpg",
      "/images/projects/the-ember-reservations.jpg",
      "/images/projects/the-ember-mobile.jpg",
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
