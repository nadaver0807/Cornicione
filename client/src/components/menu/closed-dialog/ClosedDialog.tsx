'use client';

import Styles from '@components/menu/closed-dialog/ClosedDialog.style';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { SITE, WHATSAPP_MESSAGE, buildWhatsappLink } from '@shared/consts/site.const';
import { type OpeningStatus } from '@shared/types/opening-hours.type';
import { type FC } from 'react';

type ClosedDialogProps = {
  isOpen: boolean;
  status: OpeningStatus | null;
  onClose: () => void;
};

/** נפתח כשמנסים להזמין מחוץ לשעות הפעילות. */
const ClosedDialog: FC<ClosedDialogProps> = ({ isOpen, status, onClose }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    fullWidth
    maxWidth='xs'
    slotProps={{ paper: { sx: Styles.paper } }}
  >
    <DialogTitle sx={Styles.title}>
      <Box sx={Styles.dot} />
      ההזמנות סגורות כרגע
    </DialogTitle>
    <DialogContent sx={Styles.content}>
      <Typography sx={Styles.message}>{status?.message}</Typography>
      {status?.windowLabel ? <Box sx={Styles.window}>{status.windowLabel}</Box> : null}
      <Typography variant='body2' sx={Styles.message}>
        אפשר להצטרף לקבוצת הוואטסאפ ולקבל עדכון כשהחלון נפתח.
      </Typography>
    </DialogContent>
    <DialogActions sx={Styles.actions}>
      <Button color='inherit' onClick={onClose}>
        סגירה
      </Button>
      <Button
        variant='contained'
        href={SITE.social.whatsappGroup || buildWhatsappLink(WHATSAPP_MESSAGE.general)}
        target='_blank'
      >
        לקבוצת העדכונים
      </Button>
    </DialogActions>
  </Dialog>
);

export default ClosedDialog;
