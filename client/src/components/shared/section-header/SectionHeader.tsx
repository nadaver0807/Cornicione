import Styles from '@components/shared/section-header/SectionHeader.style';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

type SectionHeaderProps = {
  title: string;
  label: string;
};

/** כותרת סקשן: עברית מימין, תווית איטלקית קטנה משמאל, קו דק מתחת. */
const SectionHeader: FC<SectionHeaderProps> = ({ title, label }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid',
      borderColor: 'divider',
      pb: 2.5,
      mb: { xs: 5, md: 8 },
    }}
  >
    <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
      {title}
    </Typography>
    <Typography component="span" sx={Styles.microLabel}>
      {label}
    </Typography>
  </Box>
);

export default SectionHeader;
