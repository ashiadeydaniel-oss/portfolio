import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(30, "Phone number is too long.").optional(),
  package: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell me a bit more (at least 10 characters).")
    .max(2000, "Message is too long (2000 characters max)."),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
