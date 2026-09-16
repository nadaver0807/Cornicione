'use client';

import { useLogin } from '@/hooks/api/useLogin';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginPayload } from '@shared/validations/auth.validation';
import { useForm } from 'react-hook-form';

/** מרכז את לוגיקת טופס ההתחברות של המנהלן. */
export const useAdminLogin = () => {
  const { mutateAsync, isPending, error } = useLogin();

  const { control, handleSubmit } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync(values);
  });

  return { control, onSubmit, isPending, error };
};
