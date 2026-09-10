import { type PizzaTopping } from '@shared/types/pizza.type';

export type CartItem = {
  /** מזהה ייחודי לשורה בעגלה — פריט זהה עם תוספות שונות הוא שורה נפרדת. */
  lineId: string;
  pizzaUuid: string;
  name: string;
  imageUrl: string | null;
  basePrice: number;
  quantity: number;
  toppings: PizzaTopping[];
  note: string;
};

export type CartTotals = {
  itemsCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
};
