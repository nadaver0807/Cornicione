import { OrderType } from '@shared/enums/order-type.enum';
import {
  email,
  israeliPhone,
  nonNegativeNumber,
  optionalString,
  positiveNumber,
  requiredString,
} from '@shared/validations/common.validation';
import { toppingSchema } from '@shared/validations/pizza.validation';
import { z } from 'zod';

export const orderItemSchema = z.object({
  pizzaUuid: requiredString(64),
  quantity: positiveNumber().max(20),
  toppings: z.array(toppingSchema),
  note: optionalString(200),
});

export const createOrderSchema = z
  .object({
    orderType: z.nativeEnum(OrderType),
    customerName: requiredString(80),
    customerPhone: israeliPhone(),
    customerEmail: email(),
    address: optionalString(200),
    note: optionalString(400),
    items: z.array(orderItemSchema).min(1, 'יש לבחור לפחות פריט אחד'),
    deliveryFee: nonNegativeNumber(),
  })
  .refine((order) => order.orderType !== OrderType.Delivery || Boolean(order.address?.trim()), {
    message: 'כתובת נדרשת להזמנת משלוח',
    path: ['address'],
  });

export type CreateOrderPayload = z.infer<typeof createOrderSchema>;
