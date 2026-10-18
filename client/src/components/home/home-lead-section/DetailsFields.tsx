import Styles from '@components/home/home-lead-section/HomeLeadSection.style';
import {
  LEAD_TYPE_OPTIONS,
  type FormValues,
} from '@components/home/home-lead-section/HomeLeadSection.util';
import { Box, Checkbox, FormControlLabel, MenuItem, TextField, Typography } from '@mui/material';
import { type FC } from 'react';
import { Controller, useWatch, type Control } from 'react-hook-form';

type DetailsFieldsProps = {
  control: Control<FormValues>;
};

/** שדות פרטי האירוע — סוג, אורחים, תאריך ופרטים נוספים. */
const DetailsFields: FC<DetailsFieldsProps> = ({ control }) => {
  const isDateOpen = useWatch({ control, name: 'isDateOpen' });

  return (
    <>
      <Typography sx={Styles.subHeader}>פרטי האירוע</Typography>
      <Controller
        name="leadType"
        control={control}
        render={({ field }) => (
          <TextField {...field} select label="סוג האירוע *">
            {LEAD_TYPE_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        name="guests"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="number"
            label="מספר אורחים *"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Box>
        <Controller
          name="eventDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="date"
              label="תאריך האירוע *"
              disabled={isDateOpen}
              slotProps={{ inputLabel: { shrink: true } }}
            />
          )}
        />
        <Controller
          name="isDateOpen"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox checked={field.value} onChange={field.onChange} />}
              label="התאריך עוד לא סגור"
            />
          )}
        />
      </Box>
      <Controller
        name="details"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            minRows={4}
            label="פרטים נוספים (לא חובה)"
            placeholder="שעה, אולם או בית פרטי, בקשות מיוחדות, כשרות..."
          />
        )}
      />
    </>
  );
};

export default DetailsFields;
