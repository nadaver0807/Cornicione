import PrivateEventsPage from '@components/private-events/private-events-page/PrivateEventsPage';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אירועים פרטיים',
};

const Page = () => <PrivateEventsPage />;

export default Page;
