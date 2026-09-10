import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { type GetOrdersResponse } from '@shared/types/order.type';
import { useQuery } from '@tanstack/react-query';

export const USE_GET_ORDERS_KEY = 'useGetOrders';

export const getOrders = async (): Promise<GetOrdersResponse> => {
  const { data } = await Api.get<GetOrdersResponse>(ApiRoute.Orders);

  return data;
};

export const useGetOrders = (isEnabled: boolean) =>
  useQuery({
    queryKey: [USE_GET_ORDERS_KEY],
    queryFn: getOrders,
    enabled: isEnabled,
  });
