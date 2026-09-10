import { attachUser, requireAdmin } from '@/middlewares/auth.middleware';
import { validateZodSchema } from '@/middlewares/validateZodSchema.middleware';
import { type Pizza } from '@/pizza/Pizza.entity';
import { create, findAll, findByCategory, findByUuid, remove, update } from '@/pizza/pizza.service';
import { type MessageResponse, type UuidParams } from '@shared/types/api.type';
import { type GetPizzasParams, type GetPizzasResponse } from '@shared/types/pizza.type';
import {
  createPizzaSchema,
  updatePizzaSchema,
  type CreatePizzaPayload,
  type UpdatePizzaPayload,
} from '@shared/validations/pizza.validation';
import { Router, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const pizzaRouter = Router();

pizzaRouter.get(
  '/',
  attachUser,
  async (
    request: Request<unknown, GetPizzasResponse, unknown, GetPizzasParams>,
    response: Response<GetPizzasResponse>,
  ) => {
    const { category } = request.query;
    const pizzas = category ? await findByCategory(category) : await findAll();

    response.status(StatusCodes.OK).json({ pizzas, isAdmin: Boolean(request.isAdmin) });
  },
);

pizzaRouter.get(
  '/:uuid',
  async (request: Request<UuidParams>, response: Response<Pizza | MessageResponse>) => {
    const pizza = await findByUuid(request.params.uuid);

    if (!pizza) {
      response.status(StatusCodes.NOT_FOUND).json({ message: 'הפריט לא נמצא' });

      return;
    }

    response.status(StatusCodes.OK).json(pizza);
  },
);

pizzaRouter.post(
  '/',
  requireAdmin,
  validateZodSchema(createPizzaSchema),
  async (request: Request<unknown, Pizza, CreatePizzaPayload>, response: Response<Pizza>) => {
    const pizza = await create(request.body);

    response.status(StatusCodes.CREATED).json(pizza);
  },
);

pizzaRouter.patch(
  '/:uuid',
  requireAdmin,
  validateZodSchema(updatePizzaSchema),
  async (
    request: Request<UuidParams, Pizza | MessageResponse, UpdatePizzaPayload>,
    response: Response<Pizza | MessageResponse>,
  ) => {
    const pizza = await update(request.params.uuid, request.body);

    if (!pizza) {
      response.status(StatusCodes.NOT_FOUND).json({ message: 'הפריט לא נמצא' });

      return;
    }

    response.status(StatusCodes.OK).json(pizza);
  },
);

pizzaRouter.delete(
  '/:uuid',
  requireAdmin,
  async (request: Request<UuidParams>, response: Response<MessageResponse>) => {
    const isDeleted = await remove(request.params.uuid);

    if (!isDeleted) {
      response.status(StatusCodes.NOT_FOUND).json({ message: 'הפריט לא נמצא' });

      return;
    }

    response.status(StatusCodes.OK).json({ message: 'הפריט נמחק' });
  },
);

export default pizzaRouter;
