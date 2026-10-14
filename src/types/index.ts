export type ProjectCategory =
  | "E-commerce"
  | "Business"
  | "Landing Page"
  | "Web App";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  images: string[];
  liveUrl?: string;
  featured: boolean;
};

export type ServicePackage = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
