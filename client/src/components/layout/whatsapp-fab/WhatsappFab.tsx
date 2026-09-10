import Styles from '@components/layout/whatsapp-fab/WhatsappFab.style';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab } from '@mui/material';
import { buildWhatsappLink, WHATSAPP_MESSAGE } from '@shared/consts/site.const';
import { type FC } from 'react';

const WhatsappFab: FC = () => (
  <Fab
    size="medium"
    sx={Styles.fab}
    href={buildWhatsappLink(WHATSAPP_MESSAGE.general)}
    target="_blank"
    aria-label="וואטסאפ"
  >
    <WhatsAppIcon fontSize="small" />
  </Fab>
);

export default WhatsappFab;
