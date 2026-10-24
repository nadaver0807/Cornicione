import {
  COLLABORATION_PARAGRAPHS,
  COLLABORATIONS,
  NONO_VIDEO_URL,
} from '@components/collaborations/collaborations-page/CollaborationsPage.const';
import Styles from '@components/collaborations/collaborations-page/CollaborationsPage.style';
import LeadForm from '@components/lead/lead-form/LeadForm';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { WHATSAPP_MESSAGE } from '@shared/consts/site.const';
import { LeadType } from '@shared/enums/lead-type.enum';
import { type FC } from 'react';

/** קודם מראים, אחר כך מסבירים, ובסוף מזמינים ליצירת קשר. */
const CollaborationsPage: FC = () => (
  <Box>
    <PageHero
      eyebrow="שיתופי פעולה"
      title="Cornicione × עסקים"
      subtitle="ערבי פיצה, פופ־אפים ושיתופי פעולה עם מסעדות, ברים ועסקים מקומיים."
    />
    <PageSection>
      <Box
        component="video"
        src={NONO_VIDEO_URL}
        controls
        playsInline
        aria-label="סרטון מערב פיצה עם הטאבון"
        sx={Styles.video}
      />
    </PageSection>
    {COLLABORATIONS.map((item) => (
      <PageSection key={item.name} eyebrow={item.eyebrow} title={item.name}>
        <Typography sx={Styles.paragraph}>{item.description}</Typography>
        <Box sx={Styles.gallery}>
          {item.images.map((image) => (
            <Box
              key={image.src}
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={Styles.galleryImage}
            />
          ))}
        </Box>
      </PageSection>
    ))}
    <PageSection eyebrow="איך זה עובד" title="להביא את Cornicione למקום שלכם">
      {COLLABORATION_PARAGRAPHS.map((paragraph) => (
        <Typography key={paragraph} sx={Styles.paragraph}>
          {paragraph}
        </Typography>
      ))}
    </PageSection>
    <PageSection>
      <Box sx={Styles.ctaBox}>
        <Typography variant="h2" gutterBottom>
          רוצים לעבוד עם Cornicione?
        </Typography>
        <Typography sx={Styles.paragraph}>
          השאירו פרטים ונחזור אליכם, או שתפנו ישירות בוואטסאפ.
        </Typography>
        <Box sx={Styles.formWrapper}>
          <LeadForm
            leadType={LeadType.Collaboration}
            submitLabel="שליחת פנייה"
            whatsappMessage={WHATSAPP_MESSAGE.business}
            withBusinessName
          />
        </Box>
      </Box>
    </PageSection>
  </Box>
);

export default CollaborationsPage;
