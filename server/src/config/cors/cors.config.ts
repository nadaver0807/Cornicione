import { CLIENT_ORIGIN } from '@/server.const';
import { type CorsOptions } from 'cors';

const allowedOrigins = CLIENT_ORIGIN.split(',').map((origin) => origin.trim());

export const CorsConfig: CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
