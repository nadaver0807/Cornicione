import { requireAdmin } from '@/middlewares/auth.middleware';
import { validateZodSchema } from '@/middlewares/validateZodSchema.middleware';
import { type Order } from '@/order/Order.entity';
import { create, findAll, updateStatus } from '@/order/order.service';
import { sendNewOrderEmail } from '@/email/email.service';
import { OrderStatus } from '@shared/enums/order-status.enum';
import { type MessageResponse, type UuidParams } from '@shared/types/api.type';
import { createOrderSchema, type CreateOrderPayload } from '@shared/validations/order.validation';
import { Router, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const orderRouter = Router();

orderRouter.get('/', requireAdmin, async (_request: Request, response: Response) => {
  const orders = await findAll();

  response.status(StatusCodes.OK).json({ orders });
});

orderRouter.post(
  '/',
  validateZodSchema(createOrderSchema),
  async (
    request: Request<unknown, Order | MessageResponse, CreateOrderPayload>,
    response: Response<Order | MessageResponse>,
  ) => {
    const order = await create(request.body);

    await sendNewOrderEmail(order);

    response.status(StatusCodes.CREATED).json(order);
  },
);

orderRouter.patch(
  '/:uuid/status',
  requireAdmin,
  async (
    request: Request<UuidParams, Order | MessageResponse, { status: OrderStatus }>,
    response: Response<Order | MessageResponse>,
  ) => {
    const order = await updateStatus(request.params.uuid, request.body.status);

    if (!order) {
      response.status(StatusCodes.NOT_FOUND).json({ message: 'ההזמנה לא נמצאה' });

      return;
    }

    response.status(StatusCodes.OK).json(order);
  },
);

export default orderRouter;
