'use client';

import { type CreateLeadPayload } from '@shared/validations/lead.validation';
import { MenuItem, TextField } from '@mui/material';
import { LEAD_TYPE_LABEL, LeadType } from '@shared/enums/lead-type.enum';
import { type FC } from 'react';
import { Controller, type Control } from 'react-hook-form';

type LeadExtraFieldsProps = {
  control: Control<CreateLeadPayload>;
  withBusinessName: boolean;
  withEventDetails: boolean;
  withInquiryType: boolean;
};

const INQUIRY_TYPES = [LeadType.General, LeadType.PrivateEvent, LeadType.Collaboration];

/** שדות אופציונליים של הטופס — סוג פנייה, שם עסק ופרטי אירוע. */
const LeadExtraFields: FC<LeadExtraFieldsProps> = ({
  control,
  withBusinessName,
  withEventDetails,
  withInquiryType,
}) => (
  <>
    {withInquiryType ? (
      <Controller
        name="leadType"
        control={control}
        render={({ field }) => (
          <TextField {...field} select label="סוג הפנייה">
            {INQUIRY_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {LEAD_TYPE_LABEL[type]}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    ) : null}
    {withBusinessName ? (
      <Controller
        name="businessName"
        control={control}
        render={({ field }) => <TextField {...field} label="שם העסק / המקום" />}
      />
    ) : null}
    {withEventDetails ? (
      <>
        <Controller
          name="eventDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="date"
              label="תאריך האירוע"
              slotProps={{ inputLabel: { shrink: true } }}
            />
          )}
        />
        <Controller
          name="guestCount"
          control={control}
          render={({ field }) => <TextField {...field} type="number" label="כמות אורחים משוערת" />}
        />
        <Controller
          name="location"
          control={control}
          render={({ field }) => <TextField {...field} label="מיקום האירוע" />}
        />
      </>
    ) : null}
  </>
);

export default LeadExtraFields;
