import { type OrderStatus } from '@shared/enums/order-status.enum';
import { type OrderType } from '@shared/enums/order-type.enum';
import { type PizzaTopping } from '@shared/types/pizza.type';

export type OrderItem = {
  uuid: string;
  pizzaUuid: string;
  name: string;
  quantity: number;
  unitPrice: number;
  toppings: PizzaTopping[];
  note: string;
};

export type Order = {
  uuid: string;
  orderNumber: number;
  status: OrderStatus;
  orderType: OrderType;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string | null;
  note: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  createDate: string;
};

export type GetOrdersResponse = {
  orders: Order[];
};
