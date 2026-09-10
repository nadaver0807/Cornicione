import { isValidToken } from '@/auth/auth.service';
import { type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

declare module 'express-serve-static-core' {
  interface Request {
    isAdmin?: boolean;
  }
}

const extractToken = (request: Request): string =>
  request.headers.authorization?.replace('Bearer ', '').trim() ?? '';

/** מסמן אם הבקשה הגיעה ממנהל, בלי לחסום אורחים. */
export const attachUser = (request: Request, _response: Response, next: NextFunction): void => {
  const token = extractToken(request);

  request.isAdmin = Boolean(token) && isValidToken(token);

  next();
};

export const requireAdmin = (request: Request, response: Response, next: NextFunction): void => {
  const token = extractToken(request);

  if (!token || !isValidToken(token)) {
    response.status(StatusCodes.UNAUTHORIZED).json({ message: 'נדרשת התחברות' });

    return;
  }

  request.isAdmin = true;

  next();
};
