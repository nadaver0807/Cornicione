import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { USE_GET_PIZZAS_KEY } from '@/hooks/api/useGetPizzas';
import { type Pizza } from '@shared/types/pizza.type';
import { type UpdatePizzaPayload } from '@shared/validations/pizza.validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type UpdatePizzaArgs = {
  uuid: string;
  payload: UpdatePizzaPayload;
};

export const updatePizza = async ({ uuid, payload }: UpdatePizzaArgs): Promise<Pizza> => {
  const { data } = await Api.patch<Pizza>(`${ApiRoute.Pizzas}/${uuid}`, payload);

  return data;
};

export const useUpdatePizza = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePizza,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USE_GET_PIZZAS_KEY] });
    },
  });
};
