import { createToken } from '@/auth/auth.service';
import { validateZodSchema } from '@/middlewares/validateZodSchema.middleware';
import { ADMIN_LOGIN_EMAIL, ADMIN_PASSWORD } from '@/server.const';
import { type MessageResponse } from '@shared/types/api.type';
import { type LoginResponse } from '@shared/types/auth.type';
import { loginSchema, type LoginPayload } from '@shared/validations/auth.validation';
import { Router, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const authRouter = Router();

authRouter.post(
  '/login',
  validateZodSchema(loginSchema),
  (
    request: Request<unknown, LoginResponse | MessageResponse, LoginPayload>,
    response: Response<LoginResponse | MessageResponse>,
  ) => {
    const { email, password } = request.body;
    const isEmailMatch = email.toLowerCase() === ADMIN_LOGIN_EMAIL.toLowerCase();
    const isMatch = isEmailMatch && password === ADMIN_PASSWORD;

    if (!isMatch) {
      response.status(StatusCodes.UNAUTHORIZED).json({ message: 'פרטי ההתחברות שגויים' });

      return;
    }

    const { token, expiresAt } = createToken();

    response.status(StatusCodes.OK).json({ token, expiresAt: expiresAt.toISOString() });
  },
);

export default authRouter;
