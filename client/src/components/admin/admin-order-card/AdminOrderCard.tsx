'use client';

import { useUpdateOrderStatus } from '@/hooks/api/useUpdateOrderStatus';
import Styles from '@components/admin/admin-order-card/AdminOrderCard.style';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { ORDER_STATUS_LABEL, OrderStatus } from '@shared/enums/order-status.enum';
import { ORDER_TYPE_LABEL } from '@shared/enums/order-type.enum';
import { type Order } from '@shared/types/order.type';
import { formatPrice } from '@shared/util/cart.util';
import { type FC } from 'react';

type AdminOrderCardProps = {
  order: Order;
};

/** כרטיס הזמנה בלוח הניהול — פרטים, פריטים ושינוי סטטוס. */
const AdminOrderCard: FC<AdminOrderCardProps> = ({ order }) => {
  const { mutate, isPending } = useUpdateOrderStatus();

  return (
    <Box sx={Styles.card}>
      <Box sx={Styles.header}>
        <Typography variant='h4'>#{order.orderNumber}</Typography>
        <Typography variant='body2' sx={Styles.meta}>
          {ORDER_TYPE_LABEL[order.orderType]}
        </Typography>
      </Box>
      <Typography variant='body2' sx={Styles.meta}>
        {order.customerName} · {order.customerPhone}
      </Typography>
      {order.address ? (
        <Typography variant='body2' sx={Styles.meta}>
          {order.address}
        </Typography>
      ) : null}
      <Box sx={Styles.items}>
        {order.items.map((item) => (
          <Typography key={item.uuid} variant='body2'>
            {item.quantity} × {item.name}
          </Typography>
        ))}
      </Box>
      {order.note ? (
        <Typography variant='body2' sx={Styles.meta}>
          הערה: {order.note}
        </Typography>
      ) : null}
      <Box sx={Styles.footer}>
        <Typography variant='h4'>{formatPrice(Number(order.total))}</Typography>
        <TextField
          select
          size='small'
          label='סטטוס'
          value={order.status}
          disabled={isPending}
          sx={Styles.statusField}
          onChange={(event) =>
            mutate({ uuid: order.uuid, status: event.target.value as OrderStatus })
          }
        >
          {Object.values(OrderStatus).map((status) => (
            <MenuItem key={status} value={status}>
              {ORDER_STATUS_LABEL[status]}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default AdminOrderCard;
