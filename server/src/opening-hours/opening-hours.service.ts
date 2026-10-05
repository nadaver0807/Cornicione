import { OpeningHours } from '@/opening-hours/OpeningHours.entity';
import { type UpdateOpeningHoursPayload } from '@shared/validations/opening-hours.validation';

/** מחזיר את שורת ההגדרות היחידה, ויוצר אותה אם היא חסרה. */
export const findCurrent = async (): Promise<OpeningHours> => {
  const existing = await OpeningHours.findOne({ where: {}, order: { createDate: 'ASC' } });

  if (existing) {
    return existing;
  }

  return OpeningHours.create().save();
};

export const update = async (payload: UpdateOpeningHoursPayload): Promise<OpeningHours> => {
  const openingHours = await findCurrent();

  Object.assign(openingHours, payload);

  return openingHours.save();
};
