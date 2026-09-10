import { MAX_ITEM_QUANTITY } from '@shared/consts/order.const';
import { type CartItem } from '@shared/types/cart.type';

/** מחיר שורה בעגלה — מחיר בסיס בתוספת התוספות, כפול הכמות. */
export const calculateLinePrice = (item: CartItem): number => {
  const toppingsPrice = item.toppings.reduce((sum, topping) => sum + topping.price, 0);

  return (item.basePrice + toppingsPrice) * item.quantity;
};

export const calculateSubtotal = (items: CartItem[]): number =>
  items.reduce((sum, item) => sum + calculateLinePrice(item), 0);

export const clampQuantity = (quantity: number): number =>
  Math.min(Math.max(quantity, 1), MAX_ITEM_QUANTITY);

export const formatPrice = (price: number): string => `₪${price.toLocaleString('he-IL')}`;
