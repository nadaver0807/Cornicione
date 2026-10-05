'use client';

import { useGetOrders } from '@/hooks/api/useGetOrders';
import { useGetPizzas } from '@/hooks/api/useGetPizzas';
import { useAdminSession } from '@/hooks/auth/useAdminSession';
import { useState } from 'react';

export enum AdminTab {
  Orders = 'ORDERS',
  Menu = 'MENU',
  Hours = 'HOURS',
}

/** מרכז את מצב לוח הניהול: לשונית פעילה, נתונים ויציאה. */
export const useAdminDashboard = () => {
  const [tab, setTab] = useState(AdminTab.Orders);
  const { logout } = useAdminSession();

  const orders = useGetOrders(tab === AdminTab.Orders);
  const pizzas = useGetPizzas();

  return { tab, setTab, orders, pizzas, logout };
};
