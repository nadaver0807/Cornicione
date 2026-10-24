import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_PIZZAS_KEY } from '@/hooks/api/useGetPizzas';
import { type MessageResponse } from '@shared/types/api.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deletePizza = async (uuid: string): Promise<MessageResponse> => {
  const { data } = await Api.delete<MessageResponse>(`${ApiRoute.Pizzas}/${uuid}`);

  return data;
};

export const useDeletePizza = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePizza,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_PIZZAS_KEY] });
    },
  });
};
