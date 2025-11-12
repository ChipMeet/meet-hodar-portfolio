import { PrismaClient } from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind conditional class helper, merging duplicates.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Human-readable date formatting for blog timestamps.
 */
export function formatDate(date: Date | string, dateFormat = 'MMMM d, yyyy') {
  return format(new Date(date), dateFormat);
}

/**
 * Prisma singleton helper for use in scripts. Useful outside Next context (e.g. seeding).
 */
export function getPrismaClient() {
  return new PrismaClient();
}

