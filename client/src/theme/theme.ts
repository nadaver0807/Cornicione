'use client';

import { heIL } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

/** שפה עיצובית: שחור עמוק, לבן, מינימליזם — מחוברת ללוגו השחור של Cornicione. */
const theme = createTheme(
  {
    direction: 'rtl',
    palette: {
      mode: 'dark',
      primary: { main: '#FFFFFF', contrastText: '#0A0A0A' },
      secondary: { main: '#C9C4BC', contrastText: '#0A0A0A' },
      background: { default: '#0A0A0A', paper: '#121212' },
      text: { primary: '#F5F3F0', secondary: '#9C9791' },
      divider: 'rgba(245, 243, 240, 0.12)',
    },
    shape: { borderRadius: 2 },
    typography: {
      fontFamily: 'var(--font-sans)',
      h1: { fontSize: '4rem', fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.03em' },
      h2: { fontSize: '2.5rem', fontWeight: 300, lineHeight: 1.15, letterSpacing: '-0.02em' },
      h3: { fontSize: '1.625rem', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em' },
      h4: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4 },
      subtitle1: { fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.9 },
      body1: { fontSize: '1rem', lineHeight: 1.95, fontWeight: 300 },
      body2: { fontSize: '0.875rem', lineHeight: 1.8, fontWeight: 300 },
      overline: { letterSpacing: '0.32em', fontWeight: 500, fontSize: '0.7rem' },
      button: { fontWeight: 500, textTransform: 'none', letterSpacing: '0.08em' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: '#0A0A0A' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 0, paddingInline: 34, paddingBlock: 14 },
          outlined: {
            borderColor: 'rgba(245, 243, 240, 0.3)',
            '&:hover': {
              borderColor: '#F5F3F0',
              backgroundColor: 'rgba(245, 243, 240, 0.06)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: '1px solid rgba(245, 243, 240, 0.1)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { backgroundImage: 'none', boxShadow: 'none' },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: 0 },
        },
      },
    },
  },
  heIL,
);

export default theme;
