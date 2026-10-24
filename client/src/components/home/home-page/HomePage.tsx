import GallerySection from '@components/home/gallery-section/GallerySection';
import HeroSection from '@components/home/hero-section/HeroSection';
import IntroSection from '@components/home/intro-section/IntroSection';
import TeaserSection from '@components/home/teaser-section/TeaserSection';
import { Box } from '@mui/material';
import { type FC } from 'react';

/** דף הבית — דף נחיתה: הירו, הצגת האזורים וגלריה. */
const HomePage: FC = () => (
  <Box>
    <HeroSection />
    <IntroSection />
    <TeaserSection />
    <GallerySection />
  </Box>
);

export default HomePage;
