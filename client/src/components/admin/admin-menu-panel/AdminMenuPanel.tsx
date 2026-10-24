'use client';

import AdminPizzaDialog from '@components/admin/admin-pizza-dialog/AdminPizzaDialog';
import AdminMenuRow from '@components/admin/admin-menu-row/AdminMenuRow';
import Styles from '@components/admin/admin-dashboard/AdminDashboard.style';
import { Box, Button, Typography } from '@mui/material';
import { type Pizza } from '@shared/types/pizza.type';
import { useState, type FC } from 'react';

type AdminMenuPanelProps = {
  pizzas?: Pizza[];
  isPending: boolean;
};

/** ניהול התפריט — רשימת פריטים, עריכה, הוספה ומחיקה. */
const AdminMenuPanel: FC<AdminMenuPanelProps> = ({ pizzas, isPending }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState<Pizza | null>(null);

  const openDialog = (pizza: Pizza | null) => {
    setEditing(pizza);
    setIsOpen(true);
  };

  return (
    <Box>
      <Button variant="outlined" color="inherit" onClick={() => openDialog(null)}>
        הוספת פריט
      </Button>
      {isPending ? <Typography sx={Styles.state}>טוען תפריט…</Typography> : null}
      {pizzas?.map((pizza) => (
        <AdminMenuRow key={pizza.uuid} pizza={pizza} onEdit={openDialog} />
      ))}
      <AdminPizzaDialog isOpen={isOpen} pizza={editing} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default AdminMenuPanel;
