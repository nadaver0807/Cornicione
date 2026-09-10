import { ADMIN_SESSION_SECRET, ADMIN_SESSION_TTL_HOURS } from '@/server.const';
import { createHmac, timingSafeEqual } from 'node:crypto';

const HOUR_IN_MS = 60 * 60 * 1000;

const sign = (payload: string): string =>
  createHmac('sha256', ADMIN_SESSION_SECRET).update(payload).digest('hex');

/** בונה אסימון חתום בפורמט `expiresAt.signature`. */
export const createToken = (): { token: string; expiresAt: Date } => {
  const expiresAt = new Date(Date.now() + ADMIN_SESSION_TTL_HOURS * HOUR_IN_MS);
  const payload = String(expiresAt.getTime());

  return { token: `${payload}.${sign(payload)}`, expiresAt };
};

export const isValidToken = (token: string): boolean => {
  const [payload, signature] = token.split('.');

  if (!payload || !signature) {
    return false;
  }

  const expected = Buffer.from(sign(payload));
  const received = Buffer.from(signature);

  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    return false;
  }

  return Number(payload) > Date.now();
};
