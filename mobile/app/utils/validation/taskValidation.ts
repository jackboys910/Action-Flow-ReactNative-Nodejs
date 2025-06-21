import { z } from 'zod';

export const taskValidationSchema = z.object({
  title: z.string().min(1, 'Title is required').max(30, 'Title must be at most 30 characters'),
  description: z.string().max(100, 'Description must be at most 100 characters').optional(),
  isImportant: z.boolean(),
});

export const taskDetailsSchema = taskValidationSchema.extend({
  status: z.enum(['In Progress', 'Completed']),
});

export type taskValidationType = z.infer<typeof taskValidationSchema>;
export type taskDetailsType = z.infer<typeof taskDetailsSchema>;
