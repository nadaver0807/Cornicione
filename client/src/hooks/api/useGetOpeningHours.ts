import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { type GetOpeningHoursResponse } from '@shared/types/opening-hours.type';
import { useQuery } from '@tanstack/react-query';

export const USE_GET_OPENING_HOURS_KEY = 'useGetOpeningHours';

export const getOpeningHours = async (): Promise<GetOpeningHoursResponse> => {
  const { data } = await Api.get<GetOpeningHoursResponse>(ApiRoute.OpeningHours);

  return data;
};

export const useGetOpeningHours = () =>
  useQuery({
    queryKey: [USE_GET_OPENING_HOURS_KEY],
    queryFn: getOpeningHours,
  });
