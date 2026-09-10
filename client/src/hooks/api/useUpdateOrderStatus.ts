import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_ORDERS_KEY } from '@/hooks/api/useGetOrders';
import { type OrderStatus } from '@shared/enums/order-status.enum';
import { type Order } from '@shared/types/order.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UpdateOrderStatusArgs = {
  uuid: string;
  status: OrderStatus;
};

export const updateOrderStatus = async ({
  uuid,
  status,
}: UpdateOrderStatusArgs): Promise<Order> => {
  const { data } = await Api.patch<Order>(`${ApiRoute.Orders}/${uuid}/status`, { status });

  return data;
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_ORDERS_KEY] });
    },
  });
};
