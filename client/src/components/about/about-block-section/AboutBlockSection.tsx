import { type AboutBlock } from '@components/about/about-page/AboutPage.const';
import Styles from '@components/about/about-page/AboutPage.style';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

type AboutBlockSectionProps = {
  block: AboutBlock;
  isReversed: boolean;
};

const AboutBlockSection: FC<AboutBlockSectionProps> = ({ block, isReversed }) => (
  <Box sx={isReversed ? Styles.blockReversed : Styles.block}>
    <Box component="img" src={block.imageUrl} alt={block.imageAlt} sx={Styles.media} />
    <Box>
      <Typography variant="overline" sx={Styles.eyebrow}>
        {block.eyebrow}
      </Typography>
      <Typography variant="h2">{block.title}</Typography>
      {block.paragraphs.map((paragraph) => (
        <Typography key={paragraph} sx={Styles.paragraph}>
          {paragraph}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default AboutBlockSection;
