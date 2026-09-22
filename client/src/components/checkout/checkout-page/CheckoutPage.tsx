'use client';

import Styles from '@components/checkout/checkout-page/CheckoutPage.style';
import { useCheckoutPage } from '@components/checkout/checkout-page/useCheckoutPage';
import ClosedDialog from '@components/menu/closed-dialog/ClosedDialog';
import OpeningStatusBadge from '@components/shared/opening-status-badge/OpeningStatusBadge';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { ORDER_TYPE_LABEL, OrderType } from '@shared/enums/order-type.enum';
import { calculateLinePrice, formatPrice } from '@shared/util/cart.util';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

const CheckoutPage: FC = () => {
  const {
    control,
    onSubmit,
    items,
    totals,
    isDelivery,
    deliveryFee,
    isPending,
    isSuccess,
    error,
    status,
    isClosed,
    isClosedDialogOpen,
    closeClosedDialog,
  } = useCheckoutPage();

  return (
    <Box>
      <PageHero eyebrow='הזמנה' title='פרטים ואישור' subtitle='שלב אחרון — פרטי מסירה ואישור.'>
        {isClosed ? (
          <Box sx={Styles.statusRow}>
            <OpeningStatusBadge />
          </Box>
        ) : null}
      </PageHero>
      <PageSection>
        <Box sx={Styles.layout}>
          <Box component='form' onSubmit={onSubmit} sx={Styles.form}>
            <Controller
              name='orderType'
              control={control}
              render={({ field }) => (
                <TextField {...field} select label='אופן המסירה'>
                  {Object.values(OrderType).map((type) => (
                    <MenuItem key={type} value={type}>
                      {ORDER_TYPE_LABEL[type]}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
              name='customerName'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label='שם מלא'
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='customerPhone'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label='טלפון'
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name='customerEmail'
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label='אימייל'
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            {isDelivery ? (
              <Controller
                name='address'
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label='כתובת למשלוח'
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
            ) : null}
            <Controller
              name='note'
              control={control}
              render={({ field }) => <TextField {...field} label='הערות' multiline minRows={3} />}
            />
            <Button type='submit' variant='contained' disabled={isPending || items.length === 0}>
              {isClosed ? 'ההזמנות סגורות כרגע' : 'שליחת ההזמנה'}
            </Button>
            {isSuccess ? (
              <Typography sx={Styles.feedback}>ההזמנה התקבלה — נחזור אליך לאישור.</Typography>
            ) : null}
            {error ? <Typography sx={Styles.feedback}>{error.message}</Typography> : null}
          </Box>
          <Box sx={Styles.summary}>
            <Typography variant='overline'>סיכום</Typography>
            {items.map((item) => (
              <Box key={item.lineId} sx={Styles.summaryRow}>
                <Typography variant='body2'>
                  {item.quantity} × {item.name}
                </Typography>
                <Typography variant='body2'>{formatPrice(calculateLinePrice(item))}</Typography>
              </Box>
            ))}
            <Box sx={Styles.summaryRow}>
              <Typography variant='body2'>משלוח</Typography>
              <Typography variant='body2'>{formatPrice(deliveryFee)}</Typography>
            </Box>
            <Box sx={Styles.totalRow}>
              <Typography variant='h4'>סה״כ</Typography>
              <Typography variant='h4'>{formatPrice(totals.subtotal + deliveryFee)}</Typography>
            </Box>
          </Box>
        </Box>
      </PageSection>
      <ClosedDialog isOpen={isClosedDialogOpen} status={status} onClose={closeClosedDialog} />
    </Box>
  );
};

export default CheckoutPage;
