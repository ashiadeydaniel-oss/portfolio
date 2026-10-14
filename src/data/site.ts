export const site = {
  name: "Daniel Ashiadey",
  title: "Full-Stack Web Developer",
  tagline:
    "I build fast, professional websites and online stores for businesses in Ghana and beyond.",
  url: "https://your-vercel-address.vercel.app", // replace after deploy
  email: "ashiadeydaniel@gmail.com",
  whatsapp: "233537876821",
  github: "https://github.com/ashiadeydaniel-oss",
  location: "Accra, Ghana",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;