import Styles from '@components/layout/skip-link/SkipLink.style';
import { Box } from '@mui/material';
import { type FC } from 'react';

/** קישור "דלג לתוכן" — גלוי רק בפוקוס מקלדת. */
const SkipLink: FC = () => (
  <Box component="a" href="#main-content" sx={Styles.link}>
    דלג לתוכן הראשי
  </Box>
);

export default SkipLink;
