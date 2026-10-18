import Styles from '@components/home/intro-section/IntroSection.style';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

const IntroSection: FC = () => (
  <Box component="section" sx={Styles.section}>
    <Typography sx={Styles.label}>PIZZA NAPOLETANA CONTEMPORANEA</Typography>
    <Typography variant="h2" sx={Styles.title}>
      טאבון, בצק שתפח לאט, ופיצה שיוצאת מהאש מול האורחים שלכם.
    </Typography>
    <Typography sx={Styles.subtitle}>אירוע פרטי, ערב חברה או חגיגה משפחתית.</Typography>
  </Box>
);

export default IntroSection;
