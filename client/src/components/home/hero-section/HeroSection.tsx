import { HERO_VIDEO } from '@components/home/hero-section/HeroSection.const';
import Styles from '@components/home/hero-section/HeroSection.style';
import { LEAD_SECTION_ANCHOR } from '@components/home/home-lead-section/lead-select.util';
import SectionStyles from '@components/shared/section-header/SectionHeader.style';
import { Box, Typography } from '@mui/material';
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
      <Box
        component="a"
        href={`#${LEAD_SECTION_ANCHOR}`}
        sx={[SectionStyles.underlineLink, { mt: 6 }]}
      >
        להזמנת אירוע או לפרטים נוספים
      </Box>
    </Box>
    <Box sx={Styles.scrollLine} />
  </Box>
);

export default HeroSection;
