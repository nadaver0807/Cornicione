'use client';

import { CartContext, type CartContextValue } from '@/hooks/cart/CartProvider';
import { useContext } from 'react';

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
