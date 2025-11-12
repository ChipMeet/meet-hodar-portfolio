import { z } from 'zod';

export const contactInputSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Please provide a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.')
});

export type ContactInput = z.infer<typeof contactInputSchema>;

