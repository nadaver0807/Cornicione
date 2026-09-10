import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { type MessageResponse } from '@shared/types/api.type';
import { type CreateLeadPayload } from '@shared/validations/lead.validation';
import { useMutation } from '@tanstack/react-query';

export const createLead = async (payload: CreateLeadPayload): Promise<MessageResponse> => {
  const { data } = await Api.post<MessageResponse>(ApiRoute.Leads, payload);

  return data;
};

export const useCreateLead = () => useMutation({ mutationFn: createLead });
