import Styles from '@components/layout/footer/Footer.style';
import AppLink from '@components/shared/app-link/AppLink';
import { Box, Typography } from '@mui/material';
import { NAV_LINKS, SITE, TAKEAWAY_WINDOW } from '@shared/consts/site.const';
import { type FC } from 'react';

const Footer: FC = () => (
  <Box component="footer" sx={Styles.footer}>
    <Box sx={Styles.inner}>
      <Box>
        <Typography sx={Styles.brand}>{SITE.name.toUpperCase()}</Typography>
        <Typography sx={Styles.tagline}>{SITE.tagline}</Typography>
      </Box>
      <Box sx={Styles.column}>
        <Typography variant="overline">ניווט</Typography>
        {NAV_LINKS.map((link) => (
          <AppLink key={link.href} href={link.href} sx={Styles.link}>
            {link.label}
          </AppLink>
        ))}
      </Box>
      <Box sx={Styles.column}>
        <Typography variant="overline">יצירת קשר</Typography>
        <Box component="a" href={`tel:${SITE.phone}`} sx={Styles.link}>
          {SITE.phone}
        </Box>
        <Box component="a" href={`mailto:${SITE.email}`} sx={Styles.link}>
          {SITE.email}
        </Box>
        <Box component="a" href={SITE.social.instagram} target="_blank" sx={Styles.link}>
          Instagram
        </Box>
      </Box>
      <Box sx={Styles.column}>
        <Typography variant="overline">טייקאווי</Typography>
        <Typography sx={Styles.link}>{TAKEAWAY_WINDOW.dayLabel}</Typography>
        <Typography sx={Styles.link}>{TAKEAWAY_WINDOW.hoursLabel}</Typography>
      </Box>
    </Box>
    <Typography sx={Styles.copyright}>
      © {new Date().getFullYear()} {SITE.name}
    </Typography>
  </Box>
);

export default Footer;
