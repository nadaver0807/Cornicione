import PageContainer from '@components/shared/page-container/PageContainer';
import Styles from '@components/shared/page-hero/PageHero.style';
import { Box, Typography } from '@mui/material';
import { type FC, type ReactNode } from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

const PageHero: FC<PageHeroProps> = ({ eyebrow, title, subtitle, children }) => (
  <Box sx={Styles.hero}>
    <PageContainer>
      <Typography variant="overline" sx={Styles.eyebrow}>
        {eyebrow}
      </Typography>
      <Typography variant="h1" sx={Styles.title}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="subtitle1" sx={Styles.subtitle}>
          {subtitle}
        </Typography>
      ) : null}
      {children}
    </PageContainer>
  </Box>
);

export default PageHero;
