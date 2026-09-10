import { type SxProps, type Theme } from '@mui/material';

const block: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
  gap: { xs: 4, md: 9 },
  alignItems: 'center',
  py: { xs: 7, md: 12 },
  borderBottom: '1px solid',
  borderColor: 'divider',
};

const blockReversed: SxProps<Theme> = {
  ...block,
  '& > :first-of-type': { order: { md: 2 } },
};

const media: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '4 / 5',
  bgcolor: '#101010',
  border: '1px solid',
  borderColor: 'divider',
  objectFit: 'cover',
};

const eyebrow: SxProps<Theme> = {
  color: 'text.secondary',
  display: 'block',
  mb: 2,
};

const paragraph: SxProps<Theme> = {
  color: 'text.secondary',
  maxWidth: 520,
  mt: 3,
};

const layerTitle: SxProps<Theme> = {
  py: { xs: 6, md: 10 },
  maxWidth: 720,
};

const Styles = { block, blockReversed, media, eyebrow, paragraph, layerTitle };

export default Styles;
