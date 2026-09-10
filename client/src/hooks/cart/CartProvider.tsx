'use client';

import { DELIVERY_FEE, MAX_ITEM_QUANTITY } from '@shared/consts/order.const';
import { type CartItem, type CartTotals } from '@shared/types/cart.type';
import { type Pizza, type PizzaTopping } from '@shared/types/pizza.type';
import { calculateSubtotal } from '@shared/util/cart.util';
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from 'react';

export type CartContextValue = {
  items: CartItem[];
  totals: CartTotals;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  addItem: (pizza: Pizza, toppings: PizzaTopping[], note: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clear: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

/** מזהה שורה — פריט זהה עם תוספות שונות נשמר כשורה נפרדת. */
const buildLineId = (pizzaUuid: string, toppings: PizzaTopping[], note: string): string =>
  `${pizzaUuid}|${toppings.map((topping) => topping.name).sort().join(',')}|${note}`;

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((pizza: Pizza, toppings: PizzaTopping[], note: string) => {
    const lineId = buildLineId(pizza.uuid, toppings, note);

    setItems((current) => {
      const existing = current.find((item) => item.lineId === lineId);

      if (existing) {
        return current.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: Math.min(item.quantity + 1, MAX_ITEM_QUANTITY) }
            : item,
        );
      }

      return [
        ...current,
        {
          lineId,
          pizzaUuid: pizza.uuid,
          name: pizza.name,
          imageUrl: pizza.imageUrl,
          basePrice: Number(pizza.price),
          quantity: 1,
          toppings,
          note,
        },
      ];
    });

    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.lineId !== lineId)
        : current.map((item) => (item.lineId === lineId ? { ...item, quantity } : item)),
    );
  }, []);

  const removeItem = useCallback((lineId: string) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totals = useMemo<CartTotals>(() => {
    const subtotal = calculateSubtotal(items);

    return {
      itemsCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryFee: DELIVERY_FEE,
      total: subtotal,
    };
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({ items, totals, isOpen, setIsOpen, addItem, updateQuantity, removeItem, clear }),
    [items, totals, isOpen, addItem, updateQuantity, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
