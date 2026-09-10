import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_PIZZAS_KEY } from '@/hooks/api/useGetPizzas';
import { type Order } from '@shared/types/order.type';
import { type CreateOrderPayload } from '@shared/validations/order.validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const createOrder = async (payload: CreateOrderPayload): Promise<Order> => {
  const { data } = await Api.post<Order>(ApiRoute.Orders, payload);

  return data;
};

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_PIZZAS_KEY] });
    },
  });
};
