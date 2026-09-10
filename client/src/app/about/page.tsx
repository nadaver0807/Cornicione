import AboutPage from '@components/about/about-page/AboutPage';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מה זה Cornicione',
};

const Page = () => <AboutPage />;

export default Page;
