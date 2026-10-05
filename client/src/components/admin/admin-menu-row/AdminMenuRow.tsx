'use client';

import { useUpdatePizza } from '@/hooks/api/useUpdatePizza';
import Styles from '@components/admin/admin-menu-row/AdminMenuRow.style';
import { Box, Switch, Tooltip, Typography } from '@mui/material';
import { PIZZA_CATEGORY_LABEL } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { formatPrice } from '@shared/util/cart.util';
import { type FC } from 'react';

type AdminMenuRowProps = {
  pizza: Pizza;
};

/** שורת פריט בתפריט — סימון "אזל" בלי מחיקה. */
const AdminMenuRow: FC<AdminMenuRowProps> = ({ pizza }) => {
  const { mutate, isPending } = useUpdatePizza();

  return (
    <Box sx={Styles.row}>
      <Box component='img' src={pizza.imageUrl ?? ''} alt={pizza.name} sx={Styles.thumb} />
      <Box sx={Styles.details}>
        <Typography sx={Styles.name}>{pizza.name}</Typography>
        <Typography variant='body2' sx={Styles.meta}>
          {PIZZA_CATEGORY_LABEL[pizza.menuCategory]} · {formatPrice(Number(pizza.price))}
        </Typography>
      </Box>
      <Tooltip title={pizza.isSoldOut ? 'מסומן כאזל' : 'זמין להזמנה'}>
        <Switch
          checked={!pizza.isSoldOut}
          disabled={isPending}
          onChange={(event) =>
            mutate({ uuid: pizza.uuid, payload: { isSoldOut: !event.target.checked } })
          }
          slotProps={{ input: { 'aria-label': `זמינות ${pizza.name}` } }}
        />
      </Tooltip>
    </Box>
  );
};

export default AdminMenuRow;
