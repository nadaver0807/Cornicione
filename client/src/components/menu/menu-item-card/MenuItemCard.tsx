'use client';

import Styles from '@components/menu/menu-item-card/MenuItemCard.style';
import { Box, Button, Typography } from '@mui/material';
import { type Pizza } from '@shared/types/pizza.type';
import { formatPrice } from '@shared/util/cart.util';
import { type FC } from 'react';

type MenuItemCardProps = {
  pizza: Pizza;
  isClosed: boolean;
  onSelect: (pizza: Pizza) => void;
};

/** כפתור ההוספה נשאר לחיץ כשסגור, כדי שהלחיצה תסביר למה אי אפשר להזמין. */
const MenuItemCard: FC<MenuItemCardProps> = ({ pizza, isClosed, onSelect }) => (
  <Box sx={Styles.card}>
    <Box sx={Styles.media}>
      {pizza.imageUrl ? (
        <Box component='img' src={pizza.imageUrl} alt={pizza.name} sx={Styles.image} />
      ) : null}
      {pizza.isSoldOut ? <Box sx={Styles.soldOutOverlay}>אזל</Box> : null}
    </Box>
    <Box sx={Styles.content}>
      <Box sx={Styles.titleRow}>
        <Typography variant='h4'>{pizza.name}</Typography>
        <Typography sx={Styles.price}>{formatPrice(Number(pizza.price))}</Typography>
      </Box>
      <Typography variant='body2' sx={Styles.description}>
        {pizza.description}
      </Typography>
    </Box>
    <Box sx={Styles.actions}>
      <Button
        fullWidth
        variant='outlined'
        color='inherit'
        disabled={pizza.isSoldOut}
        onClick={() => onSelect(pizza)}
      >
        {pizza.isSoldOut ? 'אזל מהמלאי' : 'הוספה להזמנה'}
      </Button>
      {isClosed && !pizza.isSoldOut ? (
        <Typography variant='body2' sx={Styles.closedHint}>
          ההזמנות סגורות כרגע
        </Typography>
      ) : null}
    </Box>
  </Box>
);

export default MenuItemCard;
