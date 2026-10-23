import { type SxProps, type Theme } from '@mui/material';

const hero: SxProps<Theme> = {
  position: 'relative',
  minHeight: { xs: '92vh', md: '100vh' },
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  bgcolor: 'background.default',
  pt: { xs: 12, md: 0 },
  pb: { xs: 6, md: 0 },
};

const heroGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
  alignItems: 'center',
  gap: { xs: 5, md: 4 },
  width: '100%',
};

const heroCopy: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
};

const heroTitle: SxProps<Theme> = {
  fontSize: { xs: '2.9rem', sm: '3.6rem', md: '4.6rem' },
  color: 'secondary.dark',
};

const heroTitleAccent: SxProps<Theme> = {
  color: 'primary.main',
};

const heroSubtitle: SxProps<Theme> = {
  color: 'text.secondary',
  mt: 3,
  maxWidth: 480,
};

const heroActions: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 2,
  mt: 5,
};

const heroVisual: SxProps<Theme> = {
  position: 'relative',
  justifySelf: { xs: 'center', md: 'end' },
  width: '100%',
  maxWidth: 440,
};

const heroFrame: SxProps<Theme> = {
  position: 'relative',
  borderRadius: '50% 50% 42% 42% / 60% 60% 40% 40%',
  overflow: 'hidden',
  aspectRatio: '0.85',
  border: '6px solid',
  borderColor: 'background.default',
  boxShadow: '0 30px 60px rgba(30, 36, 30, 0.25)',
};

const heroVideo: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const heroBadge: SxProps<Theme> = {
  position: 'absolute',
  top: { xs: -16, md: -24 },
  insetInlineStart: { xs: -16, md: -28 },
  width: { xs: 88, md: 112 },
  height: { xs: 88, md: 112 },
  borderRadius: '50%',
  bgcolor: 'secondary.dark',
  color: 'background.default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'var(--font-heading)',
  fontSize: { xs: '0.65rem', md: '0.72rem' },
  fontWeight: 800,
  letterSpacing: '0.04em',
  lineHeight: 1.3,
  p: 1.5,
  animation: 'spin-badge 14s linear infinite',
  boxShadow: '0 10px 24px rgba(30, 36, 30, 0.35)',
  '@keyframes spin-badge': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
};

const statusRow: SxProps<Theme> = {
  mt: 4,
};

/** פילארים — שלושת ערוצי הפעילות. */
const pillarsGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 6,
};

const pillarCard: SxProps<Theme> = {
  position: 'relative',
  borderRadius: 4,
  overflow: 'hidden',
  p: { xs: 3, md: 4 },
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  transition: 'transform 260ms ease, box-shadow 260ms ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 20px 40px rgba(30, 36, 30, 0.12)',
  },
};

const pillarCardHighlight: SxProps<Theme> = {
  bgcolor: 'primary.main',
  color: 'primary.contrastText',
  gridColumn: { md: 'span 1' },
  border: 'none',
};

const pillarImage: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '4 / 3',
  objectFit: 'cover',
  borderRadius: 3,
};

const pillarIndex: SxProps<Theme> = {
  opacity: 0.6,
};

const pillarDescription: SxProps<Theme> = {
  flex: 1,
};

/** הסיפור שלנו — רקע כהה. */
const craftSection: SxProps<Theme> = {
  bgcolor: 'secondary.dark',
  color: 'background.default',
  py: { xs: 8, md: 12 },
};

const craftTitle: SxProps<Theme> = {
  color: 'background.default',
  maxWidth: 760,
};

const craftSubtitle: SxProps<Theme> = {
  color: 'rgba(250, 246, 240, 0.7)',
  mt: 2,
  maxWidth: 640,
};

const craftGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
  gap: { xs: 4, md: 3 },
  mt: 7,
};

const craftStat: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'baseline',
  gap: 0.5,
  fontFamily: 'var(--font-heading)',
  fontWeight: 900,
  fontSize: { xs: '2.2rem', md: '2.6rem' },
  color: 'primary.main',
};

const craftUnit: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 700,
};

const craftItemTitle: SxProps<Theme> = {
  color: 'background.default',
  mt: 1.5,
};

const craftItemDescription: SxProps<Theme> = {
  color: 'rgba(250, 246, 240, 0.7)',
  mt: 1,
};

/** תפריט לדוגמה. */
const menuGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 6,
};

const menuCard: SxProps<Theme> = {
  borderRadius: 4,
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  bgcolor: 'background.paper',
};

const menuNote: SxProps<Theme> = {
  mt: 5,
  color: 'text.secondary',
};

/** גלריה. */
const galleryGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
  gap: 2,
  mt: 6,
};

const galleryImage: SxProps<Theme> = {
  width: '100%',
  aspectRatio: '1',
  objectFit: 'cover',
  borderRadius: 3,
  transition: 'transform 260ms ease',
  '&:hover': { transform: 'scale(1.03)' },
};

const galleryImageTall: SxProps<Theme> = {
  gridRow: { md: 'span 2' },
  aspectRatio: { md: '1 / 2' },
};

const testimonialsGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
  gap: 3,
  mt: 5,
};

const testimonialCard: SxProps<Theme> = {
  borderRadius: 4,
  border: '1px solid',
  borderColor: 'divider',
  p: 3,
  bgcolor: 'background.paper',
};

const testimonialAuthor: SxProps<Theme> = {
  mt: 2,
  color: 'text.secondary',
};

/** סקשן הלידים. */
const leadSection: SxProps<Theme> = {
  bgcolor: 'secondary.dark',
  color: 'background.default',
  py: { xs: 8, md: 12 },
};

const leadGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
  gap: { xs: 5, md: 8 },
  mt: 5,
};

const leadTitle: SxProps<Theme> = {
  color: 'background.default',
};

const leadSubtitle: SxProps<Theme> = {
  color: 'rgba(250, 246, 240, 0.72)',
  mt: 2,
  maxWidth: 440,
};

const leadFormWrapper: SxProps<Theme> = {
  bgcolor: 'background.default',
  borderRadius: 4,
  p: { xs: 3, md: 4 },
};

const Styles = {
  hero,
  heroGrid,
  heroCopy,
  heroTitle,
  heroTitleAccent,
  heroSubtitle,
  heroActions,
  heroVisual,
  heroFrame,
  heroVideo,
  heroBadge,
  statusRow,
  pillarsGrid,
  pillarCard,
  pillarCardHighlight,
  pillarImage,
  pillarIndex,
  pillarDescription,
  craftSection,
  craftTitle,
  craftSubtitle,
  craftGrid,
  craftStat,
  craftUnit,
  craftItemTitle,
  craftItemDescription,
  menuGrid,
  menuCard,
  menuNote,
  galleryGrid,
  galleryImage,
  galleryImageTall,
  testimonialsGrid,
  testimonialCard,
  testimonialAuthor,
  leadSection,
  leadGrid,
  leadTitle,
  leadSubtitle,
  leadFormWrapper,
};

export default Styles;
