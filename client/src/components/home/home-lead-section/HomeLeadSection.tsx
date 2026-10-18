'use client';

import DetailsFields from '@components/home/home-lead-section/DetailsFields';
import Styles from '@components/home/home-lead-section/HomeLeadSection.style';
import {
  buildMessage,
  DEFAULTS,
  formSchema,
  type FormValues,
} from '@components/home/home-lead-section/HomeLeadSection.util';
import {
  LEAD_SECTION_ANCHOR,
  LEAD_TYPE_SELECT_EVENT,
} from '@components/home/home-lead-section/lead-select.util';
import SectionHeader from '@components/shared/section-header/SectionHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import { type LeadType } from '@shared/enums/lead-type.enum';
import { useEffect, type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateLead } from '@/hooks/api/useCreateLead';

const HomeLeadSection: FC = () => {
  const { mutateAsync, isPending, isSuccess, error } = useCreateLead();
  const { control, handleSubmit, reset, setValue } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULTS,
  });

  useEffect(() => {
    const handler = (event: Event) => setValue('leadType', (event as CustomEvent<LeadType>).detail);

    window.addEventListener(LEAD_TYPE_SELECT_EVENT, handler);

    return () => window.removeEventListener(LEAD_TYPE_SELECT_EVENT, handler);
  }, [setValue]);

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync({
      leadType: values.leadType,
      fullName: values.fullName,
      phone: values.phone,
      email: values.email ?? '',
      businessName: '',
      message: buildMessage(values),
    });
    reset(DEFAULTS);
  });

  return (
    <Box component="section" id={LEAD_SECTION_ANCHOR} sx={Styles.section}>
      <SectionHeader title="שריינו תאריך" label="CONTATTI" />
      <Box component="form" onSubmit={onSubmit} sx={Styles.form}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="שם מלא *"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="tel"
              label="טלפון *"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField {...field} type="email" label="אימייל (לא חובה)" />}
        />
        <DetailsFields control={control} />
        <Button type="submit" fullWidth variant="contained" disabled={isPending} sx={Styles.submit}>
          שלחו פרטים
        </Button>
        {isSuccess ? (
          <Typography sx={Styles.note}>הפנייה נשלחה — נחזור אליכם בקרוב.</Typography>
        ) : null}
        {error ? <Typography color="error">{error.message}</Typography> : null}
        <Typography sx={Styles.note}>נחזור אליכם בהקדם. אפשר גם להתקשר: {SITE.phone}</Typography>
      </Box>
    </Box>
  );
};

export default HomeLeadSection;
