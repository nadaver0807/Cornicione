'use client';

import Styles from '@components/admin/admin-dashboard/AdminDashboard.style';
import { AdminTab, useAdminDashboard } from '@components/admin/admin-dashboard/useAdminDashboard';
import AdminTabPanel from '@components/admin/admin-tab-panel/AdminTabPanel';
import PageContainer from '@components/shared/page-container/PageContainer';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { type FC } from 'react';

/** לוח הניהול — הזמנות, זמינות פריטים ושעות פעילות. */
const AdminDashboard: FC = () => {
  const { tab, setTab, orders, pizzas, logout } = useAdminDashboard();

  return (
    <PageSection>
      <PageContainer>
        <Box sx={Styles.header}>
          <Typography variant='h2'>לוח ניהול</Typography>
          <Button variant='outlined' color='inherit' onClick={logout}>
            יציאה
          </Button>
        </Box>
        <Tabs value={tab} onChange={(_event, value) => setTab(value as AdminTab)} sx={Styles.tabs}>
          <Tab value={AdminTab.Orders} label='הזמנות' />
          <Tab value={AdminTab.Menu} label='תפריט' />
          <Tab value={AdminTab.Hours} label='שעות פעילות' />
        </Tabs>
        <AdminTabPanel tab={tab} orders={orders} pizzas={pizzas} />
      </PageContainer>
    </PageSection>
  );
};

export default AdminDashboard;
