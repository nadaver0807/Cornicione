import { HERO_VIDEO } from '@components/home/home-page/HomePage.const';
import Styles from '@components/home/home-page/HomePage.style';
import AppLink from '@components/shared/app-link/AppLink';
import OpeningStatusBadge from '@components/shared/opening-status-badge/OpeningStatusBadge';
import { Box, Typography } from '@mui/material';
import { NAV_LINKS, SITE, WELCOME_MESSAGE } from '@shared/consts/site.const';
import { type FC } from 'react';

/** דף הבית — שער לארבעת האזורים, בלי להעמיס על אף אחד מהם. */
const HomePage: FC = () => (
  <Box>
    <Box component='section' sx={Styles.hero}>
      <Box
        component='video'
        sx={Styles.heroVideo}
        src={HERO_VIDEO.src}
        poster={HERO_VIDEO.poster}
        autoPlay
        loop
        muted
        playsInline
        preload='metadata'
        controls={false}
        aria-label={HERO_VIDEO.caption}
      />
      <Box sx={Styles.heroOverlay} />
      <Box sx={Styles.heroContent}>
        <Typography sx={Styles.brand}>{SITE.name.toUpperCase()}</Typography>
        <Typography variant='subtitle1' sx={Styles.tagline}>
          {WELCOME_MESSAGE}
        </Typography>
        <Box sx={Styles.statusRow}>
          <OpeningStatusBadge />
        </Box>
      </Box>
    </Box>
    <Box sx={Styles.gate}>
      {NAV_LINKS.map((link, index) => (
        <AppLink key={link.href} href={link.href} sx={Styles.gateItem}>
          <Typography variant='overline' sx={Styles.gateIndex}>
            {String(index + 1).padStart(2, '0')}
          </Typography>
          <Typography variant='h2'>{link.label}</Typography>
          <Typography sx={Styles.gateDescription}>{link.description}</Typography>
        </AppLink>
      ))}
    </Box>
  </Box>
);

export default HomePage;
