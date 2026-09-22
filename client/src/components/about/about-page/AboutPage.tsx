import AboutBlockSection from '@components/about/about-block-section/AboutBlockSection';
import { PERSONAL_BLOCKS, PRODUCT_BLOCKS } from '@components/about/about-page/AboutPage.const';
import Styles from '@components/about/about-page/AboutPage.style';
import PageContainer from '@components/shared/page-container/PageContainer';
import PageHero from '@components/shared/page-hero/PageHero';
import { Box, Typography } from '@mui/material';
import { WELCOME_MESSAGE } from '@shared/consts/site.const';
import { type FC } from 'react';

/** עמוד עתיר תוכן — שני רבדים: האדם שמאחורי המותג, ואחריו המוצר עצמו. */
const AboutPage: FC = () => (
  <Box>
    <PageHero eyebrow='02 — אודות' title='מה זה Cornicione' subtitle={WELCOME_MESSAGE} />
    <PageContainer>
      <Typography variant='h3' sx={Styles.layerTitle}>
        הצד האישי
      </Typography>
      {PERSONAL_BLOCKS.map((block, index) => (
        <AboutBlockSection key={block.title} block={block} isReversed={index % 2 === 1} />
      ))}
      <Typography variant='h3' sx={Styles.layerTitle}>
        המוצר
      </Typography>
      {PRODUCT_BLOCKS.map((block, index) => (
        <AboutBlockSection key={block.title} block={block} isReversed={index % 2 === 1} />
      ))}
    </PageContainer>
  </Box>
);

export default AboutPage;
