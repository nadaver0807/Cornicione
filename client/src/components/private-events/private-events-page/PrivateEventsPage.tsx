import LeadForm from '@components/lead/lead-form/LeadForm';
import {
  EVENT_GALLERY,
  EVENT_PARAGRAPHS,
} from '@components/private-events/private-events-page/PrivateEventsPage.const';
import Styles from '@components/private-events/private-events-page/PrivateEventsPage.style';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { WHATSAPP_MESSAGE } from '@shared/consts/site.const';
import { LeadType } from '@shared/enums/lead-type.enum';
import { type FC } from 'react';

/** האזור הפחות דומיננטי — קיים, מקצועי, בלי להפוך את המותג לקייטרינג. */
const PrivateEventsPage: FC = () => (
  <Box>
    <PageHero
      eyebrow="04 — אירועים"
      title="Cornicione באירוע שלכם"
      subtitle="הפיצות, הטאבון והחוויה — אצלכם."
    />
    <PageSection>
      <Box sx={Styles.gallery}>
        {EVENT_GALLERY.map((image) => (
          <Box
            key={image.src}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={Styles.galleryImage}
          />
        ))}
      </Box>
      {EVENT_PARAGRAPHS.map((paragraph) => (
        <Typography key={paragraph} sx={Styles.paragraph}>
          {paragraph}
        </Typography>
      ))}
    </PageSection>
    <PageSection>
      <Box sx={Styles.ctaBox}>
        <Typography variant="h2" gutterBottom>
          Book Your Event
        </Typography>
        <Typography sx={Styles.paragraph}>השאירו פרטים ונחזור אליכם.</Typography>
        <Box sx={Styles.formWrapper}>
          <LeadForm
            leadType={LeadType.PrivateEvent}
            submitLabel="שליחת פרטים"
            whatsappMessage={WHATSAPP_MESSAGE.privateEvent}
          />
        </Box>
      </Box>
    </PageSection>
  </Box>
);

export default PrivateEventsPage;
