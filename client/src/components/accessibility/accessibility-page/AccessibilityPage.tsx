import { STATEMENT_SECTIONS } from '@components/accessibility/accessibility-page/AccessibilityPage.const';
import Styles from '@components/accessibility/accessibility-page/AccessibilityPage.style';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

const AccessibilityPage: FC = () => (
  <Box>
    <PageHero eyebrow="נגישות" title="הצהרת נגישות" subtitle="האתר פתוח לכולם." />
    {STATEMENT_SECTIONS.map((section) => (
      <PageSection key={section.title} title={section.title}>
        {section.paragraphs.map((paragraph) => (
          <Typography key={paragraph} sx={Styles.paragraph}>
            {paragraph}
          </Typography>
        ))}
      </PageSection>
    ))}
  </Box>
);

export default AccessibilityPage;
