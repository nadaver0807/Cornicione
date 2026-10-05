import { Pizza } from '@/pizza/Pizza.entity';
import { type PizzaCategory } from '@shared/enums/pizza-category.enum';
import {
  type CreatePizzaPayload,
  type UpdatePizzaPayload,
} from '@shared/validations/pizza.validation';

export const findAll = (): Promise<Pizza[]> =>
  Pizza.find({ order: { menuCategory: 'ASC', displayOrder: 'ASC' } });

export const findByCategory = (menuCategory: PizzaCategory): Promise<Pizza[]> =>
  Pizza.find({ where: { menuCategory }, order: { displayOrder: 'ASC' } });

export const findByUuid = (uuid: string): Promise<Pizza | null> => Pizza.findOneBy({ uuid });

export const create = (payload: CreatePizzaPayload): Promise<Pizza> =>
  Pizza.create({ ...payload, imageUrl: payload.imageUrl || null }).save();

export const update = async (uuid: string, payload: UpdatePizzaPayload): Promise<Pizza | null> => {
  const pizza = await findByUuid(uuid);

  if (!pizza) {
    return null;
  }

  Object.assign(pizza, payload);

  return pizza.save();
};

export const remove = async (uuid: string): Promise<boolean> => {
  const result = await Pizza.getRepository().softDelete({ uuid });

  return Boolean(result.affected);
};
