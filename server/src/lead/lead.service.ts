import { Lead } from '@/lead/Lead.entity';
import { type CreateLeadPayload } from '@shared/validations/lead.validation';

export const create = (payload: CreateLeadPayload): Promise<Lead> =>
  Lead.create({
    leadType: payload.leadType,
    fullName: payload.fullName,
    phone: payload.phone,
    email: payload.email ?? '',
    businessName: payload.businessName ?? '',
    message: payload.message ?? '',
  }).save();

export const findAll = (): Promise<Lead[]> => Lead.find({ order: { createDate: 'DESC' } });
