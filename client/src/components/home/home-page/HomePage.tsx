import Styles from '@components/home/home-page/HomePage.style';
import AppLink from '@components/shared/app-link/AppLink';
import { Box, Typography } from '@mui/material';
import { NAV_LINKS, SITE } from '@shared/consts/site.const';
import { type FC } from 'react';

/** דף הבית — שער לארבעת האזורים, בלי להעמיס על אף אחד מהם. */
const HomePage: FC = () => (
  <Box>
    <Box sx={Styles.hero}>
      <Typography sx={Styles.brand}>{SITE.name.toUpperCase()}</Typography>
      <Typography variant="subtitle1" sx={Styles.tagline}>
        {SITE.description}
      </Typography>
    </Box>
    <Box sx={Styles.gate}>
      {NAV_LINKS.map((link, index) => (
        <AppLink key={link.href} href={link.href} sx={Styles.gateItem}>
          <Typography variant="overline" sx={Styles.gateIndex}>
            {String(index + 1).padStart(2, '0')}
          </Typography>
          <Typography variant="h2">{link.label}</Typography>
          <Typography sx={Styles.gateDescription}>{link.description}</Typography>
        </AppLink>
      ))}
    </Box>
  </Box>
);

export default HomePage;
