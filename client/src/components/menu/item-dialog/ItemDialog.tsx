'use client';

import Styles from '@components/menu/item-dialog/ItemDialog.style';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { type Pizza, type PizzaTopping } from '@shared/types/pizza.type';
import { formatPrice } from '@shared/util/cart.util';
import { useState, type FC } from 'react';
import { useCart } from '@/hooks/cart/useCart';

type ItemDialogProps = {
  pizza: Pizza | null;
  onClose: () => void;
};

const ItemDialog: FC<ItemDialogProps> = ({ pizza, onClose }) => {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<PizzaTopping[]>([]);
  const [note, setNote] = useState('');

  const toggleTopping = (topping: PizzaTopping) =>
    setSelected((current) =>
      current.some((item) => item.name === topping.name)
        ? current.filter((item) => item.name !== topping.name)
        : [...current, topping],
    );

  const handleAdd = () => {
    if (!pizza) {
      return;
    }

    addItem(pizza, selected, note.trim());
    setSelected([]);
    setNote('');
    onClose();
  };

  return (
    <Dialog open={Boolean(pizza)} onClose={onClose} fullWidth maxWidth="xs" slotProps={{ paper: { sx: Styles.dialogPaper } }}>
      <DialogTitle sx={Styles.title}>{pizza?.name}</DialogTitle>
      <DialogContent sx={Styles.content}>
        <Typography variant="body2" color="text.secondary">
          {pizza?.description}
        </Typography>
        {pizza?.toppings.length ? (
          <Typography variant="overline" sx={Styles.sectionLabel}>
            תוספות
          </Typography>
        ) : null}
        {pizza?.toppings.map((topping) => (
          <FormControlLabel
            key={topping.name}
            control={
              <Checkbox
                checked={selected.some((item) => item.name === topping.name)}
                onChange={() => toggleTopping(topping)}
              />
            }
            label={`${topping.name} ${topping.price ? `· ${formatPrice(topping.price)}` : ''}`}
          />
        ))}
        <TextField
          label="הערה להזמנה"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          multiline
          minRows={2}
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={Styles.actions}>
        <Button color="inherit" onClick={onClose}>
          ביטול
        </Button>
        <Button variant="contained" onClick={handleAdd}>
          הוספה
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDialog;
