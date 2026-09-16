'use client';

import { useGetOpeningHours } from '@/hooks/api/useGetOpeningHours';
import { useUpdateOpeningHours } from '@/hooks/api/useUpdateOpeningHours';
import { zodResolver } from '@hookform/resolvers/zod';
import { Weekday } from '@shared/enums/weekday.enum';
import {
  updateOpeningHoursSchema,
  type UpdateOpeningHoursPayload,
} from '@shared/validations/opening-hours.validation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const DEFAULT_VALUES: UpdateOpeningHoursPayload = {
  weekday: Weekday.Thursday,
  openTime: '17:00',
  closeTime: '22:00',
  isActive: true,
  closedMessage: '',
};

/** טוען את שעות הפעילות הקיימות ומאפשר לעדכן אותן. */
export const useAdminHoursForm = () => {
  const { data, isPending } = useGetOpeningHours();
  const { mutateAsync, isPending: isSaving, isSuccess, error } = useUpdateOpeningHours();

  const { control, handleSubmit, reset } = useForm<UpdateOpeningHoursPayload>({
    resolver: zodResolver(updateOpeningHoursSchema),
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    const { weekday, openTime, closeTime, isActive, closedMessage } = data.openingHours;

    reset({ weekday, openTime, closeTime, isActive, closedMessage });
  }, [data, reset]);

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync(values);
  });

  return { control, onSubmit, isPending, isSaving, isSuccess, error };
};
