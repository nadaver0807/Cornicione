import { type Lead } from '@/lead/Lead.entity';
import { type Order } from '@/order/Order.entity';
import { ADMIN_EMAIL, EMAIL_FROM, RESEND_API_KEY } from '@/server.const';
import { logger } from '@/util/logger';
import { LEAD_TYPE_LABEL } from '@shared/enums/lead-type.enum';
import { ORDER_TYPE_LABEL } from '@shared/enums/order-type.enum';
import { Resend } from 'resend';

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const send = async (subject: string, html: string): Promise<void> => {
  if (!resend) {
    logger.warn('RESEND_API_KEY is missing — email not sent', { subject });

    return;
  }

  await resend.emails.send({ from: EMAIL_FROM, to: ADMIN_EMAIL, subject, html });
};

export const sendNewOrderEmail = async (order: Order): Promise<void> => {
  const items = order.items.map((item) => `<li>${item.quantity} × ${item.name}</li>`).join('');

  const html = `
    <h2>הזמנה חדשה #${order.orderNumber}</h2>
    <p>${ORDER_TYPE_LABEL[order.orderType]} — ${order.customerName}, ${order.customerPhone}</p>
    ${order.address ? `<p>כתובת: ${order.address}</p>` : ''}
    <ul>${items}</ul>
    <p><strong>סה״כ: ₪${order.total}</strong></p>
  `;

  await send(`הזמנה חדשה #${order.orderNumber}`, html);
};

export const sendNewLeadEmail = async (lead: Lead): Promise<void> => {
  const html = `
    <h2>פנייה חדשה — ${LEAD_TYPE_LABEL[lead.leadType]}</h2>
    <p>${lead.fullName} | ${lead.phone} ${lead.email ? `| ${lead.email}` : ''}</p>
    ${lead.businessName ? `<p>עסק: ${lead.businessName}</p>` : ''}
    ${lead.message ? `<p>${lead.message}</p>` : ''}
  `;

  await send(`פנייה חדשה — ${LEAD_TYPE_LABEL[lead.leadType]}`, html);
};
