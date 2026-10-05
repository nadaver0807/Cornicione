'use client';

import AdminHoursForm from '@components/admin/admin-hours-form/AdminHoursForm';
import AdminMenuRow from '@components/admin/admin-menu-row/AdminMenuRow';
import AdminOrderCard from '@components/admin/admin-order-card/AdminOrderCard';
import Styles from '@components/admin/admin-dashboard/AdminDashboard.style';
import { AdminTab } from '@components/admin/admin-dashboard/useAdminDashboard';
import { Box, Typography } from '@mui/material';
import { type GetOrdersResponse } from '@shared/types/order.type';
import { type GetPizzasResponse } from '@shared/types/pizza.type';
import { type FC } from 'react';

type QueryState<T> = {
  data?: T;
  isPending: boolean;
  isError: boolean;
};

type AdminTabPanelProps = {
  tab: AdminTab;
  orders: QueryState<GetOrdersResponse>;
  pizzas: QueryState<GetPizzasResponse>;
};

/** מציג את תוכן הלשונית הפעילה בלוח הניהול. */
const AdminTabPanel: FC<AdminTabPanelProps> = ({ tab, orders, pizzas }) => {
  if (tab === AdminTab.Hours) {
    return <AdminHoursForm />;
  }

  if (tab === AdminTab.Menu) {
    return (
      <Box>
        {pizzas.isPending ? <Typography sx={Styles.state}>טוען תפריט…</Typography> : null}
        {pizzas.data?.pizzas.map((pizza) => (
          <AdminMenuRow key={pizza.uuid} pizza={pizza} />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={Styles.orders}>
      {orders.isPending ? <Typography sx={Styles.state}>טוען הזמנות…</Typography> : null}
      {orders.isError ? <Typography sx={Styles.state}>שגיאה בטעינה</Typography> : null}
      {orders.data?.orders.map((order) => (
        <AdminOrderCard key={order.uuid} order={order} />
      ))}
    </Box>
  );
};

export default AdminTabPanel;
