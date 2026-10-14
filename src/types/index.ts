export type ProjectCategory =
  | "E-commerce"
  | "Business"
  | "Landing Page"
  | "Web App";

export type ProjectStatus = "live" | "in-development" | "concept";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  problem: string;
  solution: string;
  highlights: string[];
  result: string;
  /** Paths inside /public, e.g. "/images/cosign/home.png" */
  images: string[];
  liveUrl?: string;
  featured: boolean;
};

export type ServicePackage = {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  timeline: string;
  highlighted?: boolean;
};

export type ProcessStep = {
  title: string;
  description: string;
};
