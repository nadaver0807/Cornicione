'use client';

import { useAdminPizzaDialog } from '@components/admin/admin-pizza-dialog/useAdminPizzaDialog';
import Styles from '@components/admin/admin-pizza-dialog/AdminPizzaDialog.style';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { PIZZA_CATEGORY_LABEL, PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { type FC } from 'react';
import { Controller } from 'react-hook-form';

type AdminPizzaDialogProps = {
  isOpen: boolean;
  pizza: Pizza | null;
  onClose: () => void;
};

/** דיאלוג עריכה (כשיש פריט) או הוספה (כשאין) של פריט בתפריט. */
const AdminPizzaDialog: FC<AdminPizzaDialogProps> = ({ isOpen, pizza, onClose }) => {
  const { control, onSubmit, isSaving, error } = useAdminPizzaDialog(pizza, isOpen, onClose);

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <Box component="form" onSubmit={onSubmit} noValidate>
        <DialogTitle>{pizza ? 'עריכת פריט' : 'הוספת פריט'}</DialogTitle>
        <DialogContent sx={Styles.content}>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="שם הפריט"
                required
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField {...field} label="תיאור" multiline minRows={2} />}
          />
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="number"
                label="מחיר (₪)"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="נתיב תמונה" placeholder="/images/menu/..." />
            )}
          />
          <Controller
            name="menuCategory"
            control={control}
            render={({ field }) => (
              <TextField {...field} select label="קטגוריה">
                {Object.values(PizzaCategory).map((category) => (
                  <MenuItem key={category} value={category}>
                    {PIZZA_CATEGORY_LABEL[category]}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="isSoldOut"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Switch checked={!field.value} onChange={(_e, v) => field.onChange(!v)} />}
                label="זמין להזמנה"
              />
            )}
          />
          {error ? <Typography sx={Styles.error}>{error.message}</Typography> : null}
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onClose}>
            ביטול
          </Button>
          <Button type="submit" variant="contained" disabled={isSaving}>
            שמירה
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AdminPizzaDialog;
