'use client';

import { useDeletePizza } from '@/hooks/api/useDeletePizza';
import { useUpdatePizza } from '@/hooks/api/useUpdatePizza';
import Styles from '@components/admin/admin-menu-row/AdminMenuRow.style';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Switch, Tooltip, Typography } from '@mui/material';
import { PIZZA_CATEGORY_LABEL } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { formatPrice } from '@shared/util/cart.util';
import { type FC } from 'react';

type AdminMenuRowProps = {
  pizza: Pizza;
  onEdit: (pizza: Pizza) => void;
};

/** שורת פריט בתפריט — זמינות, עריכה ומחיקה. */
const AdminMenuRow: FC<AdminMenuRowProps> = ({ pizza, onEdit }) => {
  const { mutate, isPending } = useUpdatePizza();
  const { mutate: remove, isPending: isDeleting } = useDeletePizza();

  const handleDelete = () => {
    if (window.confirm(`למחוק את "${pizza.name}" מהתפריט?`)) {
      remove(pizza.uuid);
    }
  };

  return (
    <Box sx={Styles.row}>
      <Box component="img" src={pizza.imageUrl ?? ''} alt={pizza.name} sx={Styles.thumb} />
      <Box sx={Styles.details}>
        <Typography sx={Styles.name}>{pizza.name}</Typography>
        <Typography variant="body2" sx={Styles.meta}>
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
      <IconButton onClick={() => onEdit(pizza)} aria-label={`עריכת ${pizza.name}`}>
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton onClick={handleDelete} disabled={isDeleting} aria-label={`מחיקת ${pizza.name}`}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default AdminMenuRow;
