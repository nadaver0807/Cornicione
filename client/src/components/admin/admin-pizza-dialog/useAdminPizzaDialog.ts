'use client';

import { useCreatePizza } from '@/hooks/api/useCreatePizza';
import { useUpdatePizza } from '@/hooks/api/useUpdatePizza';
import { zodResolver } from '@hookform/resolvers/zod';
import { PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type Pizza } from '@shared/types/pizza.type';
import { createPizzaSchema, type CreatePizzaPayload } from '@shared/validations/pizza.validation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EMPTY: CreatePizzaPayload = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  menuCategory: PizzaCategory.Pizza,
  toppings: [],
  isVegetarian: false,
  isVegan: false,
  isSoldOut: false,
  displayOrder: 0,
};

const fromPizza = (pizza: Pizza): CreatePizzaPayload => ({
  ...EMPTY,
  name: pizza.name,
  description: pizza.description,
  price: Number(pizza.price),
  imageUrl: pizza.imageUrl ?? '',
  menuCategory: pizza.menuCategory,
  toppings: pizza.toppings,
  isVegetarian: pizza.isVegetarian,
  isVegan: pizza.isVegan,
  isSoldOut: pizza.isSoldOut,
  displayOrder: pizza.displayOrder,
});

/** טופס עריכה/הוספה של פריט תפריט — כותרת, תיאור, מחיר, תמונה וזמינות. */
export const useAdminPizzaDialog = (pizza: Pizza | null, isOpen: boolean, onClose: () => void) => {
  const create = useCreatePizza();
  const update = useUpdatePizza();

  const { control, handleSubmit, reset } = useForm<CreatePizzaPayload>({
    resolver: zodResolver(createPizzaSchema) as never,
    defaultValues: EMPTY,
  });

  useEffect(() => {
    if (isOpen) {
      reset(pizza ? fromPizza(pizza) : EMPTY);
    }
  }, [isOpen, pizza, reset]);

  const onSubmit = handleSubmit(async (values) => {
    if (pizza) {
      await update.mutateAsync({ uuid: pizza.uuid, payload: values });
    } else {
      await create.mutateAsync(values);
    }

    onClose();
  });

  return {
    control,
    onSubmit,
    isSaving: create.isPending || update.isPending,
    error: create.error ?? update.error,
  };
};
