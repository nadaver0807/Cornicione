import ExperienceSection from '@components/home/experience-section/ExperienceSection';
import GallerySection from '@components/home/gallery-section/GallerySection';
import HeroSection from '@components/home/hero-section/HeroSection';
import HomeLeadSection from '@components/home/home-lead-section/HomeLeadSection';
import IntroSection from '@components/home/intro-section/IntroSection';
import { Box } from '@mui/material';
import { type FC } from 'react';

/** דף הבית — כהה, קולנועי ומינימליסטי. */
const HomePage: FC = () => (
  <Box>
    <HeroSection />
    <IntroSection />
    <ExperienceSection />
    <GallerySection />
    <HomeLeadSection />
  </Box>
);

export default HomePage;
