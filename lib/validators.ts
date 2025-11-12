import { z } from "zod"

export const blogInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().optional(),
  tags: z.string().optional()
})

export const blogUpdateSchema = blogInputSchema.partial()
