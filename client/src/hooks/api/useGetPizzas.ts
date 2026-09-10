import { ApiRoute } from '@/hooks/api/api.const';
import Api from '@/hooks/api/api.util';
import { type PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type GetPizzasResponse } from '@shared/types/pizza.type';
import { useQuery } from '@tanstack/react-query';

export const USE_GET_PIZZAS_KEY = 'useGetPizzas';

export const getPizzas = async (category?: PizzaCategory): Promise<GetPizzasResponse> => {
  const { data } = await Api.get<GetPizzasResponse>(ApiRoute.Pizzas, {
    params: category ? { category } : undefined,
  });

  return data;
};

export const useGetPizzas = (category?: PizzaCategory) =>
  useQuery({
    queryKey: [USE_GET_PIZZAS_KEY, category],
    queryFn: () => getPizzas(category),
  });
