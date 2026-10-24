import Styles from '@components/layout/footer/Footer.style';
import AppLink from '@components/shared/app-link/AppLink';
import { Box, Typography } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import { Route } from '@shared/enums/route.enum';
import { type FC } from 'react';

const Footer: FC = () => (
  <Box component="footer" sx={Styles.footer}>
    <Typography sx={Styles.title}>{SITE.name}</Typography>
    <Typography sx={Styles.phone}>{SITE.phone}</Typography>
    <Box component="nav" aria-label="קישורי תחתית" sx={Styles.links}>
      <AppLink href={Route.PrivateEvents} sx={Styles.link}>
        אירועים פרטיים
      </AppLink>
      <AppLink href={Route.Collaborations} sx={Styles.link}>
        שיתופי פעולה
      </AppLink>
      <AppLink href={Route.Gallery} sx={Styles.link}>
        גלריה
      </AppLink>
      <AppLink href={Route.Contact} sx={Styles.link}>
        יצירת קשר
      </AppLink>
      <AppLink href={Route.Accessibility} sx={Styles.link}>
        הצהרת נגישות
      </AppLink>
      <Box
        component="a"
        href={SITE.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        sx={Styles.link}
      >
        Instagram
      </Box>
      <Box
        component="a"
        href={SITE.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        sx={Styles.link}
      >
        WhatsApp
      </Box>
    </Box>
    <Typography sx={Styles.copyright}>
      © {new Date().getFullYear()} {SITE.name}. כל הזכויות שמורות.
    </Typography>
  </Box>
);

export default Footer;
