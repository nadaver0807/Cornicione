import { Order } from '@/order/Order.entity';
import { type PizzaTopping } from '@shared/types/pizza.type';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'uuid' })
  pizzaUuid: string;

  /** שם הפריט משוכפל לשורה כדי לשמר את ההזמנה גם אם התפריט משתנה. */
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @Column({ type: 'numeric', precision: 8, scale: 2 })
  unitPrice: number;

  @Column({ type: 'jsonb', default: () => `'[]'::jsonb` })
  toppings: PizzaTopping[];

  @Column({ type: 'varchar', default: '' })
  note: string;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_uuid' })
  order: Order;
}
