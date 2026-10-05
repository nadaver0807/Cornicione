import GalleryPage from '@components/gallery/gallery-page/GalleryPage';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גלריה',
};

const Page = () => <GalleryPage />;

export default Page;
