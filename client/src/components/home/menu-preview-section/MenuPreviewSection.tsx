import {
  MENU_NOTE,
  MENU_PREVIEW,
} from '@components/home/menu-preview-section/MenuPreviewSection.const';
import Styles from '@components/home/menu-preview-section/MenuPreviewSection.style';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

/** הצצה לתפריט — פיצות דגל, פוקאצ׳ות וסלטים לאירועים. */
const MenuPreviewSection: FC = () => (
  <Box id="menu-preview">
    <PageSection eyebrow="תפריט לדוגמה" title="פיצות הדגל שלנו">
      <Box sx={Styles.grid}>
        {MENU_PREVIEW.map((item) => (
          <Box key={item.name} sx={Styles.card}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="body2" sx={Styles.description}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography sx={Styles.note}>{MENU_NOTE}</Typography>
    </PageSection>
  </Box>
);

export default MenuPreviewSection;
