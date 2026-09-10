'use client';

import Styles from '@components/lead/lead-form/LeadForm.style';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material';
import { buildWhatsappLink } from '@shared/consts/site.const';
import { type LeadType } from '@shared/enums/lead-type.enum';
import { createLeadSchema, type CreateLeadPayload } from '@shared/validations/lead.validation';
import { type FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateLead } from '@/hooks/api/useCreateLead';

type LeadFormProps = {
  leadType: LeadType;
  submitLabel: string;
  whatsappMessage: string;
  withBusinessName?: boolean;
};

const LeadForm: FC<LeadFormProps> = ({
  leadType,
  submitLabel,
  whatsappMessage,
  withBusinessName = false,
}) => {
  const { mutateAsync, isPending, isSuccess, error } = useCreateLead();
  const { control, handleSubmit, reset } = useForm<CreateLeadPayload>({
    resolver: zodResolver(createLeadSchema),
    defaultValues: { leadType, fullName: '', phone: '', email: '', businessName: '', message: '' },
  });

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync(values);
    reset({ leadType, fullName: '', phone: '', email: '', businessName: '', message: '' });
  });

  return (
    <Box component="form" onSubmit={onSubmit} sx={Styles.form}>
      <Controller
        name="fullName"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="שם מלא"
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
            label="טלפון"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      {withBusinessName ? (
        <Controller
          name="businessName"
          control={control}
          render={({ field }) => <TextField {...field} label="שם העסק / המקום" />}
        />
      ) : null}
      <Controller
        name="message"
        control={control}
        render={({ field }) => <TextField {...field} label="פרטים נוספים" multiline minRows={3} />}
      />
      <Box sx={Styles.actions}>
        <Button type="submit" variant="contained" disabled={isPending}>
          {submitLabel}
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href={buildWhatsappLink(whatsappMessage)}
          target="_blank"
        >
          WhatsApp
        </Button>
      </Box>
      {isSuccess ? <Typography sx={Styles.feedback}>הפנייה נשלחה — נחזור אליך.</Typography> : null}
      {error ? <Typography sx={Styles.feedback}>{error.message}</Typography> : null}
    </Box>
  );
};

export default LeadForm;
