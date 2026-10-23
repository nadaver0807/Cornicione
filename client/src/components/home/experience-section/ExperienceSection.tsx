'use client';

import {
  PILLARS,
  PROCESS_STEPS,
} from '@components/home/experience-section/ExperienceSection.const';
import Styles from '@components/home/experience-section/ExperienceSection.style';
import { selectLeadType } from '@components/home/home-lead-section/lead-select.util';
import SectionHeader from '@components/shared/section-header/SectionHeader';
import SectionStyles from '@components/shared/section-header/SectionHeader.style';
import { Box, Typography } from '@mui/material';
import { SITE } from '@shared/consts/site.const';
import { type FC } from 'react';

/** הטאבון מגיע אליכם — שלושה שלבים ושלושה ערוצי פעילות בסגנון עריכתי. */
const ExperienceSection: FC = () => (
  <Box component="section" id="experience" sx={Styles.section}>
    <SectionHeader title="הטאבון מגיע אליכם" label="DA VOI" />
    <Box sx={Styles.stack}>
      {PROCESS_STEPS.map((step) => (
        <Box key={step.numeral}>
          <Box component="img" src={step.image} alt={step.title} loading="lazy" sx={Styles.image} />
          <Box sx={Styles.caption}>
            <Typography sx={Styles.numeral}>{step.numeral}</Typography>
            <Typography variant="h4">{step.title}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
    <Box sx={Styles.pillars}>
      {PILLARS.map((pillar) => (
        <Box key={pillar.title}>
          <Box
            component="img"
            src={pillar.image}
            alt={pillar.title}
            loading="lazy"
            sx={Styles.image}
          />
          <Box sx={Styles.caption}>
            <Typography sx={Styles.numeral}>{pillar.numeral}</Typography>
            <Typography variant="h4">{pillar.title}</Typography>
          </Box>
          <Typography variant="body2" sx={Styles.description}>
            {pillar.description}
          </Typography>
          {pillar.leadType ? (
            <Box
              component="button"
              type="button"
              onClick={() => selectLeadType(pillar.leadType)}
              sx={[SectionStyles.underlineLink, { background: 'none', border: 0, font: 'inherit' }]}
            >
              {pillar.cta}
            </Box>
          ) : (
            <Box
              component="a"
              href={SITE.social.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              sx={SectionStyles.underlineLink}
            >
              {pillar.cta}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

export default ExperienceSection;
