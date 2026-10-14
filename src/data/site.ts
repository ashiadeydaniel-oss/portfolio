// Replace the placeholder values below with your real details.
export const site = {
  name: "Daniel",
  title: "Full-Stack Web Developer",
  tagline:
    "I build fast, professional websites and online stores for businesses in Ghana and beyond.",
  url: "https://your-domain.com",
  email: "you@example.com",
  whatsapp: "233XXXXXXXXX", // country code, no "+" or spaces
  github: "https://github.com/yourusername",
  location: "Accra, Ghana",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
