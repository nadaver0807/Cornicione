'use client';

import Styles from '@components/cart/cart-drawer/CartDrawer.style';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import { Route } from '@shared/enums/route.enum';
import { calculateLinePrice, formatPrice } from '@shared/util/cart.util';
import { useRouter } from 'next/navigation';
import { type FC } from 'react';
import { useCart } from '@/hooks/cart/useCart';

const CartDrawer: FC = () => {
  const { items, totals, isOpen, setIsOpen, updateQuantity } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push(Route.Checkout);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)} sx={Styles.drawer}>
      <Box sx={Styles.container}>
        <Box sx={Styles.header}>
          <Typography variant="overline">ההזמנה שלך</Typography>
          <IconButton onClick={() => setIsOpen(false)} aria-label="סגירה">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={Styles.items}>
          {items.length === 0 ? <Typography sx={Styles.empty}>העגלה ריקה</Typography> : null}
          {items.map((item) => (
            <Box key={item.lineId} sx={Styles.item}>
              <Box>
                <Typography variant="h4">{item.name}</Typography>
                {item.toppings.length ? (
                  <Typography sx={Styles.itemMeta}>
                    {item.toppings.map((topping) => topping.name).join(' · ')}
                  </Typography>
                ) : null}
                {item.note ? <Typography sx={Styles.itemMeta}>{item.note}</Typography> : null}
                <Box sx={Styles.quantityRow}>
                  <Button
                    size="small"
                    color="inherit"
                    onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                  >
                    −
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    size="small"
                    color="inherit"
                    onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                  >
                    +
                  </Button>
                </Box>
              </Box>
              <Typography>{formatPrice(calculateLinePrice(item))}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={Styles.footer}>
          <Box sx={Styles.totalRow}>
            <Typography variant="overline">סה״כ ביניים</Typography>
            <Typography variant="h4">{formatPrice(totals.subtotal)}</Typography>
          </Box>
          <Button variant="contained" disabled={items.length === 0} onClick={handleCheckout}>
            המשך להזמנה
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
