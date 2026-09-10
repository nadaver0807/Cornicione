import CheckoutPage from '@components/checkout/checkout-page/CheckoutPage';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'סיום הזמנה',
};

const Page = () => <CheckoutPage />;

export default Page;
