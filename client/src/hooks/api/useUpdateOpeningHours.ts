import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_OPENING_HOURS_KEY } from '@/hooks/api/useGetOpeningHours';
import { type GetOpeningHoursResponse } from '@shared/types/opening-hours.type';
import { type UpdateOpeningHoursPayload } from '@shared/validations/opening-hours.validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const updateOpeningHours = async (
  payload: UpdateOpeningHoursPayload,
): Promise<GetOpeningHoursResponse> => {
  const { data } = await Api.patch<GetOpeningHoursResponse>(ApiRoute.OpeningHours, payload);

  return data;
};

export const useUpdateOpeningHours = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOpeningHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_OPENING_HOURS_KEY] });
    },
  });
};
