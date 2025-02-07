import {z} from 'zod'

export const NumberSchema = z.object({
  number: z.coerce.number().int().min(-Number.MAX_SAFE_INTEGER).max(Number.MAX_SAFE_INTEGER)
});

export type NumberInput = z.infer<typeof NumberSchema>;