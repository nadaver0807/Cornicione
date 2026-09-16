import AdminDashboard from '@components/admin/admin-dashboard/AdminDashboard';
import AdminGate from '@components/admin/admin-gate/AdminGate';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ניהול',
  robots: { index: false, follow: false },
};

const Page = () => (
  <AdminGate>
    <AdminDashboard />
  </AdminGate>
);

export default Page;
