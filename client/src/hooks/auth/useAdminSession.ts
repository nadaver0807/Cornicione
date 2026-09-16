'use client';

import { getSession, setSession, subscribeToSession } from '@/hooks/auth/session.store';
import { useCallback, useSyncExternalStore } from 'react';

const getServerSnapshot = () => null;

/** מצב ההתחברות של המנהל, נגזר מהאסימון השמור מקומית. */
export const useAdminSession = () => {
  const session = useSyncExternalStore(subscribeToSession, getSession, getServerSnapshot);

  const logout = useCallback(() => setSession(null), []);

  return { isAuthenticated: Boolean(session), logout };
};
