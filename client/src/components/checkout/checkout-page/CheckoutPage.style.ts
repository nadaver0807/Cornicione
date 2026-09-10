import { type SxProps, type Theme } from '@mui/material';

const layout: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
  gap: { xs: 5, md: 9 },
};

const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2.5,
};

const summary: SxProps<Theme> = {
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  height: 'fit-content',
};

const summaryRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  py: 1,
};

const totalRow: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  pt: 2,
  mt: 2,
  borderTop: '1px solid',
  borderColor: 'divider',
};

const feedback: SxProps<Theme> = {
  color: 'text.secondary',
};

const Styles = { layout, form, summary, summaryRow, totalRow, feedback };

export default Styles;
