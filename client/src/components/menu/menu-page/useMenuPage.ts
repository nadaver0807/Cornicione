'use client';

import { useGetPizzas } from '@/hooks/api/useGetPizzas';
import { useOpeningStatus } from '@/hooks/opening-hours/useOpeningStatus';
import { type PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { useCallback, useMemo, useState } from 'react';

/** מרכז את מצב עמוד התפריט: קיבוץ לפי קטגוריה ובחירת פריט כשההזמנות פתוחות. */
export const useMenuPage = () => {
  const { data, isPending, isError } = useGetPizzas();
  const { status } = useOpeningStatus();
  const [selected, setSelected] = useState<Pizza | null>(null);

  // כל עוד אין סטטוס — ההזמנות נחשבות סגורות (ברירת המחדל).
  const isClosed = !status?.isOpen;

  const grouped = useMemo(() => {
    const map = new Map<PizzaCategory, Pizza[]>();

    data?.pizzas.forEach((pizza) => {
      map.set(pizza.menuCategory, [...(map.get(pizza.menuCategory) ?? []), pizza]);
    });

    return [...map.entries()];
  }, [data]);

  const selectPizza = useCallback(
    (pizza: Pizza) => {
      if (isClosed) {
        return;
      }

      setSelected(pizza);
    },
    [isClosed],
  );

  const closeItemDialog = useCallback(() => setSelected(null), []);

  return { grouped, isPending, isError, status, isClosed, selected, selectPizza, closeItemDialog };
};
