'use client';

import Styles from '@components/layout/accessibility-widget/AccessibilityWidget.style';
import { useAccessibilityWidget } from '@components/layout/accessibility-widget/useAccessibilityWidget';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Box, Button, ClickAwayListener, Fab, Typography } from '@mui/material';
import { useState, type FC, type KeyboardEvent } from 'react';

/** תפריט נגישות לא פולשני — גודל גופן, ניגודיות גבוהה ועצירת אנימציות. */
const AccessibilityWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, maxStep, increaseFont, decreaseFont, toggleContrast, toggleMotion, reset } =
    useAccessibilityWidget();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <Box sx={Styles.root} onKeyDown={handleKeyDown}>
        {isOpen ? (
          <Box role="dialog" aria-label="תפריט נגישות" sx={Styles.panel}>
            <Typography sx={Styles.title}>נגישות</Typography>
            <Button color="inherit" onClick={increaseFont} disabled={state.fontStep >= maxStep}>
              הגדלת טקסט
            </Button>
            <Button color="inherit" onClick={decreaseFont} disabled={state.fontStep <= 0}>
              הקטנת טקסט
            </Button>
            <Button color="inherit" onClick={toggleContrast} aria-pressed={state.isHighContrast}>
              ניגודיות גבוהה
            </Button>
            <Button color="inherit" onClick={toggleMotion} aria-pressed={state.isMotionStopped}>
              עצירת אנימציות
            </Button>
            <Button color="inherit" onClick={reset}>
              איפוס
            </Button>
          </Box>
        ) : null}
        <Fab
          size="small"
          sx={Styles.fab}
          onClick={() => setIsOpen((current) => !current)}
          aria-label="תפריט נגישות"
          aria-expanded={isOpen}
        >
          <AccessibilityNewIcon fontSize="small" />
        </Fab>
      </Box>
    </ClickAwayListener>
  );
};

export default AccessibilityWidget;
