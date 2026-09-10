import { type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { type ZodSchema } from 'zod';

export const validateZodSchema =
  (schema: ZodSchema) =>
  (request: Request, response: Response, next: NextFunction): void => {
    const result = schema.safeParse(request.body);

    if (!result.success) {
      response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: result.error.issues[0]?.message ?? 'נתונים לא תקינים' });

      return;
    }

    request.body = result.data;

    next();
  };
