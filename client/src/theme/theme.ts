'use client';

import { heIL } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

const BG = '#0B0B0A';
const SURFACE = '#141412';
const TEXT = '#F2EFE9';
const MUTED = '#A39E93';
const LINE = 'rgba(242, 239, 233, 0.18)';
const CREAM_BTN = '#E6DEC8';

const BODY_FONT = 'var(--font-hebrew), sans-serif';
const SERIF_FONT = 'var(--font-serif-he), var(--font-serif), serif';

const theme = createTheme(
  {
    direction: 'rtl',
    palette: {
      mode: 'dark',
      primary: { main: CREAM_BTN, contrastText: BG },
      secondary: { main: MUTED },
      background: { default: BG, paper: SURFACE },
      text: { primary: TEXT, secondary: MUTED },
      divider: LINE,
    },
    shape: { borderRadius: 0 },
    typography: {
      fontFamily: BODY_FONT,
      h1: { fontFamily: SERIF_FONT, fontSize: '3rem', fontWeight: 300, lineHeight: 1.2 },
      h2: { fontFamily: SERIF_FONT, fontSize: '2.4rem', fontWeight: 300, lineHeight: 1.3 },
      h3: { fontFamily: SERIF_FONT, fontSize: '1.7rem', fontWeight: 400, lineHeight: 1.35 },
      h4: { fontFamily: SERIF_FONT, fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.4 },
      body1: { fontSize: '1rem', lineHeight: 1.9, fontWeight: 300 },
      body2: { fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 },
      overline: { fontSize: '0.72rem', letterSpacing: '0.25em', lineHeight: 1.5 },
      button: { textTransform: 'none', fontWeight: 500, letterSpacing: '0.04em' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { fontSize: 'var(--a11y-font-size, 100%)' },
          body: { backgroundColor: BG, color: TEXT },
          ':focus-visible': { outline: `2px solid ${CREAM_BTN}`, outlineOffset: '3px' },
          'html[data-a11y-contrast="true"]': {
            '--a11y-line': '#FFFFFF',
            body: { backgroundColor: '#000000', color: '#FFFFFF' },
            'p, span, a, label, li, h1, h2, h3, h4, .MuiTypography-root': {
              color: '#FFFFFF !important',
            },
            a: { textDecoration: 'underline' },
            '.MuiPaper-root, .MuiAppBar-root': {
              backgroundColor: '#000000 !important',
              border: '1px solid #FFFFFF',
            },
            img: { filter: 'contrast(1.1)' },
          },
          'html[data-a11y-motion="false"] *, html[data-a11y-motion="false"] *::before, html[data-a11y-motion="false"] *::after':
            {
              animation: 'none !important',
              transition: 'none !important',
              scrollBehavior: 'auto !important',
            },
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animation: 'none !important',
              transition: 'none !important',
            },
          },
        },
      },
      MuiButtonBase: { defaultProps: { disableRipple: true } },
      MuiButton: {
        defaultProps: { disableElevation: true, disableRipple: true },
        styleOverrides: {
          root: { borderRadius: 0, paddingBlock: 14, paddingInline: 28 },
          contained: {
            backgroundColor: CREAM_BTN,
            color: BG,
            '&:hover': { backgroundColor: TEXT },
          },
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none', border: `1px solid ${LINE}` } },
      },
      MuiAppBar: { styleOverrides: { root: { backgroundImage: 'none', boxShadow: 'none' } } },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            backgroundColor: SURFACE,
            '& fieldset': { borderColor: LINE },
            '&:hover fieldset': { borderColor: 'rgba(242, 239, 233, 0.4)' },
          },
        },
      },
    },
  },
  heIL,
);

export default theme;
