import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_PIZZAS_KEY } from '@/hooks/api/useGetPizzas';
import { type Pizza } from '@shared/types/pizza.type';
import { type CreatePizzaPayload } from '@shared/validations/pizza.validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const createPizza = async (payload: CreatePizzaPayload): Promise<Pizza> => {
  const { data } = await Api.post<Pizza>(ApiRoute.Pizzas, payload);

  return data;
};

export const useCreatePizza = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPizza,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_PIZZAS_KEY] });
    },
  });
};
