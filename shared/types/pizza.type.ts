import { type PizzaCategory } from '@shared/enums/pizza-category.enum';

/** תוספת אפשרית לפריט — שם ומחיר. */
export type PizzaTopping = {
  name: string;
  price: number;
};

export type Pizza = {
  uuid: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
  menuCategory: PizzaCategory;
  toppings: PizzaTopping[];
  isVegetarian: boolean;
  isVegan: boolean;
  /** סימון "אזל" — הפריט נשאר בתפריט אך לא ניתן להזמנה. */
  isSoldOut: boolean;
  displayOrder: number;
};

export type GetPizzasParams = {
  category?: PizzaCategory;
};

export type GetPizzasResponse = {
  pizzas: Pizza[];
  isAdmin: boolean;
};
