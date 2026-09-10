import { PizzaCategory } from '@shared/enums/pizza-category.enum';
import {
  enumValue,
  nonNegativeNumber,
  optionalString,
  positiveNumber,
  requiredString,
} from '@shared/validations/common.validation';
import { z } from 'zod';

export const toppingSchema = z.object({
  name: requiredString(60),
  price: nonNegativeNumber(),
});

export const createPizzaSchema = z.object({
  name: requiredString(80),
  description: optionalString(500),
  price: positiveNumber(),
  imageUrl: optionalString(500),
  menuCategory: enumValue(PizzaCategory),
  toppings: z.array(toppingSchema).default([]),
  isVegetarian: z.boolean().default(false),
  isVegan: z.boolean().default(false),
  isSoldOut: z.boolean().default(false),
  displayOrder: nonNegativeNumber().default(0),
});

export const updatePizzaSchema = createPizzaSchema.partial();

export type CreatePizzaPayload = z.infer<typeof createPizzaSchema>;
export type UpdatePizzaPayload = z.infer<typeof updatePizzaSchema>;
