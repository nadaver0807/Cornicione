import { TEASERS } from '@components/home/teaser-section/TeaserSection.const';
import Styles from '@components/home/teaser-section/TeaserSection.style';
import AppLink from '@components/shared/app-link/AppLink';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

/** ארבע תצוגות מקדימות — תפריט, סיפור, אירועים ושיתופי פעולה. */
const TeaserSection: FC = () => (
  <Box component="section" aria-label="האזורים באתר" sx={Styles.section}>
    {TEASERS.map((teaser, index) => (
      <Box key={teaser.id} sx={index % 2 === 0 ? Styles.row : Styles.rowReverse}>
        <Box component="img" src={teaser.image} alt={teaser.alt} loading="lazy" sx={Styles.image} />
        <Box sx={Styles.text}>
          <Typography variant="overline" sx={Styles.eyebrow}>
            {teaser.eyebrow}
          </Typography>
          <Typography variant="h2" component="h2">
            {teaser.title}
          </Typography>
          <Typography sx={Styles.body}>{teaser.text}</Typography>
          <AppLink href={teaser.href} sx={Styles.cta}>
            {teaser.cta}
          </AppLink>
        </Box>
      </Box>
    ))}
  </Box>
);

export default TeaserSection;
