import { HERO_VIDEO } from '@components/home/hero-section/HeroSection.const';
import Styles from '@components/home/hero-section/HeroSection.style';
import AppLink from '@components/shared/app-link/AppLink';
import SectionStyles from '@components/shared/section-header/SectionHeader.style';
import { Box, Typography } from '@mui/material';
import { Route } from '@shared/enums/route.enum';
import { type FC } from 'react';

/** מסך פתיחה קולנועי: וידאו מוחשך, לוגו, שורות שירה ולינק עדין להזמנה. */
const HeroSection: FC = () => (
  <Box component="section" sx={Styles.hero}>
    <Box
      component="video"
      sx={Styles.video}
      src={HERO_VIDEO.src}
      poster={HERO_VIDEO.poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={HERO_VIDEO.caption}
    />
    <Box sx={Styles.overlay} />
    <Box sx={Styles.content}>
      <Typography component="h1" sx={Styles.title}>
        CORNICIONE
      </Typography>
      <Typography sx={Styles.subtitle}>NEAPOLITAN PIZZA</Typography>
      <Box sx={Styles.signature}>
        <Typography component="span" sx={Styles.script}>
          Teva Kay
        </Typography>
      </Box>
      <Typography sx={Styles.poem}>
        קורניצ׳ונה. פיצה נאפוליטנית בסגנון קונטמפוראנאו.
        <br />
        הכל מתחיל בבצק – הידרציה גבוהה ותפיחה ממושכת, למרקם קליל ואוורירי.
        <br />
        חומרי גלם מובחרים, עבודת יד ודיוק באפייה בטאבון משלימים את החוויה.
      </Typography>
      <Box sx={Styles.actions}>
        <AppLink href={Route.Menu} sx={SectionStyles.underlineLink}>
          להזמנת טייקאווי
        </AppLink>
        <AppLink href={Route.PrivateEvents} sx={SectionStyles.underlineLink}>
          להזמנת אירוע פרטי
        </AppLink>
      </Box>
    </Box>
    <Box sx={Styles.scrollLine} />
  </Box>
);

export default HeroSection;
