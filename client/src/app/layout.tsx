import Styles from '@/app/RootLayout.style';
import CartDrawer from '@components/cart/cart-drawer/CartDrawer';
import AccessibilityWidget from '@components/layout/accessibility-widget/AccessibilityWidget';
import Footer from '@components/layout/footer/Footer';
import Header from '@components/layout/header/Header';
import SkipLink from '@components/layout/skip-link/SkipLink';
import WhatsappFab from '@components/layout/whatsapp-fab/WhatsappFab';
import { Box } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import Providers from '@theme/Providers';
import { type Metadata } from 'next';
import { Cormorant_Garamond, Frank_Ruhl_Libre, Great_Vibes, Heebo } from 'next/font/google';
import { type ReactNode } from 'react';

const heebo = Heebo({
  variable: '--font-hebrew',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const frank = Frank_Ruhl_Libre({
  variable: '--font-serif-he',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

const script = Great_Vibes({
  variable: '--font-script',
  subsets: ['latin'],
  weight: '400',
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

const fontClasses = [heebo, frank, cormorant, script].map((font) => font.variable).join(' ');

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="he" dir="rtl" className={fontClasses}>
    <body>
      <Providers>
        <SkipLink />
        <Box sx={Styles.layout}>
          <Header />
          <Box component="main" id="main-content" tabIndex={-1} sx={Styles.main}>
            {children}
          </Box>
          <Footer />
        </Box>
        <WhatsappFab />
        <AccessibilityWidget />
        <CartDrawer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
