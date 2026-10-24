'use client';

import LeadExtraFields from '@components/lead/lead-extra-fields/LeadExtraFields';
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
  withEventDetails?: boolean;
  withInquiryType?: boolean;
};

const buildDefaults = (leadType: LeadType): CreateLeadPayload => ({
  leadType,
  fullName: '',
  phone: '',
  email: '',
  businessName: '',
  eventDate: '',
  guestCount: '',
  location: '',
  message: '',
});

const LeadForm: FC<LeadFormProps> = ({
  leadType,
  submitLabel,
  whatsappMessage,
  withBusinessName = false,
  withEventDetails = false,
  withInquiryType = false,
}) => {
  const { mutateAsync, isPending, isSuccess, error } = useCreateLead();
  const { control, handleSubmit, reset } = useForm<CreateLeadPayload>({
    resolver: zodResolver(createLeadSchema),
    defaultValues: buildDefaults(leadType),
  });

  const onSubmit = handleSubmit(async (values) => {
    await mutateAsync(values);
    reset(buildDefaults(leadType));
  });

  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={Styles.form}>
      <Controller
        name="fullName"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="שם מלא"
            required
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
            label="טלפון"
            required
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      {withInquiryType ? (
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type="email"
              label="אימייל"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      ) : null}
      <LeadExtraFields
        control={control}
        withBusinessName={withBusinessName}
        withEventDetails={withEventDetails}
        withInquiryType={withInquiryType}
      />
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="הערות / פרטים נוספים" multiline minRows={3} />
        )}
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
          rel="noopener noreferrer"
          aria-label="שליחת הודעה בוואטסאפ (נפתח בחלון חדש)"
        >
          WhatsApp
        </Button>
      </Box>
      <Box role="status" aria-live="polite">
        {isSuccess ? (
          <Typography sx={Styles.feedback}>הפנייה נשלחה — נחזור אליך.</Typography>
        ) : null}
        {error ? <Typography sx={Styles.feedback}>{error.message}</Typography> : null}
      </Box>
    </Box>
  );
};

export default LeadForm;
