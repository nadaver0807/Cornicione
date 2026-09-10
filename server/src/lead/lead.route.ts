import { sendNewLeadEmail } from '@/email/email.service';
import { create, findAll } from '@/lead/lead.service';
import { requireAdmin } from '@/middlewares/auth.middleware';
import { validateZodSchema } from '@/middlewares/validateZodSchema.middleware';
import { type MessageResponse } from '@shared/types/api.type';
import { createLeadSchema, type CreateLeadPayload } from '@shared/validations/lead.validation';
import { Router, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const leadRouter = Router();

leadRouter.get('/', requireAdmin, async (_request: Request, response: Response) => {
  const leads = await findAll();

  response.status(StatusCodes.OK).json({ leads });
});

leadRouter.post(
  '/',
  validateZodSchema(createLeadSchema),
  async (
    request: Request<unknown, MessageResponse, CreateLeadPayload>,
    response: Response<MessageResponse>,
  ) => {
    const lead = await create(request.body);

    await sendNewLeadEmail(lead);

    response.status(StatusCodes.CREATED).json({ message: 'הפנייה נשלחה, נחזור אליך בהקדם' });
  },
);

export default leadRouter;
