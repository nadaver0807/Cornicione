'uimport { getSession, setSession, subscribeToSession } from '@/hooks/auth/session.store';
import { useCallback, useSyncExternalStore } from 'react';

const getServerSnapshot = () => null;

/** מצב ההתחברות של המנהל, נגזר מהאסימון השמור מקומית. */
export const useAdminSession = () => {
  const session = useSyncExternalStore(subscribeToSession, getSession, getServerSnapshot);

  const logout = useCallback(() => setSession(null), []);

  return { isAuthenticated: Boolean(session), logout };
};t { getSession, setSession, subscribeToSession } from '@/hooks/auth/session.store';
import { useCallback, useMemo, useSyncExternalStore } from 'react';

const getServerSnapshot = () => null;

/** מצב ההתחברות של המנהל, נגזר מהאסימון השמור מקומית. */
export const useAdminSession = () => {
  const session = useSyncExternalStore(subscribeToSession, getSession, getServerSnapshot);

  const isAuthenticated = useMemo(
    () => Boolean(session) && new Date(session!.expiresAt).getTime() > Date.now(),
    [session],
  );

  const logout = useCallback(() => setSession(null), []);

  return { isAuthenticated, logout };
};
