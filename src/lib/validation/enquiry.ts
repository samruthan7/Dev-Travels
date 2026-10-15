import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/,
      "Enter a valid 10-digit mobile number",
    ),
  email: z.union([z.literal(""), z.email("Enter a valid email address")]),
  service: z.string().min(1, "Please choose a service"),
  travelDate: z.string().optional(),
  travellers: z
    .string()
    .regex(/^\d{0,3}$/, "Enter a number")
    .optional(),
  message: z.string().trim().max(1000, "Message is too long (max 1000 characters)"),
  // Honeypot: real people leave this empty.
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;