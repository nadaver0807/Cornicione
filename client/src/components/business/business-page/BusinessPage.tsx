import {
  BUSINESS_PARAGRAPHS,
  NONO_GALLERY,
  NONO_VIDEO_URL,
} from '@components/business/business-page/BusinessPage.const';
import Styles from '@components/business/business-page/BusinessPage.style';
import LeadForm from '@components/lead/lead-form/LeadForm';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { WHATSAPP_MESSAGE } from '@shared/consts/site.const';
import { LeadType } from '@shared/enums/lead-type.enum';
import { type FC } from 'react';

/** קודם מראים, אחר כך מסבירים, ובסוף מזמינים ליצירת קשר. */
const BusinessPage: FC = () => (
  <Box>
    <PageHero
      eyebrow="03 — שיתופי פעולה"
      title="Cornicione × עסקים"
      subtitle="ערבי פיצה, פופ־אפים ושיתופי פעולה עם מקומות מארחים."
    />
    <PageSection>
      <Box component="video" src={NONO_VIDEO_URL} controls playsInline sx={Styles.video} />
      <Box sx={Styles.gallery}>
        {NONO_GALLERY.map((image) => (
          <Box key={image.src} component="img" src={image.src} alt={image.alt} sx={Styles.galleryImage} />
        ))}
      </Box>
    </PageSection>
    <PageSection eyebrow="איך זה עובד" title="להביא את Cornicione למקום שלכם">
      {BUSINESS_PARAGRAPHS.map((paragraph) => (
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
            leadType={LeadType.Business}
            submitLabel="שליחת פנייה"
            whatsappMessage={WHATSAPP_MESSAGE.business}
            withBusinessName
          />
        </Box>
      </Box>
    </PageSection>
  </Box>
);

export default BusinessPage;
