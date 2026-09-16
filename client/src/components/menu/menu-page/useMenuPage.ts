'use client';

import { useGetPizzas } from '@/hooks/api/useGetPizzas';
import { useOpeningStatus } from '@/hooks/opening-hours/useOpeningStatus';
import { type PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { useCallback, useMemo, useState } from 'react';

/** מרכז את מצב עמוד התפריט: קיבוץ לפי קטגוריה ובחירת פריט בכפוף לשעות. */
export const useMenuPage = () => {
  const { data, isPending, isError } = useGetPizzas();
  const { status } = useOpeningStatus();
  const [selected, setSelected] = useState<Pizza | null>(null);
  const [isClosedDialogOpen, setIsClosedDialogOpen] = useState(false);

  const isClosed = status ? !status.isOpen : false;

  const grouped = useMemo(() => {
    const map = new Map<PizzaCategory, Pizza[]>();

    data?.pizzas.forEach((pizza) => {
      map.set(pizza.menuCategory, [...(map.get(pizza.menuCategory) ?? []), pizza]);
    });

    return [...map.entries()];
  }, [data]);

  // מחוץ לשעות הפעילות הבחירה לא נפתחת — במקומה עולה הודעה.
  const selectPizza = useCallback(
    (pizza: Pizza) => {
      if (isClosed) {
        setIsClosedDialogOpen(true);

        return;
      }

      setSelected(pizza);
    },
    [isClosed],
  );

  const closeItemDialog = useCallback(() => setSelected(null), []);
  const closeClosedDialog = useCallback(() => setIsClosedDialogOpen(false), []);

  return {
    grouped,
    isPending,
    isError,
    status,
    isClosed,
    selected,
    selectPizza,
    closeItemDialog,
    isClosedDialogOpen,
    closeClosedDialog,
  };
};
