import { email, limitedString } from '@shared/validations/common.validation';
import { z } from 'zod';

export const loginSchema = z.object({
  email: email(),
  password: limitedString(6, 72),
});

export type LoginPayload = z.infer<typeof loginSchema>;
