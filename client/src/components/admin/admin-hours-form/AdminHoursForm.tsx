'use client';

import Styles from '@components/admin/admin-hours-form/AdminHoursForm.style';
import { useAdminHoursForm } from '@components/admin/admin-hours-form/useAdminHoursForm';
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { WEEKDAY_LABEL, Weekday } from '@shared/enums/weekday.enum';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

const WEEKDAYS = Object.values(Weekday).filter((value): value is Weekday =>
  Number.isInteger(value),
);

/** עריכת חלון הפעילות — יום, שעות והודעה כשסגור. */
const AdminHoursForm: FC = () => {
  const { control, onSubmit, isPending, isSaving, isSuccess, error } = useAdminHoursForm();

  if (isPending) {
    return <Typography sx={Styles.hint}>טוען שעות…</Typography>;
  }

  return (
    <Box component='form' onSubmit={onSubmit} sx={Styles.form}>
      <Controller
        name='weekday'
        control={control}
        render={({ field }) => (
          <TextField {...field} select label='יום הפעילות'>
            {WEEKDAYS.map((day) => (
              <MenuItem key={day} value={day}>
                {WEEKDAY_LABEL[day]}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Box sx={Styles.row}>
        <Controller
          name='openTime'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type='time'
              label='שעת פתיחה'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name='closeTime'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              type='time'
              label='שעת סגירה'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </Box>
      <Controller
        name='isActive'
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch checked={field.value} onChange={field.onChange} />}
            label='מקבלים הזמנות'
          />
        )}
      />
      <Controller
        name='closedMessage'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label='הודעה כשסגור'
            placeholder='לא חובה — למשל: חוזרים בשבוע הבא'
            multiline
            minRows={2}
          />
        )}
      />
      <Button type='submit' variant='contained' disabled={isSaving}>
        שמירה
      </Button>
      {isSuccess ? <Typography sx={Styles.feedback}>השעות עודכנו.</Typography> : null}
      {error ? <Typography sx={Styles.feedback}>{error.message}</Typography> : null}
    </Box>
  );
};

export default AdminHoursForm;
