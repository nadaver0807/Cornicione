import Styles from '@/app/RootLayout.style';
import CartDrawer from '@components/cart/cart-drawer/CartDrawer';
import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import WhatsappFab from '@components/layout/whatsapp-fab/WhatsappFab';
import { Box } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import Providers from '@theme/Providers';
import { type Metadata } from 'next';
import { Assistant, Montserrat } from 'next/font/google';
import { type ReactNode } from 'react';

/** עברית — גוף הטקסט של האתר. */
const assistant = Assistant({
  variable: '--font-hebrew',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

/** אנגלית — שם המותג והכותרות הלטיניות. */
const montserrat = Montserrat({
  variable: '--font-latin',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='he' dir='rtl' className={`${assistant.variable} ${montserrat.variable}`}>
    <body>
      <Providers>
        <Box sx={Styles.layout}>
          <Header />
          <Box component='main' sx={Styles.main}>
            {children}
          </Box>
          <Footer />
        </Box>
        <WhatsappFab />
        <CartDrawer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
