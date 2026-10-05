import { CONTACT_DETAILS } from '@components/contact/contact-page/ContactPage.const';
import Styles from '@components/contact/contact-page/ContactPage.style';
import LeadForm from '@components/lead/lead-form/LeadForm';
import OpeningStatusBadge from '@components/shared/opening-status-badge/OpeningStatusBadge';
import PageHero from '@components/shared/page-hero/PageHero';
import PageSection from '@components/shared/page-section/PageSection';
import { Box, Typography } from '@mui/material';
import { WHATSAPP_MESSAGE } from '@shared/consts/site.const';
import { LeadType } from '@shared/enums/lead-type.enum';
import { type FC } from 'react';

/** יצירת קשר — קודם הדרכים הישירות, ואחריהן טופס לפנייה כללית. */
const ContactPage: FC = () => (
  <Box>
    <PageHero
      eyebrow='יצירת קשר'
      title='נשמח לשמוע'
      subtitle='הזמנות, שיתופי פעולה, אירועים או כל שאלה אחרת.'
    >
      <Box sx={Styles.statusRow}>
        <OpeningStatusBadge />
      </Box>
    </PageHero>
    <PageSection>
      <Box sx={Styles.layout}>
        <Box sx={Styles.details}>
          {CONTACT_DETAILS.map((detail) => (
            <Box key={detail.label} sx={Styles.detailRow}>
              <Typography variant='overline' sx={Styles.detailLabel}>
                {detail.label}
              </Typography>
              <Box
                component='a'
                href={detail.href}
                target={detail.isExternal ? '_blank' : undefined}
                rel={detail.isExternal ? 'noopener noreferrer' : undefined}
                sx={Styles.detailValue}
              >
                {detail.value}
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography variant='h3' sx={Styles.formTitle}>
            השאירו פרטים
          </Typography>
          <LeadForm
            leadType={LeadType.General}
            submitLabel='שליחה'
            whatsappMessage={WHATSAPP_MESSAGE.general}
          />
        </Box>
      </Box>
    </PageSection>
  </Box>
);

export default ContactPage;
