import { z } from "zod";

export const contactInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

// Blog schemas - note: tags is a string in the schema, not an array
const imageSchema = z
  .string()
  .url("Image must be a valid URL.")
  .or(z.string().startsWith("/", "Image path should be relative to /public."))
  .optional();

export const blogInputSchema = z.object({
  title: z.string().min(3, "Title should be at least 3 characters long."),
  content: z.string().min(50, "Content should be at least 50 characters long."),
  image: imageSchema,
  tags: z.string().default(""),
});

export const blogUpdateSchema = blogInputSchema
  .partial()
  .extend({
    image: imageSchema,
    tags: z.string().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update.",
  });

export type BlogInput = z.infer<typeof blogInputSchema>;
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>;
export type ContactInput = z.infer<typeof contactInputSchema>;
