'use client';

import Styles from '@components/admin/admin-login/AdminLogin.style';
import { useAdminLogin } from '@components/admin/admin-login/useAdminLogin';
import { Box, Button, TextField, Typography } from '@mui/material';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

/** מסך התחברות למנהלן — מייל וסיסמה בלבד. */
const AdminLogin: FC = () => {
  const { control, onSubmit, isPending, error } = useAdminLogin();

  return (
    <Box sx={Styles.wrapper}>
      <Box sx={Styles.card}>
        <Typography variant='overline' sx={Styles.eyebrow}>
          ניהול
        </Typography>
        <Typography variant='h2' sx={Styles.title}>
          כניסת מנהלן
        </Typography>
        <Typography variant='body2' sx={Styles.subtitle}>
          האזור הזה מיועד לניהול התפריט וההזמנות.
        </Typography>
        <Box component='form' onSubmit={onSubmit} sx={Styles.form}>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type='email'
                label='אימייל'
                autoComplete='username'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type='password'
                label='סיסמה'
                autoComplete='current-password'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button type='submit' variant='contained' disabled={isPending}>
            {isPending ? 'מתחבר…' : 'כניסה'}
          </Button>
          {error ? <Typography sx={Styles.feedback}>{error.message}</Typography> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLogin;
