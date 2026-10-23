'use client';

import { selectLeadType } from '@components/home/home-lead-section/lead-select.util';
import { PILLARS } from '@components/home/pillars-section/PillarsSection.const';
import Styles from '@components/home/pillars-section/PillarsSection.style';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Button, Typography } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import { type FC } from 'react';

/** שלושת ערוצי הפעילות — אירועים פרטיים מקבל את הכרטיסייה הבולטת ביותר. */
const PillarsSection: FC = () => (
  <PageSection eyebrow="מה אנחנו עושים" title="שלושה ערוצי פעילות, חוויה אחת">
    <Box id="pillars" sx={Styles.grid}>
      {PILLARS.map((pillar) => (
        <Box key={pillar.title} sx={[Styles.card, pillar.highlight ? Styles.cardHighlight : {}]}>
          <Box component="img" src={pillar.image} alt={pillar.title} sx={Styles.image} />
          <Typography variant="overline" sx={Styles.index}>
            {pillar.index}
          </Typography>
          <Typography variant="h3">{pillar.title}</Typography>
          <Typography sx={Styles.description}>{pillar.description}</Typography>
          {pillar.leadType ? (
            <Button
              variant={pillar.highlight ? 'outlined' : 'contained'}
              color={pillar.highlight ? 'inherit' : 'primary'}
              onClick={() => selectLeadType(pillar.leadType)}
            >
              {pillar.ctaLabel}
            </Button>
          ) : (
            <Button
              variant="contained"
              href={SITE.social.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pillar.ctaLabel}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  </PageSection>
);

export default PillarsSection;
