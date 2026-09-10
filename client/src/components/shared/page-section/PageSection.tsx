import PageContainer from '@components/shared/page-container/PageContainer';
import Styles from '@components/shared/page-section/PageSection.style';
import { Box, Typography } from '@mui/material';
import { type FC, type ReactNode } from 'react';

type PageSectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
};

const PageSection: FC<PageSectionProps> = ({ eyebrow, title, children }) => (
  <Box component="section" sx={Styles.section}>
    <PageContainer>
      {eyebrow ? (
        <Typography variant="overline" sx={Styles.eyebrow}>
          {eyebrow}
        </Typography>
      ) : null}
      {title ? (
        <Typography variant="h2" sx={Styles.title}>
          {title}
        </Typography>
      ) : null}
      {children}
    </PageContainer>
  </Box>
);

export default PageSection;
