import { CRAFT_PILLARS } from '@components/home/craft-section/CraftSection.const';
import Styles from '@components/home/craft-section/CraftSection.style';
import PageContainer from '@components/shared/page-container/PageContainer';
import { Box, Typography } from '@mui/material';
import { type FC } from 'react';

/** הסיפור והמדע של הבצק — סקשן כהה עם קונטרסט דרמטי. */
const CraftSection: FC = () => (
  <Box component="section" id="story" sx={Styles.section}>
    <PageContainer>
      <Typography variant="overline" color="primary.main">
        הסיפור והבצק
      </Typography>
      <Typography variant="h2" sx={Styles.title}>
        פיצה היא מדע. ותשוקה.
      </Typography>
      <Typography variant="subtitle1" sx={Styles.subtitle}>
        טבע, השף שמאחורי Cornicione, בנה את הבצק הנאפוליטני שלו מאפס — כדי שכל פיצה תצא מהטאבון
        בדיוק כמו שהיא צריכה להיות.
      </Typography>
      <Box sx={Styles.grid}>
        {CRAFT_PILLARS.map((item) => (
          <Box key={item.title}>
            <Box sx={Styles.stat}>
              {item.stat}
              {item.unit ? (
                <Box component="span" sx={Styles.unit}>
                  {item.unit}
                </Box>
              ) : null}
            </Box>
            <Typography variant="h4" sx={Styles.itemTitle}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={Styles.itemDescription}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </PageContainer>
  </Box>
);

export default CraftSection;
