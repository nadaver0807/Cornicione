import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { setSession } from '@/hooks/auth/session.store';
import { type LoginResponse } from '@shared/types/auth.type';
import { type LoginPayload } from '@shared/validations/auth.validation';
import { useMutation } from '@tanstack/react-query';

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await Api.post<LoginResponse>(`${ApiRoute.Auth}/login`, payload);

  return data;
};

export const useLogin = () =>
  useMutation({
    mutationFn: login,
    onSuccess: (session) => {
      setSession(session);
    },
  });
