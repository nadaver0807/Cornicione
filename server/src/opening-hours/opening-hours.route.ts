import { requireAdmin } from '@/middlewares/auth.middleware';
import { validateZodSchema } from '@/middlewares/validateZodSchema.middleware';
import { findCurrent, update } from '@/opening-hours/opening-hours.service';
import { type GetOpeningHoursResponse } from '@shared/types/opening-hours.type';
import {
  updateOpeningHoursSchema,
  type UpdateOpeningHoursPayload,
} from '@shared/validations/opening-hours.validation';
import { Router, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const openingHoursRouter = Router();

openingHoursRouter.get(
  '/',
  async (_request: Request, response: Response<GetOpeningHoursResponse>) => {
    const openingHours = await findCurrent();

    response.status(StatusCodes.OK).json({ openingHours });
  },
);

openingHoursRouter.patch(
  '/',
  requireAdmin,
  validateZodSchema(updateOpeningHoursSchema),
  async (
    request: Request<unknown, GetOpeningHoursResponse, UpdateOpeningHoursPayload>,
    response: Response<GetOpeningHoursResponse>,
  ) => {
    const openingHours = await update(request.body);

    response.status(StatusCodes.OK).json({ openingHours });
  },
);

export default openingHoursRouter;
