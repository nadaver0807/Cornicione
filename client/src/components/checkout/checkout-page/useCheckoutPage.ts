'use client';

import { useCart } from '@/hooks/cart/useCart';
import { useCreateOrder } from '@/hooks/api/useCreateOrder';
import { useOpeningStatus } from '@/hooks/opening-hours/useOpeningStatus';
import { zodResolver } from '@hookform/resolvers/zod';
import { DELIVERY_FEE } from '@shared/consts/order.const';
import { OrderType } from '@shared/enums/order-type.enum';
import { createOrderSchema, type CreateOrderPayload } from '@shared/validations/order.validation';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

/** מרכז את הלוגיקה של תהליך ההזמנה: פרטים → סוג מסירה → שליחה. */
export const useCheckoutPage = () => {
  const { items, totals, clear } = useCart();
  const { mutateAsync, isPending, isSuccess, error } = useCreateOrder();
  const { status } = useOpeningStatus();
  const [isClosedDialogOpen, setIsClosedDialogOpen] = useState(false);

  const isClosed = status ? !status.isOpen : false;

  const { control, handleSubmit } = useForm<CreateOrderPayload>({
    resolver: zodResolver(createOrderSchema),
    defaultValues: {
      orderType: OrderType.Takeaway,
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      address: '',
      note: '',
      items: [],
      deliveryFee: 0,
    },
  });

  const orderType = useWatch({ control, name: 'orderType' });
  const isDelivery = orderType === OrderType.Delivery;
  const deliveryFee = isDelivery ? DELIVERY_FEE : 0;

  const onSubmit = handleSubmit(async (values) => {
    if (isClosed) {
      setIsClosedDialogOpen(true);

      return;
    }

    await mutateAsync({
      ...values,
      deliveryFee,
      items: items.map((item) => ({
        pizzaUuid: item.pizzaUuid,
        quantity: item.quantity,
        toppings: item.toppings,
        note: item.note,
      })),
    });

    clear();
  });

  return {
    control,
    onSubmit,
    items,
    totals,
    isDelivery,
    deliveryFee,
    isPending,
    isSuccess,
    error,
    status,
    isClosed,
    isClosedDialogOpen,
    closeClosedDialog: () => setIsClosedDialogOpen(false),
  };
};
