'use client';

import { useAdminSession } from '@/hooks/auth/useAdminSession';
import AdminLogin from '@components/admin/admin-login/AdminLogin';
import Styles from '@components/admin/admin-gate/AdminGate.style';
import { Box } from '@mui/material';
import { type FC, type ReactNode } from 'react';

type AdminGateProps = {
  children: ReactNode;
};

/** חוסם את אזור הניהול: בלי אסימון תקף מוצג מסך התחברות. */
const AdminGate: FC<AdminGateProps> = ({ children }) => {
  const { isAuthenticated } = useAdminSession();

  return <Box sx={Styles.gate}>{isAuthenticated ? children : <AdminLogin />}</Box>;
};

export default AdminGate;
