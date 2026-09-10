import { type NextFunction, type Request, type Response } from 'express';
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()],
});

const loggerMiddleware = (request: Request, _response: Response, next: NextFunction): void => {
  logger.info(`${request.method} ${request.originalUrl}`);

  next();
};

export default loggerMiddleware;
