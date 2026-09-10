import { OrderItem } from '@/order-item/OrderItem.entity';
import { Order } from '@/order/Order.entity';
import { Pizza } from '@/pizza/Pizza.entity';
import { OrderStatus } from '@shared/enums/order-status.enum';
import { OrderType } from '@shared/enums/order-type.enum';
import { DELIVERY_FEE } from '@shared/consts/order.const';
import { type CreateOrderPayload } from '@shared/validations/order.validation';
import { In } from 'typeorm';

/** מחיר יחידה — מחיר הפריט בתפריט בתוספת התוספות שנבחרו. */
const calculateUnitPrice = (pizza: Pizza, toppings: { price: number }[]): number =>
  Number(pizza.price) + toppings.reduce((sum, topping) => sum + Number(topping.price), 0);

export const create = async (payload: CreateOrderPayload): Promise<Order> => {
  const pizzaUuids = payload.items.map((item) => item.pizzaUuid);
  const pizzas = await Pizza.findBy({ uuid: In(pizzaUuids) });
  const pizzaByUuid = new Map(pizzas.map((pizza) => [pizza.uuid, pizza]));

  const items = payload.items.map((item) => {
    const pizza = pizzaByUuid.get(item.pizzaUuid);

    if (!pizza) {
      throw new Error(`פריט לא נמצא: ${item.pizzaUuid}`);
    }

    if (pizza.isSoldOut) {
      throw new Error(`הפריט "${pizza.name}" אזל`);
    }

    return OrderItem.create({
      pizzaUuid: pizza.uuid,
      name: pizza.name,
      quantity: item.quantity,
      unitPrice: calculateUnitPrice(pizza, item.toppings),
      toppings: item.toppings,
      note: item.note ?? '',
    });
  });

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = payload.orderType === OrderType.Delivery ? DELIVERY_FEE : 0;

  return Order.create({
    orderType: payload.orderType,
    status: OrderStatus.Pending,
    customerName: payload.customerName,
    customerPhone: payload.customerPhone,
    customerEmail: payload.customerEmail,
    address: payload.address || null,
    note: payload.note ?? '',
    items,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
  }).save();
};

export const findAll = (): Promise<Order[]> => Order.find({ order: { createDate: 'DESC' } });

export const updateStatus = async (uuid: string, status: OrderStatus): Promise<Order | null> => {
  const order = await Order.findOneBy({ uuid });

  if (!order) {
    return null;
  }

  order.status = status;

  return order.save();
};
